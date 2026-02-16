import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ScreenOrientation, ScreenOrientationResult } from '@capacitor/screen-orientation';
import { ToastService } from './toast.service';
import { AuthService } from './auth.service';
import { Subject, BehaviorSubject } from 'rxjs';
import { Variables } from './others/variables';
import { GeneralService } from './others/general-service';
import { Geolocation, Position } from "@capacitor/geolocation";
import { CartService } from './cart.service';
import { PatientModel } from '../../model/member.model';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { FilePicker } from '@capawesome/capacitor-file-picker';
import { FileOpener, FileOpenerOptions } from '@capacitor-community/file-opener';
import { base64StringToBlob } from 'blob-util';
import { Share } from '@capacitor/share';

@Injectable({
    providedIn: 'root',
})

export class SharedService {

    variables  = Variables;
    deviceHeight = 0;
    deviceWidth = 0;
    deviceScreenOrientation = 'portrait';
    labCartPatientObj: PatientModel = new PatientModel();
    public generalService : GeneralService;
    isBusy = false;
    public isInternetAvailable = false;
    public activePage = new Subject();
    public menuOpen$ = new Subject<string>();
    public navigateSub$ = new Subject<string>();
    public isDisplayBackButton = new BehaviorSubject(false);
    public LastGeoLocation: any = null;
    public platform = 'web';

    constructor(public toastService: ToastService,private platform$ : Platform,public authService: AuthService) {
        this.generalService = new GeneralService();
        this.CalcDevideDimension();
        ScreenOrientation.addListener('screenOrientationChange', (orientation: ScreenOrientationResult) => {
            if(orientation.type.includes('landscape')){
                this.deviceScreenOrientation = 'landscape';
            }else{
                this.deviceScreenOrientation = 'portrait';
            }
            setTimeout(() => {
                this.CalcDevideDimension();
            }, 100);
        });
    }



    // Example method
   OpenUrl(url: string): void {
    window.open(url, '_blank');
   }

   CalcDevideDimension(){
    let isreverse = this.deviceScreenOrientation == 'portrait' ? false : true;
    let deviceHeight = this.platform$.height();
    let deviceWidth = this.platform$.width();
   
        this.deviceHeight = deviceHeight;
        this.deviceWidth = deviceWidth;
  

    console.log(`Height: ${this.deviceHeight}, Width: ${this.deviceWidth}`);
   }

