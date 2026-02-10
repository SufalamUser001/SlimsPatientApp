import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { provideRouter, RouteReuseStrategy, withHashLocation } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { DatePipe } from '@angular/common';
import { provideHttpClient, HttpClient } from '@angular/common/http';
import { approutes } from './app/app-routing';
import { AuthGuardLogin } from './app/service/shared-service/login-auth-guard.service';

const appconfig: ApplicationConfig = {
    providers: [
      { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
      provideRouter(approutes, withHashLocation()),
      provideIonicAngular({
        mode : 'ios',
        innerHTMLTemplatesEnabled: true, // Add here
      }),
      provideHttpClient(),
      DatePipe,
      HttpClient,
      AuthGuardLogin
    ],
  };
  
  bootstrapApplication(AppComponent, appconfig).catch((err) => console.log(err));


