import { LocationStrategy } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, viewChild, ViewChild } from '@angular/core';
import { IonTabButton, IonIcon, IonLabel, IonTabBar, IonTabs, IonModal, IonContent, IonButton, IonHeader, IonToolbar, IonButtons, IonTitle, IonList, IonItem, ActionSheetController, IonRouterOutlet, IonTab, IonBadge, IonCol, IonRow, IonSelect, IonSelectOption } from "@ionic/angular/standalone";
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { SharedService } from '../service/shared-service/shared.service';
import { filter, map } from 'rxjs';
import { MapModalComponent } from '../map/map.page';
import { SlimsPatientApplicationService } from '../service/laboratory-service/lims-patientapp.service';
import { CartService } from '../service/shared-service/cart.service';
import { CallNumber } from '@droponio/capacitor-call-number';
import { AppLauncher } from "@capacitor/app-launcher";
import { InAppBrowser } from "@capacitor/inappbrowser";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-slims-patient',
    templateUrl: 'slims-patient.page.html',
    styleUrls: ['slims-patient.page.scss'],
    standalone : true,
    imports: [IonRow, IonCol, IonRouterOutlet, IonItem, IonList, IonTitle, IonButtons, IonToolbar, IonHeader, IonButton, IonContent, IonModal, IonTabButton, IonIcon, IonLabel, IonTabBar, MapModalComponent, IonBadge, IonSelect, IonSelectOption, FormsModule],
    
})

export class SlimsPatientComponent {

  public isDisplayBackButton = false;
  optionsModal = viewChild<IonModal>("optionsModal");
  branchlistModal = viewChild<IonModal>("branchlistModal");
  branchList = [];
  allBranchList = [];
  cityList = [];
  latitude = null;
  longitude = null;
  public cityId: number = 0;
  public title = 'LIMS Patient';

   mapmodalPage = viewChild<MapModalComponent>("appModalPage");
  constructor(public locationStrategy : LocationStrategy, private actionSheetCtrl: ActionSheetController, public router: Router, public cartservice : CartService,
    public sharedService: SharedService, private activatedRoute: ActivatedRoute,public slimsPatientAppService : SlimsPatientApplicationService) 
  {
    
    
  }

