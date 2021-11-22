var fs = require('fs')

// var http = require('http');
// const { resolve } = require('path');

// const server = http.createServer((req, res) => {
//     console.log(req.url);
//     const url = req.url;
//     if (url === '/') {
//         res.writeHead(200, { 'content-Type': 'text/html' })
//         res.end('home page')

//     } else if (url === '/:id') {
//         res.writeHead(200, { 'content-Type': 'application/json' })
//         fs.readFile(__dirname + "/" + "person.json", 'utf8', function (err, data) {
//             console.log(data);
//             var users = JSON.parse(data);
//             var user = users["user" + req.params.id]
//             console.log(user);
//             res.end(JSON.stringify(user));
//         });

//     } else {
//         res.writeHead(200, { 'content-Type': 'text/html' })
//         res.end('404: Page not found')
//     }
// })

// server.listen(3001, () => {
//     console.log("server strated on :3001....");
// })

var express = require("express");
var app = express();

app.get("/url", (req, res) => {
    res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

// app.get('/:id', function (req, res) {
//     // First read existing users.
//     fs.readFile(__dirname + "/" + "person.json", 'utf8', function (err, data) {
//         console.log(data);
//         var users = JSON.parse(data);
//         var user = users["user" + req.params.id]
//         console.log(user);
//         res.end(JSON.stringify(user));
//     });
// })

app.get('/product', (req, res) => {
    console.log(req.query);
    console.log(req.query.param1);
    var sum = parseInt(req.query.param1) + parseInt(req.query.param2)
    sum = sum.toString()
    console.log(sum);
    res.end(sum)
})

app.get('/vowelfind', (req, res) => {
    console.log(req.query.string);
    var str = req.query.string
    const vowels = str.match(/[aeiou]/gi);
    console.log(vowels);
    res.end(`First vowel from string : ${vowels[0]}`)

})
const server = app.listen(3001, () => {
    var host = server.address().address
    var port = server.address().port
    console.log("Server running on port http://%s:%s", host, port);
});