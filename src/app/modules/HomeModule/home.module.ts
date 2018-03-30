import { NgModule } from '@angular/core'
import {CommonModule } from '@angular/common'
import { LoginComponent } from '../../components/UserComponent/LoginComponent/login.component';
import {homeRouter } from './home.router'
import { AuthenticationService } from '../../services/authentication.service';
import { DashBoardComponent } from '../../components/DashBoardComponent/dashboard.component';
import { AuthGuard } from '../../auth-guard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { RegisterComponent } from '../../components/UserComponent/RegistrationComponent/register.component';
import { ChildComponent } from '../../components/UserComponent/ChildComponent/child.component';

@NgModule({
    declarations :[LoginComponent,DashBoardComponent,RegisterComponent,ChildComponent],
    imports: [CommonModule,homeRouter,  FormsModule, ReactiveFormsModule],
    providers: [AuthGuard],
   
})
export class HomeModule  {}
