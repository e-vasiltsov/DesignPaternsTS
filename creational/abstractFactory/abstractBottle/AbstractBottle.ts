import {AbstractWater} from "../abstractWater/AbstractWater";

export abstract class AbstractBottle {

    protected water: AbstractWater;

    public abstract interact(water: AbstractWater) : AbstractBottle;

    public abstract pourOut(): AbstractWater

}
