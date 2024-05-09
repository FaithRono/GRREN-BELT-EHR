import React from 'react';
import { useFormData } from './datacontext'; // make sure the path is correct

const SharedForm = () => {
  const { formData, updateFormData } = useFormData();

  const handleChange = (event) => {
    const { name, value } = event.target;
    updateFormData({ [name]: value });
  };

  const FormField = ({ name, type = 'text', placeholder }) => (
    <input
      type={type}
      name={name}
      value={formData[name] || ''} // Ensure that undefined values are handled
      onChange={handleChange}
      placeholder={placeholder}
    />
  );

  return (
    <form>
      <FormField name="name" placeholder="Name" />
      <FormField name="age" type="number" placeholder="Age" />
      <FormField name="gender" placeholder="Gender" />
      <FormField name="contact" placeholder="Contact" />
      <FormField name="prescription" placeholder="Prescription" />
      <FormField name="appointment" type="date" placeholder="Appointment Date" />
      <FormField name="medication" placeholder="Medication" />
      <FormField name="charges" type="number" placeholder="Charges" />
      <FormField name="amountPaid" type="number" placeholder="Amount Paid" />
    </form>
  );
};

export default SharedForm;
