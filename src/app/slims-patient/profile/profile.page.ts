import { Component, signal, viewChild } from '@angular/core';
import { SlimsPatientApplicationService } from '../../service/laboratory-service/lims-patientapp.service';
import { AuthService } from '../../service/shared-service/auth.service';
import { SharedService } from '../../service/shared-service/shared.service';
import { PatientModel } from '../../model/member.model';
import { KeyValueModel } from '../../model/keyValue.model';
import { distinctUntilChanged, map, merge, Observable, Subject, throttleTime } from 'rxjs';
import { IonContent, IonIcon, IonSegment, IonSegmentButton, IonLabel, IonSegmentView, IonSegmentContent, IonRow, IonCol, IonSelect, IonSelectOption, IonInput, IonModal, IonDatetime, IonDatetimeButton, IonButton, ActionSheetController, IonTextarea } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { ChangePasswordModel } from '../../model/change-password.model';
import { MemberAddressModel } from '../../model/member-address.model';
import { MapModalComponent } from "../../map/map.page";

@Component({
    selector: 'app-profile',
    templateUrl: 'profile.page.html',
    styleUrls: ['profile.page.scss'],
    standalone:true,
    imports: [IonTextarea, IonButton, IonDatetimeButton, IonModal, IonCol, IonRow, IonLabel, IonSegment, IonIcon, IonContent, FormsModule, IonInput, IonDatetime,
    IonSegmentView, IonSegmentButton, IonSegmentContent, IonSelect, IonSelectOption, MapModalComponent],
})

export class ProfilePage {

  constructor(public slimsPatientService: SlimsPatientApplicationService, public sharedService: SharedService, public authService: AuthService, private actionSheetCtrl: ActionSheetController) {}
  
  public isPasswordAvailable = false;
  public mobile = null;
  //public labCartPatientObj: PatientModel = new PatientModel();
  public cityList: Array<KeyValueModel> = [];
  public areaList: Array<KeyValueModel> = [];
  public filterAreaList: Array<KeyValueModel> = [];
  public genderList: Array<KeyValueModel> = [];
  public countryList: Array<KeyValueModel> = [];
  public countryCallingCodeList: Array<KeyValueModel> = [];
  public relationList = [];
  public titleList: any = [];
  public NationalityNo = null;
  public focusCountryCallingCode$ = new Subject<string>();
  public afterInit = signal(false);
  public selectedFileName: string;
  public FileNameDisplay = '';
  public isGenderReadOnly = false;
  public changePasswordObj: ChangePasswordModel = new ChangePasswordModel();
  public IsPInfoEdit = false;
  customFormatOptions = {
    date: {
      month: 'short',
      day: '2-digit',
      year : 'numeric'
    }
  };
  public searchMaxDate = new Date().toISOString().split('T')[0] ;
  familyMemberModal = viewChild<IonModal>("FamilyMemberModal");
  mapmodalPage = viewChild<MapModalComponent>("appModalPage");
  
  public labCartMemberObj: PatientModel = new PatientModel();
  public labCartMemberAddressObj: MemberAddressModel = new MemberAddressModel();
  familyAddressesModal = viewChild<IonModal>("FamilyAddressesModal");

  ngOnInit() {
    this.mobile = this.authService.authenticationModel.loginUserId;
    this.isPasswordAvailable = this.authService.authenticationModel.IsPasswordAvailable;
    this.getAllDD(this.mobile);
  }

  ngAfterViewInit(): void {
    this.afterInit.set(true);
  }

  segmentChanged(event){
    if(event && event.detail && event.detail.value){
      if(event.detail.value === 'default'){
        this.IsPInfoEdit = false;
    }
    else if(event.detail.value === 'members'){
      this.labCartMemberObj = new PatientModel();
    }
    else if(event.detail.value === 'address'){
    
    }
    else if(event.detail.value === 'security'){
      this.changePasswordObj =  new ChangePasswordModel();
    }
    
    }
  }

