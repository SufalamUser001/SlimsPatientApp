import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlimsPatientComponent } from './slims-patient.page';
import { AuthGuardLogin } from '../service/shared-service/login-auth-guard.service';


export const PatientAppRouting: Routes = [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadComponent: () => import('./home/home.page').then(m => m.homePage)
      },
      {
        path: 'orders',
        canActivate : [AuthGuardLogin],
        loadComponent: () => import('../slims-patient/orders/orders.page').then(m => m.OrdersPage)
      },
      {
        path: 'profile',
        canActivate : [AuthGuardLogin],
        loadComponent: () => import('../slims-patient/profile/profile.page').then(m => m.ProfilePage)
      },
      {
        path: 'packages',
        canActivate : [AuthGuardLogin],
        loadComponent: () => import('./packages/packages.page').then(m => m.PackagesPage),
        data: { isShowBackButton: true }
      },
      {
        path: 'organ',
        canActivate : [AuthGuardLogin],
        loadComponent: () => import('./organ/organ.page').then(m => m.OrganPage),
        data: { isShowBackButton: true }
      },
      {
        path: 'disease',
        canActivate : [AuthGuardLogin],
        loadComponent: () => import('./disease/disease.page').then(m => m.DiseasePage),
        data: { isShowBackButton: true }
      }
];

