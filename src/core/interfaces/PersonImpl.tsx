import { Person } from "./Person";

export class PersonImpl implements Person {
     getId(): number {
        throw new Error("Method not implemented.");
    }
    getName(): string {
        throw new Error("Method not implemented.");
    }
}