'use client';

import React, { useState } from 'react';
import { FiCalendar, FiPlus, FiX } from 'react-icons/fi';

const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const AddWorkingHours = () => {
  const [startDate, setStartDate] = useState('');
  const [endDateEnabled, setEndDateEnabled] = useState(false);
  const [endDate, setEndDate] = useState('');
  const [repeat, setRepeat] = useState('Weekly');
  const [startTime, setStartTime] = useState('11.30 AM');
  const [endTime, setEndTime] = useState('1.30 PM');
  const [selectedDay, setSelectedDay] = useState('M');
  const [location, setLocation] = useState('All Locations');

  const handleDayClick = (day: string) => {
    setSelectedDay(day);
  };

  const handleSubmit = () => {
    const formData = {
      startDate,
      endDate: endDateEnabled ? endDate : null,
      repeat,
      startTime,
      endTime,
      selectedDay,
      location,
    };
    console.log('Form Data:', formData);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg text-sm">
      <h2 className="text-lg font-semibold text-gray-800">Add Working Hours</h2>
      <p className="text-gray-500 mb-4">Set when and when the teacher is working</p>

      {/* Start Date */}
      <div className="mb-3">
        <label className="block text-gray-700 mb-1">Start Date</label>
        <div className="relative">
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full border rounded-md p-2 pr-10"
          />
          <FiCalendar className="absolute right-3 top-3 text-gray-400" />
        </div>
      </div>

      {/* End Date */}
      {!endDateEnabled ? (
        <button
          className="text-blue-600 text-sm flex items-center mb-3"
          onClick={() => setEndDateEnabled(true)}
        >
          <FiPlus className="mr-1" /> Set End Date
        </button>
      ) : (
        <div className="mb-3">
          <label className="block text-gray-700 mb-1">End Date</label>
          <div className="relative flex items-center">
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full border rounded-md p-2 pr-10"
            />
            <button onClick={() => { setEndDateEnabled(false); setEndDate(''); }}>
              <FiX className="absolute right-3 top-3 text-gray-400" />
            </button>
          </div>
        </div>
      )}

      {/* Repeats */}
      <div className="mb-3">
        <label className="block text-gray-700 mb-1">Repeats</label>
        <select
          value={repeat}
          onChange={(e) => setRepeat(e.target.value)}
          className="w-full border rounded-md p-2"
        >
          <option value="Weekly">Weekly</option>
          <option value="Daily">Daily</option>
          <option value="Monthly">Monthly</option>
        </select>
      </div>

      {/* Time */}
      <div className="mb-3 flex gap-2">
        <div className="flex-1">
          <label className="block text-gray-700 mb-1">Start Time</label>
          <select
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="w-full border rounded-md p-2"
          >
            <option>11.30 AM</option>
            <option>12.00 PM</option>
            <option>1.00 PM</option>
            <option>2.00 PM</option>
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-gray-700 mb-1">End Time</label>
          <select
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="w-full border rounded-md p-2"
          >
            <option>1.30 PM</option>
            <option>2.30 PM</option>
            <option>3.00 PM</option>
            <option>4.00 PM</option>
          </select>
        </div>
      </div>

      {/* Days */}
      <div className="mb-3">
        <label className="block text-gray-700 mb-1">Days</label>
        <div className="flex space-x-2">
          {weekdays.map((day, index) => (
            <button
              key={index}
              onClick={() => handleDayClick(day)}
              className={`w-8 h-8 rounded-md border text-sm ${
                selectedDay === day
                  ? 'bg-blue-600 text-white'
                  : 'text-black border-gray-300'
              }`}
            >
              {day}
            </button>
          ))}
        </div>
      </div>

      {/* Location */}
      <div className="mb-5">
        <label className="block text-gray-700 mb-1">Location</label>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border rounded-md p-2"
        >
          <option>All Locations</option>
          <option>Location A</option>
          <option>Location B</option>
        </select>
      </div>

      {/* Actions */}
      <div className="flex justify-between">
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full">
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-6 py-2 rounded-full"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddWorkingHours;
