"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Booking = exports.bookings = void 0;
exports.bookings = [];
var Booking = /** @class */ (function () {
    function Booking(token, bookingDate, rId, custName, totalPersons) {
        this.token = token;
        this.bookingDate = bookingDate;
        this.rId = rId;
        this.custName = custName;
        this.totalPersons = totalPersons;
    }
    Booking.prototype.insertData = function () {
        var data = {
            token: this.token,
            bookingDate: this.bookingDate,
            rId: this.rId,
            custName: this.custName,
            totalPersons: this.totalPersons
        };
    };
    return Booking;
}());
exports.Booking = Booking;
