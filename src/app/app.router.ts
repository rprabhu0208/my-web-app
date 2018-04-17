import { RouterModule, Routes } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'
import { Component } from '@angular/core/src/metadata/directives';
import { UnAuthorizedComponent } from './components/UnAuthorizedComponent/unauthorized.component';

export const router: Routes = [{
    path: '',
    loadChildren: 'app/modules/homemodule/home.module#HomeModule'

},
{
    path: 'unauthorized',
    component: UnAuthorizedComponent

}
]
