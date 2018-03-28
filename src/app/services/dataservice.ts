import { User } from "../Models/user";

export class DataService{
    public user : User; 
    constructor(){
        this.user = new User();
    }
}
