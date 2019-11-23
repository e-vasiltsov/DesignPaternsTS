import { expect } from 'chai';
import 'mocha';
import {Creator} from "../creational/factorymethod/Creator";
import {Product} from "../creational/factorymethod/Product";
import {ConcretCreator} from "../creational/factorymethod/ConcretCreator";
import {ConcreteProduct} from "../creational/factorymethod/ConcreteProduct";


describe('Factory method test',
    () => {
        it('should create ConcreteProduct', () => {

            let creator: Creator = null;
            let product: Product = null;

            creator = new ConcretCreator();
            product = creator.factoryMethod();

            creator.operation();

            expect(true).to.equal(product instanceof ConcreteProduct);
        });

    },);



