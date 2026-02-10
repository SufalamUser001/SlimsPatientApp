import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonContent, IonHeader, IonToolbar, IonTitle } from "@ionic/angular/standalone";
import { SlimsPatientApplicationService } from 'src/app/service/laboratory-service/lims-patientapp.service';
import { SharedService } from 'src/app/service/shared-service/shared.service';

@Component({
    selector: 'app-packages',
    templateUrl: 'packages.page.html',
    styleUrls: ['packages.page.scss'],
    standalone : true,
    imports: [IonContent],
})

export class PackagesPage implements OnInit {

  PackageList = [];
  constructor(public sharedService : SharedService,public slimsPatientService : SlimsPatientApplicationService) {}


  ngOnInit() {
    this.GetLabCartPackageDetails();
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

}
