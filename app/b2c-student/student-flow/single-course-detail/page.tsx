// page.tsx
"use client";

import React, { useState, useEffect, useRef } from 'react';
import Header from '@/components/layout/Header'; // Adjust path if needed
import Footer from '@/components/layout/Footer'; // Adjust path if needed
import { FiArrowLeft } from 'react-icons/fi';
import {
    LearningContentCard,
    UpcomingClassesCard,
    ExtraClass,
    AttendanceCard,
    CertificateCard,
    FillForm,
    LearningWeek,
    UpcomingClass,
    CourseMaterial
} from './components';

// --- Sample Data ---
const contentTabsData = ['Learning', 'Assessments', 'Mock Papers', 'Work Sheet'];
const learningWeeksData: LearningWeek[] = Array.from({ length: 4 }, (_, i) => ({ id: `week${i + 1}`, title: `Learning Videos ( Week 1 )`, videoCount: i === 0 ? 3 : 3, videos: Array.from({ length: i === 0 ? 4 : 3 }, (_, j) => ({ id: `v${i + 1}-${j + 1}`, topic: `Topic 1` }))}));
const upcomingClassesData: UpcomingClass[] = Array.from({ length: 10 }, (_, i) => ({ id: i + 1, title: 'Title', teacher: "Teacher's Name ", description: 'Description ', time: '16:30 ', date: `1${i + 6}/5/25` }));
const ExtraClassData: CourseMaterial[] = [{ id: 1, fileName: 'File Name', date: '24th June 2025' }, { id: 2, fileName: 'File Name', date: '24th June 2025' }];
const attendanceData = { total: 20, attended: 17, missed: 3, percentage: 85 };
// --- End Sample Data ---

export default function CourseDetailPage() {
    const [activeContentTab, setActiveContentTab] = useState(contentTabsData[0]);
    const [openAccordionId, setOpenAccordionId] = useState<string | null>(learningWeeksData[0]?.id || null);
    const [currentMonth, setCurrentMonth] = useState('June 2025');
    const [currentWeekFilter, setCurrentWeekFilter] = useState('Week 1');

    // Refs for the columns to measure and apply height
    const leftColumnRef = useRef<HTMLDivElement>(null);
    const rightColumnRef = useRef<HTMLDivElement>(null);

    const headerUser = { name: 'Shlok Agheda', role: 'Student', avatarSrc: '/images/person.jpg' };

    // --- JAVASCRIPT LOGIC TO SYNC COLUMN HEIGHTS ---
    useEffect(() => {
        const syncColumnHeights = () => {
            if (window.innerWidth < 1024) { // Tailwind's 'lg' breakpoint
                // On mobile, reset any inline height style to let them stack naturally
                if (rightColumnRef.current) {
                    rightColumnRef.current.style.height = 'auto';
                }
                return;
            }

            // On desktop, measure the left and apply to the right
            if (leftColumnRef.current && rightColumnRef.current) {
                // We use requestAnimationFrame to ensure the browser has finished painting
                requestAnimationFrame(() => {
                    if(leftColumnRef.current && rightColumnRef.current) {
                       const leftHeight = leftColumnRef.current.offsetHeight;
                       rightColumnRef.current.style.height = `${leftHeight}px`;
                    }
                });
            }
        };

        // Run on initial mount and when dependencies change
        syncColumnHeights();

        // Re-run when the window is resized
        window.addEventListener('resize', syncColumnHeights);

        // Use a ResizeObserver to detect content changes in the left column
        let observer: ResizeObserver | null = null;
        const leftColumn = leftColumnRef.current;
        if (leftColumn) {
            observer = new ResizeObserver(syncColumnHeights);
            observer.observe(leftColumn);
        }

        // Cleanup function to prevent memory leaks
        return () => {
            window.removeEventListener('resize', syncColumnHeights);
            if (observer && leftColumn) {
                observer.unobserve(leftColumn);
            }
        };
    // The dependency array ensures this effect runs when state that affects height changes
    }, [openAccordionId, activeContentTab]);


    const handleAccordionToggle = (weekId: string) => setOpenAccordionId(prevId => (prevId === weekId ? null : weekId));
    const handleMonthPrev = () => setCurrentMonth("May 2025");
    const handleMonthNext = () => setCurrentMonth("July 2025");
    const handleWeekFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => setCurrentWeekFilter(e.target.value);
    const handleBackClick = () => window.history.back();

    return (
        <div className="bg-[#eeeeee] min-h-screen flex flex-col">
            <Header user={headerUser} />

            <div className="flex items-center gap-2 bg-white px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
                <button onClick={handleBackClick} className="p-1 text-gray-600 hover:text-[#3366FF] focus:outline-none rounded-md" aria-label="Go back">
                    <FiArrowLeft className="w-5 h-5 sm:w-5 sm:h-5 font-extrabold" />
                </button>
                <h1 className="text-lg sm:text-xl font-bold text-[#FF3366]">Course Name</h1>
            </div>

            <main className="flex-grow container mx-auto p-3 sm:p-4 md:p-6 lg:p-8 space-y-4">
                {/* Main Content Grid (Top Part) */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                    
                    <div className="lg:col-span-2">
                        <LearningContentCard
                            tabs={contentTabsData} activeTab={activeContentTab} onTabClick={setActiveContentTab}
                            currentWeekFilter={currentWeekFilter} onWeekFilterChange={handleWeekFilterChange}
                            currentMonth={currentMonth} onMonthPrev={handleMonthPrev} onMonthNext={handleMonthNext}
                            courseTitle="Earth and Space Science" courseSubtitle="Solar system, weather patterns, and basic understanding of the Earth."
                            learningWeeks={learningWeeksData} openAccordionId={openAccordionId} onAccordionToggle={handleAccordionToggle}
                        />
                    </div>

                    <div className="lg:col-span-1 flex flex-col gap-6 md:gap-8" >
                        <UpcomingClassesCard
                            classes={upcomingClassesData} currentWeekFilter={currentWeekFilter}
                            onWeekFilterChange={handleWeekFilterChange} currentMonth={currentMonth}
                            onMonthPrev={handleMonthPrev} onNext={handleMonthNext}
                        />
                        <FillForm />
                    </div>
                </div>

                {/* Lower Content Grid */}
                <div className="sm:mt-6 md:mt-0  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    <AttendanceCard attendance={attendanceData} />
                    <CertificateCard />
                    <ExtraClass materials={ExtraClassData} />
                </div>
            </main>
        </div>
    );
}