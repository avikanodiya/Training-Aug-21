const demo = (para1, para2) => {
    if (typeof para2 === 'number') {
        return para1.concat(para2.toString());
    }
    if (typeof para2 === 'string') {
        return para1.concat(para2);
    }
    throw new Error(`expected string or number, got ${typeof para2}`);
};
//union example
const valueCheck = (value) => {
    if (typeof value === 'number') {
        console.log('given value is number');
    }
    if (typeof value === 'string') {
        console.log('given value is string');
    }
};
demo('hi', 2);
valueCheck(1);
;
class StudentDetails {
    constructor(name, rollnumber, standard, totalmarks) {
        this.name = name;
        this.rollnumber = rollnumber;
        this.standard = standard;
        this.totalmarks = totalmarks;
    }
    getPercentage() {
        return this.totalmarks / 5;
    }
}
let std = new StudentDetails('john', 11, '10th', 455);
console.log(std.getPercentage());
//function with return type
function add(a, b) {
    return a + b;
}
console.log(add(1, 5));
var Technology;
(function (Technology) {
    Technology[Technology["ReactJS"] = 2] = "ReactJS";
    Technology[Technology["NodeJS"] = 3] = "NodeJS";
    Technology[Technology["AngularJS"] = 4] = "AngularJS";
})(Technology || (Technology = {}));
console.log(Technology);
let favouriteTech = Technology.ReactJS;
console.log(favouriteTech);
console.log(Technology[2]);
