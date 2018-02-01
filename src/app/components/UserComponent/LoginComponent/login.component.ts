import { Component } from "@angular/core";
import { AuthenticationService } from "../../../services/authentication.service";


@Component({
    selector :'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    constructor(private authService : AuthenticationService){
        
    }

    login(username:string, password:string){
        console.log(username)
     //   this.authService.login(username,password);
    }
}