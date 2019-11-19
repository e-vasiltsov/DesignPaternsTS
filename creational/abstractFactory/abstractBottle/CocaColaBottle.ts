import {AbstractBottle} from "./AbstractBottle";
import {AbstractWater} from "../abstractWater/AbstractWater";

export class CocaColaBottle extends AbstractBottle {

    public interact(water: AbstractWater) : AbstractBottle {

        this.water = water;

        return this;
    }

    public pourOut(): AbstractWater {
        return this.water;
    }
}
