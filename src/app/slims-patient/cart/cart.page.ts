import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonContent, IonHeader, IonToolbar, IonTitle,IonIcon, IonButton,IonRow,IonCol } from "@ionic/angular/standalone";
import { popular_packages } from '../../global.settings';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cart',
    templateUrl: 'cart.page.html',
    styleUrls: ['cart.page.scss'],
    standalone : true,
    imports: [IonContent, IonIcon, IonButton,IonRow,IonCol],
})

export class CartPage {

  constructor(public router: Router) {}
  public popular_packages = popular_packages
  onClearCart(){

  }

  onCartServiceDelete(){

  }


  onContinueShoppingClick(){
    this.router.navigate(['/lims-patient/packages']);
  }

  onCheckoutClick(){
    this.router.navigate(['/lims-patient/cart/checkout']);
  }
}
