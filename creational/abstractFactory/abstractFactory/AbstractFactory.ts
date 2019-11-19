import {AbstractBottle} from "../abstractBottle/AbstractBottle";
import {AbstractWater} from "../abstractWater/AbstractWater";

export abstract class AbstractFactory {

    public abstract createWater(): AbstractWater;
    public abstract createBottle(): AbstractBottle;
}
