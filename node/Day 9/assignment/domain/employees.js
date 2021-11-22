const Employees = require('../model/employees.json')

const employee_index = (req, res) => {
    res.send(Employees)
}

const employee_id = (req, res) => {
    const emp = Employees.find(e => e.id === parseInt(req.params.id))
    res.send(emp)
}

const employee_add = (req, res) => {
    let emp = req
    Employees.push(emp)
    console.log(emp);
    console.log(Employees);
    res.end()
}

const employee_mod = (req, res) => {
    let emp = Employees.find(e => e.id === parseInt(req.body.id))
    if (!emp) res.status(404).send('<h2>404: ERROR!!! Employee does not exist!!...');
    for (x in emp) {
        emp[x] = req.body[x]
    }
    console.log(Employees);
    res.end()

}

const employee_del = (req, res) => {
    let emp = Employees.find(d => d.id === parseInt(req.body.id))
    if (!emp) res.status(404).send('<h2>404: ERROR!!!');
    const index = Employees.indexOf(emp);
    Employees.splice(index, 1)
    console.log(Employees);
    res.end()
}

const emp_assignment = (req, res) => {
    const emp = Employees.find(e => e.id === parseInt(req.params.id))
    if (!emp) res.status(404).send('<h2>404: ERROR!!!');
    res.send(emp.assignments)
    res.end()
}

const get_assignment = (req, res) => {
    const emp = Employees.find(e => e.id === parseInt(req.params.id))
    if (!emp) res.status(404).send('<h2>404: ERROR!!!');
    const assignment = emp.assignments[req.params.aid]
    console.log(assignment);
}

const update_assignment = (req, res) => {
    const emp = Employees.find(e => e.id === parseInt(req.params.id))
    if (!emp) res.status(404).send('<h2>404: ERROR!!!');
    const assignment = emp.assignments[req.params.aid]
    console.log(req.body);
    for (x in assignment) {
        assignment[x] = req.body[x]
    }
    console.log(emp);
    Employees.push(emp)
    res.end()
}

module.exports = { employee_index, employee_id, employee_add, employee_mod, employee_del, emp_assignment, get_assignment, update_assignment }