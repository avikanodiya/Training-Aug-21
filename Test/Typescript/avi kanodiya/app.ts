import { restaurant, Restaurant } from './restaurants'
import { restaurantDetails, RestaurantDetail } from './restaurantDetail'
import { bookings } from './booking'
var checkHours;
var token = 1;

let res = new Restaurant(12, "hotel rajpal", "ahmedabad", true)
let res2 = new Restaurant(13, "hotel karnavati", "gandhinagar", true)
let d = new RestaurantDetail(12, 96, 42, 6, 16)
d.insertData()
res.insertData()
res2.insertData()

function book(people, bookingDate, rId, custName) {
    let p = people
    let re = restaurant.filter((r) => {
        return r.rId === rId
    })
    if (re[0].available == true) {
        let r = restaurantDetails.filter((res) => {
            return res.rId === rId
        })
        if ((r[0].capacity - r[0].occupied) < people) {
            console.log('no tables available');
        } else {
            let flag = people / r[0].tableSize
            console.log(flag);
            if (flag < 0) {
                let table = 1
                token = token + 1
                bookings.push(token, bookingDate, custName, people)
                r[0].occupied = r[0].totalTable

            } else {
                let table = Math.ceil(flag)
                bookings.push(token, bookingDate, custName, people)
                r[0].occupied = r[0].totalTable * table
            }

        }
        console.log(r)
    }
}

function checkAvailability(people, bookingDate, rId, custName) {
    let date = new Date();
    let date2 = new Date(bookingDate);
    var checkDays = date2.getTime() - date.getTime()
    var x = (checkDays) / (1000 * 60 * 60 * 24)
    if (x > 30) {
        console.log('no booking available now');
    } else if (x < 1) {
        checkHours = date2.getHours() - date.getHours()
        if (checkHours < 6) {
            console.log('no booking available');
        } else {
            book(people, bookingDate, rId, custName);
        }
    }
}



checkAvailability(11, "2021-11-29 23:30", 12, 'avi')
