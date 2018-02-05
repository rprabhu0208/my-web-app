import { CanActivate ,  ActivatedRouteSnapshot, RouterStateSnapshot  } from "@angular/router";

import { AuthenticationService } from "./services/authentication.service";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Router ,Route} from "@angular/router";
import { CanActivateChild, CanLoad } from "@angular/router/src/interfaces";
import { debug } from "util";
 
@Injectable()
export class AuthGuard implements CanActivate , CanActivateChild, CanLoad {
    constructor(private authService:AuthenticationService, private router:Router){

    }

    isAuthenticated(){
        return this.authService.isAuthencated().then(
            (authenticated: boolean) => {  
                debugger
                if(authenticated)
                    return true;
                else{
                  this.router.navigate(['login'])
                 return false;}
            } 
        )
    }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{ 
                    console.log(route.url)
           return this.isAuthenticated();
    }
    canActivateChild(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean{
          return this.canActivate(route,state);
    }

    canLoad(route: Route ) : Promise<boolean> | boolean{ 
            console.dir(route)
          return this.isAuthenticated();
    }
}