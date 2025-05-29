'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
    FiArrowLeft, FiChevronDown, FiChevronUp, FiPlayCircle,
    FiChevronLeft as FiMonthLeft, FiChevronRight as FiMonthRight, // For month navigation
    FiChevronRight
} from 'react-icons/fi';

// --- Main Category Tab (Top horizontal bar) ---
const MainCategoryTab = ({ label, isActive, onClick, hasDropdown = false }: { label: string, isActive: boolean, onClick: () => void, hasDropdown?: boolean }) => (
    <button
        onClick={onClick}
        className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
            isActive
                ? 'bg-pink-500 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-200'
        }`}
    >
        {label}
        {hasDropdown && <FiChevronDown className={`w-4 h-4 transition-transform duration-200 ${isActive ? 'transform rotate-180' : ''} `} />}
    </button>
);

// --- Sub Category Item (Vertical navigation on left) ---
const SubCategoryItem = ({ label, isActive, onClick }: { label: string, isActive: boolean, onClick: () => void }) => (
    <button
        onClick={onClick}
        className={`w-full text-left px-5 py-3 text-sm font-medium rounded-lg transition-colors ${
            isActive
                ? 'bg-blue-600 text-white shadow'
                : 'text-gray-700 hover:bg-gray-100'
        }`}
    >
        {label}
    </button>
);

// --- Content Tab (Learning, Assessments, etc.) ---
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

// --- Learning Video Item (inside accordion) ---
const VideoItem = ({ topic }: { topic: string }) => (
    <button className="w-full flex items-center justify-between p-3 text-left bg-gray-100/70 hover:bg-gray-200/70 rounded-lg transition-colors">
        <div className="flex items-center gap-3">
            <FiPlayCircle className="w-5 h-5 text-gray-500" />
            <span className="text-sm text-gray-700">{topic}</span>
        </div>
        <FiChevronRight className="w-4 h-4 text-gray-400" />
    </button>
);

// --- Accordion Item (for weekly learning videos) ---
interface LearningWeek {
    id: string; // e.g., 'week1'
    title: string; // e.g., 'Learning Videos (Week 1)'
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


// --- Sample Data ---
const mainCategories = ['Academics', 'Skill Development', 'Brain Function', 'Sports', 'STEMnology', 'Competition', 'Extra curriculars'];
const academicSubCategories = ['Math', 'Science', 'English']; // For "Academics"
const contentTabsData = ['Learning', 'Assessments', 'Mock Papers', 'Work Sheet'];
const learningWeeksData: LearningWeek[] = Array.from({ length: 5 }, (_, i) => ({
    id: `week${i + 1}`,
    title: `Learning Videos ( Week ${i + 1} )`,
    videoCount: i === 0 ? 4 : 3, // First one has 4 videos
    videos: Array.from({ length: i === 0 ? 4 : 3 }, (_, j) => ({ id: `v${j + 1}`, topic: `Topic ${j + 1}` })),
}));


export default function YearlyPlanSubjectPage() {
    const [activeMainCategory, setActiveMainCategory] = useState(mainCategories[0]);
    const [activeSubCategory, setActiveSubCategory] = useState(academicSubCategories[0]);
    const [activeContentTab, setActiveContentTab] = useState(contentTabsData[0]);
    const [openAccordionId, setOpenAccordionId] = useState<string | null>(learningWeeksData[0].id); // Open first week
    const [currentMonth] = useState('June 2025');
    const [currentWeekFilter, setCurrentWeekFilter] = useState('Week 1');

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
                    <h1 className="text-xl font-semibold text-gray-800">Yearly Plan Overview</h1>
                </div>

                {/* Main Category Tabs (Horizontal Scroll) */}
                <div className="mb-8 bg-white p-3 rounded-xl shadow-sm overflow-x-auto">
                    <div className="flex space-x-2">
                        {mainCategories.map(category => (
                            <MainCategoryTab
                                key={category}
                                label={category}
                                isActive={activeMainCategory === category}
                                onClick={() => setActiveMainCategory(category)}
                                hasDropdown={category === 'Sports'} // Example of a category with dropdown
                            />
                        ))}
                    </div>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {/* Left Sidebar for Sub-categories */}
                    <div className="md:col-span-1 lg:col-span-1 bg-white rounded-2xl shadow-lg p-4 space-y-2">
                        {academicSubCategories.map(subCat => (
                            <SubCategoryItem
                                key={subCat}
                                label={subCat}
                                isActive={activeSubCategory === subCat}
                                onClick={() => setActiveSubCategory(subCat)}
                            />
                        ))}
                    </div>

                    {/* Right Content Area */}
                    <div className="md:col-span-3 lg:col-span-4 bg-white rounded-2xl shadow-lg p-6">
                        {/* Content Tabs (Learning, Assessments, etc.) */}
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

                        {/* Subject Title and Filters */}
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
                                        {/* Add more weeks */}
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

                        {/* Learning Content Accordions */}
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
                         {activeContentTab === 'Assessments' && <div className="text-center py-10 text-gray-500">Assessments content goes here.</div>}
                         {activeContentTab === 'Mock Papers' && <div className="text-center py-10 text-gray-500">Mock Papers content goes here.</div>}
                         {activeContentTab === 'Work Sheet' && <div className="text-center py-10 text-gray-500">Work Sheet content goes here.</div>}

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}