import { computed, Injectable, signal } from "@angular/core";
import { Preferences } from "@capacitor/preferences";
import { BehaviorSubject, map, Subject } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class CartService {

  constructor() {
    this.loadCart(); // Get items back on refresh
  }


    private cartItemListSubject = new BehaviorSubject<any>([]);
    private cartItemSubject = new Subject<any>();
    private cartSignal = signal<any[]>([]);


    cartItemList$ = this.cartItemListSubject.asObservable();
    cartItem$ = this.cartItemSubject.asObservable();
    cartCount = computed(() => this.cartSignal().length);
    totalAmount = computed(() => 
        this.cartSignal().reduce((sum, item) => Number(sum) + Number(item.Amount), 0)
      );

      private async saveCart(items: any[]) {
        await Preferences.set({
          key: 'cart_items',
          value: JSON.stringify(items) // Must stringify for Preferences API
        });
      }
    
      // --- GET: Retrieve from storage on load ---
      private async loadCart() {
        const { value } = await Preferences.get({ key: 'cart_items' });
        if (value) {
          const updatedItems = JSON.parse(value);
          this.cartItemListSubject.next(updatedItems);
          this.cartSignal.set(updatedItems);
          updatedItems.forEach(x=>   this.cartItemSubject.next(x));
        }
      }
      
    isItemInCart$(product) {
      return this.cartItemList$.pipe(
        map(items => items.some(item => item.ServiceId === product.ServiceId))
      );
    }
  
    addToCart(product: any) {
      const currentItems = this.cartItemListSubject.getValue();
      if (!currentItems.find(i => i.ServiceId === product.ServiceId)) {

        const newItem = { ...product, IsAddedInCart: true,image: null };
        const updatedItems = [...currentItems, newItem];
        this.cartItemListSubject.next(updatedItems);
        this.cartSignal.set(updatedItems);
        this.cartItemSubject.next(newItem);
        this.saveCart(updatedItems); 
      }
    }
  
    removeFromCart(product: any) {
      const currentItems = this.cartItemListSubject.getValue();
  
      const newItem = { ...product, IsAddedInCart: false };
      const updatedItems = currentItems.filter(item => item.ServiceId !== newItem.ServiceId);
      this.cartItemListSubject.next(updatedItems);
      this.cartSignal.set(updatedItems);
      this.cartItemSubject.next(newItem);
      this.saveCart(updatedItems); 
    }
  }