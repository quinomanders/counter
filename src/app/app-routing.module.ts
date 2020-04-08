import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PopUpComponent} from './components/header/pop-up/popup.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {ResultsComponent} from './components/results/results.component';
import {CounterComponent} from './components/counter/counter.component';
import {StoresComponent} from './components/stores/stores.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'results',
    component: ResultsComponent
  },
  {
    path: 'counter',
    component: CounterComponent
  },
  {
    path: 'pop-up',
    component: PopUpComponent
  },
  {
    path: 'stores',
    component: StoresComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
