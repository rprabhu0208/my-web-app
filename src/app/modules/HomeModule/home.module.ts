import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 

import { LoginComponent } from '../../components/UserComponent/LoginComponent/login.component';
import {homeRouter } from './home.router'
import { AuthenticationService } from '../../services/authentication.service';
import { DashBoardComponent } from '../../components/DashBoardComponent/dashboard.component';
import { AuthGuard } from '../../auth-guard.service';

import { RegisterComponent } from '../../components/UserComponent/RegistrationComponent/register.component';
 


@NgModule({
    declarations :[LoginComponent,DashBoardComponent,RegisterComponent],
    imports: [homeRouter,  FormsModule, ReactiveFormsModule, CommonModule],
    providers: [AuthGuard] 
   
})
export class HomeModule  {}