  onPEEdit(){
    this.IsPInfoEdit = true;
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
            // if(this.sharedService.labCartPatientObj.MemberList && this.sharedService.labCartPatientObj.MemberList.length > 0){
            //   let i = this.sharedService.labCartPatientObj.MemberList.findIndex(x=> x.PatientId = this.sharedService.labCartPatientObj.PatientId);
            //   if(i > -1){
            //     this.sharedService.labCartPatientObj.MemberList.splice(i,1);
            //     this.sharedService.labCartPatientObj.MemberList = Object.assign([], this.sharedService.labCartPatientObj.MemberList);
            //   }
            // }
            
          } else {
            this.sharedService.HandleAuthenticationError(response.Error);
          }
        }, (error: any) => {
          this.sharedService.isBusy = false;
        });
    }

  }





  
  public getAllDD(mobile = null): any {
    this.slimsPatientService.GetDDForLabCartProfile().subscribe(
      (response: any) => {
        if (response.IsSuccess) {
          this.genderList = Object.assign([], response.Success.Data.GENDER);
          this.areaList = Object.assign([], response.Success.Data.Area);
          this.cityList = Object.assign([], response.Success.Data.City);

          this.titleList = Object.assign([], response.Success.Data.Title);

          this.countryList = Object.assign([], response.Success.Data.Country)
          this.countryCallingCodeList = Object.assign([], response.Success.Data.CountryCallingCode)
          this.relationList = Object.assign([], response.Success.Data.RELATION);
          this.GetPatientData(this.mobile);
        } else {
          this.sharedService.HandleAuthenticationError(response.Error);
        }
      }, (error: any) => {
        // this.sharedService.isBusy = false;
      });
  }

  searchCountryCallingCode = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(throttleTime(200), distinctUntilChanged());
    const inputFocus$ = this.focusCountryCallingCode$;

    return merge(debouncedText$, inputFocus$).pipe(
      map(term => (term === '' ? this.countryCallingCodeList.map(t => t.Name)
        : this.countryCallingCodeList.filter(v => v.Name.toLowerCase().indexOf(term.toLowerCase()) > -1).map(t => t.Name)).slice(0, 5))
    );
  }



  public onCitySelectionChange(value: any): any {
    if (value != null) {
      this.filterAreaList = Object.assign([], this.areaList.filter(a => a.Value == value));
    } else {
      this.filterAreaList = [];
    }
  }

  public onNationalityChange(id) {
    if (id > 0) {
      var index = this.countryList.findIndex(x => x.Id == id);
      if (index > -1 && this.countryList[index] && this.countryList[index].Value) {
        this.NationalityNo = this.countryList[index].Value;
        return;
      }
    }
    this.NationalityNo = null;
  }
  public onTitleChange() {
    if (this.sharedService.labCartPatientObj.TitleId) {
      const selectedTitle = this.titleList.find(s => s.Id == this.sharedService.labCartPatientObj.TitleId);
      if (selectedTitle && selectedTitle.Value) {
        this.sharedService.labCartPatientObj.Gender = selectedTitle.Value;
        this.isGenderReadOnly = true;
      } else {
        this.isGenderReadOnly = false;
      }
    } else {
      this.isGenderReadOnly = false;
    }
  }



  onMemberCancel(){
    this.IsPInfoEdit = false;
  }

  public onSaveClick(): void {
    var tempPatienObj = new PatientModel();
    if (!this.sharedService.labCartPatientObj.isBirthDate) {


      if (!(Number(this.sharedService.labCartPatientObj.AgeYYY) > 0 || Number(this.sharedService.labCartPatientObj.AgeMM) > 0 || Number(this.sharedService.labCartPatientObj.AgeDD) > 0)) {
        this.sharedService.toastService.showError('Please enter Age.');
        return;
      } 
    } else {
      if (isNaN(Date.parse(this.sharedService.labCartPatientObj.BirthDate)) || new Date(this.sharedService.labCartPatientObj.BirthDate) > new Date(tempPatienObj.GetCurrentDateOnly())) {
        this.sharedService.toastService.showError('Birth Date is not valid');
        return;
      } 
    }
    this.sharedService.isBusy = true;
    if (this.sharedService.labCartPatientObj != null) {
      this.sharedService.labCartPatientObj.IsGeneratedFromLabCart = true;
      this.sharedService.labCartPatientObj.IsMembershipHolder = true;
      this.slimsPatientService.SaveLabCartPatient(this.sharedService.labCartPatientObj).subscribe(
        (response: any) => {
          this.sharedService.isBusy = false;
          if (response.IsSuccess) {
            this.sharedService.toastService.showSucess(response.Success.Message);
            var memberList = this.sharedService.labCartPatientObj.MemberList;
            this.sharedService.labCartPatientObj = new PatientModel(response.Success.Data);
            this.sharedService.labCartPatientObj.MemberList = Object.assign([], memberList);
            this.IsPInfoEdit = false;
          } else {
            this.sharedService.HandleAuthenticationError(response.Error);
          }
        },
        (err: any) => {
          this.sharedService.isBusy = false;
        });
    }
  }

  public onBirthdateChange(): void {
    if (this.sharedService.labCartPatientObj.BirthDate) {
        this.sharedService.labCartPatientObj.AgeYYY = null;
        this.sharedService.labCartPatientObj.AgeMM = null;
        this.sharedService.labCartPatientObj.AgeDD = null;
        const age: any = this.sharedService.generalService.getAge(this.sharedService.labCartPatientObj.BirthDate);
        if (Number(age.years) > 0) {
            this.sharedService.labCartPatientObj.AgeYYY = age.years;
            if (Number(age.years) < 5 && Number(age.years) > 0) {
                if (Number(age.months) > 0) {
                    this.sharedService.labCartPatientObj.AgeMM = age.months;
                }
            }
        } else if (Number(age.months) > 0) {
            this.sharedService.labCartPatientObj.AgeMM = age.months;
        } else if (Number(age.days) > 0) {
            this.sharedService.labCartPatientObj.AgeDD = age.days;
        } else {
            this.sharedService.labCartPatientObj.AgeDD = 0;
        }
    } 
}

