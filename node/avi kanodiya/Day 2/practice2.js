const fs = require('fs')

fs.appendFile('person.txt', ' hello india', (err) => {
    if (err) {
        return console.log(err);
    }
})