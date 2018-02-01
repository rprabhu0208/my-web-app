import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {HeaderComponent} from '../app/components/HeaderComponent/header.component'
import { NavBarComponent } from './components/HeaderComponent/NavBarComponent/navbar.component';
import { router } from '../app/app.router'
import { AuthenticationService } from './services/authentication.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
    ,NavBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router) 
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
