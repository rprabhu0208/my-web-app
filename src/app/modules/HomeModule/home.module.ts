import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 

import { LoginComponent } from '../../components/UserComponent/LoginComponent/login.component';
import {homeRouter } from './home.router'
import { AuthenticationService } from '../../services/authentication.service';
import { DashBoardComponent } from '../../components/DashBoard/dashboard.component';  
import { RegisterComponent } from '../../components/UserComponent/RegistrationComponent/register.component';
 
import { DataService } from '../../services/dataservice';
import { SideMenuComponent } from '../../components/Dashboard/sidemenucomponent/sidemenu.component';
import { DashBoardIndexComponent } from '../../components/Dashboard/dashboardindex.component';
import { RoleGaurd } from '../../guards/role-guard.service';
import { AuthGuard } from '../../guards/auth-guard.service';
import { OAuthComponent } from '../../components/UserComponent/oAuthComponent/oauth.component';
import { ChildComponent } from '../../components/UserComponent/ChildComponent/child.component';
import { UserProfileComponent } from '../../components/UserComponent/UserProfileComponent/userprofile.component';
 


@NgModule({
    declarations :[LoginComponent,DashBoardComponent,RegisterComponent
        ,SideMenuComponent
        ,DashBoardIndexComponent
        ,OAuthComponent
        ,ChildComponent        
        ,UserProfileComponent
    ],
    imports: [homeRouter,  FormsModule, ReactiveFormsModule, CommonModule],
    providers: [DataService,RoleGaurd,AuthGuard]
    
   
})
export class HomeModule  {}
