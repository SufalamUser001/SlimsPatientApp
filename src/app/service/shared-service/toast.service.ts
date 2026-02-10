import { Injectable } from '@angular/core';
import {  ToastController } from '@ionic/angular/standalone';

@Injectable({ providedIn: 'root' })
export class ToastService {

  public toast: any = null;
  constructor(public toastCtrl: ToastController) { }

  async showcloseAlert() {
    let toast = await this.toastCtrl.create({
      message: 'Press the back button once again to exit',
      duration: 5000,
      position: 'bottom',
      cssClass :'fullWidth'
    });

    await toast.present();
  }
  
  async create(message: string, duration = 3000) {
        
    this.toast = await this.toastCtrl.create({
        message,
        color : 'Medium',
        duration: duration,
        position: 'bottom',
        cssClass :'fullWidth'
    });
    await  this.toast.present();
}

async showInfo(message: string, duration = 2000) {
    this.toast = await this.toastCtrl.create({
        message,
        color:'secondary',
        duration: duration,
        position: 'bottom',
        cssClass :'fullWidth'
    });
    await  this.toast.present();
}

async showError(message: string, duration = 2000) {
    this.toast = await this.toastCtrl.create({
        message,
        color:'danger',
        duration: duration,
        position: 'bottom',
        cssClass :'fullWidth'
    });
    await  this.toast.present();
}


async showSucess(message: string, duration = 2000) {
    this.toast = await this.toastCtrl.create({
        message,
        color:'success',
        duration: duration,
        position: 'bottom',
        cssClass :'fullWidth'
    });
    await  this.toast.present();
}

}
