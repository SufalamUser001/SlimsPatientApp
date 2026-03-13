import { Component } from '@angular/core';

import { IonContent, IonHeader, IonToolbar, IonTitle, IonCard, IonInput, IonButton, IonButtons, IonCol, IonRow, IonIcon, IonText, IonInputPasswordToggle } from "@ionic/angular/standalone";
import { LoginModel } from '../model/login.model';
import { ForgotPasswordModel } from '../model/forgot-password.model';
import { PatientModel } from '../model/member.model';
import { FormsModule } from '@angular/forms';
import { LocationStrategy } from '@angular/common';
import { SharedService } from '../service/shared-service/shared.service';
import { SlimsPatientApplicationService } from '../service/laboratory-service/lims-patientapp.service';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';

@Component({
    selector: 'app-welcome',
    templateUrl: 'welcome.page.html',
    styleUrls: ['welcome.page.scss'],
    standalone : true,
    imports: [IonIcon, IonRow, IonCol, FormsModule, IonButton, IonButtons, IonToolbar, IonHeader, IonContent, IonTitle,IonInput],
})
export class WelcomePage {

  public loginObj: LoginModel = new LoginModel();
  public signupObj: ForgotPasswordModel = new ForgotPasswordModel();
  public LastloginObj = new LoginModel();
  public PatientObj = new PatientModel();
  public LabCode ='';


  constructor(public locationStrategy : LocationStrategy,public sharedService : SharedService,public router : Router,public slimsPatientService : SlimsPatientApplicationService) {}

  onbackClick(){
    this.locationStrategy.back();
  }

  public onLoginClick() {
    this.router.navigate(['login']);
  }

  public onRegisterClick() {
    this.router.navigate(['register']);
  }


  public onLabCodeContinueClick(){
    // if(this.LabCode.trim().length > 2 && this.LabCodeVerified){
    //   this.openSecondModal();
    //   return;
    // }
    this.authenticateUserOnSufalamServerWithLabCode();
  }

  authenticateUserOnSufalamServerWithLabCode(){
    if(this.LabCode){
    this.slimsPatientService.authenticateUserOnSufalamServerWithLabCode(this.LabCode.trim()).subscribe(
      (response: any) => {
        this.sharedService.isBusy = false;
        if (response.IsSuccess) {
          if (response.Success.Data) {
            let data = response.Success.Data;
          
            this.slimsPatientService.baseService.apiEndPoint = data.Name.trim();
            Preferences.set({
              key: 'LabCode',
              value: this.LabCode.trim(),
            });
            Preferences.set({
              key: 'APIURL',
              value: data.Name.trim(),
            });
            this.router.navigate(['login']);
         
            // this.openSecondModal();
          }

          if (response.Success.Message) {
           // this.sharedService.toastService.showSucess(response.Success.Message);
          }
        } else {
          this.sharedService.isBusy = false;
          this.sharedService.HandleAuthenticationError(response.Error);
        }
      });
    }
  }


}
