'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
    FiArrowLeft, FiChevronDown, FiChevronUp, FiPlayCircle,
    FiFileText as FiFileIcon, FiDownload,
    FiChevronLeft as FiMonthLeft, FiChevronRight as FiMonthRight,
    FiChevronRight
} from 'react-icons/fi';

// --- Content Tab Component (Reused from Yearly Plan) ---
const ContentTab = ({ label, isActive, onClick }: { label: string, isActive: boolean, onClick: () => void }) => (
    <button
        onClick={onClick}
        className={`px-4 py-2 text-sm font-medium whitespace-nowrap focus:outline-none border-b-2 transition-colors ${
            isActive
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
        }`}
    >
        {label}
    </button>
);

// --- Learning Video Item (Reused from Yearly Plan) ---
const VideoItem = ({ topic }: { topic: string }) => (
    <button className="w-full flex items-center justify-between p-3 text-left bg-gray-100/70 hover:bg-gray-200/70 rounded-lg transition-colors">
        <div className="flex items-center gap-3">
            <FiPlayCircle className="w-5 h-5 text-gray-500" />
            <span className="text-sm text-gray-700">{topic}</span>
        </div>
        <FiChevronRight className="w-4 h-4 text-gray-400" />
    </button>
);

// --- Learning Accordion (Reused from Yearly Plan) ---
interface LearningWeek {
    id: string;
    title: string;
    videoCount: number;
    videos: { id: string, topic: string }[];
}
const LearningAccordion = ({ week, isOpen, onToggle }: { week: LearningWeek, isOpen: boolean, onToggle: () => void }) => (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
        <button
            onClick={onToggle}
            className="w-full flex justify-between items-center p-4 hover:bg-gray-50 focus:outline-none transition-colors"
        >
            <div>
                <h3 className="text-md font-semibold text-gray-700">{week.title}</h3>
                <p className="text-xs text-gray-500">{week.videoCount} videos</p>
            </div>
            {isOpen ? <FiChevronUp className="w-5 h-5 text-gray-500" /> : <FiChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {isOpen && (
            <div className="p-4 border-t border-gray-200 bg-gray-50 space-y-2">
                {week.videos.map(video => <VideoItem key={video.id} topic={video.topic} />)}
            </div>
        )}
    </div>
);

// --- Upcoming Class Item ---
interface UpcomingClass {
    id: number;
    title: string;
    teacher: string;
    description: string;
    time: string;
    date: string;
}
const UpcomingClassItem = ({ uClass }: { uClass: UpcomingClass }) => (
    <div className="bg-gray-50/70 p-4 rounded-xl border border-gray-100 flex justify-between items-start">
        <div>
            <h4 className="text-sm font-semibold text-gray-800">{uClass.title}</h4>
            <p className="text-xs text-yellow-600 font-medium mt-0.5">{uClass.teacher}</p>
            <p className="text-xs text-gray-500 mt-1">{uClass.description}</p>
            <p className="text-xs text-gray-500 mt-0.5">{uClass.time}</p>
        </div>
        <div className="text-right flex-shrink-0 ml-4">
            <p className="text-xs text-gray-400 mb-1.5">{uClass.date}</p>
            <button className="px-6 py-2 bg-blue-600 text-white text-xs font-semibold rounded-full hover:bg-blue-700 transition-colors">
                Join
            </button>
        </div>
    </div>
);

// --- Course Material Item ---
const CourseMaterialItem = ({ fileName, date }: { fileName: string, date: string }) => (
    <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-3">
            <FiFileIcon className="w-8 h-8 text-green-600" />
        </div>
        <h4 className="text-sm font-semibold text-gray-700">{fileName}</h4>
        <p className="text-xs text-gray-500 mb-3">{date}</p>
        <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 text-xs font-medium rounded-lg hover:bg-gray-200 transition-colors">
            <FiDownload className="w-3.5 h-3.5" />
            Download
        </button>
    </div>
);


// --- Sample Data ---
const contentTabsData = ['Learning', 'Assessments', 'Mock Papers', 'Work Sheet'];
const learningWeeksData: LearningWeek[] = Array.from({ length: 5 }, (_, i) => ({
    id: `week${i + 1}`,
    title: `Learning Videos ( Week ${i + 1} )`,
    videoCount: i === 0 ? 4 : 3,
    videos: Array.from({ length: i === 0 ? 4 : 3 }, (_, j) => ({ id: `v${j + 1}`, topic: `Topic ${j + 1}` })),
}));

const upcomingClassesData: UpcomingClass[] = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    title: 'Title',
    teacher: "Teacher's Name",
    description: 'Description',
    time: '16:30',
    date: '16/5/25',
}));

const courseMaterialData = [
    { id: 1, fileName: 'File Name', date: '23rd June 2025' },
    { id: 2, fileName: 'File Name', date: '23rd June 2025' },
    { id: 3, fileName: 'File Name', date: '23rd June 2025' },
    { id: 4, fileName: 'File Name', date: '23rd June 2025' },
];

const attendanceData = { total: 20, attended: 17, missed: 3, percentage: 85 };


