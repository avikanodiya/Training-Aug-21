var employee = [];
class Employee {
    constructor(id, name, city, doj) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.doj = doj;
    }
    insertData() {
        let data = {
            id: this.id,
            name: this.name,
            city: this.city,
            doj: this.doj
        };
        employee.push(data);
    }
    findById(id) {
        let e = employee.filter((emp) => {
            return id === emp.id;
        });
        console.log(e);
    }
    findByYear() {
        let e = employee.filter((emp) => {
            return emp.doj.getFullYear() > 2020;
        });
        console.log(e);
    }
    findByYearAndPlace(city) {
        let e = employee.filter((emp) => {
            return (emp.doj.getFullYear() > 2020 && emp.city === city);
        });
        console.log(e);
    }
}
let emp = new Employee(1, 'rahul', 'gandhinagar', new Date("01/01/2020"));
let emp1 = new Employee(2, 'jay', 'ahmedabad', new Date("04/04/2021"));
emp.insertData();
emp1.insertData();
emp.findByYear();
emp.findByYearAndPlace("ahmedabad");
emp.findById(1);
