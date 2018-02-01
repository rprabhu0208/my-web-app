import { NgModule } from '@angular/core'

import { LoginComponent } from '../../components/UserComponent/LoginComponent/login.component';
import {homeRouter } from './home.router'
import { AuthenticationService } from '../../services/authentication.service';
import { DashBoardComponent } from '../../components/DashBoardComponent/dashboard.component';

@NgModule({
    declarations :[LoginComponent,DashBoardComponent],
    imports: [homeRouter],
    providers: [AuthenticationService]
})
export class HomeModule  {}
