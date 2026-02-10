import { Component, signal } from '@angular/core';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonSearchbar, IonRow, IonButton, IonButtons, IonIcon, IonSelect, IonCol, IonSelectOption, IonDatetimeButton, IonAccordionGroup, IonAccordion, IonModal, IonText, IonList, IonItem, IonLabel, IonDatetime } from "@ionic/angular/standalone";
import { SharedService } from '../../service/shared-service/shared.service';
import { SlimsPatientApplicationService } from '../../service/laboratory-service/lims-patientapp.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-orders',
    templateUrl: 'orders.page.html',
    styleUrls: ['orders.page.scss'],
    standalone : true,
    imports: [IonLabel, IonItem, IonList, IonText, IonContent, IonToolbar, IonSearchbar, IonRow, IonButton, IonButtons, IonIcon, 
      IonSelect, IonCol, IonSelectOption, IonDatetimeButton,IonDatetime,
    IonAccordionGroup, CommonModule, FormsModule,
    IonAccordion, IonModal],
})
export class OrdersPage {

  constructor(public sharedService : SharedService,public slimsPatientService: SlimsPatientApplicationService) {}

  public registrationDetails = [];
  public searchObj = {
    Mobile: this.sharedService.authService.authenticationModel.loginUserId,
    RegistrationMonth: new Date().getMonth() + 1,
    RegistrationYear: new Date().getFullYear(),
    RegistrationFromDate : new Date().toISOString().split('T')[0]
  }
  public searchMaxDate = new Date().toISOString().split('T')[0] ;
  public filterRegistrationDetails = [];
  public searchKeyword = '';
  public yearList = this.sharedService.generalService.getYearList();
  public monthList = this.sharedService.variables.months;
  public afterInit = signal(false);
  
  customFormatOptions = {
    date: {
      year : '2-digit',
      month: 'short',
    }
  };

  onSearchCancelClick(){
    this.searchKeyword = ''; 
    this.FilterRegistrationList();
  }

  ngOnInit(){
    this.onSearchClick();
  }
  
  ngAfterViewInit(): void {

    this.afterInit.set(true);
  
  }

  onSearchClick() {
    this.searchObj.RegistrationMonth =  new Date(this.searchObj.RegistrationFromDate).getMonth() + 1,
    this.searchObj.RegistrationYear = new Date(this.searchObj.RegistrationFromDate).getFullYear()
    //this.searchText = null;
    this.sharedService.isBusy = true;
    this.slimsPatientService.GetLabCartPatientReportList(this.searchObj.Mobile, this.searchObj.RegistrationMonth, this.searchObj.RegistrationYear).subscribe(
      (response: any) => {
    this.sharedService.isBusy = false;
        if (response.IsSuccess) {
          let registrationDetails = Object.assign([], response.Success.Data);
          for (let index = 0; index < registrationDetails.length; index++) {
            const element = registrationDetails[index];
            if (element.B2BId > 0) {
              if (element.IsHLMFOFOModel || element.IsB2C) {
                element.isPaymentReceiptButtonApplicable = true;
              }
            } else {
              element.isPaymentReceiptButtonApplicable = true;
            }
          }
          this.registrationDetails = Object.assign([], registrationDetails);
          this.FilterRegistrationList();
        } 
        else 
        {
          this.sharedService.HandleAuthenticationError(response.Error);
        }
      }, (error: any) => {
        this.sharedService.isBusy = false;
      });
  }

  FilterRegistrationList(){
    let mylist = Object.assign([],this.registrationDetails)
    if(mylist && mylist.length > 0){
      if (this.searchKeyword && this.searchKeyword.trim() != '' && this.searchKeyword.length > 2) {
        mylist = this.registrationDetails.filter((item) => {
            return (item.LabId.toLowerCase().indexOf(this.searchKeyword.toLowerCase()) > -1 || item.PatientName.toLowerCase().indexOf(this.searchKeyword.toLowerCase()) > -1);
        });
      }
    }
    this.filterRegistrationDetails = Object.assign([],mylist);
  }

}
