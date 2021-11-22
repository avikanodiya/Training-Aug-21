const db = require('../model/medicine.model')
const MedicineModel = db.User;

const getAllMedicine = async (req, res, next) => {
    const medicine = await MedicineModel.find()
    res.send(medicine)
}

const getMedicine = async (req, res, next) => {
    const id = req.params.mId
    const medicine = await MedicineModel.findOne(id)
}

const insertMedicine = async (req, res, next) => {
    let data = req.body;
    console.log(data);
    const medicine = new MedicineModel(data);
    try {
        const result = await medicine.save();
        res.send(result);
    } catch (e) {
        res.send(e.message);
    }
}

module.exports = { getAllMedicine, getMedicine, insertMedicine }