import { Organisation } from "./Organisation";
export declare class OrganisationImpl implements Organisation {
    private id;
    private name;
    constructor(id: number, name: string);
    getId(): number;
    getName(): string;
}
