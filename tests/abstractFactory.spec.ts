import { expect } from 'chai';
import 'mocha';
import {SparkingWaterService} from "../creational/abstractFactory/SparkingWaterService";
import {CocaColaFactory} from "../creational/abstractFactory/abstractFactory/CocaColaFactory";
import {CocaColaBottle} from "../creational/abstractFactory/abstractBottle/CocaColaBottle";
import {CocaColaWater} from "../creational/abstractFactory/abstractWater/CocaColaWater";
import {PepsiFactory} from "../creational/abstractFactory/abstractFactory/PepsiFactory";
import {PepsiBottle} from "../creational/abstractFactory/abstractBottle/PepsiBottle";
import {PepsiWater} from "../creational/abstractFactory/abstractWater/PepsiWater";

describe('Abstract factory test',
    () => {
        it('should factory create CocaCola with water of CocaCola', () => {

            let client: SparkingWaterService = null;

            client = new SparkingWaterService(new CocaColaFactory());
            const cocaColaBottle = client.run();

            expect(cocaColaBottle instanceof CocaColaBottle).to.equal(true);

            const cocaColaWater = cocaColaBottle.pourOut();

            expect(cocaColaWater instanceof CocaColaWater).to.equal(true);
        });

        it('should factory create Pepsi with water of Pepsi', () => {

            let client: SparkingWaterService = null;

            client = new SparkingWaterService(new PepsiFactory());
            const pepsiaBottle = client.run();

            expect(pepsiaBottle instanceof PepsiBottle).to.equal(true);

            const pepsiWater = pepsiaBottle.pourOut();

            expect(pepsiWater instanceof PepsiWater).to.equal(true);
        });

    },);



