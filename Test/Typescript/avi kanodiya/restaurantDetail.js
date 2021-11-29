"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantDetail = exports.restaurantDetails = void 0;
exports.restaurantDetails = [];
var RestaurantDetail = /** @class */ (function () {
    function RestaurantDetail(rId, capacity, occupied, tableSize, totalTable) {
        this.rId = rId;
        this.capacity = capacity;
        this.occupied = occupied;
        this.tableSize = tableSize;
        this.totalTable = totalTable;
    }
    RestaurantDetail.prototype.insertData = function () {
        var data = {
            rId: this.rId,
            capacity: this.capacity,
            occupied: this.occupied,
            tableSize: this.tableSize,
            totalTable: this.totalTable
        };
        exports.restaurantDetails.push(data);
    };
    return RestaurantDetail;
}());
exports.RestaurantDetail = RestaurantDetail;
