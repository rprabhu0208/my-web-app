import { Routes, RouterModule  } from '@angular/router' 
import { LoginComponent } from '../../components/UserComponent/LoginComponent/login.component';
import { DashBoardComponent } from '../../components/DashBoardComponent/dashboard.component';
import { AuthGuard } from '../../auth-guard.service'; 
import { RegisterComponent } from '../../components/UserComponent/RegistrationComponent/register.component';
 
 

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
        component : DashBoardComponent
        ,canActivate :[AuthGuard]
    }

]

export const homeRouter = RouterModule.forChild(HOME_ROUTER)