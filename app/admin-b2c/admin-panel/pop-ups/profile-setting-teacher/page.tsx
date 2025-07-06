"use client";

import React, { useState } from 'react';
import { FiCheck } from 'react-icons/fi'; // Using FiCheck for the checkmark icon

// --- Helper UI Components (defined within this file for self-containment) ---

// Custom Checkbox Row Component
interface SettingCheckboxProps {
    label: string;
    isChecked: boolean;
    onToggle: () => void;
}
const SettingCheckbox: React.FC<SettingCheckboxProps> = ({ label, isChecked, onToggle }) => (
    <div 
        onClick={onToggle}
        className="flex items-center gap-3 cursor-pointer group"
        aria-checked={isChecked}
        role="checkbox"
        tabIndex={0}
        onKeyDown={(e) => { if(e.key === ' ' || e.key === 'Enter') onToggle() }}
    >
        {/* The custom checkbox circle */}
        <div 
            className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-150
                ${isChecked ? 'bg-[#3366FF]' : 'bg-gray-200 group-hover:bg-gray-300'}`}
        >
            {isChecked && <FiCheck className="w-4 h-4 text-white" strokeWidth={4} />}
        </div>
        {/* The label */}
        <span className="text-lg text-black">{label}</span>
    </div>
);


// --- Main Profile Settings Popup Component ---
const ProfileSettingsPopup: React.FC = () => {
    // State to manage the settings
    const [settings, setSettings] = useState({
        showGender: true,
        showDob: true,
        showEmail: true,
        showContact: true,
        showState: true,
    });

    const toggleSetting = (key: keyof typeof settings) => {
        setSettings(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const handleSave = () => {
        console.log("Settings saved:", settings);
        alert("Settings Saved! (Check console)");
        // Add API call logic here
    };

    const handleCancel = () => {
        console.log("Cancelled");
        // Add logic to close the modal in a real app
        alert("Cancelled");
    };

    const handleDropTeacher = () => {
        console.log("Drop Current Teacher clicked");
        // Add logic for confirmation modal
        alert("Drop Current Teacher clicked");
    };
    
    const handleBlockProfile = () => {
        console.log("Block this profile clicked");
        // Add logic for confirmation modal
        alert("Block this profile clicked");
    };

    return (
        // The dark background for the entire page
        <div className="bg-gray-800 min-h-screen w-full flex items-center justify-center p-4">
            
            {/* The main popup card */}
            <div className="bg-white w-full max-w-sm rounded-3xl shadow-2xl p-6 sm:p-8 flex flex-col">
                
                {/* Title */}
                <h1 className="text-2xl font-bold text-black text-center mb-6 ">
                    Profile Setting
                </h1>
                
                {/* Checkbox Settings */}
                <div className="space-y-4 mb-6 ">
                    <SettingCheckbox 
                        label="Show Gender" 
                        isChecked={settings.showGender} 
                        onToggle={() => toggleSetting('showGender')}
                    />
                     <SettingCheckbox 
                        label="Show D.O.B." 
                        isChecked={settings.showDob} 
                        onToggle={() => toggleSetting('showDob')}
                    />
                     <SettingCheckbox 
                        label="Show Email" 
                        isChecked={settings.showEmail} 
                        onToggle={() => toggleSetting('showEmail')}
                    />
                     <SettingCheckbox 
                        label="Show Contact" 
                        isChecked={settings.showContact} 
                        onToggle={() => toggleSetting('showContact')}
                    />
                     <SettingCheckbox 
                        label="Show State" 
                        isChecked={settings.showState} 
                        onToggle={() => toggleSetting('showState')}
                    />
                </div>
                
                {/* Action Buttons */}
                <div className="space-y-3 mb-4">
                    <button 
                        onClick={handleDropTeacher}
                        className="w-full text-center py-3 text-[#FF3366] font-semibold bg-white border border-[#E5E7EB] rounded-full hover:bg-gray-50 transition-colors"
                    >
                        Drop Current Teacher
                    </button>
                     <button
                        onClick={handleBlockProfile} 
                        className="w-full text-center py-3 text-[#FF3366] font-semibold bg-[#FF33661A] rounded-full hover:bg-red-200 transition-colors"
                    >
                        Block this profile
                    </button>
                </div>

                {/* Footer Buttons */}
                <div className="flex items-center gap-3">
                    <button 
                        onClick={handleCancel}
                        className="w-full text-center py-3 text-[#6B7280] font-semibold bg-[#E5E7EB] rounded-full hover:bg-gray-300 transition-colors"
                    >
                        Cancel
                    </button>
                    <button 
                        onClick={handleSave}
                        className="w-full text-center py-3 text-white font-semibold bg-[#3366FF] rounded-full hover:bg-blue-700 transition-colors"
                    >
                        Save
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ProfileSettingsPopup;