import { Component } from '@angular/core';
import {  IonicModule  } from '@ionic/angular';
import { IonContent,IonButton,IonRadio,IonRadioGroup,IonRow,IonCol } from "@ionic/angular/standalone";
import { SlimsPatientApplicationService } from '../../../service/laboratory-service/lims-patientapp.service';
import { AuthService } from '../../../service/shared-service/auth.service';
import { SharedService } from '../../../service/shared-service/shared.service';
import { PatientModel } from 'src/app/model/member.model';
import { Router } from '@angular/router';
import { popular_packages } from '../../../global.settings';
import { CartService } from '../../../service/shared-service/cart.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { MemberAddressModel } from '../../../model/member-address.model';

@Component({
    selector: 'app-checkout',
    templateUrl: 'checkout.page.html',
    styleUrls: ['checkout.page.scss'],
    standalone : true,
    imports: [IonContent, IonButton, IonRadio, IonRadioGroup, IonRow, IonCol, CommonModule, FormsModule],
})

export class CheckoutPage {

   public CartItemList$ : Observable<any[]>;

  constructor(public slimsPatientService: SlimsPatientApplicationService, public sharedService: SharedService, public router: Router, 
    public authService: AuthService,public cartService : CartService,) {
      this.CartItemList$ = this.cartService.cartItemList$;
    }

  public selectedOption;
  public mobile = null;
  public SelectedMember = new PatientModel();
  public SelectedMemberAddress= new MemberAddressModel();
  public popular_packages = popular_packages;

  ngOnInit() {
    this.mobile = this.authService.authenticationModel.loginUserId;
    this.GetPatientData(this.mobile);
  }

  onPlaceOrderClick(){

  }


  ionViewDidEnter(){
   this.setdeafult();
  }

  setdeafult(){
    if(this.sharedService.labCartPatientObj.MemberList && this.sharedService.labCartPatientObj.MemberList.length > 0){
      let i = this.sharedService.labCartPatientObj.MemberList.findIndex(x=> x.PatientId = this.sharedService.labCartPatientObj.PatientId);
      if(i > -1){
        this.SelectedMember = this.sharedService.labCartPatientObj.MemberList[i];
      }else{
        this.SelectedMember = this.sharedService.labCartPatientObj.MemberList[0];
      }
    }

    if(this.sharedService.labCartPatientObj.MemberAddressList && this.sharedService.labCartPatientObj.MemberAddressList.length > 0){
      let i = this.sharedService.labCartPatientObj.MemberAddressList.findIndex(x=> x.MembershipId = this.sharedService.labCartPatientObj.MembershipId);
      if(i > -1){
        this.SelectedMemberAddress = this.sharedService.labCartPatientObj.MemberAddressList[i];
      }else{
        this.SelectedMemberAddress = this.sharedService.labCartPatientObj.MemberAddressList[0];
      }
    }
  }


  public GetPatientData(mobile = null): any {
    if (mobile != null && mobile != '' ) {
      this.sharedService.isBusy = true;
      this.slimsPatientService.GetLabCartProfileByMobile(mobile).subscribe(
        (response: any) => {
          this.sharedService.isBusy = false;
          if (response.IsSuccess) {
            this.sharedService.labCartPatientObj = new PatientModel(response.Success.Data);
            if (this.sharedService.labCartPatientObj && !this.sharedService.labCartPatientObj.Mobile) {
              this.sharedService.labCartPatientObj.Mobile = this.authService.authenticationModel.loginUserId;
            }
            this.setdeafult();

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
        if(this.sharedService.labCartPatientObj.PatientId == event.detail.value){
          patientData = this.sharedService.labCartPatientObj;
        }
        else{
          patientData = this.sharedService.labCartPatientObj.MemberList.find(x => x.PatientId == event.detail.value);
        }
      }

    }
}
