import { Component } from "@angular/core";
import { AuthenticationService } from "../../../services/authentication.service";
import { Router } from "@angular/router";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";


@Component({
    selector :'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private authService : AuthenticationService,private router: Router){
        
    }
    ngOnInit(){
        
    }
    login(username:string, password:string){
       this.authService.login(username,password) 
   
    }
}