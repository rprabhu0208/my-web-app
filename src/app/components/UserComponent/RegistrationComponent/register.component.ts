import { Component , OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";



@Component({
    selector :'register',
    templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
    registerForm : FormGroup;

    constructor(){
      
    }

    ngOnInit(){
        this.initForm()
    }

    register(){
        console.log(this.registerForm)
    }

    private initForm(){
        this.registerForm = new FormGroup({
            'firstname' : new FormControl('',Validators.required),
            'lastname' : new FormControl(),
            'email' : new FormControl(),
            'username' : new FormControl(),
            'password' : new FormControl(),
        })
    }
}