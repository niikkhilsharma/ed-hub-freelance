"use client";

import React, { useState } from 'react';
import { FiPlus, FiCalendar, FiClock, FiChevronDown, FiX } from 'react-icons/fi';

// --- Helper UI Components (defined within this file for self-containment) ---

// Custom Radio Button for "Now" and "Schedule for later"
const CustomRadio: React.FC<{ label: string; isSelected: boolean; onSelect: () => void; }> = ({ label, isSelected, onSelect }) => (
    <div onClick={onSelect} className="flex items-center gap-3 cursor-pointer group">
        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-150
            ${isSelected ? 'border-blue-600 bg-white' : 'border-gray-400 group-hover:border-blue-500'}`}
        >
            {isSelected && <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>}
        </div>
        <span className="text-sm sm:text-base text-gray-800">{label}</span>
    </div>
);

// Day Selector Button
const DayButton: React.FC<{ day: string; isSelected: boolean; onSelect: (day: string) => void; }> = ({ day, isSelected, onSelect }) => (
    <button
        onClick={() => onSelect(day)}
        className={`w-8 h-8 sm:w-9 sm:h-9 rounded-md flex items-center justify-center font-semibold text-sm transition-colors
        ${isSelected ? 'bg-blue-600 text-white' : 'bg-transparent text-gray-700 hover:bg-gray-100'}`}
    >
        {day}
    </button>
);

// Form Input with optional Icon
const FormInputWithIcon: React.FC<{ placeholder: string; icon: React.ReactNode; }> = ({ placeholder, icon }) => (
    <div className="relative">
        <input
            type="text"
            placeholder={placeholder}
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">{icon}</div>
    </div>
);

// Form Dropdown with optional Icon
const FormDropdown: React.FC<{ options: string[]; icon?: React.ReactNode; }> = ({ options, icon }) => (
    <div className="relative">
        <select className={`w-full py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none ${icon ? 'pl-10' : 'pl-4'} pr-8`}>
            {options.map(opt => <option key={opt}>{opt}</option>)}
        </select>
        {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">{icon}</div>}
        <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none"/>
    </div>
);


// --- Main Edit Working Hours Popup Component ---
const EditWorkingHoursPopup: React.FC = () => {
    // State for the form
    const [applyTime, setApplyTime] = useState<'now' | 'later'>('now');
    const [showEndDate, setShowEndDate] = useState(false);
    const [selectedDays, setSelectedDays] = useState<Set<string>>(new Set(['M']));

    const toggleDay = (day: string) => {
        setSelectedDays(prev => {
            const newSelection = new Set(prev);
            if (newSelection.has(day)) {
                // In a real app, you might want logic to prevent unselecting all days
                // newSelection.delete(day);
            } else {
                newSelection.add(day);
            }
            return newSelection;
        });
    };
    
    // Hardcoded data
    const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    return (
        <div className="bg-gray-800 min-h-screen w-full flex items-center justify-center p-4 font-sans">
            
            <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-6 sm:p-8">
                
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Edit Working Hours</h1>
                    <p className="text-sm text-gray-500 mt-1">Editing the teacher's working hours</p>
                </div>
                
                {/* Form Content */}
                <div className="space-y-5">
                    {/* When to apply changes */}
                    <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">When do you want to apply changes?</p>
                        <div className="space-y-3">
                            <CustomRadio label="Now" isSelected={applyTime === 'now'} onSelect={() => setApplyTime('now')} />
                            <div className="flex items-center gap-4">
                                <CustomRadio label="Schedule for later" isSelected={applyTime === 'later'} onSelect={() => setApplyTime('later')} />
                                {applyTime === 'later' && (
                                    <div className="flex-grow">
                                        <FormInputWithIcon placeholder="DD / MM / YYYY" icon={<FiCalendar className="w-4 h-4" />} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    
                    {/* End Date Section (Conditional) */}
                    {!showEndDate ? (
                        <button onClick={() => setShowEndDate(true)} className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                            <FiPlus className="w-4 h-4"/> Set End Date
                        </button>
                    ) : (
                        <div>
                             <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                             <div className="flex items-center gap-2">
                                <div className="flex-grow">
                                    <FormInputWithIcon placeholder="DD / MM / YYYY" icon={<FiCalendar className="w-4 h-4" />} />
                                </div>
                                <button onClick={() => setShowEndDate(false)} className="p-1 text-gray-400 hover:text-gray-600">
                                    <FiX className="w-4 h-4" />
                                </button>
                             </div>
                        </div>
                    )}

                    {/* Repeats & Days */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 pt-2">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Repeats</label>
                            <FormDropdown options={["Weakly", "Daily", "Monthly"]} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Days</label>
                            <div className="flex items-center justify-between">
                                {daysOfWeek.map((day, index) => (
                                    <DayButton
                                        key={`${day}-${index}`}
                                        day={day}
                                        isSelected={selectedDays.has(day)}
                                        onSelect={toggleDay}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    {/* Time & Location */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                            <div className="flex items-center gap-2">
                                <FormDropdown options={["11.30 AM", "12.00 PM"]} />
                                <FormDropdown options={["1.30 PM", "2.00 PM"]} />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                            <FormDropdown options={["All Locations", "Online", "Mumbai Branch"]} />
                        </div>
                    </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex items-center gap-3 mt-8">
                    <button className="w-full text-center py-3 text-gray-700 font-semibold bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
                        Cancel
                    </button>
                    <button className="w-full text-center py-3 text-white font-semibold bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
                        Save
                    </button>
                </div>

            </div>
        </div>
    );
};

export default EditWorkingHoursPopup;