"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Restaurant = exports.restaurant = void 0;
exports.restaurant = [];
var Restaurant = /** @class */ (function () {
    function Restaurant(rId, restaurantName, location, available) {
        this.rId = rId;
        this.restaurantName = restaurantName;
        this.location = location;
        this.available = available;
    }
    Restaurant.prototype.insertData = function () {
        var data = {
            rId: this.rId,
            restaurantName: this.restaurantName,
            location: this.location,
            available: this.available
        };
        exports.restaurant.push(data);
    };
    return Restaurant;
}());
exports.Restaurant = Restaurant;
