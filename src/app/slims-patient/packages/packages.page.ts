import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonBadge } from "@ionic/angular/standalone";
import { SlimsPatientApplicationService } from 'src/app/service/laboratory-service/lims-patientapp.service';
import { SharedService } from 'src/app/service/shared-service/shared.service';
import { popular_packages } from '../../global.settings';
import { CommonModule } from '@angular/common';
import { CartService } from '../../service/shared-service/cart.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-packages',
    templateUrl: 'packages.page.html',
    styleUrls: ['packages.page.scss'],
    standalone : true,
    imports: [IonContent, IonButton, IonIcon, IonCard, IonCardHeader, IonCardContent, CommonModule, IonBadge],
})

export class PackagesPage implements OnInit {

  PackageList = [];
  constructor(public sharedService : SharedService,public slimsPatientService : SlimsPatientApplicationService,public cartService : CartService ,public router: Router) {

    this.cartService.cartItem$.subscribe((item)=>{
      if(item){
        var index = this.popular_packages.findIndex(x=> x.ServiceId == item.ServiceId);
        if(index > -1){
          this.popular_packages[index].IsAddedInCart = item.IsAddedInCart;
        }
      }
    });
  }
  public popular_packages = popular_packages
  @Input() public isShowViewMore = false;
  @Output() public packageViewAllClick: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.GetLabCartPackageDetails();
    this.popular_packages = [];
    this.popular_packages.push(...popular_packages);
    if (this.isShowViewMore){
      this.popular_packages = this.popular_packages.splice(0, 3);
    }
  }

  public GetLabCartPackageDetails(): any {
    this.sharedService.isBusy = true;
    this.slimsPatientService.GetLabCartPackageDetails(false).subscribe(
      (response: any) => {
        this.sharedService.isBusy = false;
        if (response.IsSuccess) {
          this.PackageList = response.Success.Data;
        } else {
          this.sharedService.HandleAuthenticationError(response.Error);
        }
      }, (error: any) => {
        this.sharedService.isBusy = false;
      });
  }

  onAddtoCart(item){
    if(item.IsAddedInCart){
      this.router.navigate(['/lims-patient/cart']);
    }else{
      this.cartService.addToCart(item);
    }
  }

}
