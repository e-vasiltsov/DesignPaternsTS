export abstract class Prototype {

    public id: number;

    public constructor(id: number) {
        this.id = id;
    }

    public abstract clone(): Prototype;
}
