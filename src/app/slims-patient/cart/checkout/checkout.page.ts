import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonContent } from "@ionic/angular/standalone";

@Component({
    selector: 'app-checkout',
    templateUrl: 'checkout.page.html',
    styleUrls: ['checkout.page.scss'],
    standalone : true,
    imports: [IonContent],
})

export class CheckoutPage {

  constructor() {}

}
