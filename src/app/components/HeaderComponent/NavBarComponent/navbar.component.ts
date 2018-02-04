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
    
    constructor(private authServie:AuthenticationService){ 
    }

    ngOnInit(){
     
    }
  
    logout(){
        this.authServie.logout(); 
    }
}