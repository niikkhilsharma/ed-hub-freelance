'use client';

import { useState } from 'react';
import Sidebar from '@/components/teacher/layout'; 
import Image from 'next/image';
import { FiSearch, FiBell, FiChevronDown } from 'react-icons/fi';

// --- Progress Bar Component (Reused) ---
const ProgressBar = ({ label, percentage }: { label: string, percentage: number }) => (
    <div className="mb-3">
        <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-700">{label}</span>
            {/* Optional: Display percentage text next to bar if needed */}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
                className="bg-green-500 h-2.5 rounded-full flex items-center justify-end pr-1.5"
                style={{ width: `${percentage}%` }}
            >
                 <span className="text-xs font-medium text-white">{percentage}%</span>
            </div>
        </div>
    </div>
);

// --- Textarea Component ---
const TextareaField = ({ id, label, placeholder, rows = 4, value, onChange, name }: { id: string, label?: string, placeholder: string, rows?: number, value?: string, onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void, name?: string }) => (
     <div className="w-full">
        {label && <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>}
        <textarea
            id={id}
            name={name || id}
            rows={rows}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 shadow-sm resize-none"
        />
    </div>
);


// --- Sample Data ---
const dmitSkillTestViewData = {
    date: '10 March 2025',
    totalMark: 50,
    strengths: [
        { name: 'Creativity (%)', value: 80 },
        { name: 'Logic (%)', value: 60 },
        { name: 'Leave3 (%)', value: 60 },
        { name: 'Leave4 (%)', value: 60 },
        { name: 'Leave5 (%)', value: 60 },
    ],
    summary: {
        totalQus: 50,
        attempted: 40,
        right: 30,
        wrong: 10,
    },
};


export default function DmitSkillTestViewPage() {
    const [feedback, setFeedback] = useState('');

    const handleFeedbackSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Feedback Submitted:", feedback);
        // Add API call to save feedback here
        setFeedback(''); // Clear feedback after submit
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />

            <main className="flex-1 ml-64"> {/* ml-64 for sidebar */}
                {/* Top Bar */}
                <header className="bg-white shadow-sm sticky top-0 z-30">
                    <div className="max-w-full mx-auto px-6 md:px-8 h-16 flex justify-between items-center">
                        <div>
                            <h1 className="text-xl font-semibold text-gray-800">DMIT and Skill Test View</h1>
                            <p className="text-xs text-gray-500">Dashboard</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="relative hidden sm:block">
                                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input type="text" placeholder="Search" className="pl-10 pr-4 py-2 w-48 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" />
                            </div>
                            <button className="p-2 bg-white border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 relative"> <FiBell className="w-5 h-5" /> </button>
                            <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg p-1.5 pr-2 cursor-pointer hover:bg-gray-50">
                                <Image src="/placeholder-avatar.jpg" alt="User Avatar" width={28} height={28} className="rounded-full" />
                                <div className="hidden md:block"> <p className="text-xs font-medium text-gray-800">Robert Allen</p> <p className="text-xs text-gray-500">Teacher</p> </div>
                                <FiChevronDown className="w-4 h-4 text-gray-500" />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content Area */}
                <div className="p-6 md:p-8">
                    {/* Top Section: Results */}
                    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                            {/* Left Column: Date & Total Mark */}
                            <div className="space-y-6 md:col-span-1">
                                <div className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm">
                                    <p className="text-xs text-gray-500 mb-1">Date</p>
                                    <p className="text-md font-semibold text-gray-700">{dmitSkillTestViewData.date}</p>
                                </div>
                                <div className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm">
                                    <p className="text-xs text-gray-500 mb-1">Total Mark</p>
                                    <p className="text-md font-semibold text-gray-700">{dmitSkillTestViewData.totalMark}</p>
                                </div>
                            </div>

                            {/* Middle Column: Strengths & Weaknesses */}
                            <div className="md:col-span-1 bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                                <h3 className="text-md font-semibold text-gray-700 mb-4">Strengths & Weaknesses</h3>
                                {dmitSkillTestViewData.strengths.map((item) => (
                                    <ProgressBar key={item.name} label={item.name} percentage={item.value} />
                                ))}
                            </div>

                            {/* Right Column: Summary Stats */}
                            <div className="space-y-3 md:col-span-1">
                                {[
                                    { label: 'Total Qus.', value: dmitSkillTestViewData.summary.totalQus, color: 'text-blue-600' },
                                    { label: 'Attempted', value: dmitSkillTestViewData.summary.attempted, color: 'text-purple-600' },
                                    { label: 'Right', value: dmitSkillTestViewData.summary.right, color: 'text-green-600' },
                                    { label: 'Wrong', value: dmitSkillTestViewData.summary.wrong, color: 'text-red-600' },
                                ].map(stat => (
                                    <div key={stat.label} className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm">
                                        <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
                                        <p className={`text-xl font-bold ${stat.color}`}>{stat.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Feedback Section */}
                    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                         <h2 className="text-lg font-semibold text-gray-800 mb-4">Feedback For Student</h2>
                         <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                            <TextareaField
                                id="studentFeedback"
                                placeholder="Write feedback for student"
                                rows={6}
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                            />
                            <div className="flex justify-start"> {/* Aligns button to the left */}
                                <button
                                    type="submit"
                                    className="px-8 py-2.5 bg-blue-600 text-white font-medium text-sm rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                                >
                                    Submit
                                </button>
                            </div>
                         </form>
                    </div>
                </div>
            </main>
        </div>
    );
}