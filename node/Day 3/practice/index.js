const g = require('./hello.js')
const { area, perimeter } = require('./rectangle.js')

const a = area(2, 10)
const p = perimeter(2, 10)
console.log(g.greeting);
console.log(a);
console.log(p);