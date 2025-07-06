'use client';

import { FaChevronDown } from 'react-icons/fa';

export default function TeacherSettingsForm() {
  return (
    <div className="space-y-6">
      {/* Note Textarea */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-black">Note for the Teacher</label>
        <textarea
          placeholder="Text"
          className="w-full h-28 bg-[#f9fafb] text-black text-sm px-4 py-2 rounded-xl border border-gray-200 focus:outline-none resize-none"
        />
      </div>

      {/* Training Period */}
      <Dropdown label="Training Period" options={['1 Month', '2 Months', '3 Months']} />

      {/* Payment Per Hour */}
      <Dropdown label="Payment Per Hour" options={['Rs. 00000', 'Rs. 10000', 'Rs. 15000']} />

      {/* Probation Period */}
      <Dropdown label="Probation Period" options={['Solution', 'No Solution']} />

      {/* Example Question */}
      <Dropdown label="Example Question" options={['Solution', 'No Solution']} />

      {/* Save Button */}
      <div>
        <button className="bg-[#3366ff] text-white text-sm font-medium py-2 px-8 rounded-full hover:opacity-90">
          Save
        </button>
      </div>
    </div>
  );
}

// Reusable Dropdown component
function Dropdown({ label, options }: { label: string; options: string[] }) {
  return (
    <div className="space-y-2 relative">
      <label className="text-sm font-medium text-black">{label}</label>
      <div className="relative">
        <select className="appearance-none w-full bg-[#f9fafb] text-black text-sm py-2 px-4 pr-10 rounded-2xl border border-gray-200 focus:outline-none">
          {options.map((option, i) => (
            <option key={i}>{option}</option>
          ))}
        </select>
        <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
      </div>
    </div>
  );
}
