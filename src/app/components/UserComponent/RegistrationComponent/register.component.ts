import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";


@Component({
    selector :'register',
    templateUrl: './register.component.html'
})
export class RegisterComponent {
    registerForm : FormGroup;

    constructor(){
        this.initForm()
    }

    register(){
        console.log(this.registerForm)
    }
    private initForm(){
        this.registerForm = new FormGroup({
            'firstname' : new FormControl(),
            'lastname' : new FormControl(),
            'email' : new FormControl(),
            'username' : new FormControl(),
            'password' : new FormControl(),
        })
    }
}