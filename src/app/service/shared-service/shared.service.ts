import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ScreenOrientation, ScreenOrientationResult } from '@capacitor/screen-orientation';
import { ToastService } from './toast.service';
import { AuthService } from './auth.service';
import { Subject, BehaviorSubject } from 'rxjs';
import { Variables } from './others/variables';
import { GeneralService } from './others/general-service';

@Injectable({
    providedIn: 'root',
})

export class SharedService {

    variables  = Variables;
    deviceHeight = 0;
    deviceWidth = 0;
    deviceScreenOrientation = 'portrait';
    public generalService : GeneralService;
    isBusy = false;
    public isInternetAvailable = false;
    public activePage = new Subject();
    public menuOpen$ = new Subject<string>();
    public navigateSub$ = new Subject<string>();
    public isDisplayBackButton = new BehaviorSubject(false);
    
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

   

}