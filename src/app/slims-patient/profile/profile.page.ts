import { Component, signal } from '@angular/core';
import { SlimsPatientApplicationService } from '../../service/laboratory-service/lims-patientapp.service';
import { AuthService } from '../../service/shared-service/auth.service';
import { SharedService } from '../../service/shared-service/shared.service';
import { PatientModel } from '../../model/member.model';
import { KeyValueModel } from '../../model/keyValue.model';
import { distinctUntilChanged, map, merge, Observable, Subject, throttleTime } from 'rxjs';
import { IonContent, IonIcon, IonSegment, IonSegmentButton, IonLabel, IonSegmentView, IonSegmentContent, IonRow, IonCol, IonSelect, IonSelectOption, IonInput, IonModal, IonDatetime, IonDatetimeButton, IonButton } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { ChangePasswordModel } from '../../model/change-password.model';

@Component({
    selector: 'app-profile',
    templateUrl: 'profile.page.html',
    styleUrls: ['profile.page.scss'],
    standalone:true,
    imports: [IonButton, IonDatetimeButton, IonModal, IonCol, IonRow, IonLabel, IonSegment, IonIcon, IonContent, FormsModule,IonInput,IonDatetime,
      IonSegmentView, IonSegmentButton, IonSegmentContent, IonSelect, IonSelectOption],
})

export class ProfilePage {

  constructor(public slimsPatientService: SlimsPatientApplicationService, public sharedService: SharedService, public authService: AuthService) {}
  
  public isPasswordAvailable = false;
  public mobile = null;
  public labCartPatientObj: PatientModel = new PatientModel();
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
            // if(this.labCartPatientObj.MemberList && this.labCartPatientObj.MemberList.length > 0){
            //   let i = this.labCartPatientObj.MemberList.findIndex(x=> x.PatientId = this.labCartPatientObj.PatientId);
            //   if(i > -1){
            //     this.labCartPatientObj.MemberList.splice(i,1);
            //     this.labCartPatientObj.MemberList = Object.assign([], this.labCartPatientObj.MemberList);
            //   }
            // }
            //this.mainMemberEdit.setPatientObj(this.labCartPatientObj);
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
    if (this.labCartPatientObj.TitleId) {
      const selectedTitle = this.titleList.find(s => s.Id == this.labCartPatientObj.TitleId);
      if (selectedTitle && selectedTitle.Value) {
        this.labCartPatientObj.Gender = selectedTitle.Value;
        this.isGenderReadOnly = true;
      } else {
        this.isGenderReadOnly = false;
      }
    } else {
      this.isGenderReadOnly = false;
    }
  }


  public cancel(): void {
    this.filterAreaList = [];

    this.selectedFileName = '';
    this.FileNameDisplay = '';
    this.labCartPatientObj = new PatientModel();

    this.NationalityNo = null;
  }

  onMemberCancel(){
    this.IsPInfoEdit = false;
  }

  public onSaveClick(): void {
    var tempPatienObj = new PatientModel();
    if (!this.labCartPatientObj.isBirthDate) {


      if (!(Number(this.labCartPatientObj.AgeYYY) > 0 || Number(this.labCartPatientObj.AgeMM) > 0 || Number(this.labCartPatientObj.AgeDD) > 0)) {
        this.sharedService.toastService.showError('Please enter Age.');
        return;
      } 
    } else {
      if (isNaN(Date.parse(this.labCartPatientObj.BirthDate)) || new Date(this.labCartPatientObj.BirthDate) > new Date(tempPatienObj.GetCurrentDateOnly())) {
        this.sharedService.toastService.showError('Birth Date is not valid');
        return;
      } 
    }
    this.sharedService.isBusy = true;
    if (this.labCartPatientObj != null) {
      this.slimsPatientService.SaveLabCartPatient(this.labCartPatientObj).subscribe(
        (response: any) => {
          this.sharedService.isBusy = false;
          if (response.IsSuccess) {
            this.sharedService.toastService.showSucess(response.Success.Message);
            this.labCartPatientObj = new PatientModel(response.Success.Data);
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
    if (this.labCartPatientObj.BirthDate) {
        this.labCartPatientObj.AgeYYY = null;
        this.labCartPatientObj.AgeMM = null;
        this.labCartPatientObj.AgeDD = null;
        const age: any = this.sharedService.generalService.getAge(this.labCartPatientObj.BirthDate);
        if (Number(age.years) > 0) {
            this.labCartPatientObj.AgeYYY = age.years;
            if (Number(age.years) < 5 && Number(age.years) > 0) {
                if (Number(age.months) > 0) {
                    this.labCartPatientObj.AgeMM = age.months;
                }
            }
        } else if (Number(age.months) > 0) {
            this.labCartPatientObj.AgeMM = age.months;
        } else if (Number(age.days) > 0) {
            this.labCartPatientObj.AgeDD = age.days;
        } else {
            this.labCartPatientObj.AgeDD = 0;
        }
    } 
}

//#region Member

onAddMemberAddClick(){

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
  if (this.labCartPatientObj && this.labCartPatientObj.Mobile && !this.isPasswordAvailable) {
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
onAddressAddClick(){

}

//#endregion address 
 
}
