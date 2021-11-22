const fs = require('fs')

fs.unlink('./person.txt', (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("person.txt deleted");
    }
})