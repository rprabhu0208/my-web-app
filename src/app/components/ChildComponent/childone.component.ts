import { Component, Input ,OnInit } from "@angular/core";
import { Status } from "../../Models/user";



@Component({
    selector :'childone',
    templateUrl: './childone.component.html'
})
export class ChildOneComponent implements OnInit {

    @Input('status') status: Status;
   
    constructor(){
       
    } 

    ngOnInit(): void {
        console.log(this.status)
    }

    
}