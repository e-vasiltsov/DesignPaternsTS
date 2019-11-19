import {AbstractWater} from "./abstractWater/AbstractWater";
import {AbstractBottle} from "./abstractBottle/AbstractBottle";
import {AbstractFactory} from "./abstractFactory/AbstractFactory";

export class SparkingWaterService {

    private water: AbstractWater;
    private bottle: AbstractBottle;

    public constructor(factory: AbstractFactory) {
        this.water = factory.createWater();
        this.bottle = factory.createBottle();
    }

    public run() : AbstractBottle {
        return this.bottle.interact(this.water);
    }
}
