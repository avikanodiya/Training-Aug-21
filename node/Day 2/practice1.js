const fs = require('fs')

fs.writeFile("./person.txt", "Hello World", function (err) {
    if (err) {
        return console.log(err);
    }
})

