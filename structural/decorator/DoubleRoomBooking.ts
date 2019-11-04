import {Booking} from "./Booking";

export class DoubleRoomBooking implements Booking{

    public calculatePrice(): number {
        return 40;
    }

    public getDescription(): string {
        return 'double room';
    }
}
