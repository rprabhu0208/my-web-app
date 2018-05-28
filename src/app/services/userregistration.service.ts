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
export class UserRegistrationService   {  

    constructor(private router: Router, private http : Http, private dataservice : DataService ){
       
    }

    register(user:User) : Observable<User>{ 
        return this.http
                .get('http://localhost:5000/users?email=')
                .map((response) => { 
                    return response.json()[0];
        })   
}
}