import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/inicio', 
    pathMatch:'full',
  },
  {
    path:'inicio',
    'title': 'Inicio', 
    component:HomeComponent,
  },
  {
    path:'iniciar-sesion',
    'title':'Iniciar Sesión',
    component:LoginComponent,
  },
  {
    path:'admon',
    'title': 'Inicio', 
    component:DashboardComponent,
  },
  {
    path:'**',
    component:PageNotFoundComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
