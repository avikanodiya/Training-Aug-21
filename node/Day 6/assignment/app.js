var express = require('express')
var app = express()
app.use(express.json());



const Students = [{
    "ID": 1, "Name": "Reena", "Address": "Ahmedabad", "Fees": { "Amount": 10000, "PaymentDate": "12/12/2020", "Status": "true" }, "Result": { "Hindi": 80, "Eng": 70, "Math": 60, "Total": 210, "Grade": "A" }

}, {
    "ID": 2, "Name": "Rita", "Address": "Surat", "Fees": {
        "Amount": 12000, "PaymentDate": "12 / 12 / 2020", "Status": "false"
    },
    "Result": { "Hindi": 80, "Eng": 70, "Math": 60, "Total": 210, "Grade": "A" }

}]

app.get('/students', (req, res) => {
    res.send(Students)
})

app.get('/students/:id', (req, res) => {
    const student = Students.find(d => d.ID === parseInt(req.params.id))
    if (!student) res.status(404).send("<h2>404 ERROR!!!</h2>")
    res.send(student)
    console.log(req.params.id);
    console.log(Students[0]);
    console.log(student);
})

app.get('/students/:id/fees', (req, res) => {
    const student = Students.find(d => d.ID === parseInt(req.params.id))
    if (!student) res.status(404).send("<h2>404 ERROR!!!</h2>")
    res.send(student.Fees)
})

app.get('/students/:id/result', (req, res) => {
    const student = Students.find(d => d.ID === parseInt(req.params.id))
    if (!student) res.status(404).send("<h2>404 ERROR!!!</h2>")
    res.send(student.Result)
})

app.put('/students/:id/result/english', (req, res) => {
    const student = Students.find(d => d.ID === parseInt(req.params.id))
    if (!student) res.status(404).send("<h2>404 ERROR!!!</h2>")
    student.Result.Eng = req.body.Eng
    console.log(student.Result.Eng);
    console.log(student);
    res.end()
})

app.listen(3000, () => console.log(`Example app listening on port 3000!`))