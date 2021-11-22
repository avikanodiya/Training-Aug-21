const fs = require('fs')

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

var num1;
var num2;
var result = '';

const add = (num1, num2) => {
    result = num1 + num2;
}

const sub = (num1, num2) => {
    result = num1 - num2;
}

const div = (num1, num2) => {
    result = num1 / num2;
}

const mult = (num1, num2) => {
    result = num1 * num2;
}

const question1 = () => {
    return new Promise((resolve, reject) => {
        readline.question('Enter first Number: ', number => { num1 = parseInt(number); resolve() })

    })
}

const question2 = () => {
    return new Promise((resolve, reject) => {
        readline.question('Enter second Number: ', number => { num2 = parseInt(number); resolve() })
    })
}

const question3 = () => {
    return new Promise((resolve, reject) => {
        readline.question('type any one operation : add sub div mult: ', data => {
            switch (data) {
                case 'add':
                    add(num1, num2);
                    break;
                case 'sub':
                    sub(num1, num2);
                    break;
                case 'div':
                    div(num1, num2);
                    break;
                case 'mult':
                    mult(num1, num2);
                    break;
                default:
                    result = 'enter a valid operation'
            }
            fs.writeFile('./assignment.txt', parseInt(result, 10).toString(), err => {
                if (err) {
                    console.log(err);
                }
            })
            resolve()
        })
    })
}


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

const main = async () => {
    await question1()
    await question2()
    await question3()
    readline.close()
    const res = await getText('./assignment.txt')
    console.log(res);

}
main()