  async ngOnInit(){
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
       // debugger
        let activeRoute = this.activatedRoute.root;
        while (activeRoute.firstChild) { activeRoute = activeRoute.firstChild; }
        return activeRoute.snapshot.data // Or activeRoute.snapshot.data['title'] for older apps
      })
    ).subscribe((data) => {
      if (data && data['title']) {
        this.title = data['title'];
      }else{
        this.title  = 'SLIMS';
      }
      if(data && data['isShowBackButton']){
        this.isDisplayBackButton = data['isShowBackButton'];
      }else{
        this.isDisplayBackButton = false;
      }
    });
    this.GetPatientAppConfiguration();
  }

  openOptionsModal(){
    var fm = this.optionsModal();
    if(fm){
      fm.present();
    }
  }

  closeOptionsModal() {
    var fm = this.optionsModal();
    if(fm){
      fm.dismiss();
    }
  }

  openbrModal(){
    var fm = this.branchlistModal();
    if(fm){
      fm.present();
    }
  }

  closebrModal() {
    var fm = this.branchlistModal();
    if(fm){
      fm.dismiss();
    }
  }


  onBackClick(){
    this.locationStrategy.back();
  }

  onNavClick(path){
    this.router.navigate([path]);
  }
  
  oncartClick(){
    this.router.navigate(['/lims-patient/cart']);
  }

  async onClickLogOut(){
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Are You Sure To Logout?',
      subHeader: '',
      mode : 'ios',
      buttons: [
        {
          text: 'Logout',
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
    if(result && result.data && result.data.action){
      this.closeOptionsModal();
      this.sharedService.authService.userLogout();
    }
  }


  // onnearbyLabClick(){
  //   var mm = this.mapmodalPage();
  //   if(mm){
  //     mm.openMapModal();
  //     mm.openMapModalwithData();
  //   }
  // }

    GetPatientAppConfiguration(){
      //this.sharedService.isBusy = true;
      this.slimsPatientAppService.GetPatientAppConfiguration().subscribe(
        (response: any) => {
    // this.sharedService.isBusy = false;
          if (response.IsSuccess) {
            if(response.Success.Data){
              this.sharedService.SetPatientConfig(response.Success.Data);
            }
          } 
          else 
          {
            this.sharedService.HandleAuthenticationError(response.Error);
          }
        }, (error: any) => {
          this.sharedService.isBusy = false;
        });
  }

  onbrModalClose(){
    this.cityId = null;
  }


  onnearbyLabClick(){
    this.branchList = []; 
    this.sharedService.GetGeoLocation().then((location) => {
      this.sharedService.isBusy = false;
      if (location && location.coords && location.coords.latitude && location.coords.longitude) {
        this.latitude  =  location.coords.latitude;
        this.longitude = location.coords.longitude;
        this.GetNearByBranchLocations(location.coords.latitude,location.coords.longitude);
      } else {
        //this.sharedService.toastService.showError('Unable To Get your Current Location');
        //return;
        this.GetAllNearByBranchLocations();
      }
    }).catch((reject)=>{
      this.sharedService.isBusy = false;
      // this.sharedService.toastService.showError(reject);
      this.GetAllNearByBranchLocations();
    }).finally(()=>{
      this.sharedService.isBusy = false;
    });
  }

  GetNearByBranchLocations(Latitude, Longitude) {
    this.sharedService.isBusy = true;
    this.slimsPatientAppService.GetNearByBranchLocations(Latitude, Longitude).subscribe(
      (response: any) => {
        this.sharedService.isBusy = false;
        if (response.IsSuccess) {
          if (response.Success.Data && response.Success.Data.length > 0) {
            this.branchList = Object.assign([], response.Success.Data);
            this.closeOptionsModal();
            this.openbrModal();
          } else {
            this.sharedService.toastService.showInfo("No Nearby Branch at your location");
            this.GetAllNearByBranchLocations();
          }
        }
        else {
          this.GetAllNearByBranchLocations();
          //this.sharedService.HandleAuthenticationError(response.Error);
        }
      }, (error: any) => {
        this.sharedService.isBusy = false;
      });
  }

  GetAllNearByBranchLocations() {
    this.cityList = [];
    this.allBranchList  = [];
    this.sharedService.isBusy = true;
    this.slimsPatientAppService.GetAllNearByBranchLocations().subscribe(
      (response: any) => {
        this.sharedService.isBusy = false;
        if (response.IsSuccess) {
          if (response.Success.Data && response.Success.Data.length > 0) {
            this.allBranchList = Object.assign([], response.Success.Data);

            this.allBranchList.forEach(x => {
              if (this.cityList == null || this.cityList.length <= 0 || !(this.cityList.some(xx => xx.Id == x.CityId))) {
                var obj = {
                  Id: x.CityId,
                  Name: x.CityName
                }
                this.cityList.push(obj);
              }
            });
            this.closeOptionsModal();
            this.openbrModal();
          } else {
            this.sharedService.toastService.showInfo("No Nearby Branch at the moment");
          }
        }
        else {
          this.sharedService.HandleAuthenticationError(response.Error);
        }
      }, (error: any) => {
        this.sharedService.isBusy = false;
      });
  }

  onCityChange() {
    this.branchList = [];
    if (this.cityId > 0) {
      this.branchList = this.allBranchList.filter(x => x.CityId == this.cityId);
    }
  }

  onNavigateClick(branch){
    if(branch.Latitude && branch.Longitude){
      this.NavigateToLocation(this.latitude,this.longitude,branch.Latitude,branch.Longitude);
    }else {
      this.sharedService.toastService.showError('Branch Location Not available.');
    }
  }

  async onCallnow(branch){
    if(branch.ContactNo){
      await CallNumber.call({
        number: branch.ContactNo,
        bypassAppChooser: true,
      }).then(
        (res) => {
          //this.successMessage = res.message;
        },
        (err) => {
         // this.errorMessage = err;
        }
      );
    }else {
      this.sharedService.toastService.showError('No phone number available.');
    }
  }

  async NavigateToLocation(slatitude, slongitude,latitude, longitude) {
    if (latitude && longitude) {
      let  canOpen : any  = false;
      let path   = `https://www.google.com/maps/dir/${slatitude},${slongitude}/${latitude},${longitude}`;
 
      if(this.sharedService.platform == 'ios'){
          path = `http://maps.apple.com/?saddr=${slatitude},${slongitude}&daddr=${latitude},${longitude}&z=10&dirflg=d`;
        }
        canOpen = (await AppLauncher.canOpenUrl({ url: path })).value;
      if(canOpen){
        await AppLauncher.openUrl({ url: path });
      }else{
                    
        var Options : any = {};
        Options.showURL = false;
        Options.closeButtonText	= 'Close' ;
        Options.iOS = {};
        Options.android = {};
        Options.iOS.viewStyle = 2;
        Options.android.hardwareBack = true;
        await InAppBrowser.openInWebView({ url: path,options :  Options,});
  
      }

    
    };

  }

}
