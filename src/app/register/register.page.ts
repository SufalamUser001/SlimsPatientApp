import { LocationStrategy } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButton, IonCol, IonInput, IonRow, IonButtons, IonIcon, IonInputPasswordToggle, IonCheckbox, IonInputOtp } from "@ionic/angular/standalone";
import { SlimsPatientApplicationService } from '../service/laboratory-service/lims-patientapp.service';
import { SharedService } from '../service/shared-service/shared.service';
import { PatientModel } from '../model/member.model';
import { ForgotPasswordModel } from '../model/forgot-password.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: 'register.page.html',
    styleUrls: ['register.page.scss'],
    standalone : true,
    imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonButton, IonCol, IonInput, IonRow, IonButtons, IonIcon, FormsModule, IonInputPasswordToggle, IonCheckbox,IonInputOtp],
})

export class RegisterPage {

  constructor(private router: Router,public locationStrategy : LocationStrategy,public sharedService : SharedService,public slimsPatientService: SlimsPatientApplicationService) {}

  public PatientObj = new PatientModel();
  public signupObj: ForgotPasswordModel = new ForgotPasswordModel();
  genderList = [];
  areaList = [];
  cityList = [];
  public isOTPSentOnce = false;
  public isDisableResendbtn = true;

  ngOnInit() {
    if(this.sharedService.authService.IsUserOTPVerified){
      this.getAllDD();
    }
  }

  onbackClick(){
    this.locationStrategy.back();
  }

  public getAllDD(): any {
    this.slimsPatientService.GetDDForLabCartProfileRegister().subscribe(
      (response: any) => {
        if (response.IsSuccess) {
          this.genderList = Object.assign([], response.Success.Data.GENDER);
          this.areaList = Object.assign([], response.Success.Data.Area);
          this.cityList = Object.assign([], response.Success.Data.City);
        } else {
           this.sharedService.HandleAuthenticationError(response.Error);
        }
      }, (error: any) => {
        // this.sharedService.isBusy = false;
      });
  }

  onSendOTPClick() {
    this.isDisableResendbtn = true;
    if (!this.signupObj.UserId) {
      this.sharedService.toastService.showError("Mobile No is Required" );
      return;
    }
    this.slimsPatientService.SendLabCartPatientOtp(this.signupObj).subscribe(
      (response: any) => {
        if (Boolean(response.IsSuccess) === true) {
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

  onValidateOTPClick() {
    if (!this.signupObj.UserId) {
      this.sharedService.toastService.showError("Mobile No is Required" );
      return;
    }
    if (!this.signupObj.OTP) {
      this.sharedService.toastService.showError("OTP is Required" );
      return;
    }
    this.slimsPatientService.CheckOTPForLabCart(this.signupObj).subscribe(
      (response: any) => {
        if (Boolean(response.IsSuccess) === true) {
          this.sharedService.authService.setOTPLogin(this.signupObj.UserId);
          this.getAllDD();
          this.PatientObj = new PatientModel();
          this.PatientObj.Mobile = this.signupObj.UserId;
          this.PatientObj.LabCartOTP = this.signupObj.OTP;

        } else {
          this.sharedService.HandleAuthenticationError(response.Error);
        }
      },
      (err: any) => {
      });

  }


  onRegisterClick() {
    if (!this.PatientObj.Mobile) {
      this.sharedService.toastService.showError("Mobile No is Required" );
      return;
    }
    if (!this.PatientObj.FirstName) {
      this.sharedService.toastService.showError("Name is Required" );
      return;
    }
    if (!this.PatientObj.Password) {
      this.sharedService.toastService.showError("Password is Required" );
      return;
    }
    if (!this.PatientObj.ConfirmPassword) {
      this.sharedService.toastService.showError("Confirm Password is Required" );
      return;
    }
    if (this.PatientObj.Password != this.PatientObj.ConfirmPassword) {
      this.sharedService.toastService.showError("Confirm Password does not Match" );
      return;
    }
    if (!this.PatientObj.FirstName) {
      this.sharedService.toastService.showError("Name is Required" );
      return;
    }

    this.PatientObj.IsGeneratedFromLabCart = true;
    this.sharedService.isBusy = true;
    if (this.PatientObj != null) {
      let PatientObj = Object.assign({},this.PatientObj);
      PatientObj.Password = this.sharedService.generalService.cngpstr(PatientObj.Password, PatientObj.Mobile);
      PatientObj.ConfirmPassword = this.sharedService.generalService.cngpstr(PatientObj.ConfirmPassword, PatientObj.Mobile);
      this.slimsPatientService.SaveNewLabCartPatient(PatientObj).subscribe(
        (response: any) => {
          this.sharedService.isBusy = false;
          if (response.IsSuccess) {
            this.sharedService.toastService.showSucess(response.Success.Message);
            this.PatientObj = new PatientModel(response.Success.Data);
            this.router.navigate(['login']);
          } else {
            this.sharedService.HandleAuthenticationError(response.Error);
          }
        },
        (err: any) => {
          this.sharedService.isBusy = false;
        });
    }


  }

}
