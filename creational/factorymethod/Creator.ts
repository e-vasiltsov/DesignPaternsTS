import {Product} from "./Product";

export abstract class Creator {
    private product: Product;

    public abstract factoryMethod(): Product;

    public operation(): void {
        this.product = this.factoryMethod();
    }
}