//#region Member

onAddMemberAddClick(row = null){
  var mm = this.familyMemberModal();
  if(row && row.PatientId > 0){
    this.labCartMemberObj = new PatientModel(row);
  }
  else {
    this.labCartMemberObj = new PatientModel();
  }
  if(mm){
    mm.present();
  }
}

public onMemberBirthdateChange(): void {
    if (this.labCartMemberObj.BirthDate) {
        this.labCartMemberObj.AgeYYY = null;
        this.labCartMemberObj.AgeMM = null;
        this.labCartMemberObj.AgeDD = null;
        const age: any = this.sharedService.generalService.getAge(this.labCartMemberObj.BirthDate);
        if (Number(age.years) > 0) {
            this.labCartMemberObj.AgeYYY = age.years;
            if (Number(age.years) < 5 && Number(age.years) > 0) {
                if (Number(age.months) > 0) {
                    this.labCartMemberObj.AgeMM = age.months;
                }
            }
        } else if (Number(age.months) > 0) {
            this.labCartMemberObj.AgeMM = age.months;
        } else if (Number(age.days) > 0) {
            this.labCartMemberObj.AgeDD = age.days;
        } else {
            this.labCartMemberObj.AgeDD = 0;
        }
    } 
}

onMemberSaveClick(){
  this.labCartMemberObj.IsActive = true;
  if(this.sharedService.labCartPatientObj.MembershipId > 0){
    this.labCartMemberObj.MembershipId = this.sharedService.labCartPatientObj.MembershipId;
  }
  this.sharedService.isBusy = true;
  if (this.labCartMemberObj != null) {
    this.labCartMemberObj.IsMembershipHolder = false;
    this.labCartMemberObj.IsGeneratedFromLabCart = true;
      this.slimsPatientService.SaveLabCartPatient(this.labCartMemberObj).subscribe(
      (response: any) => {
        this.sharedService.isBusy = false;
        if (response.IsSuccess) {
          this.sharedService.toastService.showSucess(response.Success.Message);
          this.onMemberSave(response.Success.Data);
          this.labCartMemberObj = new PatientModel();
          this.onFamilyMemberCancel();
        } 
        else {
          this.sharedService.HandleAuthenticationError(response.Error);
        }
      },
      (err: any) => {
          this.sharedService.isBusy = false;
      });
  }
}

onMemberSave(memberData: PatientModel){
  if (memberData != null) {
    const index = this.sharedService.labCartPatientObj.MemberList.findIndex(s => s.PatientId === memberData.PatientId);
    if (index >= 0) {
      this.sharedService.labCartPatientObj.MemberList[index] = JSON.parse(JSON.stringify(memberData));
    } else {
      this.sharedService.labCartPatientObj.MemberList.push(JSON.parse(JSON.stringify(memberData)));
    }
    this.sharedService.labCartPatientObj.MemberList = Object.assign([], this.sharedService.labCartPatientObj.MemberList);
  }
}

