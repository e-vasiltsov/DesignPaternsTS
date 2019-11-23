import {Product} from "./Product";

export abstract class Builder {

    public abstract buildPartA();

    public abstract buildPartB();

    public abstract buildPartC();

    public abstract getResults(): Product
}
