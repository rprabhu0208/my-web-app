import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 

import { LoginComponent } from '../../components/UserComponent/LoginComponent/login.component';
import {homeRouter } from './home.router'
import { AuthenticationService } from '../../services/authentication.service';
import { DashBoardComponent } from '../../components/DashBoard/dashboard.component';
import { AuthGuard } from '../../auth-guard.service';

import { RegisterComponent } from '../../components/UserComponent/RegistrationComponent/register.component';
 
import { DataService } from '../../services/dataservice';
import { SideMenuComponent } from '../../components/Dashboard/sidemenucomponent/sidemenu.component';
import { DashBoardIndexComponent } from '../../components/Dashboard/dashboardindex.component';
 


@NgModule({
    declarations :[LoginComponent,DashBoardComponent,RegisterComponent
        ,SideMenuComponent
        ,DashBoardIndexComponent
    ],
    imports: [homeRouter,  FormsModule, ReactiveFormsModule, CommonModule],
    providers: [AuthGuard,DataService]
    
   
})
export class HomeModule  {}
