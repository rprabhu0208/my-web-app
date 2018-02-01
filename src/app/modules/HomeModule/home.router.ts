import { Routes, RouterModule  } from '@angular/router' 
import { LoginComponent } from '../../components/UserComponent/LoginComponent/login.component';

const HOME_ROUTER : Routes = [
    {
        path: '',
        component : LoginComponent 
    }

]

export const homeRouter = RouterModule.forChild(HOME_ROUTER)