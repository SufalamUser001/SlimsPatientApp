import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { AuthenticationModel } from 'src/app/model/authentication.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
    public isUserLoggedIn: boolean = false;
    public IsUserOTPVerified = false;
    public OTPVerifiedUserId = null;

    public redirectUrl: string = '';
    public userDeviceToken = 'SlimsPatientApp';
    public authenticationModel: AuthenticationModel = new AuthenticationModel();

    constructor(public router: Router) {
        
    }

    public setOTPLogin(loginUserId: string): void {
        this.IsUserOTPVerified = true;
        this.OTPVerifiedUserId = loginUserId;
    }

    public removeOTPLogin(): void {
        this.IsUserOTPVerified = false;
        this.OTPVerifiedUserId = null;
    }

    public setUserLogin(loginUserId: string,loginUserToken: string,PatientId,ptName,CityId,cityName : string = null,IsPasswordAvailable,Photograph : string = null): void {

        this.isUserLoggedIn = true;
        this.authenticationModel.loginUserId = loginUserId;
        this.authenticationModel.loginUserToken = loginUserToken;
        this.authenticationModel.PatientName = ptName;
        this.authenticationModel.PatientId = PatientId;
        this.authenticationModel.CityId = CityId;
        this.authenticationModel.CityName = cityName;
        this.authenticationModel.Photograph = Photograph;
        this.authenticationModel.IsPasswordAvailable = IsPasswordAvailable;
        if (this.authenticationModel.loginUserId && this.authenticationModel.loginUserToken) {
            this.isUserLoggedIn = true;
        }
        Preferences.set({
            key: 'auth',
            value: JSON.stringify(this.authenticationModel),
        })
        Preferences.set({
            key: 'IsLoginOnce',
            value: JSON.stringify(true),
        })
       
    }

    public checkUserLogin() {
debugger
        Preferences.get({ key: 'auth' }).then((res)=>{
            if (res.value) {
                let auth = res.value;
                if (auth) {
                    var authenticationModel: AuthenticationModel = new AuthenticationModel(JSON.parse(auth));
                    if (authenticationModel.loginUserId && authenticationModel.loginUserToken) {
                        this.setUserLogin(authenticationModel.loginUserId,  authenticationModel.loginUserToken,authenticationModel.PatientId, authenticationModel.PatientName,  authenticationModel.CityId,  authenticationModel.CityName,authenticationModel.IsPasswordAvailable,authenticationModel.Photograph);
                        this.router.navigate(['home']);
                    } else {
                        this.navigateToLogin();
                    }
                } else {
                    this.navigateToLogin();
                }
            }
           });
    }

    

    public async navigateToLogin() {
        debugger
      var IsLoginOnce = await  Preferences.get({ key: 'IsLoginOnce' }).then((res) => {
            return res.value;
       
    });
    if(IsLoginOnce){
        this.router.navigate(['login']);
    }else{
        this.router.navigate(['welcome']);
    }
       
    }

    public navigateToRegister() {
        this.router.navigate(['register']);
    }

    public userLogout(isSessionTimeOut = true): void {
        this.isUserLoggedIn = false;
        this.redirectUrl = isSessionTimeOut ? this.router.url : '';
        this.authenticationModel = new AuthenticationModel();
        Preferences.remove({ 'key': 'auth' });
        this.navigateToLogin();
    }

    public GoToAuthenticationPage(): void {
        this.isUserLoggedIn = false;
        this.authenticationModel = new AuthenticationModel();
        Preferences.remove({ 'key': 'auth' });
        this.navigateToRegister();
    }



    public userPasswordForceChange(): void {
        //this.navCtrl.push('force password change');
    }

    public serverNotFound(): void {
        this.isUserLoggedIn = false;
        this.authenticationModel = new AuthenticationModel();
        Preferences.remove({ 'key': 'auth' });
    }

    public getBiometricConfigured(): any {
        Preferences.get({ key: 'Biometric' }).then((res) => {
                return res.value;
           
        });
        return null;
    }

    public setBiometricConfigured(): void {
        Preferences.set({
            key: 'Biometric',
            value: 'true',
        })
    }

    public removeBiometricConfigured(): void {
        Preferences.remove({ 'key': 'Biometric' });
    }
}
