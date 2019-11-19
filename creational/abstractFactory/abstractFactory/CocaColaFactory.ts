import {AbstractFactory} from "./AbstractFactory";
import {AbstractBottle} from "../abstractBottle/AbstractBottle";
import {AbstractWater} from "../abstractWater/AbstractWater";
import {CocaColaWater} from "../abstractWater/CocaColaWater";
import {CocaColaBottle} from "../abstractBottle/CocaColaBottle";

export class CocaColaFactory extends AbstractFactory{

    public createBottle(): AbstractBottle {
        return new CocaColaBottle();
    }

    public createWater(): AbstractWater {
        return new CocaColaWater();
    }
}
