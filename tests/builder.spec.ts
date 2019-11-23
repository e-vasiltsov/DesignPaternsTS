import { expect } from 'chai';
import 'mocha';
import {Builder} from "../creational/builder/Builder";
import {ConcretBuilder} from "../creational/builder/ConcretBuilder";
import {Director} from "../creational/builder/Director";
import {Product} from "../creational/builder/Product";

describe('Builder test',
    () => {
        it('should build 3 parts', () => {

            const builder: Builder = new ConcretBuilder();
            const director = new Director(builder);
            director.construct();

            const product: Product = builder.getResults();

           expect('part Apart Bpart C').to.equal(product.show());
        });

    },);



