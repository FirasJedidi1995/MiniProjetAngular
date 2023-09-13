import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cvTech/cv/cv.component';
import { ColorComponent } from './color/color.component';
import { Component } from '@angular/core';
import { DetailsComponent } from './cvTech/details/details.component';
import { DeleteCvComponent } from './cvTech/delete-cv/delete-cv.component';
import { AddCvComponent } from './cvTech/add-cv/add-cv.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';

const APP_ROUTING: Routes = [
  {
    path: 'cv',
    component: CvComponent,
    children: [
      { path: 'delete/:id', component: DeleteCvComponent },
      { path: 'add', component: AddCvComponent },
      { path: ':id', component: DetailsComponent },
    ],
  },

  { path: '', component: CvComponent },
  { path: 'color/:default', component: ColorComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: ErrorComponent },
];
export const ROUTING = RouterModule.forRoot(APP_ROUTING);
