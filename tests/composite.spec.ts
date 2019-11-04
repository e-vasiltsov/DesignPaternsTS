import { expect } from 'chai';
import 'mocha';
import {Leaf} from "../structural/composite/Leaf";
import {Composite} from "../structural/composite/Composite";

describe('Composite test',
    () => {
        it('should expect 1 leaf on the tree ', () => {

            const tree = new Composite();
            const branch = new Composite();

            const simple = new Leaf();
            branch.add(simple);

            tree.add(branch);

            expect(1).to.equal(tree.operation());
        });

        it('should expect 4 leaf on the tree', () => {
            const tree = new Composite();
            const branch1 = new Composite();

            branch1.add(new Leaf());
            branch1.add(new Leaf());
            branch1.add(new Leaf());

            const branch2 = new Composite();
            branch2.add(new Leaf());

            tree.add(branch1);
            tree.add(branch2);

            expect(4).to.equal(tree.operation());

        });
    },);