export default function CourseDetailPage() {
    const [activeContentTab, setActiveContentTab] = useState(contentTabsData[0]);
    const [openAccordionId, setOpenAccordionId] = useState<string | null>(learningWeeksData[0].id);
    const [currentMonth] = useState('June 2025');
    const [currentWeekFilter, setCurrentWeekFilter] = useState('Week 1'); // Or date filter for upcoming classes

    const headerUser = { name: "Shlok Agheda", role: "Student", avatarSrc: "/placeholder-avatar-student.jpg" }; // UPDATE PATH

    const handleAccordionToggle = (weekId: string) => {
        setOpenAccordionId(prevId => (prevId === weekId ? null : weekId));
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <Header user={headerUser} />

            <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
                {/* Back Button and Page Title */}
                <div className="flex items-center gap-3 mb-6">
                    <button className="p-1.5 text-gray-600 hover:text-blue-600 focus:outline-none">
                        <FiArrowLeft className="w-5 h-5" />
                    </button>
                    <h1 className="text-xl font-semibold text-pink-600">Course Name</h1> {/* Or dynamic course name */}
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                    {/* Left Column (Learning Content & Course Material) */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Learning Content Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <div className="border-b border-gray-200 mb-6">
                                <nav className="-mb-px flex space-x-6 overflow-x-auto" aria-label="Content Tabs">
                                    {contentTabsData.map(tab => (
                                        <ContentTab
                                            key={tab}
                                            label={tab}
                                            isActive={activeContentTab === tab}
                                            onClick={() => setActiveContentTab(tab)}
                                        />
                                    ))}
                                </nav>
                            </div>

                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                                <div>
                                    <h2 className="text-xl font-bold text-blue-700">Earth and Space Science</h2>
                                    <p className="text-sm text-gray-500 mt-1">Solar system, weather patterns, and basic understanding of the Earth.</p>
                                </div>
                                <div className="flex items-center gap-3 flex-shrink-0">
                                    <div className="relative">
                                        <select
                                            value={currentWeekFilter}
                                            onChange={(e) => setCurrentWeekFilter(e.target.value)}
                                            className="appearance-none text-sm font-medium text-gray-700 bg-gray-100 px-4 py-2 rounded-lg pr-8 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        >
                                            <option value="Week 1">Week 1</option>
                                            <option value="Week 2">Week 2</option>
                                        </select>
                                        <FiChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-100 px-3 py-2 rounded-lg">
                                        <FiMonthLeft className="w-4 h-4 cursor-pointer hover:text-gray-800" />
                                        <span>{currentMonth}</span>
                                        <FiMonthRight className="w-4 h-4 cursor-pointer hover:text-gray-800" />
                                    </div>
                                </div>
                            </div>

                            {activeContentTab === 'Learning' && (
                                <div className="space-y-3">
                                    {learningWeeksData.map(week => (
                                        <LearningAccordion
                                            key={week.id}
                                            week={week}
                                            isOpen={openAccordionId === week.id}
                                            onToggle={() => handleAccordionToggle(week.id)}
                                        />
                                    ))}
                                </div>
                            )}
                            {activeContentTab !== 'Learning' && <div className="text-center py-10 text-gray-500">{activeContentTab} content goes here.</div>}
                        </div>

                        {/* Course Material Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h2 className="text-lg font-semibold text-pink-600 mb-6">Course Material</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {courseMaterialData.map(material => (
                                    <CourseMaterialItem key={material.id} {...material} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Upcoming Classes, Attendance, Certificate) */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Upcoming Classes Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-md font-semibold text-pink-600">Upcoming Classes</h3>
                                {/* Date filters for upcoming classes */}
                                <div className="flex items-center gap-1.5">
                                    <div className="relative">
                                        <select className="appearance-none text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1.5 rounded-md pr-7 focus:outline-none focus:ring-1 focus:ring-blue-500">
                                            <option value="date">Date</option> {/* Example filter */}
                                        </select>
                                        <FiChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none" />
                                    </div>
                                    <div className="flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
                                        <FiMonthLeft className="w-3 h-3 cursor-pointer hover:text-gray-700" />
                                        <span>{currentMonth}</span>
                                        <FiMonthRight className="w-3 h-3 cursor-pointer hover:text-gray-700" />
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-3 max-h-96 overflow-y-auto pr-2 custom-scrollbar"> {/* Scrollable list */}
                                {upcomingClassesData.map(uClass => <UpcomingClassItem key={uClass.id} uClass={uClass} />)}
                            </div>
                        </div>

                        {/* Attendance Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h3 className="text-md font-semibold text-gray-800 mb-3">Attendance</h3>
                            <p className="text-xs text-gray-500 mb-2">
                                Total : {attendanceData.total}   Attended : {attendanceData.attended}   Missed : {attendanceData.missed}
                            </p>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div
                                    className="bg-blue-600 h-2.5 rounded-full"
                                    style={{ width: `${attendanceData.percentage}%` }}
                                ></div>
                            </div>
                             <p className="text-xs text-blue-600 font-medium text-right mt-1">{attendanceData.percentage}%</p>
                        </div>

                        {/* Download Certificate Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                             <h3 className="text-md font-semibold text-gray-800 mb-4">Download Certificate</h3>
                             <button className="w-full max-w-xs mx-auto flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 text-gray-600 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors">
                                <FiDownload className="w-4 h-4" />
                                Download
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}