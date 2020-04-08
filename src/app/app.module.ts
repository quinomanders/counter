import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PopUpComponent } from './components/header/pop-up/popup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/dashboard/search/search.component';
import { RegisterComponent } from './components/register/register.component';
import { CounterComponent } from './components/counter/counter.component';
import { ResultsComponent } from './components/results/results.component';
import { LoginComponent } from './components/login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoresComponent } from './components/stores/stores.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PopUpComponent,
    DashboardComponent,
    FooterComponent,
    SearchComponent,
    RegisterComponent,
    CounterComponent,
    ResultsComponent,
    LoginComponent,
    StoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
