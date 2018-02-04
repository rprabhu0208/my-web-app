import { CanActivate ,  ActivatedRouteSnapshot, RouterStateSnapshot  } from "@angular/router";

import { AuthenticationService } from "./services/authentication.service";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Router ,Route} from "@angular/router";
import { CanActivateChild, CanLoad } from "@angular/router/src/interfaces";
 
@Injectable()
export class AuthGuard implements CanActivate , CanActivateChild, CanLoad {
    constructor(private authService:AuthenticationService, private router:Router){

    }

    isAuthenticated(){
        return this.authService.isAuthencated().then(
            (authenticated: boolean) => { 
                if(authenticated)
                    return true;
                else
                   return this.router.navigate(['login'])
            } 
        )
    }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
           return this.isAuthenticated();
    }
    canActivateChild(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean{
          return this.canActivate(route,state);
    }

    canLoad(route: Route ) : Promise<boolean> | boolean{ 
          return this.isAuthenticated();
    }
}