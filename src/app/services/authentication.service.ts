import {User} from '../Models/user'
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'; 
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
        var currentLoggedIn = false;
        const promise = new Promise(
            (resolve,reject) => {
                if(localStorage.getItem('currentUser')){
                    this.loggedIn.next(true);
                }
                else {
                    this.loggedIn.next(false);
                }
                resolve(this.loggedIn.getValue()) 
            }
        )
        return promise;  
    }
 
    login(email:string,password : string): any{
        if(email == 'rohan.prabhu@gmail.com' && password == 'rohan123'){ 
            var user : User = {
                id :1,
                firstname:'rohan',
                lastname:'prabhu',
                password:'rohan123',
                username:'rohan',
                email:'rohan.prabhu@gmail.com'
            }  
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