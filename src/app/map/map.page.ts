import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, EventEmitter, Input, Output, ViewChild, viewChild } from '@angular/core';

import { IonContent, IonHeader, IonToolbar, IonTitle, ModalController, IonButtons, IonButton, IonModal, IonFooter } from "@ionic/angular/standalone";
import { AuthService } from '../service/shared-service/auth.service';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import { SharedService } from '../service/shared-service/shared.service';
import { Preferences } from '@capacitor/preferences';
import { timer } from 'rxjs';
import { takeWhile, take, finalize } from 'rxjs/operators';
@Component({
    selector: 'app-map-modal',
    templateUrl: 'map.page.html',
    styleUrls: ['map.page.scss'],
    standalone : true,
    imports: [IonModal, IonButton, IonButtons, IonContent, IonHeader, IonToolbar, IonTitle, IonFooter],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MapModalComponent {

  mapModal = viewChild<IonModal>("mapModal");
  @Input() public maptitle : string = "Map";
  @Input() public AllowSelect : boolean=  true;
  @Output() public MarkerSelectedEmit: EventEmitter<any> = new EventEmitter();
  @Output() public MarkerInitatedEmit: EventEmitter<any> = new EventEmitter();

  @ViewChild('mapRef') mapRef :ElementRef;
   apiKey = '';
  public Map : GoogleMap;
  public mapMarkers = [];
  public MapCenters = {
    lat : 23.0225,
    long : 72.5714
  }
  constructor(private authService : AuthService,private sharedService : SharedService) {
    let apiKey = this.authService.authenticationModel.MapAPIKey;
    if(apiKey && apiKey.length > 0){
      this.apiKey = this.sharedService.generalService.decstr(apiKey)
    }else{
      //EhopMgAqESUJFhQ9ZjkDKTU+agI9FBFiJDZgDAExZAccYyUXIice
      Preferences.get({ key: 'MapAPIKey' }).then((res)=>{
        if (res.value) {
            let apiKey = res.value;
            if (apiKey) {
              this.apiKey = this.sharedService.generalService.decstr(apiKey);
            } 
        }
       });
    }
  }

  async canDismiss(data?: undefined, role?: string) {
    return role !== 'gesture';
  }

  

  setcenter(){
    let location = this.getcurrentPosition();
    if(location && location.coords){
      this.MapCenters.lat = location.coords.latitude;
      this.MapCenters.long = location.coords.longitude;
    }
  }

  openMapModal(){
    var fm = this.mapModal();
    if(fm){
      fm.present();
    }
  }

  async closeMapModal() {
    var fm = this.mapModal();
    if(fm){
      this.Map?.removeAllMapListeners();
      await this.Map?.destroy();
      this.Map = null;
      fm.dismiss();
    }
  }

  async initializeMap(){
    const mapRef = this.mapRef?.nativeElement;
    if (mapRef?.clientHeight === 0) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    if(mapRef && this.apiKey){
      this.mapMarkers = [];
      //await this.Map?.destroy();
      this.Map = null;
    this.Map = await GoogleMap.create({
      id: 'my-map', // Unique identifier for this map instance
      element: mapRef, // reference to the capacitor-google-map element
      apiKey: this.apiKey, // Your Google Maps API Key
      config: {
        center: {
          // The initial position to be rendered by the map
          lat: this.MapCenters.lat,
          lng: this.MapCenters.long,
        },
        zoom: 12, // The initial zoom level to be rendered by the map
      },
    });

    
    await this.Map.setOnMapClickListener(async (event) => {
      if(this.AllowSelect){
      console.log('Selected Location:', event.latitude, event.longitude);
      // Add or move a marker to the selected location
      this.mapMarkers.forEach(element => {
        this.Map.removeMarker(element.markerId);
      });
      var merker  = {
        coordinate: {
          lat: event.latitude,
          lng: event.longitude,
        },
         title: '',
         iconUrl : 'assets/icon/gps.png'
      };
      this.mapMarkers.pop();
      const markerid = await this.Map.addMarker(merker);
      merker["markerId"] = markerid;
      this.mapMarkers.push(merker);
    }
    });
  }
  }

  getcurrentPosition() : any{
    this.sharedService.GetGeoLocation().then((location) => {
      this.sharedService.isBusy = false;
      if (location && location.coords && location.coords.latitude && location.coords.longitude) {
          return location;
      } else {
        this.sharedService.toastService.showError('Unable To Get Location');
        return null;
      }
    }).catch((reject)=>{
      this.sharedService.isBusy = false;
      this.sharedService.toastService.showError(reject);
      return null;

    }).finally(()=>{
      this.sharedService.isBusy = false;
    });
  }

  CheckMap(){
    
  }

  async openMapModalwithData(data = null){
   var tt = timer(0,1000).pipe(takeWhile(()=> !this.Map),take(20),finalize(async ()=>{
      if (this.Map) {
        this.setcenter();
        if(data && data.latitude && data.longitude){
          var merker  = {
            coordinate: {
              lat: data.latitude,
              lng: data.longitude,
            },
            draggable : false,
            title: '',
            iconUrl : 'assets/icon/gps.png'
          };
          this.mapMarkers.pop();
          const markerid = await this.Map.addMarker(merker);
          merker["markerId"] = markerid;
          this.mapMarkers.push(merker);
        }
      } else {
        console.error("Map failed to load after 10 retries.");
      }
    }))
    tt.subscribe();


 
  
  }


  onConfirmClick(){
    let marker = this.mapMarkers.pop();
    if(marker ){
        // 2. Perform Reverse Geocoding
  // const result = await Geocoder.reverseGeocode({
  //   marker.coordinate.lat, marker.coordinate.lng,
  // });

  // 3. Extract the address description
  // const address = result.addresses[0];
  // const formattedAddress = `${address.street}, ${address.city}, ${address.countryName}`;
  // marker.title = formattedAddress;
  // console.log('Marker Address:', formattedAddress);
    }
    this.MarkerSelectedEmit.emit(marker);
    this.closeMapModal();
  }

}
