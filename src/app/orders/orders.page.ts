import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonContent, IonHeader, IonToolbar, IonTitle } from "@ionic/angular/standalone";

@Component({
    selector: 'app-orders',
    templateUrl: 'orders.page.html',
    styleUrls: ['orders.page.scss'],
    standalone : true,
    imports: [ IonContent, IonHeader, IonToolbar, IonTitle],
})
export class OrdersPage {

  constructor() {}

}
