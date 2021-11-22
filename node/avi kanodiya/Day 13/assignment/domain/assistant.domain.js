const db = require('../model/assistant.model')
const AssistantModel = db.User

const getAllAssistant = async (req, res, next) => {
    const patient = await AssistantModel.find()
    res.send(patient)
}

const getAssistant = async (req, res, next) => {
    const id = req.params.pId;
    const patient = await AssistantModel.findById(id);
    if (patient) {
        res.send(patient);
    } else {
        res.status(404).send("Patient Not Found");
    }
}

const insertAssistant = async (req, res, next) => {
    const data = req.body
    const Assistant = new AssistantModel(data)
    try {
        const result = await patient.save()
        res.send(result)
    }
    catch (e) {
        res.send(e.message)
    }
}

const deleteAssistant = async (req, res, next) => {
    let id = req.params.aId;
    const assistant = await AssistantModel.findByIdAndDelete(id);
    if (assistant) {
        res.send("Assistant Record Deleted Successfully");
    } else {
        res.status(404).send("Data Not Found");
    }
}

module.exports = { getAllAssistant, getAssistant, insertAssistant, deleteAssistant }