class Mobike {
    constructor(bikeNumber, phoneNumber, name, days) {
        this.bikeNumber = bikeNumber;
        this.phoneNumber = phoneNumber;
        this.name = name;
        this.days = days;
    }

    compute() {
        if (this.days > 5 && this.days < 11) {
            let day = this.days - 5
            return (500 * 5) + (day * 400)
        } else if (this.days >= 11) {
            let day = this.days - 10
            return (500 * 5) + (400 * 5) + (day * 200)
        }
        else {
            return this.days * 500
        }
    }

}

module.exports = { Mobike }