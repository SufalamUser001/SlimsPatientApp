import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from "@ionic/angular/standalone";
import { Diseasetest, duumyimages, organtest, popular_packages } from '../../global.settings';
import { register } from 'swiper/element/bundle';
@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    imports: [IonContent, IonButton],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class homePage {

  public courselList = duumyimages
  public popular_packages = popular_packages
  public organtest = organtest;
  public Diseasetest = Diseasetest;


  colorsList  = [
    "red",  "cyan",  "orange",  "blue",    "amber",     "sky",   "yellow",       "emerald",
    "teal", "violet",   "fuchsia",      "rose",     "indigo",      "purple", "lime",
      "pink",       "green",    
  ];
  colorsList2 = Object.assign([],this.colorsList);
  
  constructor() {
    register();
    this.colorsList2 = Object.assign([],this.colorsList2.reverse());
  }

}
