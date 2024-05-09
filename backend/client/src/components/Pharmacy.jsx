import React from 'react';
import { useNavigate } from "react-router-dom";
import { useFormData } from './datacontext';

export default function Pharmacy() {
    const { formData, updateFormData } = useFormData();
    const navigate = useNavigate();

    function handleChange(e) {
        updateFormData({ [e.target.name]: e.target.value });
    }

    async function onSubmit(e) {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5050/pharmacy", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ medication: formData.medication }),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            navigate("/");
        } catch (error) {
            console.error('Error submitting pharmacy form:', error);
        }
    }

    return (
        <>
            <h3 className="text-lg font-semibold p-4">Submit Pharmacy Record</h3>
            <form onSubmit={onSubmit} className="border rounded-lg overflow-hidden p-4">
                <InputField label="Medication" name="medication" value={formData.medication} onChange={handleChange} placeholder="Medication Details" />
                <input type="submit" value="Save Pharmacy Record" className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 hover:text-accent-foreground h-9 rounded-md px-3 cursor-pointer mt-4" />
            </form>
        </>
    );
}

function InputField({ label, name, value, onChange, placeholder }) {
    return (
        <div className="sm:col-span-4">
            <label htmlFor={name} className="block text-sm font-medium leading-6 text-slate-900">
                {label}
            </label>
            <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                        type="text"
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
