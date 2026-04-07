import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { IonContent, IonButton, IonRadio, IonRadioGroup, IonRow, IonCol, IonTextarea, IonSelect, IonSelectOption, IonDatetimeButton, IonModal, IonDatetime, IonButtons, IonCard, IonIcon } from "@ionic/angular/standalone";
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
import { VisitModel } from 'src/app/model/visit.model';
import { VisitPatientDetailModel } from 'src/app/model/visit-patient-detail.model';
import { CameraSource } from '@capacitor/camera';
import { ScanDocumentDetailsModel } from 'src/app/model/scan-document-details';
import { Enumeration } from 'src/app/service/shared-service/others/enumeration';
import { ScanDocumentModel } from 'src/app/model/scan-document.model';

@Component({
  selector: 'app-checkout',
  templateUrl: 'checkout.page.html',
  styleUrls: ['checkout.page.scss'],
  standalone: true,
  imports: [IonIcon, IonCard, IonContent, IonButton, IonRadio, IonRadioGroup, IonRow, IonCol, CommonModule, FormsModule, IonTextarea, IonSelect, IonSelectOption, IonDatetimeButton, IonModal, IonDatetime, IonButtons],
})

export class CheckoutPage {

  public CartItemList$: Observable<any[]>;


  constructor(public slimsPatientService: SlimsPatientApplicationService, public sharedService: SharedService, public router: Router,
    public authService: AuthService, public cartService: CartService,private actionSheetController: ActionSheetController) {
    this.CartItemList$ = this.cartService.cartItemList$;
  }

  public selectedOption;
  public mobile = null;
  public SelectedMember = new PatientModel();
  public SelectedMemberAddress = new MemberAddressModel();
  public popular_packages = popular_packages;
  public visitObj = new VisitModel();
  public areaList = [];
  public cityList = [];
  public filterBranchList = [];
  public branchList = [];
  public filterAreaList = [];
  public isDDLoaded = false;
  public collectionDate;
  public collectionTime;
  customFormatOptions = {
    date: {
      year: 'numeric',
      month: 'short',
      day: '2-digit'
    }
  };
  customTimeFormatOptions = {
    time: {
      hour: '2-digit',
      minute: '2-digit'
    }
  }
  public ScanDetails: any[];
  public selectedPanelId: any;
  public IsTrfAddAllow = true;

  ngOnInit() {
    this.mobile = this.authService.authenticationModel.loginUserId;
    this.GetPatientData(this.mobile);
    this.GetDDForVisitBooking();
    this.GetTRFDetails() 
  }

  onPlaceOrderClick() {

  }


  ionViewDidEnter() {
    this.setdeafult();
  }

  setdeafult() {
    if (this.sharedService.labCartPatientObj.MemberList && this.sharedService.labCartPatientObj.MemberList.length > 0) {
      let i = this.sharedService.labCartPatientObj.MemberList.findIndex(x => x.PatientId = this.sharedService.labCartPatientObj.PatientId);
      if (i > -1) {
        this.SelectedMember = this.sharedService.labCartPatientObj.MemberList[i];
      } else {
        this.SelectedMember = this.sharedService.labCartPatientObj.MemberList[0];
      }
      this.patientAddInVisitPatientDetails(this.SelectedMember);
    }

    if (this.sharedService.labCartPatientObj.MemberAddressList && this.sharedService.labCartPatientObj.MemberAddressList.length > 0) {
      let i = this.sharedService.labCartPatientObj.MemberAddressList.findIndex(x => x.MembershipId = this.sharedService.labCartPatientObj.MembershipId);
      if (i > -1) {
        this.SelectedMemberAddress = this.sharedService.labCartPatientObj.MemberAddressList[i];
      } else {
        this.SelectedMemberAddress = this.sharedService.labCartPatientObj.MemberAddressList[0];
      }
      this.addressChange(this.SelectedMemberAddress);
    }
  }


