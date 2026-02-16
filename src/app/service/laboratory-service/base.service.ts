import { from, Observable, throwError  } from 'rxjs';
import { SharedService } from '../shared-service/shared.service';
import { ToastService } from '../shared-service/toast.service';
import { App } from '@capacitor/app';
import { Capacitor, CapacitorHttp,HttpOptions,HttpResponse } from '@capacitor/core';
import { AuthService } from '../shared-service/auth.service';
import { serialize } from 'class-transformer';

export class BaseService {

    public errorMessage = '';
    // public apiEndPoint = 'http://10.1.1.100/slims.api/api/';
    //public apiEndPoint = 'http://35.154.29.252/slims.api/api/';
    // public apiEndPoint = 'http://13.233.16.3/slims.api/api/'; //Sterling accuris
    public apiEndPoint = 'https://sufalamlims.com/slims.api/api/';
    public mobileNumber = '';
    public version = '1.0.1';

    constructor(private authService: AuthService,private sharedService: SharedService,private toastService: ToastService) {
            this.getandsetConfig();
         }

         async getandsetConfig(){
                if (Capacitor.getPlatform() === 'android' || Capacitor.getPlatform() === 'ios') {
            var appInfo = await App.getInfo();
            if(appInfo != null && appInfo.version != null && appInfo.version.length > 0){
                this.version = appInfo.version;
            }
        }
            // const info = await Device.getInfo();
            // if(info && info.platform  && this.version.length == 6){
            //     console.log("device platform : " + info.platform);
            //     this.version = this.version.replace("1.0.","1.0.0.");
            // }
           //console.log("base Version : " + this.version);
           //console.log("base platform : " + this.sharedService.platform);
            // this.http.get('assests/Config.xml',{responseType:'text'}).subscribe((res:any)=>{
            //     const xmlDoc = new DOMParser().parseFromString(res,'text/xml');
            //     if(xmlDoc.getElementsByTagName('widget').length > 0 && xmlDoc.getElementsByTagName('widget')[0].getAttribute('version')){
            //         this.version = xmlDoc.getElementsByTagName('widget')[0].getAttribute('version');
            //     }
            // })
         }

    post(url: any, data: any) {
        if (!this.apiEndPoint) {
            this.sharedService.toastService.showError('Invalid Lab Code Provided');
            this.authService.userLogout();
        }
        var tempData = serialize(data);
       // this.apiEndPoint = this.apiEndPoint.replace("SLIMS.api","phleboapi");
        this.errorMessage = '';
        const httpOptions : HttpOptions = {
            url : this.apiEndPoint + url,
            method : "POST",
            data : tempData,
            responseType : 'json',
            headers : {
            'Content-Type': 'application/json',
            'Id': this.authService.isUserLoggedIn ? this.authService.authenticationModel.loginUserId : '',
            'Token': this.authService.isUserLoggedIn ? this.authService.authenticationModel.loginUserToken : '',
            'Mobile': this.mobileNumber,
            'From': 'SlimsPatientApp',
            'Version': this.version,
            'Platform': this.sharedService.platform 
            }
        };
        
        return from(this.CommonHttpCall(httpOptions));
    }

    postOnSufalamServer(url: string, data: any) {
        const httpOptions : HttpOptions = {
            url : 'https://sufalamlims.com/crm.api/api/' + url,
            method : "POST",
            data : data,
            responseType : 'json',
            headers : {
            'Content-Type': 'application/json',
            'Id': this.authService.isUserLoggedIn ? this.authService.authenticationModel.loginUserId : '',
            'Token': this.authService.isUserLoggedIn ? this.authService.authenticationModel.loginUserToken : '',
            'Mobile': this.mobileNumber,
            'From': 'SlimsPatientApp',
            'Version': this.version,
            'Platform': this.sharedService.platform 
            }
        };
         
        return from(this.CommonHttpCall(httpOptions));
    }

    public CommonHttpCall(httpOptions : HttpOptions) : Promise<any> {

        return CapacitorHttp.post(httpOptions).then(
             (response : HttpResponse) => {
                if(response.status == 200){
                    return  response.data;
                }else{
                    
                    return this.HandleError(response);
                }
               
           },
           (reject)=>{
            
            return this.HandleError(reject);
           }
       )
       .catch((reason: any)=>{
       
        return this.HandleError(reason);
       });
    }

    public Get(url: any){
        if (!this.apiEndPoint) {
            this.authService.GoToAuthenticationPage();
        }
    
        this.errorMessage = '';
        const httpOptions : HttpOptions = {
            url : this.apiEndPoint + url,
            method : "GET",
            responseType : 'json',
            headers : {
            'Content-Type': 'application/json',
            'Id': this.authService.isUserLoggedIn ? this.authService.authenticationModel.loginUserId : '',
            'Token': this.authService.isUserLoggedIn ? this.authService.authenticationModel.loginUserToken : '',
            'Mobile': this.mobileNumber,
            'From': 'Phlebotomy',
            'Version': this.version,
            'Platform': this.sharedService.platform 
            }
        };
        return from(CapacitorHttp.get(httpOptions).then(
            (response : HttpResponse) => {
               if(response.status == 200){
                   return  response.data;
               }else{
                   
                   return this.HandleError(response);
               }
              
          },
          (reject)=>{
           
           return this.HandleError(reject);
          }
      )
      .catch((reason: any)=>{
      
       return this.HandleError(reason);
      }));
    }

    public HandleError(error: any) : Observable<any> | null {
       
        if (this.sharedService.isInternetAvailable) {
            if (error.status === 0) {
                this.toastService.showError('Server not found!!! Please try after some time or contact branch.');
                return null;
            } else {
                if (error.data != null && typeof error.data !== 'object') {
                    this.sharedService.toastService.showError(error['_body']);
                    return throwError(() => new Error( error['_body']));
                } else {
                    this.toastService.showError(error?.data?.Message || 'Server error');
                    return throwError(() => new Error(error?.data?.Message || 'Server error'));
                }
            }
        } else {
            this.toastService.showError('No internet connection.');
            return null;
        }
    }
}
