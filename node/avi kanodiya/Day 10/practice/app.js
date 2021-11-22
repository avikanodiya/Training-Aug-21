const { string } = require("joi");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/demo", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connection successful!!!!"))
    .catch((err) => console.log(err));


const employeelistShema = new mongoose.Schema({
    ID: {
        type: Number,
        required: true
    },
    Name: String,
    Address: String,
    skills: String
})

const Employeelist = new mongoose.model("Employeelist", employeelistShema)

//write document
const createDocument = async () => {

    try {
        const newEmployeelist = new Employeelist({
            ID: 1,
            Name: "avi",
            Address: "chandkheda",
            skills: "Full stack"
        })

        const secondEmployeelist = new Employeelist({
            ID: 1,
            Name: "smit",
            Address: "Gandhinagar",
            skills: "Java Developer"
        })

        // const result = await newEmployeelist.save() for single document
        const result = await Employeelist.insertMany([newEmployeelist, secondEmployeelist])
        // console.log(result);

    } catch (err) {
        console.log(err);
    }
}



createDocument()

// read document
// const getDocument = async () => {
//     const result = await Employeelist.find({ ID: 1 })
//     console.log(result);
// }

// getDocument()

