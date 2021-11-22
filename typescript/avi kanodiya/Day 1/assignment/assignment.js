// let employee: (string)[] = ['1', 'avi', 'kanodiya', '33,ahmedabad,gujarat', '25000']
// let employee: (object)[] = [{ "id": 1, "firstname": 'avi', "lastname": 'kanodiya', "address": '33,ahmedabad,gujarat', "salary": 25000 },
// { "id": 2, "firstname": 'smit', "lastname": 'patel', "address": '12,gandhinagar,gujarat', "salary": 20000 }]
let employee = [];
let newemp = [];
employee.push({ "id": 1, "firstname": 'avi', "lastname": 'kanodiya', "address": '33,ahmedabad,gujarat', "salary": 25000 });
employee.push({ "id": 2, "firstname": 'smit', "lastname": 'patel', "address": '12,gandhinagar,gujarat', "salary": 20000 });
const searchByIndex = (index) => {
    return employee[index];
};
const searchById = (id) => {
    var e = [];
    for (let i in employee) {
        let emp = [];
        emp.push(employee[i]);
        e = emp.filter((emp) => {
            return emp.id == id;
        });
    }
};
const insertEmployee = (emp) => {
    employee.push(emp);
};
const deleteEmployeeById = (id) => {
    employee = employee.filter((emp) => {
        return emp.id !== id;
    });
};
searchByIndex(1);
searchById(2);
// deleteEmployeeById(2)
newemp.push({ "id": 3, "firstname": 'ajay', "lastname": 'pandor', "address": '12,ahmedabad,gujarat', "salary": 25000 });
var emp1 = employee.concat(newemp);
for (let i in emp1) {
    var emp = emp1[i];
    let address = emp.address.split(',');
    console.log(`Fullname: ${emp.firstname} ${emp.lastname} Flatnumber: ${address[0]} City: ${address[1]} State: ${address[2]} PF: ${(emp.salary * 0.05)} Salary:${emp.salary} `);
}
