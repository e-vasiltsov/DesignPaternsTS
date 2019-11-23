import {Prototype} from "./Prototype";

export class ConcretePrototype2 extends Prototype {

    public constructor(id: number) {
        super(id);
    }

    public clone(): Prototype {
        return new ConcretePrototype2(this.id);
    }
}
