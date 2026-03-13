import { Component } from '@angular/core';
import { IonApp,  IonRouterOutlet, Platform } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import * as allicons from "ionicons/icons";
import { Capacitor } from '@capacitor/core';
import { SafeArea } from 'capacitor-plugin-safe-area';
import { LoaderComponent } from "./loader/loader.component";
import { SharedService } from './service/shared-service/shared.service';
import { Preferences } from '@capacitor/preferences';
import { SlimsPatientApplicationService } from './service/laboratory-service/lims-patientapp.service';
import { Location } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    standalone: true,
    imports: [IonApp, IonRouterOutlet, LoaderComponent],
})
export class AppComponent {

  public isPaused = true;


  constructor(public sharedService : SharedService,public location: Location,
    public slimspatientService : SlimsPatientApplicationService,public platform: Platform,) {
    addIcons(allicons);
    if (
      Capacitor.getPlatform() === 'android' ||
      Capacitor.getPlatform() === 'ios'
    ) {
      SafeArea.getSafeAreaInsets().then((data) => {
        const { insets } = data;
        console.log('Safe Area Insets:', insets);
        let root: any = document.querySelector(':root');
        root.style.setProperty('--ion-custom-safe-area-top', `${insets.top}px`);
        root.style.setProperty('--ion-custom-safe-area-bottom',`${insets.bottom}px`);
        root.style.setProperty('--ion-safe-area-top', `${insets.top}px`);
        root.style.setProperty('--ion-safe-area-bottom',`${insets.bottom}px`);
      });
    }
    Preferences.get({ key: 'APIURL' }).then((res)=>{
      if (res.value) {
         this.slimspatientService.baseService.apiEndPoint = res.value;
      }
      });
      this.initializeApp();
  }

  async initializeApp() {
    this.isPaused = false;
    this.platform.backButton.subscribeWithPriority(10, () => {
      // console.log('Handler was called!');
      // this.route.url;
      // this.router;
      if (!this.isPaused) {
        debugger
        if (this.location.isCurrentPathEqualTo('/lims-patient/home')) {
          if (this.sharedService.backButtonCount >= 1) {
            navigator['app'].exitApp();
            //this.showExitConfirm();
          } else {
            //this.toastService.showError("Press the back button once again to close the application.",5000);
            this.sharedService.toastService.showcloseAlert();
            this.sharedService.backButtonCount++;
          }
        } else {
          this.sharedService.backButtonCount = 0;
          this.location.back();
        }
      }
    });

    this.platform.pause.subscribe(async () => {
      // alert('Pause event detected');
      this.isPaused = true;
    });

    this.platform.resume.subscribe(async () => {
      setTimeout(() => {
        this.isPaused = false;
      }, 500);
    });

  }
}
