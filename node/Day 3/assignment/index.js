const { Mobike } = require('./app.js')
const fs = require('fs')
const bikedata = new Mobike();
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const question1 = () => {
    return new Promise((resolve, reject) => {
        readline.question('Enter bike number : ', number => {
            bikedata.bikeNumber = number;
            resolve()
        })
    })
}

const question2 = () => {
    return new Promise((resolve, reject) => {
        readline.question('Enter Phone Number : ', number => {
            bikedata.phoneNumber = number;
            resolve()
        })
    })
}

const question3 = () => {
    return new Promise((resolve, reject) => {
        readline.question('Enter name : ', name => {
            bikedata.name = name;
            resolve()
        })
    })
}

const question4 = () => {
    return new Promise((resolve, reject) => {
        readline.question('Enter Total days for rent : ', day => {
            bikedata.days = day;
            resolve()
        })
    })
}



const main = async () => {
    await question1()
    await question2()
    await question3()
    await question4()
    readline.close()
    console.log(bikedata);
    console.log(`Total rental charge : ${bikedata.compute()}`);
}
main()

// console.log(bikedata.compute());
