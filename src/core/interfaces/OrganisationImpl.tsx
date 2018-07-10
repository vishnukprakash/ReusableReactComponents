import { Organisation } from "./Organisation";

export class OrganisationImpl implements Organisation {
 
    constructor(private id:number, private name:string){
    }

    public getId(): number {
        return this.id;
    }
    public getName(): string {
        return this.name; 
    }
}