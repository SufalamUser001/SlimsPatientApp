import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonSearchbar, IonRow, IonButton, IonButtons, IonIcon, IonSelect, IonCol, IonSelectOption, IonDatetimeButton, IonAccordionGroup, IonAccordion, IonModal, IonText, IonList, IonItem, IonLabel, IonDatetime, IonChip, IonGrid } from "@ionic/angular/standalone";
import { SharedService } from '../../service/shared-service/shared.service';
import { SlimsPatientApplicationService } from '../../service/laboratory-service/lims-patientapp.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Enumeration } from '../../service/shared-service/others/enumeration';

@Component({
    selector: 'app-orders',
    templateUrl: 'orders.page.html',
    styleUrls: ['orders.page.scss'],
    standalone : true,
    imports: [IonChip, IonContent, IonToolbar, IonSearchbar, IonRow, IonButton, IonButtons, IonIcon,
    IonCol, IonDatetimeButton, IonDatetime,
    IonAccordionGroup, CommonModule, FormsModule,
    IonAccordion, IonModal, IonItem, IonLabel],
})
export class OrdersPage {

  constructor(public sharedService : SharedService,public slimsPatientService: SlimsPatientApplicationService) {}

  public registrationDetails = [];
   today = new Date();
   priorDate = new Date(this.today);
 
  public getLocalDate = (date) => date.toLocaleDateString('sv-SE');
  public searchMaxDate = this.getLocalDate(this.today) ;
  public searchType = '30';
  public searchObj = {
    Mobile: this.sharedService.authService.authenticationModel.loginUserId,
    RegistrationFromDate :  this.getLocalDate(new Date(this.priorDate.setDate(this.today.getDate() - 30))),
    RegistrationToDate : this.searchMaxDate
  }
  public filterRegistrationDetails = [];
  public searchKeyword = '';
  public yearList = this.sharedService.generalService.getYearList();
  public monthList = this.sharedService.variables.months;
  public afterInit = signal(false);
  
