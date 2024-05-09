import React from 'react';
import { useNavigate } from "react-router-dom";
import { useFormData } from './datacontext'; // Make sure the path is correct

function InputField({ label, name, type, value, onChange, placeholder }) {
    return (
        <div className="mb-4">
            <label htmlFor={name} className="block text-sm font-medium text-slate-700">{label}</label>
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

export default function Finance() {
    const { formData, updateFormData } = useFormData();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        updateFormData({ [name]: value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5050/finance", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    charges: formData.charges,
                    amountPaid: formData.amountPaid
                }), // Only send charges and amount paid
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            navigate("/"); // Redirect after submission
        } catch (error) {
            console.error('Error submitting finance form:', error);
        }
    };

    return (
        <>
            <h3 className="text-lg font-semibold p-4">Submit Finance Record</h3>
            <form onSubmit={onSubmit} className="border rounded-lg overflow-hidden p-4">
                <InputField 
                    label="Charges" 
                    name="charges" 
                    type="number" 
                    value={formData.charges || ''} // Ensure undefined values are handled gracefully
                    onChange={handleChange} 
                    placeholder="Total Charges" 
                />
                <InputField 
                    label="Amount Paid" 
                    name="amountPaid" 
                    type="number" 
                    value={formData.amountPaid || ''} // Ensure undefined values are handled gracefully
                    onChange={handleChange} 
                    placeholder="Amount Paid" 
                />
                <input 
                    type="submit" 
                    value="Save Finance Record" 
                    className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 hover:text-accent-foreground h-9 rounded-md px-3 cursor-pointer mt-4" 
                />
            </form>
        </>
    );
}
