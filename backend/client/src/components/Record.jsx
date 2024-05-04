import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Record() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    phone_Number: "",
    prescription: "",
  });
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
        if (record) {
          setForm(record);
        } else {
          console.warn(`Record with id ${id} not found`);
          navigate("/");
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
    fetchData();
  }, [params.id, navigate]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    const endpoint = isNew ? "http://localhost:5050/record" : `http://localhost:5050/record/${params.id}`;
    const method = isNew ? "POST" : "PATCH";

    try {
      const response = await fetch(endpoint, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
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
    <>
      <h3 className="text-lg font-semibold p-4">Create/Update Patient Record</h3>
      <form onSubmit={onSubmit} className="border rounded-lg overflow-hidden p-4">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-slate-900/10 pb-12 md:grid-cols-2">
          {/* Form Fields Here */}
          <InputField label="Name" name="name" value={form.name} onChange={handleChange} placeholder="First Last" />
          <InputField label="Age" name="age" type="number" value={form.age} onChange={handleChange} placeholder="22" />
          <RadioButtonsGroup form={form} onChange={handleChange} />
          <InputField label="Phone Number" name="phone_Number" type="text" value={form.phone_Number} onChange={handleChange} placeholder="0712345678" />
          <InputField label="Prescription" name="prescription" value={form.prescription} onChange={handleChange} placeholder="Azithromycin Tablets" />
          <input type="submit" value="Save Patient Records" className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 hover:text-accent-foreground h-9 rounded-md px-3 cursor-pointer mt-4" />
        </div>
      </form>
    </>
  );
}

function InputField({ label, name, type = "text", value, onChange, placeholder }) {
  return (
    <div className="sm:col-span-4">
      <label htmlFor={name} className="block text-sm font-medium leading-6 text-slate-900">
        {label}
      </label>
      <div className="mt-2">
        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
          <input
            type={type}
            name={name}
            id={name}
            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
}

function RadioButtonsGroup({ form, onChange }) {
  const options = ["Male", "Female", "Other"];
  return (
    <fieldset className="mt-4">
      <legend className="sr-only">Gender</legend>
      <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
        {options.map(option => (
          <div key={option} className="flex items-center">
            <input
              id={`gender${option}`}
              name="gender"
              type="radio"
              value={option}
              checked={form.gender === option}
              onChange={onChange}
              className="h-4 w-4 border-slate-300 text-slate-600 focus:ring-slate-600 cursor-pointer"
            />
            <label htmlFor={`gender${option}`} className="ml-3 block text-sm font-medium leading-6 text-slate-900 mr-4">
              {option}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
}
