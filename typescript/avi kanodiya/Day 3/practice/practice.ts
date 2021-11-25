/// <reference path = './PfCalc.ts'/>

function getItems(items: any[]): any[] {
    return new Array().concat(items)
}
let NumArr = getItems([10, 20, 30])
let StrArr = getItems(["Hello", "world"])
NumArr.push(40)
NumArr.push("Hello TypeScript")
StrArr.push(40)
console.log(NumArr)
console.log(StrArr)

function getData<T>(items: T[]): T[] {
    return new Array<T>().concat(items)
}

let num = getData([10, 20, 30])
let str = getData(["hello", "world"])
num.push(40)
str.push("hello typescript")
// str.push(40) compilation error
console.log(num);
console.log(str);

//multi-type variables

function displayType<T, U>(id: T, name: U): void {
    console.log(`type of id is ${typeof id} and type of name is ${typeof name}`);
}

displayType(1, 'john')
displayType('2', 'john')

//generic classes

class Employees<T, U>{
    private id: T;
    private name: U;
    setValue(id: T, name: U) {
        this.id = id;
        this.name = name;
    }
    display(): void {
        console.log(`id = ${this.id} and name = ${this.name}`);

    }
}

let emp = new Employees<number, string>();
emp.setValue(1, 'avi')
emp.display()

let emp2 = new Employees<string, string>();
emp2.setValue('js1', 'smit')
emp2.display()

//generic interface

interface EmployeeData<T, U> {
    (id: T, name: U): void
}

function Employee(id: number, name: string) {
    console.log(`id = ${id} and name = ${name}`);
}

let em: EmployeeData<number, string> = Employee;
em(2, 'carl')

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
let pf = PfCalc.calc('john', 25000)
console.log(`pf = ${pf}`);

