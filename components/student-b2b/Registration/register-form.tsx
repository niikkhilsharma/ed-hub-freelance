'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FiChevronDown } from 'react-icons/fi'; // For the dropdown icon

// Helper components for Input and Select fields to match styling
const FormInputField = ({ id, label, placeholder, type = "text", value, onChange }: { id: string, label: string, placeholder: string, type?: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => (
    <div className="w-full">
        <label htmlFor={id} className="block text-sm font-semibold text-gray-700 mb-1.5">
            {label}
        </label>
        <input
            id={id}
            name={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="block w-full rounded-xl border border-gray-200 bg-white px-5 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
        />
    </div>
);

const FormSelectField = ({ id, label, placeholder, options, value, onChange }: { id: string, label: string, placeholder: string, options: {value: string, label: string}[], value: string, onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void }) => (
    <div className="w-full">
        <label htmlFor={id} className="block text-sm font-semibold text-gray-700 mb-1.5">
            {label}
        </label>
        <div className="relative">
            <select
                id={id}
                name={id}
                value={value}
                onChange={onChange}
                className="appearance-none block w-full rounded-xl border border-gray-200 bg-white px-5 py-3.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm pr-10" // Added pr-10 for icon space
            >
                <option value="" disabled hidden={!!value}>{placeholder}</option>
                {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                <FiChevronDown className="w-5 h-5" />
            </div>
        </div>
    </div>
);


export default function StudentParentRegistrationPage() {
    const [formData, setFormData] = useState({
        name: '',
        class: '',
        dob: '',
        parentGuardianName: '',
        emailId: '',
        mobileNumber: '',
        country: '',
        state: '',
        city: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        // Add actual submission logic here
    };

    const countryOptions = [{value: 'india', label: 'India'}, {value: 'usa', label: 'USA'}]; // Example
    const stateOptions = [{value: 'rajasthan', label: 'Rajasthan'}, {value: 'california', label: 'California'}]; // Example
    const cityOptions = [{value: 'jaipur', label: 'Jaipur'}, {value: 'los_angeles', label: 'Los Angeles'}]; // Example


    return (
        <div
            className="min-h-screen flex items-center justify-center p-4 bg-blue-600" // Main blue background
            // If you have a pattern image for the blue background:
            // style={{ backgroundImage: 'url(/images/blue-pattern-bg.png)', backgroundRepeat: 'repeat', backgroundSize: 'auto' }}
        >
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row w-full max-w-4xl lg:max-w-5xl">

                {/* Left Section - Form */}
                <div className="w-full md:w-1/2 bg-white p-6 sm:p-8 lg:p-10">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <FormInputField id="name" label="Name" placeholder="Enter Name" value={formData.name} onChange={handleChange} />
                        <FormInputField id="class" label="Class" placeholder="Enter Class" value={formData.class} onChange={handleChange} />
                        <FormInputField id="dob" label="Date of Birth" placeholder="DD/MM/YY" type="text" value={formData.dob} onChange={handleChange} /> {/* Consider using a date picker */}
                        <FormInputField id="parentGuardianName" label="Parent / Guardian Name" placeholder="Enter Parent / Guardian Name" value={formData.parentGuardianName} onChange={handleChange} />
                        <FormInputField id="emailId" label="Email ID" placeholder="Enter Email ID" type="email" value={formData.emailId} onChange={handleChange} />
                        <FormInputField id="mobileNumber" label="Mobile Number" placeholder="+911234567890" type="tel" value={formData.mobileNumber} onChange={handleChange} />

                        <FormSelectField id="country" label="Country" placeholder="Option 1" options={countryOptions} value={formData.country} onChange={handleChange} />
                        <FormSelectField id="state" label="State" placeholder="Option 1" options={stateOptions} value={formData.state} onChange={handleChange} />
                        <FormSelectField id="city" label="City" placeholder="Option 1" options={cityOptions} value={formData.city} onChange={handleChange} />

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white font-semibold py-3.5 px-4 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors shadow-md mt-3"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                {/* Right Section - Image with Pattern Background */}
                <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-0">
                    {/* Pattern Background for Image Area */}
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                            backgroundImage: 'url(/images/science-pattern-bg.png)', // <-- UPDATE PATH to your pattern image
                            backgroundRepeat: 'repeat',
                            backgroundSize: 'auto', // Or 'contain', 'cover', or specific size
                        }}
                    ></div>

                    {/* Image */}
                    <div className="relative z-10 w-full h-full flex items-end justify-center"> {/* items-end to push image to bottom of its space */}
                         <Image
                            src="/images/student-studying-image.png" // <-- UPDATE PATH to your main student image
                            alt="Student studying"
                            width={500} // Adjust based on image aspect ratio
                            height={600} // Adjust based on image aspect ratio
                            className="w-auto h-[85%] md:h-[90%] max-h-full object-contain self-end" // self-end to stick to bottom, adjust height percentage
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}