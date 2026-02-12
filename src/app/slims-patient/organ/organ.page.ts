import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonRow, IonCol,IonChip  } from "@ionic/angular/standalone";
import { SlimsPatientApplicationService } from 'src/app/service/laboratory-service/lims-patientapp.service';
import { SharedService } from 'src/app/service/shared-service/shared.service';
import { organtest, tests_organ } from '../../global.settings';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-organ',
    templateUrl: 'organ.page.html',
    styleUrls: ['organ.page.scss'],
    standalone : true,
    imports: [IonContent, IonButton, IonIcon, CommonModule, IonRow, IonCol, IonChip],
})

export class OrganPage implements OnInit {
    constructor(public sharedService : SharedService,public slimsPatientService : SlimsPatientApplicationService,public router : Router ) {
         this.selectedOrganIndex = null
        const navi = this.router.getCurrentNavigation();
        if(navi.extras.state){
          this.selectedOrgan = navi.extras.state['organ'];
        }
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



}