onFamilyMemberCancel(){
  this.labCartMemberObj = new PatientModel();
  var mm = this.familyMemberModal();
  if(mm){
    mm.dismiss();
  }
}

async onDeleteMemberClick(row) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Are You Sure To Delete?',
      subHeader: '',
      mode : 'ios',
      buttons: [
        {
          text: 'Yes',
          role: 'destructive',
          data: {
            action: true,
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass : 'CancelClass',
          data: {
            action: false,
          },
        },
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    if (result && result.data && result.data.action && row && row.PatientId > 0){
      this.sharedService.isBusy = true;
      this.slimsPatientService.ChangeLabCartPatientStatus(row.PatientId, result.data.action).subscribe(
      (response: any) => {
        this.sharedService.isBusy = false;
        if (response.IsSuccess === true) {
          this.sharedService.toastService.showSucess(response.Success.Message);
          this.sharedService.labCartPatientObj.MemberList.splice(this.sharedService.labCartPatientObj.MemberList.findIndex(s => s.PatientId === row.PatientId), 1);
          this.sharedService.labCartPatientObj.MemberList = Object.assign([], this.sharedService.labCartPatientObj.MemberList);
        } else {
          this.sharedService.HandleAuthenticationError(response.Error);
        }
      }, (error: any) => {
        this.sharedService.isBusy = false;
      });
    }
  }

//#endregion Member

//#region Password
onchangePasswordCancel(){
  this.changePasswordObj =  new ChangePasswordModel();
}



onChangePasswordFormSubmit() {
  let methodName = "ChangeLabCartPassword"
 let  changePasswordObj = new ChangePasswordModel();
  changePasswordObj.UserId = this.authService.authenticationModel.loginUserId;
  if (this.sharedService.labCartPatientObj && this.sharedService.labCartPatientObj.Mobile && !this.isPasswordAvailable) {
    methodName = "SetLabCartPassword";
  } else {
    if(!this.changePasswordObj.CurrentPassword){
      this.sharedService.toastService.showError('Current Password is Required');
      return;
    }
    let CurrentPassword = this.changePasswordObj.CurrentPassword;
    changePasswordObj.CurrentPassword = this.sharedService.generalService.cngpstr(CurrentPassword, this.changePasswordObj.UserId);
  }

  if(!this.changePasswordObj.NewPassword){
    this.sharedService.toastService.showError('New Password is Required');
    return;
  }
  if(!this.changePasswordObj.ConfirmPassword){
    this.sharedService.toastService.showError('Confirm Password is Required');
    return;
  }
  if(this.changePasswordObj.NewPassword == this.changePasswordObj.CurrentPassword && this.isPasswordAvailable){
    this.sharedService.toastService.showError('New Password is same as old Password');
    return;
  }
  if(this.changePasswordObj.NewPassword !=  this.changePasswordObj.ConfirmPassword){
    this.sharedService.toastService.showError('Confirm Password does not match New Password');
    return;
  }

 
  this.sharedService.isBusy = true;
  let NewPassword = this.changePasswordObj.NewPassword;
  let ConfirmPassword = this.changePasswordObj.ConfirmPassword;
  this.changePasswordObj.NewPassword = this.sharedService.generalService.cngpstr(NewPassword, this.changePasswordObj.UserId);
  this.changePasswordObj.ConfirmPassword = this.sharedService.generalService.cngpstr(ConfirmPassword, this.changePasswordObj.UserId);

  this.slimsPatientService[methodName](this.changePasswordObj).subscribe(
    (response: any) => {
      this.sharedService.isBusy = false;
      if (response.IsSuccess) {
        this.sharedService.toastService.showSucess(response.Success.Message);
        this.authService.userLogout();
      } else {
        this.sharedService.HandleAuthenticationError(response.Error);
      }
    },
    (err: any) => {
      this.sharedService.isBusy = false;
    });
}


//#endregion Password

//#region address

onAddressAddClick(row = null){
  var mm = this.familyAddressesModal();
  if(row && row.MemberAddressId > 0){
    this.labCartMemberAddressObj = new MemberAddressModel(row);
    this.onCityChange();
  }
  else {
    this.labCartMemberAddressObj = new MemberAddressModel();
  }
  if(mm){
    mm.present();
  }
}

onAddressCancel(){
  this.labCartMemberAddressObj = new MemberAddressModel();
  var mm = this.familyAddressesModal();
  if(mm){
    mm.dismiss();
  }
}

onAddressSaveClick(){
  if (this.labCartMemberAddressObj != null) {
    this.sharedService.isBusy = true;
    this.labCartMemberAddressObj.MembershipId = this.sharedService.labCartPatientObj.MembershipId;
    this.slimsPatientService.SaveLabCartMemberAddress(this.labCartMemberAddressObj).subscribe(
    (response: any) => {
      this.sharedService.isBusy = false;
      if (response.IsSuccess) {
        this.sharedService.toastService.showSucess(response.Success.Message);
        this.onMemberAddressSave(response.Success.Data);
        this.labCartMemberAddressObj = new MemberAddressModel();
        this.onAddressCancel();
      } else {
        this.sharedService.HandleAuthenticationError(response.Error);
      }
    },
    (err: any) => {
      this.sharedService.isBusy = false;
    });
  }
}

public onMemberAddressSave(memberAddress: MemberAddressModel) {
  if (memberAddress != null) {
    const index = this.sharedService.labCartPatientObj.MemberAddressList.findIndex(s => s.MemberAddressId === memberAddress.MemberAddressId);
    if (index >= 0) {
      this.sharedService.labCartPatientObj.MemberAddressList[index] = JSON.parse(JSON.stringify(memberAddress));
    } else {
      this.sharedService.labCartPatientObj.MemberAddressList.push(JSON.parse(JSON.stringify(memberAddress)));
    }
    this.sharedService.labCartPatientObj.MemberAddressList = Object.assign([], this.sharedService.labCartPatientObj.MemberAddressList);
  }
}

public onCityChange(): any {
  if (this.labCartMemberAddressObj.CityId != null) {
    this.filterAreaList = Object.assign([], this.areaList.filter(a => a.Value == this.labCartMemberAddressObj.CityId));
  } else {
    this.filterAreaList = Object.assign([], this.areaList);
  }
}

async onDeleteAddress(row){
  const actionSheetAddress = await this.actionSheetCtrl.create({
      header: 'Are You Sure To Delete?',
      subHeader: '',
      mode : 'ios',
      buttons: [
        {
          text: 'Yes',
          role: 'destructive',
          data: {
            action: true,
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass : 'CancelClass',
          data: {
            action: false,
          },
        },
      ],
  });

  await actionSheetAddress.present();

  const result = await actionSheetAddress.onDidDismiss();
  if (result && result.data && result.data.action && row && row.MemberAddressId > 0){
    this.sharedService.isBusy = true;
    this.slimsPatientService.DeleteLabCartMemberAddress(row.MemberAddressId, result.data.action).subscribe(
    (response: any) => {
      this.sharedService.isBusy = false;
      if (response.IsSuccess === true) {
        this.sharedService.toastService.showSucess(response.Success.Message);
        this.sharedService.labCartPatientObj.MemberAddressList.splice(this.sharedService.labCartPatientObj.MemberAddressList.findIndex(s => s.MemberAddressId === row.MemberAddressId), 1);
        this.sharedService.labCartPatientObj.MemberAddressList = Object.assign([], this.sharedService.labCartPatientObj.MemberAddressList);
      } else {
        this.sharedService.HandleAuthenticationError(response.Error);
      }
    }, (error: any) => {
      this.sharedService.isBusy = false;
    });
  }
    
}


onMapIconClick(){
  var mm = this.mapmodalPage();
  if(mm){
    mm.openMapModal();
    mm.openMapModalwithData({latitude : this.labCartMemberAddressObj.Latitude, longitude : this.labCartMemberAddressObj.Longitude });
  }
}

onMapSelectedEvent(data){
if(data && data.coordinate && data.coordinate.lat, data.coordinate.lng){
  this.labCartMemberAddressObj.Latitude = data.coordinate.lat;
  this.labCartMemberAddressObj.Longitude = data.coordinate.lng;

}
}

//#endregion address 
 
}
