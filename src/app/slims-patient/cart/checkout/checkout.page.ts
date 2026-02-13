import { Component } from '@angular/core';
import {  IonicModule  } from '@ionic/angular';
import { IonContent,IonButton,IonRadio,IonRadioGroup,IonRow,IonCol } from "@ionic/angular/standalone";
import { SlimsPatientApplicationService } from '../../../service/laboratory-service/lims-patientapp.service';
import { AuthService } from '../../../service/shared-service/auth.service';
import { SharedService } from '../../../service/shared-service/shared.service';
import { PatientModel } from 'src/app/model/member.model';
import { Router } from '@angular/router';
import { popular_packages } from '../../../global.settings';

@Component({
    selector: 'app-checkout',
    templateUrl: 'checkout.page.html',
    styleUrls: ['checkout.page.scss'],
    standalone : true,
    imports: [IonContent, IonButton,IonRadio,IonRadioGroup,IonRow,IonCol],
})

export class CheckoutPage {

  constructor(public slimsPatientService: SlimsPatientApplicationService, public sharedService: SharedService, public router: Router, public authService: AuthService) {}

  public selectedOption;
  public mobile = null;
  public labCartPatientObj = new PatientModel();
  public popular_packages = popular_packages;

  ngOnInit() {
    this.mobile = this.authService.authenticationModel.loginUserId;
    this.GetPatientData(this.mobile);
  }

  onPlaceOrderClick(){

  }

  public GetPatientData(mobile = null): any {
      if (mobile != null && mobile != '') {
        this.sharedService.isBusy = true;
        this.slimsPatientService.GetLabCartProfileByMobile(mobile).subscribe(
          (response: any) => {
            this.sharedService.isBusy = false;
            if (response.IsSuccess) {
              this.labCartPatientObj = new PatientModel(response.Success.Data);
              if (this.labCartPatientObj && !this.labCartPatientObj.Mobile) {
                this.labCartPatientObj.Mobile = this.authService.authenticationModel.loginUserId;
              }
              // this.labCartPatientObj = null;
            } else {
              this.sharedService.HandleAuthenticationError(response.Error);
            }
          }, (error: any) => {
            this.sharedService.isBusy = false;
          });
      }
  
    }

    openProfilePage(){
          this.router.navigate(['/lims-patient/profile']);
    }

    patientChange(event){
      if (event && event.detail && event.detail.value){
        var patientData;
        if(this.labCartPatientObj.PatientId == event.detail.value){
          patientData = this.labCartPatientObj;
        }
        else{
          patientData = this.labCartPatientObj.MemberList.find(x => x.PatientId == event.detail.value);
        }
      }

    }
}
