'use client';

import { useState, useRef, useEffect, Fragment } from 'react'; // Added useRef, useEffect, Fragment
import Sidebar from '@/components/teacher/layout'; // Adjust import path
import Image from 'next/image';
import {
    FiSearch,  FiChevronDown, FiFilter, FiUpload, FiMoreVertical, FiEye, FiFileText // Added FiEye, FiFileText
} from 'react-icons/fi';
import Header from '../header';

// --- Action Popup Component ---
const ActionPopup = ({ isOpen, onClose, onOptionClick, position }: { isOpen: boolean, onClose: () => void, onOptionClick: (action: string) => void, position: { top: number, left: number } | null }) => {
    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen || !position) return null;

    return (
        <div
            ref={popupRef}
            className="absolute z-20 bg-white rounded-lg shadow-xl border border-gray-200 w-40 py-2"
            style={{ top: `${position.top}px`, left: `${position.left}px` }}
        >
            <button
                onClick={() => onOptionClick('view')}
                className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
                <FiEye className="w-4 h-4 text-blue-500" />
                View
            </button>
            <button
                onClick={() => onOptionClick('answerSheet')}
                className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
                <FiFileText className="w-4 h-4 text-blue-500" />
                Answer Sheet
            </button>
        </div>
    );
};


// --- Sample Data ---
interface DmitSkillTestData {
    id: number;
    avatarSrc?: string;
    studentName: string;
    classNum: string; // "8th"
    date: string; // "10 March 2025"
    totalQus: number;
    totalMark: number;
    result: string; // "-" or "30/50"
    grade: string; // "Grade A", "Grade C"
}

const initialTestData: DmitSkillTestData[] = [
    { id: 1, avatarSrc: '/placeholder-student-avatar-1.png', studentName: 'Nguyen, Shane', classNum: '8th', date: '10 March 2025', totalQus: 50, totalMark: 50, result: '-', grade: 'View' }, // Special case for grade display
    { id: 2, avatarSrc: '/placeholder-student-avatar-2.png', studentName: 'Nguyen, Shane', classNum: '8th', date: '10 March 2025', totalQus: 50, totalMark: 50, result: '30/50', grade: 'Answer Sheet' }, // Special case
    { id: 3, avatarSrc: '/placeholder-student-avatar-3.png', studentName: 'Nguyen, Shane', classNum: '8th', date: '10 March 2025', totalQus: 50, totalMark: 50, result: '30/50', grade: 'Grade C' },
    { id: 4, studentName: 'Nguyen, Shane', classNum: '8th', date: '10 March 2025', totalQus: 50, totalMark: 50, result: '30/50', grade: 'Grade A' },
    { id: 5, studentName: 'Nguyen, Shane', classNum: '8th', date: '10 March 2025', totalQus: 50, totalMark: 50, result: '30/50', grade: 'Grade A' },
    { id: 6, studentName: 'Nguyen, Shane', classNum: '8th', date: '10 March 2025', totalQus: 50, totalMark: 50, result: '30/50', grade: 'Grade A' },
    { id: 7, studentName: 'Nguyen, Shane', classNum: '8th', date: '10 March 2025', totalQus: 50, totalMark: 50, result: '30/50', grade: 'Grade A' },
    { id: 8, studentName: 'Nguyen, Shane', classNum: '8th', date: '10 March 2025', totalQus: 50, totalMark: 50, result: '30/50', grade: 'Grade A' },
    { id: 9, studentName: 'Nguyen, Shane', classNum: '8th', date: '10 March 2025', totalQus: 50, totalMark: 50, result: '30/50', grade: 'Grade A' },
    { id: 10, studentName: 'Nguyen, Shane', classNum: '8th', date: '10 March 2025', totalQus: 50, totalMark: 50, result: '30/50', grade: 'Grade A' },
];


