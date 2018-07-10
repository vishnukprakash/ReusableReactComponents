import { Person } from "./Person";

export class PersonImpl implements Person {
    public  getId(): number {
        throw new Error("Method not implemented.");
    }
    public getName(): string {
        throw new Error("Method not implemented.");
    }
}