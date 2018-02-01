import { Routes, RouterModule  } from '@angular/router' 
import { LoginComponent } from '../../components/UserComponent/LoginComponent/login.component';
import { DashBoardComponent } from '../../components/DashBoardComponent/dashboard.component';

const HOME_ROUTER : Routes = [
    {
        path: '',
        component : LoginComponent 
    },
    {
        path: 'dashboard',
        component : DashBoardComponent 
    }

]

export const homeRouter = RouterModule.forChild(HOME_ROUTER)