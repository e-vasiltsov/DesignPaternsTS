import { expect } from 'chai';
import 'mocha';
import {TV} from "../structural/bridge/TV";
import {Remote} from "../structural/bridge/Remote";
import {Radio} from "../structural/bridge/Radio";
import {AdvancedRemote} from "../structural/bridge/AdvancedRemote";

describe('Bridge test',
    () => {
        it('should turn on/off TV', () => {

            const TVDevice = new TV();
            const remote = new Remote(TVDevice);

            remote.togglePower();

            expect(TVDevice.isEnabled()).to.equal(true);
        });

        it('should mute the radio', () => {

            const radio = new Radio();
            const advacedRemote = new AdvancedRemote(radio);

            expect(radio.getVolume()).to.equal(20);

            advacedRemote.mute();
            expect(radio.getVolume()).to.equal(0);
        });
    },);



