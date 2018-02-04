import { Component } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { AuthenticationService } from "../../services/authentication.service";
import { User } from "../../Models/user";


@Component({
    selector: 'header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{ 
    constructor(private authServie:AuthenticationService){ 
    }

    ngOnInit(){ 
    
    }
  
}