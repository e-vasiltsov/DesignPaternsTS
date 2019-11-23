import {Creator} from "./Creator";
import {Product} from "./Product";
import {ConcreteProduct} from "./ConcreteProduct";

export class ConcretCreator extends Creator {

    public factoryMethod(): Product {
        return new ConcreteProduct();
    }
}
