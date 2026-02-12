import { Component } from '@angular/core';

import { IonContent, IonHeader, IonToolbar, IonTitle, IonCard, IonInput, IonButton, IonButtons, IonCol, IonRow, IonIcon, IonText, IonInputPasswordToggle, IonInputOtp } from "@ionic/angular/standalone";
import { LoginModel } from '../model/login.model';
import { ForgotPasswordModel } from '../model/forgot-password.model';
import { PatientModel } from '../model/member.model';
import { FormsModule } from '@angular/forms';
import { LocationStrategy } from '@angular/common';
import { SharedService } from '../service/shared-service/shared.service';
import { SlimsPatientApplicationService } from '../service/laboratory-service/lims-patientapp.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: 'login.page.html',
    styleUrls: ['login.page.scss'],
    standalone : true,
    imports: [IonIcon, IonRow, IonCol, FormsModule, IonInput, IonButton, IonButtons, IonToolbar, IonHeader, IonContent, IonTitle, IonInputPasswordToggle, IonInputOtp],
})
export class LoginPage {

  public loginObj: LoginModel = new LoginModel();
  public signupObj: ForgotPasswordModel = new ForgotPasswordModel();
  public LastloginObj = new LoginModel();
  public PatientObj = new PatientModel();

  public isLoginWithOTP = false;
  public isLoginOTPSend = false;
  public isOTPSentOnce = false;
  public isDisableResendbtn = true;

  constructor(private router: Router,private route: ActivatedRoute,public locationStrategy : LocationStrategy,public sharedService : SharedService,public slimsPatientService: SlimsPatientApplicationService) {}

  onbackClick(){
    this.locationStrategy.back();
  }

  public onToggleLoginType(value) {
    this.isLoginWithOTP = value;
    if (this.isLoginWithOTP) {
      this.loginObj.Password = '';
    } else {
      this.loginObj.OTP = '';
      this.isLoginOTPSend = false;
    }
    // if(value){
    //   this.onLoginSendOTPClick();
    // }
  }

  onLoginSendOTPClick() {
    this.isLoginOTPSend = false;
    this.isDisableResendbtn = true;

    if (!this.loginObj.UserId) {
      this.sharedService.toastService.showError("Mobile No is Required" );
      return;
    }
    this.slimsPatientService.SendLabCartPatientOtp(this.loginObj).subscribe(
      (response: any) => {
        if (Boolean(response.IsSuccess) === true) {
          this.isLoginOTPSend = true;
          this.isOTPSentOnce = true;
          this.sharedService.toastService.showSucess("OTP Sent Successfully");
          setTimeout(() => {
            this.isDisableResendbtn = false
          }, 30000);
        }
      },
      (err: any) => {
      });
  }

  setUserId() {
    if (this.loginObj.rememberMe && this.loginObj.UserId) {
      localStorage.setItem('userId', JSON.stringify(this.loginObj.UserId));
    } else {
      localStorage.removeItem('userId');
    }
  }

  onLoginbtnClick() {
    if (!this.loginObj.UserId) {
      this.sharedService.toastService.showError("Mobile No is Required" );
      return;
    }
    if (!this.loginObj.Password) {
      this.sharedService.toastService.showError("Passowrd is Required" );
      return;
    }
    this.sharedService.isBusy = true;
    this.loginObj.IsOTPLogin = false;
    let loginObj = Object.assign({},this.loginObj);
    loginObj.Password = this.sharedService.generalService.cngpstr(loginObj.Password, loginObj.UserId);
    this.slimsPatientService.LabCartUserLogin(loginObj).subscribe(
      (response: any) => {
        this.sharedService.isBusy = false;
        if (Boolean(response.IsSuccess) === true) {
          this.setUserId();
          const userDetail: LoginModel = new LoginModel(response.Success.Data);
          if (userDetail.Mobile && userDetail.Token) {
       
            this.sharedService.authService.setUserLogin(userDetail.Mobile, userDetail.Token, userDetail.PatientId, userDetail.PatientName, userDetail.CityId, userDetail.CityName,userDetail.IsPasswordAvailable, null);
            if (this.sharedService.authService.redirectUrl && this.router.url !== this.sharedService.authService.redirectUrl) {
              this.router.navigate([this.sharedService.authService.redirectUrl], { relativeTo: this.route.root });
            } else {
              this.router.navigate(['lims-patient/home'], { relativeTo: this.route.root });
            }
          }
          this.LastloginObj = new LoginModel();
       
         
       
        } else {
          if (response.Error.Message.includes('I000')) {
            this.LastloginObj = Object.assign({}, this.loginObj);
          }

          if (response.Error.Message.includes('not compitable with UI version')) {
           // this.sharedService.generalService.reloadPage();
          }

          if (response.Error.Message.includes('E0592')) {
            return;
          }

          this.sharedService.HandleAuthenticationError(response.Error);
          // this.callfocusFunction();

        }
      },
      (err: any) => {
        this.LastloginObj = new LoginModel();
      });
  }

  onLoginWithOTP() {
    if (!this.loginObj.UserId) {
      this.sharedService.toastService.showError("Mobile No is Required" );
      return;
    }
    if (!this.loginObj.OTP) {
      this.sharedService.toastService.showError("OTP is Required" );
      return;
    }
    this.sharedService.isBusy = true;
    this.loginObj.IsOTPLogin = true;
    this.slimsPatientService.LabCartUserLogin(this.loginObj).subscribe(
      (response: any) => {
        // this.sharedService.isBusy = false;
        this.sharedService.isBusy = false;
        if (Boolean(response.IsSuccess) === true) {
          const userDetail: LoginModel = new LoginModel(response.Success.Data);
          this.setUserId();
          if (userDetail.Mobile && userDetail.Token) {
            localStorage.removeItem('IsRefreshedForNewVersion');
            this.sharedService.authService.setUserLogin(userDetail.Mobile, userDetail.Token, userDetail.PatientId, userDetail.PatientName, userDetail.CityId, userDetail.CityName, userDetail.IsPasswordAvailable,null);
            if (this.sharedService.authService.redirectUrl && this.router.url !== this.sharedService.authService.redirectUrl) {
              this.router.navigate([this.sharedService.authService.redirectUrl], { relativeTo: this.route.root });
            } else {
              this.router.navigate(['lims-patient/home'], { relativeTo: this.route.root });
            }
          }
          this.LastloginObj = new LoginModel();
        
          
      
        } else {
          if (response.Error.Message && typeof (response.Error.Message) == 'string' && response.Error.Message.includes('I000')) {
            this.LastloginObj = Object.assign({}, this.loginObj);
          }

          if (response.Error.Message && typeof (response.Error.Message) == 'string' && response.Error.Message.includes('not compitable with UI version')) {
  //          this.sharedService.generalService.reloadPage();
          }

          if (response.Error.Message && typeof (response.Error.Message) == 'string' && response.Error.Message.includes('E0592')) {
            return;
          }
          this.sharedService.HandleAuthenticationError(response.Error);
        }
      },
      (err: any) => {
        this.LastloginObj = new LoginModel();
      });
  }

  onSingUpbtnClick(){
    this.sharedService.authService.navigateToRegister();
  }
}
