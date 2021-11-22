var fs = require('fs')
var express = require('express')
var app = express();
const Joi = require('joi');
app.use(express.json());


var jsondata = [
    {
        "id": 1,
        "last_name": "Frake",
        "first_name": "Wilek",
        "email": "wfrake0@sourceforge.net"
    },
    {
        "id": 2,
        "first_name": "Margo",
        "last_name": "Ferens",
        "email": "mferens1@wordpress.org"
    },
    {
        "id": 3,
        "first_name": "Davida",
        "last_name": "Hefner",
        "email": "dhefner2@yolasite.com"
    },
    {
        "id": 4,
        "first_name": "Herbert",
        "last_name": "Immings",
        "email": "himmings3@live.com"
    },
    {
        "id": 5,
        "first_name": "Euell",
        "last_name": "Stivani",
        "email": "estivani4@feedburner.com"
    },
    {
        "id": 6,
        "first_name": "Conney",
        "last_name": "Korneluk",
        "email": "ckorneluk5@seesaa.net"
    },
    {
        "id": 7,
        "first_name": "Cherilynn",
        "last_name": "Lambertson",
        "email": "clambertson6@imgur.com"
    }];

// const readData = () => {
//     return new Promise((resolve, reject) => {
//         fs.readFile("./data.json", "utf8", (err, data) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 jsondata = JSON.parse(data);
//                 resolve()

//             }
//         })
//     })
// }

// const main = async () => {
//     await readData()
// }
// main()


app.get('/customers', (req, res) => {
    console.log(jsondata);
    res.end(jsondata)
    res.end()
})

app.get('/customers/:id', (req, res) => {
    console.log(req.params.id);
    let customer = jsondata.find(d => d.id === parseInt(req.params.id))
    console.log(customer);
    res.send(customer)
})

app.post('/customers', (req, res) => {
    let customer = {
        id: jsondata.length + 1,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email

    }
    jsondata.push(customer)
    console.log(jsondata);
})

app.put('/customers', (req, res) => {
    let customer = jsondata.find(d => d.id === parseInt(req.body.id))
    console.log(customer);
    if (!customer) res.status(404).send('<h2>404: ERROR!!!');
    customer.first_name = req.body.first_name
    customer.last_name = req.body.last_name
    customer.email = req.body.email
    console.log(jsondata);
})

app.delete('/customers', (req, res) => {
    let customer = jsondata.find(d => d.id === parseInt(req.body.id))
    if (!customer) res.status(404).send('<h2>404: ERROR!!!');
    const index = jsondata.indexOf(customer);
    jsondata.splice(index, 1)
    console.log(jsondata);
})

const server = app.listen(3000, () => {
    var host = server.address().address
    var port = server.address().port
    console.log("Server running on port http://%s:%s", host, port);
})

