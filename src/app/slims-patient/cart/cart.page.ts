import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonContent, IonHeader, IonToolbar, IonTitle,IonIcon, IonButton,IonRow,IonCol } from "@ionic/angular/standalone";
import { popular_packages } from '../../global.settings';
import { Router } from '@angular/router';
import { CartService } from '../../service/shared-service/cart.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-cart',
    templateUrl: 'cart.page.html',
    styleUrls: ['cart.page.scss'],
    standalone : true,
    imports: [IonContent, IonIcon, IonButton,IonRow,IonCol,CommonModule],
})

export class CartPage {


  public CartItemList$ : Observable<any[]>;

  constructor(public router: Router,public cartService : CartService) {
    this.CartItemList$ = this.cartService.cartItemList$;
  }


  onClearCart(){ 
   
    this.CartItemList$.subscribe((elements) => {
      elements.forEach((element) => {
        this.onCartServiceDelete(element);
      });
    });
  }

  onCartServiceDelete(item){
    this.cartService.removeFromCart(item);
  }


  onContinueShoppingClick(){
    this.router.navigate(['/lims-patient/packages']);
  }

  onCheckoutClick(){
    this.router.navigate(['/lims-patient/cart/checkout']);
  }
}
