import { LocationStrategy } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, viewChild, ViewChild } from '@angular/core';
import { IonTabButton, IonIcon, IonLabel, IonTabBar, IonTabs, IonModal, IonContent, IonButton, IonHeader, IonToolbar, IonButtons, IonTitle, IonList, IonItem, ActionSheetController, IonRouterOutlet, IonTab, IonBadge } from "@ionic/angular/standalone";
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { SharedService } from '../service/shared-service/shared.service';
import { filter, map } from 'rxjs';
import { MapModalComponent } from '../map/map.page';
import { SlimsPatientApplicationService } from '../service/laboratory-service/lims-patientapp.service';
import { CartService } from '../service/shared-service/cart.service';


@Component({
    selector: 'app-slims-patient',
    templateUrl: 'slims-patient.page.html',
    styleUrls: ['slims-patient.page.scss'],
    standalone : true,
    imports: [IonRouterOutlet, IonItem, IonList, IonTitle, IonButtons, IonToolbar, IonHeader, IonButton, IonContent, IonModal, IonTabButton, IonIcon, IonLabel, IonTabBar, MapModalComponent, IonBadge],
    
})

export class SlimsPatientComponent {

  public isDisplayBackButton = false;
  optionsModal = viewChild<IonModal>("optionsModal");
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


  onnearbyLabClick(){
    var mm = this.mapmodalPage();
    if(mm){
      mm.openMapModal();
      mm.openMapModalwithData();
    }
  }
}
