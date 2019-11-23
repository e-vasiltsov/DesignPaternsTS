import { expect } from 'chai';
import 'mocha';
import {Builder} from "../creational/builder/Builder";
import {ConcretBuilder} from "../creational/builder/ConcretBuilder";
import {Director} from "../creational/builder/Director";
import {Product} from "../creational/builder/Product";
import {Prototype} from "../creational/prototype/Prototype";
import {ConcretePrototype1} from "../creational/prototype/ConcretePrototype1";
import {ConcretePrototype2} from "../creational/prototype/ConcretePrototype2";

describe('Prototype test',
    () => {
        it('should prototype ', () => {

            let prototype: Prototype = null;
            let clone: Prototype = null;

            prototype = new ConcretePrototype1(1);
            clone = prototype.clone();

            expect(1).to.equal(clone.id);

            prototype = new ConcretePrototype2(2);
            clone = prototype.clone();

            expect(2).to.equal(clone.id);
        });

    },);



