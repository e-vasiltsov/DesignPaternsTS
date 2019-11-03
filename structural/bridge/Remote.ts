import {Device} from "./Device";

export class Remote {

    protected device: Device;

    public constructor(device: Device) {
        this.device = device;
    }

    public togglePower() {
        if (this.device.isEnabled()) {
            this.device.disable();
        } else {
            this.device.enable();
        }
    }

    public volumeDown() {
        this.device.setVolume(this.device.getVolume() - 10);
    }

    public volumeUp() {
        this.device.setVolume(this.device.getVolume() + 10);
    }

}
