"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var restaurants_1 = require("./restaurants");
var restaurantDetail_1 = require("./restaurantDetail");
var booking_1 = require("./booking");
var checkHours;
var token = 1;
var res = new restaurants_1.Restaurant(12, "hotel rajpal", "ahmedabad", true);
var res2 = new restaurants_1.Restaurant(13, "hotel karnavati", "gandhinagar", true);
var d = new restaurantDetail_1.RestaurantDetail(12, 96, 42, 6, 16);
d.insertData();
res.insertData();
res2.insertData();
function book(people, bookingDate, rId, custName) {
    var p = people;
    var re = restaurants_1.restaurant.filter(function (r) {
        return r.rId === rId;
    });
    if (re[0].available == true) {
        var r = restaurantDetail_1.restaurantDetails.filter(function (res) {
            return res.rId === rId;
        });
        if ((r[0].capacity - r[0].occupied) < people) {
            console.log('no tables available');
        }
        else {
            var flag = people / r[0].tableSize;
            console.log(flag);
            if (flag < 0) {
                token = token + 1;
                booking_1.bookings.push(token, bookingDate, custName, people);
            }
            else {
            }
        }
        console.log(r);
    }
}
function checkAvailability(people, bookingDate, rId, custName) {
    var date = new Date();
    var date2 = new Date(bookingDate);
    var checkDays = date2.getTime() - date.getTime();
    var x = (checkDays) / (1000 * 60 * 60 * 24);
    if (x > 30) {
        console.log('no booking available now');
    }
    else if (x < 1) {
        checkHours = date2.getHours() - date.getHours();
        if (checkHours < 6) {
            console.log('no booking available');
        }
        else {
            book(people, bookingDate, rId, custName);
        }
    }
}
checkAvailability(11, "2021-11-29 23:30", 12, 'avi');
