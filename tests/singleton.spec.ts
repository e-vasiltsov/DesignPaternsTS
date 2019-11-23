import { expect } from 'chai';
import 'mocha';
import {Builder} from "../creational/builder/Builder";
import {ConcretBuilder} from "../creational/builder/ConcretBuilder";
import {Director} from "../creational/builder/Director";
import {Product} from "../creational/builder/Product";
import {Singleton} from "../creational/singleton/Singleton";

describe('Singleton test',
    () => {
        it('should be equal 2 instance ', () => {

            let instance1: Singleton = Singleton.instance();
            let instance2: Singleton = Singleton.instance();

            expect(true).to.equal(instance1 === instance2);

            expect('').to.equal(instance1.getSingletonData());
            expect('').to.equal(instance2.getSingletonData());

            instance1.singletonOperation();

            expect('singletonData').to.equal(instance1.getSingletonData());
            expect('singletonData').to.equal(instance2.getSingletonData());

        });

    },);



