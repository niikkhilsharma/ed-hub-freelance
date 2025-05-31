'use client';

import { useState } from 'react';
import Image from 'next/image'; // Keep for images within main content
import {
    // FiGrid, FiBookOpen, FiMessageSquare, FiVideo, FiBell, // Moved to Header
    FiChevronLeft, FiChevronRight,
    FiMessageSquare as FiChatIcon, // Alias for teacher chat icon
    FiVideo as FiVideoActivity,
    FiFileText as FiFileActivity
} from 'react-icons/fi';

import Header from '@/components/layout/Header';   // <--- IMPORT THE HEADER
import Footer from '@/components/layout/Footer';   // <--- IMPORT THE FOOTER

// --- Key Focus Area Pill ---
const FocusPill = ({ label }: { label: string }) => (
    <button className="px-5 py-2.5 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors">
        {label}
    </button>
);

// --- Learning Activity Item ---
interface Activity {
    id: number;
    type: 'video' | 'document';
    category: string;
    topic: string;
    dateRange: string;
    status: 'join' | 'not_started' | 'completed';
}
const ActivityItem = ({ activity }: { activity: Activity }) => {
    const Icon = activity.type === 'video' ? FiVideoActivity : FiFileActivity;
    const iconBgColor = activity.type === 'video' ? 'bg-pink-500' : 'bg-blue-500';

    return (
        <div className="flex items-center justify-between p-4 bg-gray-50/50 rounded-xl border border-gray-100 hover:shadow-sm transition-shadow">
            <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${iconBgColor} text-white flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-6 h-6" />
                </div>
                <div>
                    <p className={`text-xs font-medium ${activity.type === 'video' ? 'text-pink-600' : 'text-blue-600'}`}>{activity.category}</p>
                    <h4 className="text-sm font-semibold text-gray-800 mt-0.5">{activity.topic}</h4>
                    <p className="text-xs text-gray-500 mt-0.5">{activity.dateRange}</p>
                </div>
            </div>
            {activity.status === 'join' && (
                 <div className="flex items-center gap-2">
                    <button className="px-6 py-2 bg-transparent text-blue-600 text-sm font-semibold rounded-full border-2 border-blue-600 hover:bg-blue-50 transition-colors">
                        Join
                    </button>
                    <div className="w-1.5 h-8 bg-orange-400 rounded-full self-stretch"></div>
                </div>
            )}
            {activity.status === 'not_started' && (
                <span className="text-sm text-gray-500 font-medium">Not Started</span>
            )}
        </div>
    );
};

// --- Teacher Item ---
const TeacherItem = ({ avatarSrc, name, subject }: { avatarSrc: string, name: string, subject: string }) => (
    <div className="flex items-center justify-between p-3 bg-gray-50/50 rounded-lg border border-gray-100">
        <div className="flex items-center gap-3">
            <Image src={avatarSrc} alt={name} width={40} height={40} className="rounded-full object-cover" />
            <div>
                <p className="text-sm font-semibold text-gray-800">{name}</p>
                <p className="text-xs text-pink-600 font-medium">{subject}</p>
            </div>
        </div>
        <button className="p-2 text-gray-500 hover:text-blue-600">
            <FiChatIcon className="w-5 h-5" />
        </button>
    </div>
);

// --- Notification Item ---
const NotificationItem = ({ title, message, date }: { title: string, message: string, date: string }) => (
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h5 className="text-sm font-semibold text-gray-800 mb-1">{title}</h5>
        <p className="text-xs text-gray-600 leading-relaxed mb-2 line-clamp-2">{message}</p>
        <p className="text-xs text-gray-400 text-right">{date}</p>
    </div>
);

// Sample Data (Must be defined)
const studentData = {
    name: 'Shlok Agheda',
    role: 'Student', // Added role for Header prop
    class: 'Class 8A',
    group: 'Group A',
    avatar: '/placeholder-avatar-student.jpg', // UPDATE PATH
    avatarSrc: '/placeholder-avatar-student.jpg', // For Header prop
    gender: 'Male',
    dob: '15 Jun 2015',
    email: 'example@gm.com',
    contact: '+91 1234567890',
    city: 'Mumbai',
    state: 'Maharashtra',
    dmitScore: 50,
    assessmentReportDate: 'June 2025',
    objective: "The assessment provides a holistic understanding of the student's standing across three critical areas: academics, brain development, and personality growth. It helps in identifying strengths and gaps to guide personalized strategies and long-term development.",
    focusAreas: ['Academics', 'Personality Development', 'Brain Development']
};

