import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, NavController, IonRow, IonCol, IonInput, IonInputPasswordToggle,IonInputOtp } from "@ionic/angular/standalone";
import { LocationStrategy } from '@angular/common';
import { ForgotPasswordModel } from '../model/forgot-password.model';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../service/shared-service/shared.service';
import { SlimsPatientApplicationService } from '../service/laboratory-service/lims-patientapp.service';

@Component({
    selector: 'app-forgot-password.page',
    templateUrl: 'forgot-password.page.html',
    styleUrls: ['forgot-password.page.scss'],
    standalone : true,
    imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonRow, IonCol, IonInput, FormsModule, IonInputPasswordToggle, IonInputOtp],
})

export class ForgotPasswordPage {

  constructor(public locationStrategy : LocationStrategy,public sharedService: SharedService, public slimsPatientService: SlimsPatientApplicationService) {}

  public forgotPasswordObj = new ForgotPasswordModel();
  public isOTPSend = false;
  public isDisableResendbtn = true;
  public isOTPVerified = false;

  onForgotPasswordBackClick(){
    this.forgotPasswordObj = new ForgotPasswordModel();
    this.isOTPVerified = false;
    this.isOTPSend = false;
    this.isDisableResendbtn = true;
    this.locationStrategy.back();
  }

  onSendOTPClick(){
    if (!this.forgotPasswordObj.UserId) {
      this.sharedService.toastService.showError("Mobile No is Required" );
      return;
    }
    else {
      if (this.forgotPasswordObj.UserId.length < 10){
        this.sharedService.toastService.showError("Mobile No is Invalid" );
        return;
      }
    }
    this.slimsPatientService.SendLabCartPatientForgotPasswordOTP(this.forgotPasswordObj).subscribe(
      (response: any) => {
        if (Boolean(response.IsSuccess) === true) {
          this.isOTPSend = true;
          this.sharedService.toastService.showSucess("OTP Sent Successfully");
          setTimeout(() => {
            this.isDisableResendbtn = false
          }, 30000);
        }
        else if(response.Error.Message && response.Error.Message == 'OTP Already Sent For This User.'){
          this.isOTPSend = true;
        }
      },
      (err: any) => {
      });
  }

  onVerifyAndProceedClick(){
    if (!this.forgotPasswordObj.UserId) {
      this.sharedService.toastService.showError("Mobile No is Required" );
      return;
    }
    else {
      if (this.forgotPasswordObj.UserId.length < 10){
        this.sharedService.toastService.showError("Mobile No is Invalid" );
        return;
      }
    }
    if (!this.forgotPasswordObj.OTP) {
      this.sharedService.toastService.showError("OTP is Required" );
      return;
    }
    this.slimsPatientService.CheckForgotPasswordOTPForLabCart(this.forgotPasswordObj).subscribe(
      (response: any) => {
        if (Boolean(response.IsSuccess) === true) {
          this.isOTPVerified = true;
          this.sharedService.toastService.showSucess("OTP Verifed Successfully");
        }
        else{
          this.sharedService.toastService.showError(response.Error.Message);
        }
      },
      (err: any) => {
      });
  }
  
  onSubmitClick(){
    if (!this.forgotPasswordObj.UserId) {
      this.sharedService.toastService.showError("Mobile No is Required" );
      return;
    }
    else {
      if (this.forgotPasswordObj.UserId.length < 10){
        this.sharedService.toastService.showError("Mobile No is Invalid" );
        return;
      }
    }
    if (!this.forgotPasswordObj.Password) {
      this.sharedService.toastService.showError("Password is Required" );
      return;
    }
        if (!this.forgotPasswordObj.ConfirmPassword) {
      this.sharedService.toastService.showError("Confirm Password is Required" );
      return;
    }
    if (!this.forgotPasswordObj.OTP) {
      this.sharedService.toastService.showError("OTP is Required" );
      return;
    }
    let tempForgortPasswordObj = new ForgotPasswordModel();
    tempForgortPasswordObj.UserId = this.forgotPasswordObj.UserId;
    tempForgortPasswordObj.OTP = this.forgotPasswordObj.OTP;
    tempForgortPasswordObj.Password = this.sharedService.generalService.cngpstr( this.forgotPasswordObj.Password, this.forgotPasswordObj.UserId);
    tempForgortPasswordObj.ConfirmPassword = this.sharedService.generalService.cngpstr( this.forgotPasswordObj.ConfirmPassword, this.forgotPasswordObj.UserId);
    this.slimsPatientService.ChangeLabCartPasswordWithOTP(tempForgortPasswordObj).subscribe(
      (response: any) => {
        if (Boolean(response.IsSuccess) === true) {
          this.isOTPVerified = false;
          this.isOTPSend = false;
          this.isDisableResendbtn = true;
          this.forgotPasswordObj = new ForgotPasswordModel();
          this.sharedService.toastService.showSucess(response.Success.Message);
          this.sharedService.authService.navigateToLogin();
        }
        else{
          this.sharedService.toastService.showError(response.Error.Message);
        }
      },
      (err: any) => {
      });
  }
}
