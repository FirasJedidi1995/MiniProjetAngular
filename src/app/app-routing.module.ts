import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorComponent } from './color/color.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './cvTech/details/details.component';
import { TodoComponent } from './todo/todo.component';
import { NF404Component } from './nf404/nf404.component';
import { AddPersonneComponent } from './cvTech/add-personne/add-personne.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  { path: '', component: CvComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cv', redirectTo: '', pathMatch: 'full' },
  {
    path: 'cv/add',
    component: AddPersonneComponent,
    canActivate: [AuthGuardGuard],
  },
  { path: 'cv/:id', component: DetailsComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'color', component: ColorComponent },

  { path: '**', component: NF404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