const classStats = {
    month: 'June 2025',
    complete: 2,
    total: 20,
    incomplete: 1,
    attendance: '15%',
    grade: '3.5',
    leaderBoardRank: 'Rank 5'
};

const teachersData = [
    { id: 1, name: 'Anita Sharma', subject: 'Math', avatarSrc: '/teacher-avatar-1.jpg' }, // UPDATE PATHS
    { id: 2, name: 'Pooja Menon', subject: 'Science', avatarSrc: '/teacher-avatar-2.jpg' },
    { id: 3, name: 'Ritika Joshi', subject: 'English', avatarSrc: '/teacher-avatar-3.jpg' },
];

const learningActivitiesData: Activity[] = [
    { id: 1, type: 'video', category: 'Online Class: Science Topic', topic: 'Topic Name', dateRange: '28/4/2025 - 04/5/2025', status: 'join' },
    { id: 2, type: 'document', category: 'Online Class: Science Topic', topic: 'Topic Name', dateRange: '28/4/2025 - 04/5/2025', status: 'not_started' },
    { id: 3, type: 'video', category: 'Online Class: Science Topic', topic: 'Topic Name', dateRange: '28/4/2025 - 04/5/2025', status: 'join' },
    { id: 4, type: 'document', category: 'Online Class: Science Topic', topic: 'Topic Name', dateRange: '28/4/2025 - 04/5/2025', status: 'not_started' },
];

