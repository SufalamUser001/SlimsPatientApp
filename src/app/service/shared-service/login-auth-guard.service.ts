import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from './shared.service';
import { ToastService } from './toast.service';
import { Preferences } from '@capacitor/preferences';
import { AuthenticationModel } from 'src/app/model/authentication.model';

@Injectable()
export class AuthGuardLogin {

  public redirectUrl: string = '';

  //public authenticationModel: AuthenticationModel = new AuthenticationModel();
  constructor(public sharedService: SharedService, public router: Router, public toastService: ToastService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      const url = state.url;
      return this.checkUserLogin(url);
  }

  public checkUserLogin(url) {
    if (this.sharedService.authService.isUserLoggedIn) 
    {
      if (url == '/home/dashboard') {
       return true;
      }
      return true;
    } 
    else  
    {
     return  Preferences.get({ key: 'auth' }).then((res)=>{
        if (res.value) {
          let auth = res.value;
          var authenticationModel: AuthenticationModel = new AuthenticationModel(JSON.parse(auth));
          if (authenticationModel.loginUserId && authenticationModel.loginUserToken) {
            this.sharedService.authService.setUserLogin(authenticationModel.loginUserId,  authenticationModel.loginUserToken,authenticationModel.PatientId, authenticationModel.PatientName,  authenticationModel.CityId,  authenticationModel.CityName,authenticationModel.IsPasswordAvailable,authenticationModel.Photograph,authenticationModel.MapAPIKey)
      
            return true;
          }else{
            this.navigateToLogin();
            return false;
          } 
        }else{
          this.navigateToLogin();
          return false;
        }
       },(err)=>{
        this.navigateToLogin();
        return false;
       });
    }
   

  }

  public async navigateToLogin() {
    var IsLoginOnce = await Preferences.get({ key: 'IsLoginOnce' }).then((res) => {
      return res.value;

    });
    if (IsLoginOnce) {
      this.router.navigateByUrl('login');
    } else {
      this.router.navigateByUrl('welcome');
    }
  }

}

@Injectable()
export class MainPageAuthGuardLogin {


  public redirectUrl: string = '';

  constructor(public sharedService: SharedService, public router: Router, public toastService: ToastService) {
  }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Promise<Observable<boolean | UrlTree> |
      Promise<boolean | UrlTree> |
      boolean |
      UrlTree> {
      const url = state.url;
      const { value } = await Preferences.get({ key: 'APIURL' });
        if(url == "/register"){
          if (!value) {
            return true;
          }else{
            this.router.navigate(['login']);
            this.sharedService.isDisplayBackButton.next(false);
            return false;
          }
        }else{
          if (!value) {
            this.router.navigate(['register']);
            this.sharedService.isDisplayBackButton.next(false);
            return false;
          }else{
            return true;
          }
        }
  }


}






