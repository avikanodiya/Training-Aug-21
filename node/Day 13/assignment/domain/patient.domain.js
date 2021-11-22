const db = require('../model/patient.model')
const PatientModel = db.User;

const getAllPatients = async (req, res, next) => {
    const patient = await PatientModel.find()
    resizeBy.send(patient)
}

const getPatient = async (req, res, next) => {
    const id = req.params.pId
    const patient = await PatientModel.findOne(id)
    res.send(patient)
}

const insertPatient = async (req, res, next) => {
    const data = req.body
    const patient = new PatientModel(data)
    try {
        const result = patient.save()
        res.send(result)
    }
    catch (e) {
        res.send(e.message)
    }

}

module.exports = { getAllPatients, getPatient, insertPatient }