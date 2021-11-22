const express = require('express')
const router = express.Router()
const { getAllDoctors, getDoctor, insertDoctor, deleteDoctor, updateDoctor, getPatient, getSummary } = require('../domain/doctor.domain')

router.get("/", getAllDoctors);
router.get("/:DoctId", getDoctor);
router.delete("/:DoctId", deleteDoctor);
router.post("/", insertDoctor);
router.put("/", updateDoctor);
router.get("/:DoctId/summary", getSummary);
router.get("/:DoctId/patients/:PatId", getPatient);

module.exports = router;