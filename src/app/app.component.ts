import { Component } from '@angular/core';
import { IonApp,  IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import * as allicons from "ionicons/icons";
import { Capacitor } from '@capacitor/core';
import { SafeArea } from 'capacitor-plugin-safe-area';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    standalone: true,
    imports: [IonApp,IonRouterOutlet],
})
export class AppComponent {
  constructor() {
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
  }
}
