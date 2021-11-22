const fs = require('fs');

// fs.readFile('./sample2.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(data.toString());
//     }

// })

const getText = (path) => {
    return new Promise((resolve, reject) => {
        const read1 = fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }

        })
    })
}

// getText('./sample1.txt')
//     .then(result => console.log(result))
//     .catch(err => console.log(err))

const start = async () => {
    try {
        const first = await getText('./sample1.txt')
        console.log('hey');
        const second = await getText('./sample2.txt')
        console.log('hello');
        console.log(first);
        console.log(second);
    }
    catch (err) {
        console.log(err);
    }
}

start()