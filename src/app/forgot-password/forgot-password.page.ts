import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonContent, IonHeader, IonToolbar, IonTitle,IonButtons,IonIcon,IonButton,IonRow,IonCol,IonInput,IonInputOtp,IonInputPasswordToggle } from "@ionic/angular/standalone";
import { LocationStrategy } from '@angular/common';
import { ForgotPasswordModel } from '../model/forgot-password.model';
import { FormsModule } from '@angular/forms';
import { SlimsPatientApplicationService } from '../service/laboratory-service/lims-patientapp.service';
import { SharedService } from '../service/shared-service/shared.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-forgot-password',
    templateUrl: 'forgot-password.page.html',
    styleUrls: ['forgot-password.page.scss'],
    standalone : true,
    imports: [ IonContent, IonHeader, IonToolbar, IonTitle,IonButtons,IonIcon,IonButton,IonInputOtp,IonRow,IonCol,IonInput,FormsModule,IonInputPasswordToggle],
})
export class ForgotPasswordPage {

  constructor(public router: Router,public locationStrategy : LocationStrategy,public sharedService : SharedService,public slimsPatientService: SlimsPatientApplicationService) {}
    
    public forgotPasswordObj: ForgotPasswordModel = new ForgotPasswordModel();
    public isOTPSentOnce = false;
    public isDisableResendbtn = true;
    public isOTPVerified = false;
    
  onbackClick(){
    this.locationStrategy.back();
  }

   onSendOTPClick() {
    this.isDisableResendbtn = true;
    if (!this.forgotPasswordObj.UserId) {
      this.sharedService.toastService.showError("Mobile No is Required" );
      return;
    }
    this.slimsPatientService.SendLabCartPatientForgotPasswordOTP(this.forgotPasswordObj).subscribe(
      (response: any) => {
        if (Boolean(response.IsSuccess) === true) {
          this.isOTPSentOnce = true;
          this.sharedService.toastService.showSucess("OTP Sent Successfully");
            setTimeout(() => {
              this.isDisableResendbtn = false
            }, 120000);
        }
      },
      (err: any) => {
      });
  }

    onValidateOTPClick() {
      if (!this.forgotPasswordObj.UserId) {
        this.sharedService.toastService.showError("Mobile No is Required" );
        return;
      }
      if (!this.forgotPasswordObj.OTP) {
        this.sharedService.toastService.showError("OTP is Required" );
        return;
      }
      this.slimsPatientService.CheckForgotPasswordOTPForLabCart(this.forgotPasswordObj).subscribe(
        (response: any) => {
          if (Boolean(response.IsSuccess) === true) {
            this.isOTPVerified = true
          } else {
            this.sharedService.HandleAuthenticationError(response.Error);
          }
        },
        (err: any) => {
        });
    }

    onResetPasswordClick() {
      var passwordChange = new ForgotPasswordModel();
      passwordChange.UserId = this.forgotPasswordObj.UserId;
      passwordChange.OTP = this.forgotPasswordObj.OTP;
      passwordChange.Password = this.sharedService.generalService.cngpstr(this.forgotPasswordObj.Password, this.forgotPasswordObj.UserId);
      passwordChange.ConfirmPassword = this.sharedService.generalService.cngpstr(this.forgotPasswordObj.ConfirmPassword, this.forgotPasswordObj.UserId);
      this.slimsPatientService.ChangeLabCartPasswordWithOTP(passwordChange).subscribe(
        (response: any) => {
          if (Boolean(response.IsSuccess) === true) {
            this.sharedService.toastService.showSucess(response.Success.Message);
            this.router.navigate(['login']);
          } else {
            this.sharedService.HandleAuthenticationError(response.Error);
          }
        },
        (err: any) => {
        });
    }
}
