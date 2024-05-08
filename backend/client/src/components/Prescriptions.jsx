import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PrescriptionRecords = () => {
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    const fetchPrescriptions = async () => {
      try {
        const response = await axios.get(`http://localhost:5050/prescription_id`);
        setPrescriptions(response.data);
      } catch (error) {
        console.error('Error fetching prescriptions:', error);
      }
    };

    fetchPrescriptions();
  }, []);

  return (
    <div>
      <h2>Prescription Records</h2>
      <ul>
        {prescriptions.map((prescription, index) => (
          <li key={index}>
            <strong>Patient Name:</strong> {prescription.patientName}<br />
            <strong>Medication:</strong> {prescription.medication}<br />
            <strong>Dosage:</strong> {prescription.dosage}<br />
            <strong>Date:</strong> {new Date(prescription.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PrescriptionRecords;