const notificationsData = [
    { id: 1, title: 'Notification Title', message: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem", date: '20/5/25' },
    { id: 2, title: 'Notification Title', message: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem", date: '20/5/25' },
    { id: 3, title: 'Notification Title', message: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem", date: '20/5/25' },
];


export default function StudentDashboardPage() {
    const [learningActivityFilter, setLearningActivityFilter] = useState<'Active' | 'Completed'>('Active');
    const [timeFilter, setTimeFilter] = useState<'Weekly' | 'Monthly'>('Weekly');

    // Prepare user data for the Header component
    const headerUser = {
        name: studentData.name,
        role: studentData.role,
        avatarSrc: studentData.avatarSrc
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <Header user={headerUser} /> {/* <--- USE THE HEADER COMPONENT HERE, passing user data */}

            <main className="container mx-auto p-4 sm:p-6 lg:p-8 flex-grow">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Profile Info Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                                <Image
                                    src={studentData.avatar}
                                    alt={studentData.name}
                                    width={100}
                                    height={100}
                                    className="rounded-full object-cover flex-shrink-0 shadow-md"
                                />
                                <div className="flex-1 text-center sm:text-left">
                                    <h2 className="text-2xl font-bold text-gray-800">{studentData.name}</h2>
                                    <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-1.5 mb-3">
                                        <span className="px-3 py-1 bg-pink-500 text-white text-xs font-semibold rounded-full">{studentData.class}</span>
                                        <span className="px-3 py-1 bg-pink-500 text-white text-xs font-semibold rounded-full">{studentData.group}</span>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 text-xs text-gray-600 gap-x-4 gap-y-1">
                                        <p><span className="font-medium text-gray-700">Gender:</span> {studentData.gender}</p>
                                        <p><span className="font-medium text-gray-700">DOB:</span> {studentData.dob}</p>
                                        <p><span className="font-medium text-gray-700">Email:</span> {studentData.email}</p>
                                        <p><span className="font-medium text-gray-700">Contact:</span> {studentData.contact}</p>
                                        <p><span className="font-medium text-gray-700">City:</span> {studentData.city}</p>
                                        <p><span className="font-medium text-gray-700">State:</span> {studentData.state}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                                <div className="bg-gray-100 p-4 rounded-lg text-center">
                                    <p className="text-sm text-gray-600">DMT & Skill Test</p>
                                    <p className="text-lg font-bold text-gray-800">Score: {studentData.dmitScore}</p>
                                </div>
                                <div className="bg-gray-100 p-4 rounded-lg text-center">
                                    <p className="text-sm text-gray-600">Assessment Report</p>
                                    <p className="text-lg font-bold text-gray-800">{studentData.assessmentReportDate}</p>
                                </div>
                            </div>
                            <div className="mt-6 bg-yellow-100 border-l-4 border-yellow-400 p-4 rounded-md">
                                <h3 className="text-sm font-semibold text-yellow-800 mb-1">Objective of the Year</h3>
                                <p className="text-xs text-yellow-700 leading-relaxed">{studentData.objective}</p>
                            </div>
                            <div className="mt-6">
                                <h3 className="text-md font-semibold text-gray-800 mb-3">Key Focus Area</h3>
                                <div className="flex flex-wrap gap-3">
                                    {studentData.focusAreas.map(area => <FocusPill key={area} label={area} />)}
                                </div>
                            </div>
                        </div>

                        {/* Learning Activities Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                                <h2 className="text-xl font-semibold text-gray-800">Learning Activities</h2>
                                <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-full">
                                    {['Active', 'Completed'].map(filter => (
                                        <button
                                            key={filter}
                                            onClick={() => setLearningActivityFilter(filter as 'Active' | 'Completed')}
                                            className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors ${
                                                learningActivityFilter === filter ? 'bg-blue-600 text-white shadow' : 'text-gray-600 hover:bg-gray-200'
                                            }`}
                                        >
                                            {filter}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                                <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full">
                                    <FiChevronLeft className="w-4 h-4 cursor-pointer hover:text-gray-800" />
                                    <span>June 2025</span>
                                    <FiChevronRight className="w-4 h-4 cursor-pointer hover:text-gray-800" />
                                </div>
                                <div className="flex items-center gap-1">
                                    <button
                                        onClick={() => setTimeFilter('Weekly')}
                                        className={`px-4 py-1.5 text-sm font-medium rounded-full border-2 transition-colors ${
                                            timeFilter === 'Weekly' ? 'bg-pink-500 text-white border-pink-500' : 'text-gray-600 border-gray-300 hover:bg-gray-100'
                                        }`}
                                    >
                                        Weekly ( 10 )
                                    </button>
                                     <button
                                        onClick={() => setTimeFilter('Monthly')}
                                        className={`px-4 py-1.5 text-sm font-medium rounded-full border-2 transition-colors ${
                                            timeFilter === 'Monthly' ? 'bg-pink-500 text-white border-pink-500' : 'text-gray-600 border-gray-300 hover:bg-gray-100'
                                        }`}
                                    >
                                        Monthly ( 50 )
                                    </button>
                                </div>
                                <button className="px-4 py-1.5 text-sm text-gray-600 font-medium bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                                    Yearly Plan Overview
                                </button>
                            </div>
                            <div className="space-y-4">
                                {learningActivitiesData.map(activity => <ActivityItem key={activity.id} activity={activity} />)}
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Classes Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-semibold text-gray-800">Classes</h2>
                                <div className="flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                                    <FiChevronLeft className="w-3 h-3 cursor-pointer hover:text-gray-700" />
                                    <span>{classStats.month}</span>
                                    <FiChevronRight className="w-3 h-3 cursor-pointer hover:text-gray-700" />
                                </div>
                            </div>
                            <div className="flex justify-between items-baseline mb-3">
                                <div>
                                    <p className="text-xs text-gray-500">Complete</p>
                                    <p className="text-2xl font-bold text-gray-800">{classStats.complete}<span className="text-sm font-normal text-gray-500"> / {classStats.total}</span></p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-gray-500">Incomplete</p>
                                    <p className="text-xl font-bold text-red-500">{classStats.incomplete}</p>
                                </div>
                            </div>
                            <div className="space-y-2 text-sm">
                                {['Attendance', 'Grade', 'Leader Board'].map(label => (
                                    <div key={label} className="flex justify-between items-center border-t border-gray-100 pt-2">
                                        <span className="text-gray-600">{label}</span>
                                        <span className="font-semibold text-blue-600">
                                            {label === 'Attendance' ? classStats.attendance : label === 'Grade' ? classStats.grade : classStats.leaderBoardRank}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Your Teachers Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h2 className="text-lg font-semibold text-gray-800 mb-4">Your teachers</h2>
                            <div className="space-y-3">
                                {teachersData.map(teacher => <TeacherItem key={teacher.id} {...teacher} />)}
                            </div>
                        </div>

                        {/* Notification Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h2 className="text-lg font-semibold text-gray-800 mb-4">Notification</h2>
                            <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
                                {notificationsData.map(notif => <NotificationItem key={notif.id} {...notif} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}