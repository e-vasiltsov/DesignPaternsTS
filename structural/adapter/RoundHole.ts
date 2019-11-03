import {RoundPeg} from "./RoundPeg";

export class RoundHole {

    private radius: number;

    public constructor(radius: number) {
        this.radius = radius;
    }

    public getRadius(): number {
        return this.radius;
    }

    public fits(peg: RoundPeg) {
        return this.getRadius() >= peg.getRadius();
    }
}
