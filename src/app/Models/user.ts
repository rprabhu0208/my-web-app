export enum Status{
    Active,
    DeActive
}

export class Role {
    id: number;
    role : string;
}

export class User {
    id:number;
    username : string;
    password : string;
    firstname: string;
    lastname: string; 
    email : string;
    status: Status; 
    role: Role;
    constructor(){
      this.status = Status.Active
    }
}