   public HandleAuthenticationError(error: any) {
    if (error.StatusCode === 400) {// Validation
        // otherErrors = this.setValidationError(formObject, error.Message);
        this.toastService.showError(error.Message);
    } else if (error.StatusCode === 403) { // Session time out                
        this.authService.userLogout();
        this.toastService.showError('Please login with your user id and password.');
        // navCtrl.setRoot('LoginOnePage');
    } else if (error.StatusCode === 401) { // Unauthorized
        this.toastService.showError(error.Message);
    } else if (error.StatusCode === 500) { // InternalServerError
        this.toastService.showError(error.Message);
    } else if (error.StatusCode === 205) { // Password force change.
        this.authService.userPasswordForceChange();
    } else if (error.StatusCode === 412) { // User is not loged in.
        if (this.authService.isUserLoggedIn) {
            this.toastService.showError(error.Message);
        }
        this.authService.userLogout();
        this.toastService.showError('Please login with your user id and password.');
        // navCtrl.setRoot('LoginOnePage');
    }
}

public async GetGeoLocation(): Promise<any>{
    return new Promise<any>(async (response,reject)=>{
    await Geolocation.checkPermissions().then((value) => {
        response(this.getCurrentPosition());
      }).catch(() => {
        Geolocation.requestPermissions({ permissions: ['location'] }).then(res => {
            response(this.getCurrentPosition());
        }).catch(err => {
            reject('Enable location first.');
          });
      });
    });
}

private getCurrentPosition() {
    return new Promise<any>(async (res,reject)=>{
    
        console.log('getCurrentPosition 1');
        await Geolocation.getCurrentPosition({ enableHighAccuracy: true ,timeout:10000,maximumAge:60000 }).then((location) => {
            if (location) {
                this.LastGeoLocation = Object.assign({}, location.coords ? location.coords : null);
                this.LastGeoLocation.timestamp = location.timestamp;
               console.log('getCurrentPosition 2');
              res(location);
            }else{
                let savedLocation = this.checkandGetSavedLocation();
                if(savedLocation && savedLocation.coords && savedLocation.coords.latitude && savedLocation.coords.longitude){
                    return res(savedLocation);
                }
               console.log('getCurrentPosition 3');
              reject('Unable To Get Location');
            }

        }, (err) => {
            let savedLocation = this.checkandGetSavedLocation();
            if(savedLocation && savedLocation.coords && savedLocation.coords.latitude && savedLocation.coords.longitude){
                return res(savedLocation);
            }
               console.log('getCurrentPosition 4' + err.message);
              reject('Location error  -' + err.message);
        });
 
});
}

private checkandGetSavedLocation () {
    console.log('checkandGetSavedLocation entered');
    if(this.LastGeoLocation &&  this.LastGeoLocation.latitude && this.LastGeoLocation.longitude){
        let currentTime = new Date().getTime();
        let lastLocationTime = new Date(this.LastGeoLocation.timestamp).getTime();
        let timeDiff = (currentTime - lastLocationTime) / 1000; // in seconds
        if(timeDiff < 120){ // 2 minutes
            let savedLocation = {
                coords: {
                    latitude: this.LastGeoLocation.latitude,
                    longitude: this.LastGeoLocation.longitude,
                    accuracy: this.LastGeoLocation.accuracy,
                    altitude: this.LastGeoLocation.altitude,
                    heading: this.LastGeoLocation.heading,
                    speed: this.LastGeoLocation.speed,
                },
                timestamp: this.LastGeoLocation.timestamp
            }
            console.log('checkandGetSavedLocation success');
            return savedLocation;
        }else{
            this.LastGeoLocation = null;
        }
    }
    console.log('checkandGetSavedLocation failed');
    return null;
}


getFilesystemAccess(): Promise<boolean> {
    return new Promise(async (resolve) => {
        const status = await Filesystem.checkPermissions()
        const state = status.publicStorage

        if (state === 'granted') {
            return resolve(true)
        } else if (state === 'denied') {
            // You make want to redirect to the main app settings.
        } else {
            Filesystem.requestPermissions()
        }
        return resolve(false)
    })
}

getFilePickerAccess(): Promise<boolean> {
    return new Promise(async (resolve) => {
        const status = await FilePicker.checkPermissions();
        const state = status.accessMediaLocation
        if (state === 'granted') {
            return resolve(true)
        } else if (state === 'denied') {
            // You make want to redirect to the main app settings.
        } else {
            Filesystem.requestPermissions()
        }
        return resolve(false)
    });
}

async SelectFile(Types = ['application/pdf', 'image/*', 'text/plain', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/x-zip-compressed']){
    this.getFilePickerAccess();
    const result = await FilePicker.pickFiles({
        types : Types,
        limit : 1,
        readData : true,
    });
    const file = result.files[0];
    return file;
  };

  private async _openFileWithType(filePath: string, fileType: string) {
    const fileOpenerOptions: FileOpenerOptions = {
        filePath: filePath,
        contentType: fileType,
    }

    await FileOpener.open(fileOpenerOptions)
        .then(() => {
            console.log('File is opened')
        })
        .catch((error: any) => {
            console.log('Error opening file', error);
            this.showError(error);
        })
}

showError(e: { status: number; }) {
    if (e.status == 9) {
       // console.log('No App installed to open pdf');
        alert('No App installed to open pdf');
    }
}

    public saveFile(data = null, filname: any, filelastName = '_.pdf', mineType = 'application/pdf',ishare = false) {
        this.getFilesystemAccess().then((value) => {
            const blob = base64StringToBlob(data, mineType);
            const fileName = filname;
            // const fileName = filname + new Date().getMilliseconds() + filelastName;
            let reader = new FileReader();
            reader.onloadend = (readerEvent): void => {
                if (reader.error) {
                 //   console.log(reader.error);
                } else {
                    let base64data: any = readerEvent.target['result'];
                    try {
                        Filesystem.writeFile({
                            path: fileName,
                            data: base64data,
                            directory: Directory.Documents,
                        })
                            .then((res: any) => {
                              //  console.log('res', res);
                                Filesystem.getUri({
                                    directory: Directory.Documents,
                                    path: fileName,
                                }).then(
                                    async (getUriResult: { uri: string; }) => {
                                        const path = getUriResult.uri;
                                      //  console.log("The file's path : " + path);
                                      //  console.log(Capacitor.convertFileSrc(getUriResult.uri));
                                      if(ishare){
                                        await Share.share({
                                            url: path,
                                          });
                                      }else{
                                          this._openFileWithType(path, mineType);
                                      }

                                    },
                                    (error: any) => {
                                        console.log(error);
                                    }
                                );
                            })
                            .catch((err: any) => {
                             //   console.log('Error', err);
                            });
                    } catch (e) {
                        console.error('Unable to write file', e);
                    }
                }
            };
            reader.readAsDataURL(blob);
        });
    }

    getFileExtension(ContentType){
        if (ContentType.toLowerCase().includes("image")) {
          return  '.jpg';
        } else if (ContentType.toLowerCase().includes("pdf")) {
          return  '.pdf';
        }
        else if (ContentType == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
          return '.xlsx';
        }
        else if (ContentType == "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
          return '.docx';
        }
        else if (ContentType == "application/x-zip-compressed") {
          return '.zip';
        }
        else{
          return '';
        }
      }

   

}