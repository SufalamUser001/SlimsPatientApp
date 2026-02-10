import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PatientAppRouting } from './slims-patient/slims-patient-routing';

export const approutes: Routes = [
  {
    path: '',
    redirectTo: 'lims-patient',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then(m => m.LoginPage),

  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.page').then(m => m.RegisterPage),
  },
  {
    path: 'welcome',
    loadComponent: () => import('./welcome/welcome.page').then(m => m.WelcomePage),

  },
  {
    path: 'lims-patient',
    loadComponent: () => import('./slims-patient/slims-patient.page').then(m => m.SlimsPatientComponent),
    children: PatientAppRouting
  },
];

