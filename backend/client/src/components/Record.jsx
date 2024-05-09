import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFormData } from './datacontext'; // Import our custom hook

export default function Record() {
  const { formData, updateFormData } = useFormData();
  const [isNew, setIsNew] = useState(true);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id;
      if (!id) return;
      setIsNew(false);
      try {
        const response = await fetch(`http://localhost:5050/record/${id}`);
        if (!response.ok) {
          throw new Error(`An error has occurred: ${response.statusText}`);
        }
        const record = await response.json();
        // Update only the specified fields in the context
        const partialData = {
          name: record.name,
          age: record.age,
          gender: record.gender,
          contact: record.contact
        };
        updateFormData(partialData);
      } catch (error) {
        console.error("Fetch error:", error);
        navigate("/");
      }
    }
    fetchData();
  }, [params.id, navigate, updateFormData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (['name', 'age', 'gender', 'contact'].includes(name)) {
      updateFormData({ [name]: value });
    }
  };

  async function onSubmit(e) {
    e.preventDefault();
    const filteredData = {
      name: formData.name,
      age: formData.age,
      gender: formData.gender,
      contact: formData.contact
    };

    const endpoint = isNew ? "http://localhost:5050/record" : `http://localhost:5050/record/${params.id}`;
    const method = isNew ? "POST" : "PATCH";

    try {
      const response = await fetch(endpoint, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(filteredData),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      navigate("/");
    }
  }

  return (
    <form onSubmit={onSubmit} className="border rounded-lg overflow-hidden p-4">
      <InputField label="Name" name="name" value={formData.name} onChange={handleChange} placeholder="First Last" />
      <InputField label="Age" name="age" type="number" value={formData.age} onChange={handleChange} placeholder="Age" />
      <InputField label="Gender" name="gender" value={formData.gender} onChange={handleChange} placeholder="Gender" />
      <InputField label="Contact" name="contact" value={formData.contact} onChange={handleChange} placeholder="Contact Number" />
      <input type="submit" value="Save Changes" className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 cursor-pointer" />
    </form>
  );
}

function InputField({ label, name, type = "text", value, onChange, placeholder }) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
