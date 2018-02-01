import { RouterModule , Routes} from '@angular/router'
import { ModuleWithProviders } from '@angular/core'

export const router : Routes = [ {
    path : '',
    loadChildren:'app/modules/homemodule/home.module#HomeModule'
}]
