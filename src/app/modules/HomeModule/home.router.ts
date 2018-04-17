import { Routes, RouterModule  } from '@angular/router' 
import { LoginComponent } from '../../components/UserComponent/LoginComponent/login.component';
import { DashBoardComponent } from '../../components/DashBoard/dashboard.component';

import { RegisterComponent } from '../../components/UserComponent/RegistrationComponent/register.component';
import { DashBoardIndexComponent } from '../../components/Dashboard/dashboardindex.component';
import { RoleGaurd } from '../../guards/role-guard.service';
 
 

const HOME_ROUTER : Routes = [
    {
        path: '',
        component : LoginComponent 
    },
    {
        path: 'login',
        component : LoginComponent 
    },
    {
        path: 'register',
        component : RegisterComponent 
    },
    {
        path: 'dashboard',
        component : DashBoardComponent,
        canActivate :[RoleGaurd],
        children :[
            { path:'',
            component: DashBoardIndexComponent
        }
        ]
    }

]

export const homeRouter = RouterModule.forChild(HOME_ROUTER)