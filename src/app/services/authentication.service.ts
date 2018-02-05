import {User} from '../Models/user'
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map' 
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router } from '@angular/router';
import { ActivatedRoute, RouterStateSnapshot } from '@angular/router'; 
 
@Injectable()
export class AuthenticationService   {  
    loggedIn = new BehaviorSubject<boolean>(false)
    constructor(private router: Router ){
       
    }

    get isLoggedIn(){
        return this.loggedIn.asObservable();
    } 
 
    isAuthencated(){
        const promise = new Promise(
            (resolve,reject) => {
                setTimeout(() => {  
                    resolve(this.loggedIn.getValue())
                }, 800);
            }
        )
        return promise;
        
    }
 
    login(username:string,password : string): any{
        if(username == 'rohan' && password == 'rohan123'){ 
            var user : User = {
                id :1,
                firstname:'rohan',
                lastname:'prabhu',
                password:'rohan123',
                username:'rohan'
            } 
            debugger;
        localStorage.setItem('currentUser',JSON.stringify(user)) 
        this.loggedIn.next(true);
        this.router.navigate(['dashboard'])
        }
        else {
            this.router.navigate(['login'],{ queryParams : { msg : 'invalid' } })
        } 
    }

    logout(){  
        localStorage.clear() 
        this.loggedIn.next(false);
        this.router.navigate(['login'])
    }   
}