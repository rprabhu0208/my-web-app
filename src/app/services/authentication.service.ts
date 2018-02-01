import {User} from '../Models/user'
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
 
@Injectable()
export class AuthenticationService {

login(username:string,password : string){
    if(username == 'rohan' && password == 'rohan123'){ 
        var user : User = {
            id :1,
            firstname:'rohan',
            lastname:'prabhu',
            password:'rohan123',
            username:'rohan'
        } 
        localStorage.setItem('currentUser',JSON.stringify(user))
    }

}
    

}