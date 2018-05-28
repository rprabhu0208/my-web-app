import { Component } from "@angular/core";
import { AuthenticationService } from "../../../services/authentication.service";
import { Router ,ActivatedRoute ,Params } from "@angular/router";
import { NgForm } from '@angular/forms'
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { User } from "../../../Models/user"; 
import { ErrorCode } from "../../../Models/ErrorCode";
import { DataService } from "../../../services/dataservice";



@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    errorMessage : string = "" ;   
    ErrorCode : typeof ErrorCode = ErrorCode;
    constructor(private authService: AuthenticationService, private router: Router,private aRoute : ActivatedRoute, private dataservice : DataService) {
        localStorage.clear()
      
    }


    ngOnInit() {
        this.authService.isLoggedIn = false; 
        this.aRoute.queryParams.subscribe(
            (qParams: Params)=>{
               this.errorMessage = qParams["msg"]
            }
        )
    }


    login(form: NgForm) { 
        this.authService.login(form.value.email, form.value.password).subscribe(
            (response) => { 
                if (response) {
                    let user = new User();
                    user = response;  
                    if(user.email == form.value.email && user.password == form.value.password){ 
                        this.dataservice.user = user;
                         //localStorage.setItem('currentUser',JSON.stringify(user))
                        return  this.router.navigate(['dashboard'])  
                    }
                    else {
                        this.errorMessage = "invalidUserIDPassword";
                    } 
                }
                else {
                    this.errorMessage = "userDoesNotExist";
                }
                return this.router.navigate(['login'],{ queryParams : { msg : this.errorMessage } })
            }
        )
    }
}