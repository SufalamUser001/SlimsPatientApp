import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonRow, IonCol,IonChip  } from "@ionic/angular/standalone";
import { SlimsPatientApplicationService } from 'src/app/service/laboratory-service/lims-patientapp.service';
import { SharedService } from 'src/app/service/shared-service/shared.service';
import { Diseasetest, test_disease } from '../../global.settings';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-disease',
    templateUrl: 'disease.page.html',
    styleUrls: ['disease.page.scss'],
    standalone : true,
    imports: [IonContent, IonButton, IonIcon, CommonModule, IonRow, IonCol, IonChip],
})

export class DiseasePage implements OnInit {
    constructor(public sharedService : SharedService,public slimsPatientService : SlimsPatientApplicationService,public router : Router ) {
         this.selectedDiseaseIndex = null
        const navi = this.router.getCurrentNavigation();
        if(navi.extras.state){
          this.selectedDisease= navi.extras.state['disease'];
        }
    }

    @Input() public IsCompactView = false;
    @Output() public diseaseViewAllClick: EventEmitter<any> = new EventEmitter();
    @Output() public diseaseClickemit: EventEmitter<any> = new EventEmitter();
    public diseasetest = Diseasetest;
    public tests_disease = test_disease;
    public filterDiseaseList = [];
    public selectedDisease;
    public selectedDiseaseIndex = null;
    colorsList  = [
        "red",  "cyan",  "orange",  "blue",    "amber",     "sky",   "yellow",       "emerald",
        "teal", "violet",   "fuchsia",      "rose",     "indigo",      "purple", "lime",
        "pink",  "green",    
    ];

    ionViewDidLeave(){
        this.selectedDisease = null;
        this.selectedDiseaseIndex = null
    }


    ngOnInit(): void {
        this.colorsList = this.colorsList.reverse();
        this.filterDiseaseList = this.tests_disease;
        if(!this.IsCompactView && this.selectedDisease){
             this.finalFilter();
        }
        if(this.IsCompactView){
            this.selectedDisease = null;
             this.selectedDiseaseIndex = null
        }
    }

    filterOrgan(organ, i = null){
        this.selectedDisease = organ;
        if(this.IsCompactView){
            this.diseaseClickemit.emit(organ);
        }else{
            this.selectedDiseaseIndex = i;
           this.finalFilter();
        }
    }

    finalFilter(){
        if (this.tests_disease && this.tests_disease.length > 0 && this.selectedDisease && this.selectedDisease.DiseaseId){
            this.filterDiseaseList = this.tests_disease.filter(x => x.DiseaseId == this.selectedDisease.DiseaseId);
        }
    }



}