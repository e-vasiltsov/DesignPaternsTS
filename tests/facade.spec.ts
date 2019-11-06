import { expect } from 'chai';
import 'mocha';
import {Subsystem1} from "../structural/facade/Subsystem1";
import {Subsystem2} from "../structural/facade/Subsystem2";
import {Facade} from "../structural/facade/Facade";


describe('Facade test',
    () => {
        it('should return all strings from methods', () => {

            const subsystem1 = new Subsystem1();
            const subsystem2 = new Subsystem2();
            const facade = new Facade(subsystem1, subsystem2);

            expect('Subsystem1: operation1Subsystem2: operation1Subsystem1: operationNSubsystem2: operationZ')
                .to.equal(facade.operation());
        });

    },);
