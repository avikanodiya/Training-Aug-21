//map data structure
let employees = new Map();
employees.set(1, 'jhon');
employees.set(2, 'carl');
console.log(employees);
for (let e of employees.values()) {
    console.log(e); //jhon carl
}
console.log(employees.has(1)); //true
console.log(employees.get(2)); //carl
//Set data structure
let students = new Set();
students.add('john');
students.add('peter');
console.log(students); //{ 'john', 'peter' }
console.log(students.has('peter')); //true
