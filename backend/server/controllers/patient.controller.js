const Patient = require('../models/patient.model')

const getPatients = async(req, res) => {
        try {
          const patients = await Patient.find({});
          res.status(200).json(patients);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
    
}


const getPatient = async (req, res) =>{
    try {
        const { id } = req.params;
        const patient = await Patient.findById(id);
        res.status(200).json(patient);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

const createPatient = async (req, res) =>{
    try {
        const patient = await Patient.create(req.body);
        res.status(200).json(patient);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

const updatePatient = async (req, res) =>{
    try {
        const { id } = req.params;
        const patient = await Patient.findByIdAndUpdate(id, req.body);
    
        if (!patient) {
          return res.status(404).json({ message: "Patient Not Found" });
        }
    
        const updatedPatient = await Patient.findById(id);
          res.status(200).json(updatedPatient);
    
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

const deletePatient = async (req, res) =>{
    try {
        const { id } = req.params;
    
         const patient = await Patient.findByIdAndDelete(id);
         if(!patient){
          return res.status(404).json({message: "Patient Not Found"})
         }
         res.status(204).json({message: "Product Deleted Successfully"})
      } catch (error) {
       res.status(500).json({message: error.message})
      }
}

module.exports = {
    getPatients,
    getPatient,
    createPatient,
    updatePatient,
    deletePatient
};