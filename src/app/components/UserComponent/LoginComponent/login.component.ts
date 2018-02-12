import { Component } from "@angular/core";
import { AuthenticationService } from "../../../services/authentication.service";
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms'
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";


@Component({
    selector :'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private authService : AuthenticationService,private router: Router){
        localStorage.clear()
    }
    ngOnInit(){
     
    }
    login(form: NgForm){ 
       this.authService.login(form.value.email,form.value.password)  
    }
}