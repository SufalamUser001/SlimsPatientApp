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

@Component({
    selector: 'app-welcome',
    templateUrl: 'welcome.page.html',
    styleUrls: ['welcome.page.scss'],
    standalone : true,
    imports: [IonIcon, IonRow, IonCol, FormsModule, IonButton, IonButtons, IonToolbar, IonHeader, IonContent, IonTitle],
})
export class WelcomePage {

  public loginObj: LoginModel = new LoginModel();
  public signupObj: ForgotPasswordModel = new ForgotPasswordModel();
  public LastloginObj = new LoginModel();
  public PatientObj = new PatientModel();


  constructor(public locationStrategy : LocationStrategy,public sharedService : SharedService,public router : Router) {}

  onbackClick(){
    this.locationStrategy.back();
  }

  public onLoginClick() {
    this.router.navigate(['login']);
  }

  public onRegisterClick() {
    this.router.navigate(['register']);
  }


}
