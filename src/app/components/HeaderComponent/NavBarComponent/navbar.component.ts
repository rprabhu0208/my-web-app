import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { User } from "../../../Models/user";
import { AuthenticationService } from "../../../services/authentication.service";
import { Observable } from "rxjs/Observable";


@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html'
})
export class NavBarComponent implements OnInit{
    
    isLoggedIn$: Observable<boolean>;     
    constructor(private authService: AuthenticationService) { }
  
    ngOnInit() { 
       this.isLoggedIn$ = this.authService.isLoggedIn;   
    } 

    logout(){
        this.authService.logout();
    }
}