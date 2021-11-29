interface IRestaurant {
    rId: number;
    restaurantName: string;
    location: string;
    available: boolean
}

export var restaurant: Array<IRestaurant> = [];

export class Restaurant implements IRestaurant {
    rId: number;
    restaurantName: string;
    location: string;
    available: boolean
    constructor(rId: number, restaurantName: string, location: string, available: boolean) {
        this.rId = rId;
        this.restaurantName = restaurantName;
        this.location = location;
        this.available = available
    }
    insertData() {
        let data = {
            rId: this.rId,
            restaurantName: this.restaurantName,
            location: this.location,
            available: this.available
        }
        restaurant.push(data)
    }
}
