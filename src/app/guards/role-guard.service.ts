import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthGuard } from "./auth-guard.service";
import { Injectable } from "@angular/core";


@Injectable()
export class RoleGaurd implements CanActivate {

    constructor(private authguard: AuthGuard) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        debugger;
        return this.authguard.canActivate(route, state).then((auth: boolean) => {
            if (!auth) {
                return Promise.resolve(false)
            }
        }
        )
    }

}