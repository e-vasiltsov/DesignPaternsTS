import {BookingDecorator} from "./BookingDecorator";

export class WiFi extends BookingDecorator {

    private price: number = 2;

    public calculatePrice(): number {
        return this.booking.calculatePrice() + this.price;
    }

    public getDescription(): string {
        return this.booking.getDescription() + ' with wifi';
    }
}
