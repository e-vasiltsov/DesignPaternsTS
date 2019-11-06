import {Subsystem1} from "./Subsystem1";
import {Subsystem2} from "./Subsystem2";

export class Facade {

    protected subsystem1: Subsystem1;

    protected subsystem2: Subsystem2;

    constructor(subsystem1: Subsystem1 = null, subsystem2: Subsystem2 = null) {
        this.subsystem1 = subsystem1 || new Subsystem1();
        this.subsystem2 = subsystem2 || new Subsystem2();
    }

    public operation(): string {
        let result = '';
        result += this.subsystem1.operation1();
        result += this.subsystem2.operation1();
        result += this.subsystem1.operationN();
        result += this.subsystem2.operationZ();

        return result;
    }
}
