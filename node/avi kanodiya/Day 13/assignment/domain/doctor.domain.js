const db = require('../model/doctor.model')
const DoctorModel = db.User;

const getAllDoctors = async (req, res, next) => {
    const patients = await DoctorModel.find();
    res.send(patients);
}

const getDoctor = async (req, res, next) => {
    let id = req.params.id;
    const patient = await DoctorModel.findById(id);
    if (patient) {
        res.send(patient);
    } else {
        res.status(404).send("Patient Not Found");
    }
}

const insertDoctor = async (req, res, next) => {
    let data = req.body;
    const patient = new DoctorModel(data);
    try {
        const result = await patient.save();
        res.send(result);
    } catch (e) {
        res.send(e.message);
    }
}

const deleteDoctor = async (req, res, next) => {
    let id = req.params.id;
    const patient = await DoctorModel.findByIdAndDelete(id);
    if (patient) {
        res.send("Patient Record Deleted Successfully");
    } else {
        res.status(404).send("Data Not Found");
    }
}

const updateDoctor = async (req, res, next) => {
    let data = req.body;
    let id = req.body._id;
    const doctors = await DoctorModel.find();
    let isAvail = doctors.find((e) => e.id == id);
    if (isAvail) {
        try {
            const result = await DoctorModel.findByIdAndUpdate(
                id,
                {
                    $set: data,
                },
                { new: true }
            );
            res.send(result);
        } catch (e) {
            res.send(e.message);
        }
    } else {
        res.status(404).send("Doctor Not Found");
    }
}

const getPatient = async (req, res, next) => {
    let id = req.params.dId;
    let pId = req.params.pId;
    const doctor = await DoctorModel.findById(id).populate("patients");
    if (doctor) {
        const result = doctor.patients.find((p) => p.id == pId);
        if (result) {
            res.send(result);
        } else {
            res.status(404).send("Patient Not Found");
        }
    } else {
        res.status(404).send("Doctor Not Found");
    }
}

const getSummary = async (req, res, next) => {
    let id = req.params.dId;
    const doctors = await DoctorModel.findById(id)
        .populate({
            path: "patients",
            populate: { path: "department" },
        })
        .populate({
            path: "patients",
            populate: { path: "medicines.medicine" },
        });
    if (doctors) {
        res.send(doctors);
    } else {
        res.status(404).send("Doctor Not Found");
    }
}

module.exports = { getAllDoctors, getDoctor, insertDoctor, deleteDoctor, updateDoctor, getPatient, getSummary }