  @ViewChild('fromdatebtn') fromdatebtn :any;

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
    if(this.searchObj.RegistrationFromDate > this.searchObj.RegistrationToDate){
      this.sharedService.toastService.showError("Date Selection is not correct");
      return;

    }
    //this.searchText = null;
    this.sharedService.isBusy = true;
    this.slimsPatientService.GetLabCartPatientReportList(this.searchObj.Mobile, this.searchObj.RegistrationFromDate, this.searchObj.RegistrationToDate).subscribe(
      (response: any) => {
        this.registrationDetails = [];
        this.filterRegistrationDetails = [];
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

    public GetPaymentReceipt(data) {
      this.sharedService.isBusy = true;
      this.slimsPatientService.DownloadReceiptForLabCartPatient(data.LabId, data.B2CPassword).subscribe(
      (response: any) => {
        this.sharedService.isBusy = false;
        if (response.IsSuccess) {
          let PDFData = response.Success.Data;
          if (PDFData != null && PDFData) {
            let filename =  'Receipt_' + data.LabId + ".pdf";
            if (filename) {
              this.sharedService.saveFile(PDFData, filename,null,null);
            }
            this.sharedService.toastService.showSucess("Receipt generated successfully.");
          }
        } else {
          this.sharedService.isBusy = false;
          this.sharedService.HandleAuthenticationError(response.Error);
        }
      });
    }

  public GenerateLabReport(data) {
    this.sharedService.isBusy = true;
    this.slimsPatientService.DownloadReportForLabCartPatient(data.LabId, data.B2CPassword).subscribe(
      (response: any) => {
        this.sharedService.isBusy = false;
        if (response.IsSuccess) {
          let PDFData = response.Success.Data;
          if (PDFData != null && PDFData) {
            let filename =   'Report_' + data.LabId + ".pdf";
            if (filename) {
              this.sharedService.saveFile(PDFData, filename,null,null);
            }
            this.sharedService.toastService.showSucess("Report generated successfully.");
          }
        } else {
          this.sharedService.isBusy = false;
          this.sharedService.HandleAuthenticationError(response.Error);
        }
      });
  }

  GetPatientPayment(data){
    if(data.LabId && data.PaymentGateWay){
      let url = this.slimsPatientService.baseService.apiEndPoint;
        let password = this.sharedService.generalService.cngpstr(data.B2CPassword, data.LabId, 1);
        let labId = this.sharedService.generalService.encstr(data.LabId);
        if (data.PaymentGateWay == Enumeration.PaymentGateway.Paytm) {
            window.open(url.replace("api/", "") + "OnlinePayment/PaytmPayment?aWd1=" + labId + "&PnXl=" + encodeURIComponent(password));
        } else if (data.PaymentGateWay == Enumeration.PaymentGateway.BillDesk) {
            window.open(url.replace("api/", "") + "OnlinePayment/BillDeskPayment?aWd1=" + labId + "&PnXl=" + encodeURIComponent(password));
        } else if (data.PaymentGateWay == Enumeration.PaymentGateway.Razorpay) {
            window.open(url.replace("api/", "") + "OnlinePayment/RazorpayPayment?aWd1=" + labId + "&PnXl=" + encodeURIComponent(password));
        } else if (data.PaymentGateWay == Enumeration.PaymentGateway.CCAvenue) {
            window.open(url.replace("api/", "") + "OnlinePayment/CCAvenuePayment?aWd1=" + labId + "&PnXl=" + encodeURIComponent(password));
        } else if (data.PaymentGateWay == Enumeration.PaymentGateway.PayUMoney) {
            window.open(url.replace("api/", "") + "OnlinePayment/PayUMoneyPayment?aWd1=" + labId + "&PnXl=" + encodeURIComponent(password));
        } else if (data.PaymentGateWay == Enumeration.PaymentGateway.PhonePe) {
            window.open(url.replace("api/", "") + "OnlinePayment/PhonePePayment?aWd1=" + labId + "&PnXl=" + encodeURIComponent(password));
        } else if (data.PaymentGateWay == Enumeration.PaymentGateway.JioOnePay) {
            window.open(url.replace("api/", "") + "OnlinePayment/JioOnePayment?aWd1=" + labId + "&PnXl=" + encodeURIComponent(password));
        } 
    }
  }


//   onDateRangeClick(type){
//     this.today = new Date();
//     this.priorDate = new Date(this.today);
//     //const formatDate = (date) => date.toISOString().split('T')[0];
//     if(type == 'T'){
//       this.searchObj.RegistrationFromDate = new Date();
//       this.searchObj.RegistrationToDate = new Date();
//     }
//     else if(type == 'Y'){
//       this.searchObj.RegistrationFromDate = new Date(this.priorDate.setDate(this.today.getDate() - 1));
//       this.searchObj.RegistrationToDate = new Date(this.priorDate.setDate(this.today.getDate() - 1));
//     }
//     else if(type == '7'){
//       this.searchObj.RegistrationFromDate = new Date(this.priorDate.setDate(this.today.getDate() - 6));
//       this.searchObj.RegistrationToDate = new Date();
//     }
//     else if(type == '30'){
//       this.searchObj.RegistrationFromDate = new Date(this.priorDate.setDate(this.today.getDate() - 30));
//       this.searchObj.RegistrationToDate = new Date();
//     }
//     else if (type == 'M') {
//       this.searchObj.RegistrationFromDate = new Date(this.today.getFullYear(), this.today.getMonth(), 1);
//       this.searchObj.RegistrationToDate = this.today;
  
//   } else if (type == 'LM') {
//       this.searchObj.RegistrationFromDate = new Date(this.today.getFullYear(), this.today.getMonth() - 1, 1);
//       this.searchObj.RegistrationToDate = new Date(this.today.getFullYear(), this.today.getMonth(), 0);
  
//   } else if (type == 'CY') {
//       let Year = this.today.getFullYear();
//       this.searchObj.RegistrationFromDate = new Date(Year, 0, 1);
//       this.searchObj.RegistrationToDate = new Date(Year, 11, 31);
//   }
//   else if (type == 'LY') {
//     let lastYear = this.today.getFullYear() - 1;
//     this.searchObj.RegistrationFromDate = new Date(lastYear, 0, 1);
//     this.searchObj.RegistrationToDate = new Date(lastYear, 11, 31);
//   }
// debugger

//   }

  onDateRangeClick(type) {
    this.searchType = type;
    this.today = new Date();
    this.today.setHours(0, 0, 0, 0);
    // if (type === 'T') {
    //   this.searchObj.RegistrationFromDate = this.getLocalDate(this.today);
    //   this.searchObj.RegistrationToDate = this.getLocalDate(this.today);

    // } else if (type === 'Y') {
    //   let yesterday = new Date(this.today);
    //   yesterday.setDate(this.today.getDate() - 1);
    //   this.searchObj.RegistrationFromDate = this.getLocalDate(yesterday);
    //   this.searchObj.RegistrationToDate = this.getLocalDate(yesterday);

    // } else
    if (type === '7') {
      let last7 = new Date(this.today);
      last7.setDate(this.today.getDate() - 6);
      this.searchObj.RegistrationFromDate = this.getLocalDate(last7);
      this.searchObj.RegistrationToDate = this.getLocalDate(this.today);

    } else if (type === '30') {
      let last30 = new Date(this.today);
      last30.setDate(this.today.getDate() - 30);
      this.searchObj.RegistrationFromDate = this.getLocalDate(last30);
      this.searchObj.RegistrationToDate = this.getLocalDate(this.today);

    } else if (type === '60') {
      let last30 = new Date(this.today);
      last30.setDate(this.today.getDate() - 60);
      this.searchObj.RegistrationFromDate = this.getLocalDate(last30);
      this.searchObj.RegistrationToDate = this.getLocalDate(this.today);

    }
    
    // else if (type === 'M') {
    //   let firstDay = new Date(this.today.getFullYear(), this.today.getMonth(), 1);
    //   this.searchObj.RegistrationFromDate = this.getLocalDate(firstDay);
    //   this.searchObj.RegistrationToDate = this.getLocalDate(this.today);

    // } else if (type === 'LM') {
    //   let firstDayLM = new Date(this.today.getFullYear(), this.today.getMonth() - 1, 1);
    //   let lastDayLM = new Date(this.today.getFullYear(), this.today.getMonth(), 0);
    //   this.searchObj.RegistrationFromDate = this.getLocalDate(firstDayLM);
    //   this.searchObj.RegistrationToDate = this.getLocalDate(lastDayLM);

    // } else if (type === 'TY') {

    //   let firstDayYear = new Date(this.today.getFullYear(), 0, 1);
    //   this.searchObj.RegistrationFromDate = this.getLocalDate(firstDayYear);
    //   this.searchObj.RegistrationToDate = this.getLocalDate(this.today);

    // } else if (type === 'LY') {
    //   let prevYear = this.today.getFullYear() - 1;
    //   this.searchObj.RegistrationFromDate = this.getLocalDate(new Date(prevYear, 0, 1));
    //   this.searchObj.RegistrationToDate = this.getLocalDate(new Date(prevYear, 11, 31));
    // }
    else if (type === 'C') {
      const innerButton = this.fromdatebtn.el.shadowRoot.querySelector('button');
      if (innerButton) {
        innerButton.click();
      }
    }

    if(type !== 'C'){
      this.onSearchClick();
    }
  }

}
