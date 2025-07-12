'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const subjects = Array.from({ length: 8 }, (_, i) => `Subject ${i + 1}`);

const AdminCourse: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState('Option 1');

  return (
    <div className="flex gap-6 flex-col sm:flex-row rounded-2xl border border-gray-200 bg-white p-6">
      {/* Left Form Section */}
      <div className="w-full max-w-sm space-y-6">
        <div>
          <h2 className="text-[#ff3366] text-base font-semibold mb-4">Select Membership Plan</h2>

          <div className="space-y-6">
            {/* Custom Dropdown */}
            <div className="relative">
              <label className="block text-sm mb-1">Choose Membership Plan</label>
              <select
                value={selectedPlan}
                onChange={(e) => setSelectedPlan(e.target.value)}
                className="w-full appearance-none bg-[#f9fafb] rounded-full border border-gray-300 px-4 py-2 pr-10 text-sm"
              >
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
              <FiChevronDown className="absolute right-3 top-8 text-black pointer-events-none" size={18} />
            </div>

            {/* Validity */}
            <div>
              <label className="block text-sm mb-1">Validity</label>
              <input
                type="text"
                placeholder="Text"
                className="w-full rounded-full bg-[#f9fafb] border border-gray-300 px-4 py-2 text-sm"
              />
            </div>

            {/* Number of Sessions */}
            <div>
              <label className="block text-sm mb-1">Number of Sessions</label>
              <input
                type="text"
                placeholder="Text"
                className="w-full rounded-full bg-[#f9fafb] border border-gray-300 px-4 py-2 text-sm"
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-center sm:justify-end gap-4">
          <Link href={"/admin-b2c/admin-panel/course-management"} className="rounded-full px-6 py-2 text-sm font-medium text-[#ff3366] bg-[#ffe6ec] hover:bg-[#ffd4df] transition">
            Discard
          </Link>
          <Link href={"/admin-b2c/admin-panel/course-management"} className="rounded-full px-6 py-2 text-sm font-medium text-white bg-[#3366ff] hover:bg-[#2b5de0] transition">
            Save
          </Link>
        </div>
      </div>

      {/* Right Subject Selector */}
      <div className="w-full max-w-xs bg-[#f9fafb] border rounded-2xl p-4 ">
        <h3 className="text-lg font-semibold mb-3">Select Subjects</h3>
        <div className="space-y-5 overflow-y-auto custom-scrollbar-thin max-h-[280px]">
          {subjects.map((subject, index) => (
            <label key={index} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="subject"
                value={subject}
                checked={selectedSubject === subject}
                onChange={() => setSelectedSubject(subject)}
                className="peer hidden"
              />
              <div className="w-4 h-4 rounded-full border-2 border-[#6b7280] peer-checked:border-[#3366ff] flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-[#3366ff] peer-checked:block hidden" />
              </div>
              <span className="text-base font-normal">{subject}</span>
            </label>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AdminCourse;
