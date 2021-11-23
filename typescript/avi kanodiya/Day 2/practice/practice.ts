const demo = (para1: string, para2: any) => {
    if (typeof para2 === 'number') {
        return para1.concat(para2.toString())
    }
    if (typeof para2 === 'string') {
        return para1.concat(para2)

    }
    throw new Error(`expected string or number, got ${typeof para2}`)
}

//union example
const valueCheck = (value: (number | string)) => {
    if (typeof value === 'number') {
        console.log('given value is number');
    }
    if (typeof value === 'string') {
        console.log('given value is string');

    }
}

demo('hi', 2)
valueCheck(1)

interface Student {
    name: string;
    rollnumber: number;
    standard: string;
    totalmarks: number;
    getPercentage: (number) => number;
};

class StudentDetails implements Student {
    name: string;
    rollnumber: number;
    standard: string;
    totalmarks: number;

    constructor(name, rollnumber, standard, totalmarks) {
        this.name = name;
        this.rollnumber = rollnumber;
        this.standard = standard;
        this.totalmarks = totalmarks;
    }
    getPercentage() {
        return this.totalmarks / 5
    }
}

let std = new StudentDetails('john', 11, '10th', 455)

console.log(std.getPercentage());

//function with return type

function add(a: number, b: number): number {
    return a + b
}

console.log(add(1, 5));

interface Employee {
    id: number;
    name: string;
    technology?: string;
    salary: number;
    calPf: (salary: number) => number;
}

enum Technology { ReactJS = 2, NodeJS, AngularJS }
console.log(Technology);
let favouriteTech: Technology = Technology.ReactJS
console.log(favouriteTech);
console.log(Technology[2]);
