import { Person } from "./interfaces/Person";
import { Organisation } from "./interfaces/Organisation";
import { OrganisationImpl } from "./interfaces/OrganisationImpl";

export class Identifier{
    identifyOrganisation(person: Person): Organisation{
        return new OrganisationImpl(7777777, "My test organisation");
    }
}