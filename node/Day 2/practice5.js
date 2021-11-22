const fs = require('fs');

// // var string = "how are you,today?"
// // string = string.replace(/[^A-Za-z]/g, '')
// // console.log(string);

// // console.log(array);


// // console.log(count);

// fs.readFile('./sample3.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         data.toString();
//         data = data.replace(/[^A-Za-z]/g, '')
//         var array = data.split("")
//         var count = 0;
//         array.forEach((char) => {
//             if (char.charCodeAt(0) != 97 || data.charCodeAt(0) != 101 || data.charCodeAt(0) != 105 || data.charCodeAt(0) != 111 || data.charCodeAt(0) != 117) { count += 1; }

//         })
//         console.log(count);
//         console.log(array);
//     }

// })

// var char = 'u'
// if (char.charCodeAt(0) !== 117) {
//     console.log('done');
// }
// console.log(char.charCodeAt(0));

fs.writeFile("./sample3.txt", "mansarovar,ioc road,chandkheda", function () {

});
fs.readFile("./sample3.txt", 'utf8', function (err, data) {
    data = data.toUpperCase();
    var count = 0;
    for (var i = 0; i < data.length; i++) {
        if (data.charCodeAt(i) != 65 && data.charCodeAt(i) != 69 && data.charCodeAt(i) != 73 && data.charCodeAt(i) != 79 && data.charCodeAt(i) != 85) { count += 1; }

    }
    console.log("total consonent in string " + count);
});