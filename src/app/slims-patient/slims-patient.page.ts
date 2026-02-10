import { LocationStrategy } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, viewChild, ViewChild } from '@angular/core';
import { IonTabButton, IonIcon, IonLabel, IonTabBar, IonTabs, IonModal, IonContent, IonButton, IonHeader, IonToolbar, IonButtons, IonTitle, IonList, IonItem } from "@ionic/angular/standalone";


@Component({
    selector: 'app-slims-patient',
    templateUrl: 'slims-patient.page.html',
    styleUrls: ['slims-patient.page.scss'],
    standalone : true,
    imports: [IonItem, IonList, IonTitle, IonButtons, IonToolbar, IonHeader, IonButton, IonContent, IonModal, IonTabButton, IonIcon, IonLabel, IonTabBar, IonTabs],
    
})

export class SlimsPatientComponent {

  public isDisplayBackButton = false;
  optionsModal = viewChild<IonModal>("optionsModal");
  public title = 'LIMS Patient';
  constructor(public locationStrategy : LocationStrategy) 
  {
   
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


  oncartClick(){
    
  }

}
