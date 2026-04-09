import { Component, ElementRef, EventEmitter, Input, Output, signal, ViewChild } from '@angular/core';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonSearchbar, IonRow, IonButton, IonButtons, IonIcon, IonSelect, IonCol, IonSelectOption, IonDatetimeButton, IonAccordionGroup, IonAccordion, IonModal, IonText, IonList, IonItem, IonLabel, IonDatetime, IonChip, IonGrid, IonBadge, IonNote } from "@ionic/angular/standalone";
import { SharedService } from '../../service/shared-service/shared.service';
import { SlimsPatientApplicationService } from '../../service/laboratory-service/lims-patientapp.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Enumeration } from '../../service/shared-service/others/enumeration';
import { ActivatedRoute } from '@angular/router';
import { RegistrationServiceDetailsModel } from 'src/app/model/registration-service-details.model';
import { Chart, Colors } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
    selector: 'app-test-result-info',
    templateUrl: 'test-result-info.page.html',
    styleUrls: ['test-result-info.page.scss'],
    standalone: true,
    imports: [IonNote, IonContent, IonIcon,
    CommonModule, FormsModule,
    IonList, IonItem, BaseChartDirective, IonBadge],
})

export class TestResultInfoPage {

    constructor(public sharedService: SharedService, public slimsPatientService: SlimsPatientApplicationService, private route: ActivatedRoute) 
    { 
        Chart.register(Colors);
    }

    public AllserviceLabIDDetails = new Array<RegistrationServiceDetailsModel>();
    public PatientInfo: any = null;
    average = arr => arr.reduce((p, c) => p + c, 0) / arr.length;
    public trendData = [];
    public lineChartLabels: Array<any> = [];
    public lineChartData: Array<any> = [];
    public labels = ['Jan', 'Feb', 'Mar', 'Apr']
    public lineChartOptions: any = {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
            point: {
                radius: 3, 
                hoverRadius: 4 
            },
            line: {
                tension: 0.3, 
                borderWidth: 2
            }
        },
        legend: {
            display: false
        }
    };

    ngOnInit() {
        console.log('ngOnInit - test-result-info');
        this.route.params.subscribe(params => {
            const id = params['id']; // Get the 'id' parameter
            if (id) {
                this.getTestApprovalData(id);
            }
        })
    }

    getTestApprovalData(labId) {
        this.AllserviceLabIDDetails = [];
        this.sharedService.isBusy = true;
        this.slimsPatientService.GetLabCartPatientServiceTestDetails(labId).subscribe(
        (response: any) => {
            this.sharedService.isBusy = false;
            if (response.IsSuccess) {
                for (var i = 0; i < response.Success.Data.length; i++) {
                    let obj = new RegistrationServiceDetailsModel(response.Success.Data[i])
                    this.AllserviceLabIDDetails.push(obj);
                }
                this.PatientInfo = response.Success.Data1;
            } else {
                this.sharedService.isBusy = false;
                this.sharedService.HandleAuthenticationError(response.Error);
            }
        });
    }

    getTrendData(test){
        this.trendData = [];
        this.lineChartData = [];
        this.lineChartLabels = [];
        if(test.DataType == 'N' && this.PatientInfo?.PatientHistoryCount > 0){
            this.sharedService.isBusy = true;
            this.slimsPatientService.GetTrendData(this.PatientInfo.PatientId, test.TestId).subscribe(
            (response: any) => {
                this.sharedService.isBusy = false;
                if (response.IsSuccess) {
                    if (response.Success.Data != null && response.Success.Data.length > 0) {

                        const result = Number(this.average(response.Success.Data.map(m => parseFloat(m.ResultValue))).toFixed(2)); // 5

                        let data = response.Success.Data;

                        for (var i = 0; i < response.Success.Data.length; i++) {
                            var nextData = data[i];
                            nextData.Average = result;
                            nextData.LabId_RegistrationDateForChart = nextData.LabId_RegistrationDate;
                            nextData.LabId_RegistrationDate = nextData.LabId_RegistrationDate.split('_')[0];
                            this.trendData.push(nextData);
                        }

                        this.lineChartOptions = {
                            scales: {
                              x: {
                                ticks: {
                                 callback: function(value){
                                    const label = this.getLabelForValue(value);
                                        if (data && data.length > 0 && data.some(x => x.LabId_RegistrationDateForChart.split('_')[0] == label)){
                                            return data.find(x => x.LabId_RegistrationDateForChart.split('_')[0] == label).LabId_RegistrationDateForChart.split('_')[1];
                                        }
                                    }
                                 }
                                }
                             },
                            responsive: true,
                            maintainAspectRatio: false,
                            elements: {
                                point: {
                                    radius: 3, 
                                    hoverRadius: 4 
                                },
                                line: {
                                    tension: 0.3, 
                                    borderWidth: 2
                                }
                            },
                            legend: {
                                display: false
                            }
                        };
                        
                        this.trendData = Object.assign([], this.trendData);
                        this.lineChartLabels = this.sharedService.generalService.getDataForChart(this.trendData, 'LabId_RegistrationDate');

                        this.lineChartData = [];
                        this.lineChartData.push({ data: this.sharedService.generalService.getDataForChart(this.trendData, 'ResultValue'), lineTension: 0, label: 'Result' });
                        this.lineChartData.push({ data: this.sharedService.generalService.getDataForChart(this.trendData, 'BRIHighValue'), lineTension: 0, label: 'High' });
                        this.lineChartData.push({ data: this.sharedService.generalService.getDataForChart(this.trendData, 'BRILowValue'), lineTension: 0, label: 'Low' });
                    } else {
                        this.trendData = [];
                    }
                } else {
                    this.sharedService.isBusy = false;
                    this.sharedService.HandleAuthenticationError(response.Error);
                }
            });
        }
    }
}