  public GetPatientData(mobile = null): any {
    if (mobile != null && mobile != '') {
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





  openProfilePage() {
    this.router.navigate(['/lims-patient/profile']);
  }

  patientChange(event) {
    if (event && event.detail && event.detail.value) {
      var patientData;
      if (this.sharedService.labCartPatientObj.PatientId == event.detail.value.PatientId) {
        patientData = this.sharedService.labCartPatientObj;
      }
      else {
        patientData = this.sharedService.labCartPatientObj.MemberList.find(x => x.PatientId == event.detail.value.PatientId);
      }
      this.visitObj.VisitBookedBy = patientData.FirstName + ' ' + patientData.LastName;
      this.patientAddInVisitPatientDetails(patientData);
    }
  }

  public GetDDForVisitBooking() {
    this.sharedService.isBusy = true;
    this.slimsPatientService.GetDDForLabCartVisitBooking().subscribe(
      (response: any) => {
        this.sharedService.isBusy = false;
        if (response.IsSuccess) {
          this.branchList = Object.assign([], response.Success.Data.BranchList);
          this.cityList = Object.assign([], response.Success.Data.CityList);
          this.areaList = Object.assign([], response.Success.Data.AreaList);
          this.filterAreaList = Object.assign([], this.areaList);
          this.isDDLoaded = true;
          if (this.visitObj.CityId > 0){
            this.onCitySelectionChange(this.visitObj.CityId);
          }
        }
        else {
          this.sharedService.HandleAuthenticationError(response.Error);
        }
      }, (error: any) => {
        this.sharedService.isBusy = false;
      });
  }

  public onCitySelectionChange(cityId: any): any {
    this.filterBranchList = this.branchList.filter(x => x.Value == cityId);
    this.filterAreaList = Number(cityId > 0) ? this.areaList.filter(a => a.Value == cityId) : [];
    if (this.filterBranchList.length == 1) {
      this.visitObj.BranchId = this.filterBranchList[0].Id;
    }
    this.onAreaSelectionChange(this.visitObj.AreaId);
    this.onBranchSelectionChange(this.visitObj.BranchId);
  }

  public onAreaSelectionChange(AreaID: any): any {
    if (this.filterAreaList && this.filterAreaList.length > 0) {
      var areaDetail = this.filterAreaList.find(a => a.Id == AreaID);
      if (areaDetail) {
        this.visitObj.VisitAmount = parseInt(areaDetail.Value1);
      }
      else {
        this.visitObj.VisitAmount = 0;
      }
    } else {
      this.visitObj.AreaId = 0;
    }
  }

  public onBranchSelectionChange(branchId) {
    if (!(this.filterBranchList && this.filterBranchList.length > 0)) {
      this.visitObj.BranchId = 0;
    }
  }

  addressChange(memberAddress: any){
    this.visitObj.Address = memberAddress.Address;
    // this.visitObj.CityId = memberAddress.CityId;
    // this.visitObj.AreaId = memberAddress.AreaId;
    if (this.visitObj.CityId > 0){
      this.onCitySelectionChange(this.visitObj.CityId);
    }
  }

  patientAddInVisitPatientDetails(patient: any) {
    this.visitObj.VisitPatientDetails = [];
    if (!this.visitObj.VisitBookedBy && this.visitObj.VisitBookedBy.trim() == "") {
      this.visitObj.VisitBookedBy = patient.FirstName + ' ' + patient.LastName;
    }
    if (!this.visitObj.MobileNo && this.visitObj.MobileNo.trim() == "") {
      this.visitObj.MobileNo = patient.Mobile;
    }
    if (this.visitObj.VisitPatientDetails.findIndex(s => s.PatientId == patient.PatientId) == -1) {
      let visitPatientObj: VisitPatientDetailModel = new VisitPatientDetailModel(patient);
      visitPatientObj.VisitId = 0;
      this.visitObj.VisitPatientDetails.push(visitPatientObj);
    } else {
      this.sharedService.toastService.showError('Patient Already Exist');
    }
  }

  SavePatientVisit() {
    if (this.visitObj.CityId <= 0){
      this.sharedService.toastService.showError("select city for a Visit.");
      return;
    }
    if (this.visitObj.AreaId <= 0){
      this.sharedService.toastService.showError("select area for a Visit.");
      return;
    }
    if (this.visitObj.BranchId <= 0){
      this.sharedService.toastService.showError("select branch for a Visit.");
      return;
    }
    if (this.visitObj.VisitPatientDetails.length <= 0) {
      this.sharedService.toastService.showError("Atleast one Patient should be available for a Visit.");
      return;
    }
    if (this.visitObj.VisitId <= 0) {
      var todayDate = new Date().toJSON();
      if (this.collectionDate && this.collectionDate.split('T')[0] && this.collectionTime && this.collectionTime.split('T')[1]){
        this.visitObj.CollectionDateTime = this.collectionDate.split('T')[0]   + 'T' + this.collectionTime.split('T')[1] + '.00';
        if (this.visitObj.CollectionDateTime != "" && this.visitObj.CollectionDateTime != null && this.visitObj.CollectionDateTime < todayDate) {
          this.sharedService.toastService.showError("Visit Date should be greater than today's date.");
          return;
        }
      }
      else{
        this.sharedService.toastService.showError("Select visit date and time for a Visit.");
        return;
      }
    }
    this.sharedService.isBusy = true;
    if (this.visitObj != null) {
      this.slimsPatientService.SaveLabCartVisitForPatient(this.visitObj).subscribe(
        (response: any) => {
          this.sharedService.isBusy = false;
          if (response.IsSuccess) {
            this.sharedService.toastService.showSucess(response.Success.Message);
            // this.visitObj = new VisitModel(response.Success.Data);
            // this.isSuccessfullyVisitBooked = true;
            // this.isFormSubmited = false;
            // this.setNextClick();
          } else {
            this.sharedService.HandleAuthenticationError(response.Error);
          }
        },
        (err: any) => {
          this.sharedService.isBusy = false;
        });
    }
  }

  async openFileSelectionOptions() {
    debugger
    if (!this.IsTrfAddAllow) {
      this.sharedService.toastService.showError('TRF Attachment not Allowed');
      return;
    }
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Source',
      mode : 'ios',
      buttons: [
        {
          text: 'Take Photo',
          icon: 'camera',
          handler: async () => {
            const photo = await this.sharedService.selectImage(CameraSource.Camera);
            if (photo) {
              // Handle the selected photo
              this.saveImage(photo);
            }
          }
        },
        {
          text: 'Choose from Gallery',
          icon: 'images',
          handler: async () => {
            const photo = await this.sharedService.selectImage(CameraSource.Photos);
            if (photo) {
              // Handle the selected photo
              this.saveImage(photo);
            }
          }
        },
        // {
        //   text: 'Select File',
        //   icon: 'document',
        //   handler: async () => {
        //     const file = await this.sharedService.SelectFile(['image/*']);
        //     if (file) {
        //       this.saveDocument(file);
        //       // Handle the selected file
        //     }
        //   }  
        // },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel'
        }
      ]
    });
    await actionSheet.present();
  }

  public imageBase64String = null;
  saveImage(base64String = null) {

    this.imageBase64String = base64String;
    var arr = base64String != null ? this.sharedService.Base64ToByteArray(base64String) : null;
    if (this.visitObj.VisitPatientDetails && this.visitObj.VisitPatientDetails.length > 0){
      this.visitObj.VisitPatientDetails.forEach(element => {
        element.ScanDocumentDetails = [];
        var scanDocumentObj = new ScanDocumentDetailsModel();
        scanDocumentObj.ScanDocumentId = this.selectedPanelId;
        scanDocumentObj.TRFPicture = arr;
        scanDocumentObj.ScanAt = Enumeration.RegistrationDocumentTRFType.Visit;
        element.ScanDocumentDetails.push(scanDocumentObj);
      });
    }
  }

  removeImage(){
    this.imageBase64String = null;
    if (this.visitObj.VisitPatientDetails && this.visitObj.VisitPatientDetails.length > 0){
      this.visitObj.VisitPatientDetails.forEach(element => {
        element.ScanDocumentDetails = [];
      });
    }
  }

  public GetTRFDetails() {
    this.ScanDetails = [];
    this.sharedService.isBusy = true;
    this.slimsPatientService.GetLabCartTRFDetails().subscribe(
      (response: any) => {
        this.sharedService.isBusy = false;
        if (response.IsSuccess) {
          this.ScanDetails = [];
          if (response.Success.Data !== null && response.Success.Data !== '' && response.Success.Data.length > 0) {
            for (var i = 0; i < response.Success.Data.length; i++) {
              if (response.Success.Data[i].IsTRF == true) {
                this.ScanDetails.push(new ScanDocumentModel(response.Success.Data[i]));
                this.selectedPanelId = response.Success.Data[i].ScanDocumentId;
              }
            }
            if (!(this.ScanDetails.length > 0)) {
              this.IsTrfAddAllow = false;
              this.sharedService.toastService.showError('TRF Attachment not Allowed');
              return;
            }
          }
        }
      },
      (err: any) => {
        this.sharedService.isBusy = false;
      });
  }
}
