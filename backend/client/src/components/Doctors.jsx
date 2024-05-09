import React, { useState, useEffect } from 'react';
import { useFormData } from './datacontext';

const DoctorRecords = () => {
  const [doctorRecords, setDoctorRecords] = useState([]);
  const { formData, updateFormData } = useFormData();

  const fetchDoctorRecords = async () => {
    try {
      const response = await axios.get(`http://localhost:5050/doctor_id/`);
      setDoctorRecords(response.data);
    } catch (error) {
      console.error('Error fetching doctor records:', error);
    }
  };

  useEffect(() => {
    fetchDoctorRecords();
  }, []);

  // Function to handle prescription changes
  const handlePrescriptionChange = (prescription) => {
    updateFormData({ prescription });
  };

  return (
    <div>
      <h2>Doctors' Records</h2>
      <ul>
        {doctorRecords.map((doctor) => (
          <li key={doctor._id}>
            <h3>{doctor.name}</h3>
            <p>Specialty: {doctor.specialty}</p>
            <p>Prescription: {formData.prescription}</p>
            <button onClick={() => handlePrescriptionChange("New Prescription Value")}>
              Update Prescription
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorRecords;
