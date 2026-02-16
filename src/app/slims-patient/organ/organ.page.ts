import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonRow, IonCol, IonChip, IonBadge } from "@ionic/angular/standalone";
import { SlimsPatientApplicationService } from 'src/app/service/laboratory-service/lims-patientapp.service';
import { SharedService } from 'src/app/service/shared-service/shared.service';
import { organtest, tests_organ } from '../../global.settings';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../../service/shared-service/cart.service';

@Component({
    selector: 'app-organ',
    templateUrl: 'organ.page.html',
    styleUrls: ['organ.page.scss'],
    standalone : true,
    imports: [IonContent, IonButton, IonIcon, CommonModule, IonChip, IonBadge],
})

export class OrganPage implements OnInit {
    constructor(public sharedService : SharedService,public slimsPatientService : SlimsPatientApplicationService,public router : Router,public cartService : CartService  ) {
         this.selectedOrganIndex = null
        const navi = this.router.getCurrentNavigation();
        if(navi.extras.state){
          this.selectedOrgan = navi.extras.state['organ'];
        }
        this.cartService.cartItem$.subscribe((item)=>{
            if(item){
              var index = this.tests_organ.findIndex(x=> x.ServiceId == item.ServiceId);
              if(index > -1){
                this.tests_organ[index].IsAddedInCart = item.IsAddedInCart;
              }
              var findex = this.filterOragnList.findIndex(x=> x.ServiceId == item.ServiceId);
              if(findex > -1){
                this.filterOragnList[findex].IsAddedInCart = item.IsAddedInCart;
              }
            }
          });

    }

    @Input() public IsCompactView = false;
    @Output() public organViewAllClick: EventEmitter<any> = new EventEmitter();
    @Output() public organClickemit: EventEmitter<any> = new EventEmitter();
    public organtest = organtest;
    public tests_organ = tests_organ;
    public filterOragnList = [];
    public selectedOrgan;
    public selectedOrganIndex = null;
    colorsList  = [
        "red",  "cyan",  "orange",  "blue",    "amber",     "sky",   "yellow",       "emerald",
        "teal", "violet",   "fuchsia",      "rose",     "indigo",      "purple", "lime",
        "pink",  "green",    
    ];

    ionViewDidLeave(){
        this.selectedOrgan = null;
        this.selectedOrganIndex = null
    }


    ngOnInit(): void {
        this.filterOragnList = this.tests_organ;
        if(!this.IsCompactView && this.selectedOrgan){
             this.finalFilter();
        }
        if(this.IsCompactView){
            this.selectedOrgan = null;
             this.selectedOrganIndex = null
        }
    }

    filterOrgan(organ, i = null){
        this.selectedOrgan = organ;
        if(this.IsCompactView){
            this.organClickemit.emit(organ);
        }else{
            this.selectedOrganIndex = i;
           this.finalFilter();
        }
    }

    finalFilter(){
        if (this.tests_organ && this.tests_organ.length > 0 && this.selectedOrgan && this.selectedOrgan.OrganId){
            this.filterOragnList = this.tests_organ.filter(x => x.OrganId == this.selectedOrgan.OrganId);
        }
    }

    onAddtoCart(item){
        if(item.IsAddedInCart){
          this.router.navigate(['/lims-patient/cart']);
        }else{
          this.cartService.addToCart(item);
        }
      }



}