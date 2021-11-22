const fs = require('fs')

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})


readline.question(`Enter your name.`, name => {
    fs.appendFile('person.txt', `hello ${name}`, (err) => {
        if (err) {
            console.log(err);
        }
    })
    // console.log(`Hi ${name}!`)
    readline.close()
})