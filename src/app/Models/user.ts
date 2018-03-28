export enum Status{
    Active,
    DeActive
}

export class User {
    id:number;
    username : string;
    password : string;
    firstname: string;
    lastname: string; 
    email : string;
    status: Status; 

    constructor(){
      this.status = Status.Active
    }
}