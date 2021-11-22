const fs = require('fs')

fs.mkdir('../Day 2/demo', { recursive: true }, (err) => {
    if (err) {
        console.log(err);
    }
})
