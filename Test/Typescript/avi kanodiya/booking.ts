interface IBooking {
    token: number;
    bookingDate: Date;
    rId: number;
    custName: string;
    totalPersons: number;
}

export var bookings: Array<IBooking> = [];

export class Booking implements IBooking {
    token: number;
    bookingDate: Date;
    rId: number;
    custName: string;
    totalPersons: number;
    constructor(token: number, bookingDate: Date, rId: number, custName: string, totalPersons: number) {
        this.token = token;
        this.bookingDate = bookingDate;
        this.rId = rId;
        this.custName = custName;
        this.totalPersons = totalPersons;
    }
    insertData() {
        let data = {
            token: this.token,
            bookingDate: this.bookingDate,
            rId: this.rId,
            custName: this.custName,
            totalPersons: this.totalPersons
        }
    }
}