export default function DmitSkillTestPage() {
    const [testData] = useState<DmitSkillTestData[]>(initialTestData);
    const [activePopupId, setActivePopupId] = useState<number | null>(null);
    const [popupPosition, setPopupPosition] = useState<{ top: number, left: number } | null>(null);
    const actionButtonRefs = useRef<(HTMLButtonElement | null)[]>([]); // For positioning the popup

    const handleActionClick = (studentId: number, index: number) => {
        const buttonElement = actionButtonRefs.current[index];
        if (buttonElement) {
            const rect = buttonElement.getBoundingClientRect();
            setPopupPosition({
                top: rect.bottom + window.scrollY + 5, // Position below the button
                left: rect.left + window.scrollX - (160 - rect.width) / 2, // Center the popup (160 is approx popup width)
            });
        }
        setActivePopupId(prevId => (prevId === studentId ? null : studentId));
    };

    const closePopup = () => {
        setActivePopupId(null);
    };

    const handlePopupOptionClick = (action: string, studentId: number) => {
        console.log(`Action: ${action} for student ID: ${studentId}`);
        // Implement actual action logic here
        closePopup();
    };

    


    return (
        <Fragment> {/* For Popup Sibling */}
            <div className="flex min-h-screen bg-gray-100">
                <Sidebar />

                <main className="flex-1 ml-64 p-6 md:p-8">
                    {/* Top Bar */}
                    <Header title="DMIT and Skill Test" subtitle="Dashboard" />

                    {/* Main Content Area */}
                    <div className="p-6 md:p-8">
                        {/* Top Action Bar with Filters */}
                        <div className="mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                                <div className="relative w-full sm:w-auto">
                                    <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <input type="text" placeholder="Search" className="pl-9 pr-3 py-2.5 w-full sm:w-48 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm bg-white" />
                                </div>
                                <div className="relative w-full sm:w-auto">
                                    <select className="appearance-none w-full sm:w-40 pl-3 pr-8 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm text-gray-500 bg-white">
                                        <option value="">Select Class</option>
                                        <option value="8th">8th</option>
                                    </select>
                                    <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                                </div>
                                <div className="relative w-full sm:w-auto">
                                    <select className="appearance-none w-full sm:w-40 pl-3 pr-8 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm text-gray-500 bg-white">
                                        <option value="">Select Grade</option>
                                        <option value="A">Grade A</option>
                                    </select>
                                    <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                                </div>
                                <button className="px-5 py-2.5 bg-pink-500 text-white text-sm font-medium rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 flex items-center gap-1.5 w-full sm:w-auto justify-center">
                                    <FiFilter className="w-4 h-4" />
                                    Filter
                                </button>
                            </div>
                            <button className="px-5 py-2.5 bg-yellow-400 text-gray-800 text-sm font-medium rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 flex items-center gap-2 w-full sm:w-auto justify-center">
                                <FiUpload className="w-4 h-4" />
                                Export
                            </button>
                        </div>

                        {/* Table */}
                        <div className="bg-white rounded-lg shadow overflow-x-auto">
                            <table className="w-full min-w-[900px] text-sm"> {/* Increased min-width */}
                                <thead className="bg-blue-500/10 text-gray-600">
                                    <tr>
                                        {['Student name', 'Class', 'Date', 'Total Qus.', 'Total Mark', 'Result', 'Grade', 'Action'].map(header => (
                                            <th key={header} scope="col" className={`px-4 py-3 text-left font-medium ${header === 'Action' ? 'text-center' : ''}`}>
                                                {header}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {testData.map((item, index) => (
                                        <tr key={item.id} className={`${index % 2 !== 0 ? 'bg-blue-500/5' : 'bg-white'} hover:bg-gray-50`}>
                                            <td className="px-4 py-3 text-gray-800">
                                                <div className="flex items-center gap-3">
                                                    {item.avatarSrc ? (
                                                        <Image src={item.avatarSrc} alt={item.studentName} width={32} height={32} className="rounded-full object-cover" />
                                                    ) : (
                                                         <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs font-semibold">
                                                            {item.studentName.split(',')[0]?.[0] || item.studentName[0]}
                                                        </div>
                                                    )}
                                                    <span className="font-medium">{item.studentName}</span>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 text-gray-600">{item.classNum}</td>
                                            <td className="px-4 py-3 text-gray-600">{item.date}</td>
                                            <td className="px-4 py-3 text-gray-600">{item.totalQus}</td>
                                            <td className="px-4 py-3 text-gray-600">{item.totalMark}</td>
                                            <td className="px-4 py-3 text-gray-600">{item.result}</td>
                                            <td className="px-4 py-3 text-center">
                                                {/* Grade display - might need to be a select or just text */}
                                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium border border-gray-300 bg-white text-gray-700 min-w-[100px] justify-between">
                                                    {item.grade}
                                                    <FiChevronDown className="w-3 h-3 ml-1" />
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 text-center relative">
                                                <button
                                                    ref={el => {
                                                        actionButtonRefs.current[index] = el;
                                                        return;
                                                      }}
                                                    onClick={() => handleActionClick(item.id, index)}
                                                    className="text-pink-500 hover:text-pink-700 p-1 border border-pink-300 rounded-full hover:bg-pink-50"
                                                    title="Actions"
                                                >
                                                    <FiMoreVertical className="w-4 h-4" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>

            {/* Action Popup Invocation */}
            <ActionPopup
                isOpen={activePopupId !== null}
                onClose={closePopup}
                onOptionClick={(action) => activePopupId && handlePopupOptionClick(action, activePopupId)}
                position={popupPosition}
            />
        </Fragment>
    );
}