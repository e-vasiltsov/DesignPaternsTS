import {SquarePeg} from "./SquarePeg";
import {RoundPeg} from "./RoundPeg";

export class SquarePegAdapter extends RoundPeg{

    private peg: SquarePeg;

    public constructor(peg: SquarePeg) {
        super(peg);
        this.peg = peg;
    }

    public getRadius(): number {
        return this.peg.getWidth() * Math.sqrt(2) / 2
    }
}
