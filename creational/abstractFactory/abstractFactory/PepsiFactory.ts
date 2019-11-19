import {AbstractFactory} from "./AbstractFactory";
import {AbstractBottle} from "../abstractBottle/AbstractBottle";
import {AbstractWater} from "../abstractWater/AbstractWater";
import {PepsiBottle} from "../abstractBottle/PepsiBottle";
import {PepsiWater} from "../abstractWater/PepsiWater";

export class PepsiFactory extends AbstractFactory {

    public createBottle(): AbstractBottle {
        return new PepsiBottle();
    }

    public createWater(): AbstractWater {
        return new PepsiWater();
    }
}
