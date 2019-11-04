import { expect } from 'chai';
import 'mocha';
import {DoubleRoomBooking} from "../structural/decorator/DoubleRoomBooking";
import {WiFi} from "../structural/decorator/WiFi";
import {ExtraBed} from "../structural/decorator/ExtraBed";

describe('Decorator test',
    () => {
        it('should calculate price for basic double room booking ', () => {

            const booking = new DoubleRoomBooking();

            expect(40).to.equal(booking.calculatePrice());

            expect('double room').to.equal(booking.getDescription());
        });

        it('should calculate price for double room booking + WI-FI', () => {

            const bookingDoubleRoom = new DoubleRoomBooking();
            const bookingDoubleRoomAndWiFi = new WiFi(bookingDoubleRoom);

            expect(42).to.equal(bookingDoubleRoomAndWiFi.calculatePrice());
            expect('double room with wifi').to.equal(bookingDoubleRoomAndWiFi.getDescription());
        });

        it('should calculate price for double room booking + WI-FI + Extrabed', () => {

            const bookingDoubleRoom = new DoubleRoomBooking();
            const bookingDoubleRoomAndWiFi = new WiFi(bookingDoubleRoom);
            const bookingDoubleRoomAndWiFiAndExtrabed = new ExtraBed(bookingDoubleRoomAndWiFi);

            expect(72).to.equal(bookingDoubleRoomAndWiFiAndExtrabed.calculatePrice());
            expect('double room with wifi with extra bed').to.equal(bookingDoubleRoomAndWiFiAndExtrabed.getDescription());
        });
    },);
