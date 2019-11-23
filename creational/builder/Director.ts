import {Builder} from "./Builder";

export class Director {

    private builder: Builder;

    public constructor(builder: Builder) {
        this.builder = builder;
    }

    public construct(): void {
        this.builder.buildPartA();
        this.builder.buildPartB();
        this.builder.buildPartC();
    }
}
