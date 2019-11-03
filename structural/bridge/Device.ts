export abstract class Device {

    private power: boolean;
    private volume: number;

    public constructor() {
        this.power = false;
        this.volume = 20;
    }

    public isEnabled(): boolean {
        return this.power;
    }

    public enable(): void {
        this.power = true;
    }

    public disable(): void {
        this.power = false;
    }

    public getVolume(): number {
        return this.volume;
    }

    public setVolume(percent: number): void {
        this.volume = percent;
    }

}
