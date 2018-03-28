import { Component, DoCheck } from "@angular/core";
import { DataService } from "../../services/dataservice";
import { Status } from "../../Models/user"; 


@Component({
    selector :'childtwo',
    templateUrl: './childtwo.component.html'
})
export class ChildTwoComponent implements DoCheck {
    name: string;
    address:string;
    constructor(private dataService : DataService){

    }
    changeStatus(){
        if(this.dataService.user.status == Status.Active)
            this.dataService.user.status =  Status.DeActive
        else 
            this.dataService.user.status =  Status.Active;
    }

    ngDoCheck(){
        console.dir(this.name)
    }

    getAddress(obj){
        console.log(obj)
    }
}