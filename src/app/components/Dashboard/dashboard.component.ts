import { Component } from "@angular/core";
import { DataService } from "../../services/dataservice";
import { User } from "../../Models/user";

import { Status } from "../../Models/user";
@Component({
    selector :'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls:['./dashboard.component.css']
})
export class DashBoardComponent {

    constructor(private dataservice:DataService){
        
    }
}