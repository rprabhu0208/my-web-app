import { NgModule } from '@angular/core'

import { LoginComponent } from '../../components/UserComponent/LoginComponent/login.component';
import {homeRouter } from './home.router'
import { AuthenticationService } from '../../services/authentication.service';
import { DashBoardComponent } from '../../components/DashBoardComponent/dashboard.component';
import { AuthGuard } from '../../auth-guard.service';
import { FormsModule } from '@angular/forms'; 
import { RegisterComponent } from '../../components/UserComponent/RegistrationComponent/register.component';

@NgModule({
    declarations :[LoginComponent,DashBoardComponent,RegisterComponent],
    imports: [homeRouter,  FormsModule],
    providers: [AuthGuard],
   
})
export class HomeModule  {}
