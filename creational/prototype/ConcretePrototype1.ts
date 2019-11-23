import {Prototype} from "./Prototype";

export class ConcretePrototype1 extends Prototype{

    public constructor(id: number) {
        super(id);
    }

    public clone(): Prototype {
        return new ConcretePrototype1(this.id);
    }

}
