interface IRestaurantDetail {
    rId: number;
    capacity: number;
    occupied: number;
    tableSize: number;
    totalTable: number
}

export var restaurantDetails: Array<IRestaurantDetail> = [];

export class RestaurantDetail implements IRestaurantDetail {
    rId: number;
    capacity: number;
    occupied: number;
    tableSize: number;
    totalTable: number
    constructor(rId: number, capacity: number, occupied: number, tableSize: number, totalTable: number) {
        this.rId = rId;
        this.capacity = capacity;
        this.occupied = occupied;
        this.tableSize = tableSize;
        this.totalTable = totalTable;
    }
    insertData() {
        let data = {
            rId: this.rId,
            capacity: this.capacity,
            occupied: this.occupied,
            tableSize: this.tableSize,
            totalTable: this.totalTable
        }
        restaurantDetails.push(data)
    }
}
