import { expect } from 'chai';
import 'mocha';
import {RoundHole} from "../structural/adapter/RoundHole";
import {RoundPeg} from "../structural/adapter/RoundPeg";
import {SquarePeg} from "../structural/adapter/SquarePeg";
import {SquarePegAdapter} from "../structural/adapter/SquarePegAdapter";

describe('Adapter test',
    () => {
        it('Hole should fits peg', () => {

            const hole = new RoundHole(5);
            const rpeg = new RoundPeg(5);

            expect(hole.fits(rpeg)).to.equal(true);
        });

        it('Hole should fits small super peg', () => {

            const hole = new RoundHole(5);

            const smallSqpeg = new SquarePeg(5);

            // Argument of type 'SquarePeg' is not assignable to parameter of type 'RoundPeg'.
            // hole.fits(smallSqpeg);

            const smallSqpegAdapter = new SquarePegAdapter(smallSqpeg);

            expect(hole.fits(smallSqpegAdapter)).to.equal(true);
        });

        it("Hole should't fits large super peg", () => {

            const hole = new RoundHole(5);

            const largeSqpeg = new SquarePeg(10);

            // Argument of type 'SquarePeg' is not assignable to parameter of type 'RoundPeg'.
            // hole.fits(smallSqpeg);

            const largeSqpegAdapter = new SquarePegAdapter(largeSqpeg);

            expect(hole.fits(largeSqpegAdapter)).to.equal(false);
        });
    },);
