/// <reference path = './PfCalc.ts'/>
function getItems(items) {
    return new Array().concat(items);
}
let NumArr = getItems([10, 20, 30]);
let StrArr = getItems(["Hello", "world"]);
NumArr.push(40);
NumArr.push("Hello TypeScript");
StrArr.push(40);
console.log(NumArr);
console.log(StrArr);
function getData(items) {
    return new Array().concat(items);
}
let num = getData([10, 20, 30]);
let str = getData(["hello", "world"]);
num.push(40);
str.push("hello typescript");
// str.push(40) compilation error
console.log(num);
console.log(str);
//multi-type variables
function displayType(id, name) {
    console.log(`type of id is ${typeof id} and type of name is ${typeof name}`);
}
displayType(1, 'john');
displayType('2', 'john');
//generic classes
class Employees {
    setValue(id, name) {
        this.id = id;
        this.name = name;
    }
    display() {
        console.log(`id = ${this.id} and name = ${this.name}`);
    }
}
let emp = new Employees();
emp.setValue(1, 'avi');
emp.display();
let emp2 = new Employees();
emp2.setValue('js1', 'smit');
emp2.display();
function Employee(id, name) {
    console.log(`id = ${id} and name = ${name}`);
}
let em = Employee;
em(2, 'carl');
// class Student {
//     id: number;
//     name: string;
//     feeStatus: boolean;
//     constructor(id: number, name: string, feeStatus: boolean) {
//         this.id = id;
//         this.name = name;
//         this.feeStatus = feeStatus;
//     }
// }
// function display<T extends Student>(per: T): void{
//     console.log(`id = ${}`);
// }
//using namespace
let pf = PfCalc.calc('john', 25000);
console.log(`pf = ${pf}`);
