import { Identifier } from ".";
import { Organisation } from "./core/interfaces/Organisation";
import { PersonImpl } from "./core/interfaces/PersonImpl";

export class TestClass{
    main(){
        let identifier:Identifier = new Identifier();
        let organisation: Organisation = identifier.identifyOrganisation(new PersonImpl());
        console.log(organisation);
    }
}