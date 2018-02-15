import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpModule , Http} from '@angular/http';

import { AppComponent } from './app.component';
import {HeaderComponent} from '../app/components/HeaderComponent/header.component'
import { NavBarComponent } from './components/HeaderComponent/NavBarComponent/navbar.component';
import { router } from '../app/app.router'
import { AuthenticationService } from './services/authentication.service';
import { AuthGuard } from './auth-guard.service';
import { UnAuthorizedComponent } from './components/UnAuthorizedComponent/unauthorized.component';
import 'rxjs'
 
 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
    ,NavBarComponent
    ,UnAuthorizedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpModule,
    ReactiveFormsModule,  
    RouterModule.forRoot(router,{ useHash: true }) 
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
