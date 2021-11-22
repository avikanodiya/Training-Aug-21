const db = require('../model/department.model')
const DepartmentModel = db.User;

const insertDepartment = async (req, res, next) => {
    let data = req.body;
    console.log(data);
    const department = new DepartmentModel(data);
    try {
        const result = await department.save();
        res.send(result);
    } catch (e) {
        res.send(e.message);
    }
}

const deleteDepartment = async (req, res, next) => {
    let id = req.params.dId;
    const department = await DepartmentModel.findByIdAndDelete(id);
    if (department) {
        res.send("Department Record Deleted Successfully");
    } else {
        res.status(404).send("Data Not Found");
    }
}


module.exports = { insertDepartment, deleteDepartment}