import {BookingDecorator} from "./BookingDecorator";

export class ExtraBed extends BookingDecorator{

    private price: number = 30;

    public calculatePrice(): number {
        return this.booking.calculatePrice() + this.price;
    }

    public getDescription(): string {
        return this.booking.getDescription()  + ' with extra bed';
    }

}
