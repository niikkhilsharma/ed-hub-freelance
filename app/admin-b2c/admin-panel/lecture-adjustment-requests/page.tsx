"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { FiSearch, FiChevronDown } from 'react-icons/fi';
import GoBack from "@/components/principal/goback"; // Assuming this component exists as per your template

// --- Data Interfaces ---
interface RequestItem {
    id: string;
    studentName: string;
    avatarSrc: string;
    courseName: string;
    batch: string;
    emailId: string;
    assignedFaculty: string;
    lectureDate: string;
    reason: string;
    type: 'cancellation' | 'rescheduling';
    // Extra fields for rescheduling
    requestedDate?: string;
    requestedTime?: string;
}

// --- Sample Data ---
const cancellationRequests: RequestItem[] = Array.from({ length: 6 }, (_, i) => ({
    id: `cancel-${i}`,
    studentName: "Student Name",
    avatarSrc: "/admin/student.png",
    courseName: "Course Name",
    batch: "Batch",
    emailId: "Email ID",
    assignedFaculty: "Assigned Faculty Name",
    lectureDate: "24 / 6 / 25",
    reason: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis lacinia ante, nec accumsan enim. Vestibulum lacinia fermentum pretium. Nunc elementum ligula nec erat bibendum vulputate. Etiam sagittis, tellus laoreet semper vehicula, orci eros facilisis purus, at viverra ex lectus nec orci.",
    type: 'cancellation',
}));

const reschedulingRequests: RequestItem[] = Array.from({ length: 6 }, (_, i) => ({
    id: `resched-${i}`,
    studentName: "Student Name",
    avatarSrc: "/admin/student.png",
    courseName: "Course Name",
    batch: "Batch",
    emailId: "Email ID",
    assignedFaculty: "Assigned Faculty Name",
    lectureDate: "24 / 6 / 25",
    requestedDate: "25 / 6 / 25",
    requestedTime: "11:30 AM",
    reason: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis lacinia ante, nec accumsan enim. Vestibulum lacinia fermentum pretium. Nunc elementum ligula nec erat bibendum vulputate. Etiam sagittis, tellus laoreet semper vehicula, orci eros facilisis purus, at viverra ex lectus nec orci.",
    type: 'rescheduling',
}));

// --- Helper UI Components ---

const TopTabButton: React.FC<{ label: string; isActive: boolean; onClick: () => void; }> = ({ label, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`px-4 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors
        ${isActive ? 'bg-[#FF3366] text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}
    >
        {label}
    </button>
);

const FilterDropdown: React.FC<{ label: string }> = ({ label }) => (
    <div className="relative">
        <select className="appearance-none w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-xs sm:text-sm text-gray-700 pr-8 focus:outline-none focus:ring-1 focus:ring-blue-500">
            <option>{label}</option>
            <option>Option A</option>
            <option>Option B</option>
        </select>
        <FiChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
    </div>
);

const RequestCard: React.FC<{ request: RequestItem }> = ({ request }) => (
    <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-5 flex flex-col gap-4">
        {/* Student Info Section */}
        <div className="flex items-center gap-3 sm:gap-4">
            <Image
                src={request.avatarSrc}
                alt={request.studentName}
                width={72} height={72}
                className="w-14 h-14 sm:w-[72px] sm:h-[72px] rounded-lg object-cover flex-shrink-0"
            />
            <div className="flex-grow min-w-0">
                <h3 className="text-md sm:text-lg font-bold text-black truncate">{request.studentName}</h3>
                <p className="text-sm font-semibold text-red-500 truncate">{request.courseName}</p>
                <div className="flex flex-wrap gap-x-3 text-xs text-gray-500 mt-1">
                    <span>{request.batch}</span>
                    <span>{request.emailId}</span>
                </div>
            </div>
        </div>

        {/* Details Section */}
        <div className="text-xs sm:text-sm text-gray-700 space-y-1 border-t border-gray-200 pt-3">
            <p><strong className="font-medium text-gray-800">Assigned Faculty Name:</strong> {request.assignedFaculty}</p>
            {request.type === 'cancellation' && (
                <p><strong className="font-medium text-gray-800">Lecture Date:</strong> {request.lectureDate}</p>
            )}
            {request.type === 'rescheduling' && (
                 <>
                    <p><strong className="font-medium text-gray-800">Original Lecture Date:</strong> {request.lectureDate}</p>
                    <p><strong className="font-medium text-gray-800">Requested:</strong> Reschedule to {request.requestedDate}, {request.requestedTime}</p>
                 </>
            )}
        </div>

        {/* Reason Section */}
        <div className="bg-gray-50 rounded-xl p-3 sm:p-4 border border-gray-200">
             <h4 className="text-sm font-semibold text-black mb-1.5">
                Reason for {request.type === 'cancellation' ? 'Cancellation' : 'Reschedule'}
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">{request.reason}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end items-center gap-3 mt-1">
            <button className="px-6 py-2 text-sm font-semibold text-red-500 bg-red-100 rounded-full hover:bg-red-200 transition-colors">
                Reject
            </button>
             <button className="px-6 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
                Approve
            </button>
        </div>
    </div>
);


// --- Main Page Component ---
export default function RequestManagementPage() {
    const [activeTab, setActiveTab] = useState<'rescheduling' | 'cancellation'>('cancellation');
    
    const requestsToDisplay = activeTab === 'cancellation' ? cancellationRequests : reschedulingRequests;

    return (
        // Using your provided page template structure
        <div className="bg-[#eeeeee] min-h-screen flex flex-col">
            <div className="bg-gray-100">
                <GoBack GoBackHeading="Folder Name" /> {/* This is your template component */}
                <main className="flex-grow w-full max-w-screen-xl mx-auto p-4 sm:p-6 lg:p-8">
                    {/* Top Tabs */}
                    <div className="flex justify-center items-center mb-6">
                        <div className="flex items-center bg-white p-1.5 rounded-xl space-x-2 shadow-sm">
                            <TopTabButton label="Class Rescheduling" isActive={activeTab === 'rescheduling'} onClick={() => setActiveTab('rescheduling')} />
                            <TopTabButton label="Class Cancellation" isActive={activeTab === 'cancellation'} onClick={() => setActiveTab('cancellation')} />
                        </div>
                    </div>

                    {/* Filter Bar */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-6">
                        <div className="relative w-full sm:flex-grow">
                            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>
                        <div className="w-full sm:w-auto grid grid-cols-2 sm:flex sm:items-center gap-2 sm:gap-3 flex-shrink-0">
                            <FilterDropdown label="Filter 1" />
                            <FilterDropdown label="Filter 2" />
                            <FilterDropdown label="Filter 3" />
                            <FilterDropdown label="Filter 4" />
                        </div>
                    </div>

                    {/* Requests Grid */}
                    <div className="relative">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-h-[calc(100vh-20rem)] overflow-y-auto pr-3 pb-2">
                             {requestsToDisplay.map(request => (
                                <RequestCard key={request.id} request={request} />
                            ))}
                        </div>
                        {/* Custom Scrollbar Thumb */}
                        <div className="absolute top-0 right-0 h-full w-2">
                            <div className="bg-orange-300 h-1/4 rounded-full"></div>
                        </div>
                    </div>

                </main>
            </div>
        </div>
    );
}