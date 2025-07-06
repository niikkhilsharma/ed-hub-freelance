'use client';

import { FaTrash, FaEdit, FaPlus } from 'react-icons/fa';

const workingHours = [
  {
    day: 'Sunday',
    hours: '11.00 AM – 1.30 AM',
    repeats: 'Weekly',
    location: 'Institute Name',
    city: 'Pune, Maharashtra',
    working: true,
  },
  {
    day: 'Monday',
    hours: 'Not working',
    repeats: 'Repeats',
    location: 'Location',
    city: 'State/City',
    working: false,
  },
  {
    day: 'Tuesday',
    hours: '11.00 AM – 1.30 AM',
    repeats: 'Weekly',
    location: 'Institute Name',
    city: 'Pune, Maharashtra',
    working: true,
  },
  {
    day: 'Wednesday',
    hours: '11.00 AM – 1.30 AM',
    repeats: 'Weekly',
    location: 'Institute Name',
    city: 'Pune, Maharashtra',
    working: true,
  },
  {
    day: 'Thursday',
    hours: '11.00 AM – 1.30 AM',
    repeats: 'Weekly',
    location: 'Institute Name',
    city: 'Pune, Maharashtra',
    working: true,
  },
  {
    day: 'Friday',
    hours: '11.00 AM – 1.30 AM',
    repeats: 'Weekly',
    location: 'Institute Name',
    city: 'Pune, Maharashtra',
    working: true,
  },
];

export default function WorkingHours() {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Working Hours</h2>
          <p className="text-sm text-gray-500">See the days and time this teacher is working.</p>
        </div>
        <button className="bg-yellow-400 text-white text-sm font-semibold px-4 py-2 rounded-full hover:opacity-90">
          Add Working Hours
        </button>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-6 gap-4 text-sm font-semibold text-gray-600 px-4">
        <div>Day</div>
        <div>Hours</div>
        <div>Repeats</div>
        <div>Location</div>
        <div>State / City</div>
        <div></div>
      </div>

      {/* Rows */}
      <div className="space-y-3">
        {workingHours.map((item, idx) => (
          <div
            key={idx}
            className="grid grid-cols-6 gap-4 bg-[#f9fafb] px-4 py-3 rounded-xl items-center text-sm"
          >
            <div className="font-medium">{item.day}</div>
            <div className={item.working ? '' : 'text-gray-400 italic'}>{item.hours}</div>
            <div>{item.repeats}</div>
            <div>{item.location}</div>
            <div>{item.city}</div>
            <div className="flex items-center gap-3 justify-end text-gray-500">
              {item.working ? (
                <>
                  <FaEdit className="cursor-pointer hover:text-[#3366ff]" />
                  <FaTrash className="cursor-pointer hover:text-[#ff3366]" />
                </>
              ) : (
                <FaPlus className="cursor-pointer hover:text-[#3366ff]" />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-gray-700">Total Working Hours Calculated</p>
        <div className="bg-[#f5f5f5] text-sm text-gray-700 px-4 py-2 rounded-md w-fit">
          11.05 Hours Per Month
        </div>
        <button className="bg-[#3366ff] text-white text-sm px-6 py-2 rounded-full hover:opacity-90">
          Next
        </button>
      </div>
    </div>
  );
}
