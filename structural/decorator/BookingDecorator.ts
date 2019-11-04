import {Booking} from "./Booking";

export abstract class BookingDecorator {

    protected booking: Booking;

    public constructor(booking: Booking) {
        this.booking = booking;
    }

    public abstract calculatePrice(): number;

    public abstract getDescription(): string;
}
