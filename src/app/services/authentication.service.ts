import {User} from '../Models/user'
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'; 
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router } from '@angular/router';
import { ActivatedRoute, RouterStateSnapshot } from '@angular/router'; 
import {Http,RequestOptions,Headers} from '@angular/http'
import  'rxjs'
import { DataService } from './dataservice';
@Injectable()
export class AuthenticationService   {  
    loggedIn = new BehaviorSubject<boolean>(false) 
    constructor(private router: Router, private http : Http, private dataservice : DataService ){
       
    }

    get isLoggedIn(){
        return this.loggedIn.asObservable();
    } 

    set isLoggedIn(value:any){
        this.loggedIn.next(value);
    }
 
    isAuthencated(){
        var currentLoggedIn = false;
        const promise = new Promise(
            (resolve,reject) => {
                if(this.dataservice.user){
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
    login(email:string,password:string) : Observable<User>{
     
            return this.http
                    .get('http://localhost:5000/users?email='+ email + '&_expand=role')
                    .map((response) => { 
                        return response.json()[0];
            })  
        // return this.http.get('http://localhost:5000/users?email='+ email).subscribe(
        //     (response) => {
        //         return response.json()[0];
        //     },
        //     (error) =>{
        //         return null;
        //     }
        // ) 
    }
    // login(email:string,password : string): any {
    //      this.http.get('http://localhost:5000/users?email='+ email).subscribe(
    //       (response)  =>{ 
    //         if(response.json()[0]){
    //             let user= new User()
    //             user  = response.json()[0];

    //             if(user.email == email && user.password == password){
    //                  localStorage.setItem('currentUser',JSON.stringify(user)) 
    //                  this.loggedIn.next(true); 
    //                  this.router.navigate(['dashboard'])
    //             } 
    //         }
    //         this.router.navigate(['login'],{ queryParams : { msg : 'invalid' } })
    //       }
    //     )
    //     // if(email == 'rohan.prabhu@gmail.com' && password == 'rohan123'){ 
    //     // //     var user : User = {
    //     // //         id :1,
    //     // //         firstname:'rohan',
    //     // //         lastname:'prabhu',
    //     // //         password:'rohan123',
    //     // //         username:'rohan',
    //     // //         email:'rohan.prabhu@gmail.com'
    //     // //     }  
    //     // // localStorage.setItem('currentUser',JSON.stringify(user)) 
    //     // this.loggedIn.next(true); 
    //     // this.router.navigate(['dashboard'])
    //     // }
    //     // else {
    //     //     this.router.navigate(['login'],{ queryParams : { msg : 'invalid' } })
    //     // } 
    // }
 

    logout(){  
        this.dataservice.user = null ;        
        this.loggedIn.next(false); 
        this.router.navigate(['login'])
    }   
}