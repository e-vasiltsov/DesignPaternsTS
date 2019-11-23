import {Builder} from "./Builder";
import {Product} from "./Product";

export class ConcretBuilder extends Builder {

    private product: Product = new Product();

    public buildPartA() {
        this.product.add('part A');
    }

    public buildPartB() {
        this.product.add('part B');
    }

    public buildPartC() {
        this.product.add('part C');
    }

    public getResults(): Product {
        return this.product;
    }

}
