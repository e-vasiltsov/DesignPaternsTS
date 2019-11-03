import {Remote} from "./Remote";
import {Device} from "./Device";

export class AdvancedRemote extends Remote {

    public constructor(device: Device) {
        super(device);
    }

    public mute() {
        this.device.setVolume(0);
    }
}
