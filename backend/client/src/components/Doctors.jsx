import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DoctorRecords = () => {
  const [doctorRecords, setDoctorRecords] = useState([]);

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

  return (
    <div>
      <h2>Doctors' Records</h2>
      <ul>
        {doctorRecords.map((doctor) => (
          <li key={doctor._id}>
            <h3>{doctor.name}</h3>
            <p>Specialty: {doctor.specialty}</p>
            <p>Location: {doctor.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorRecords;
