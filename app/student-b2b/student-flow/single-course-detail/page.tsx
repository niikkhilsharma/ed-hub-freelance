// page.tsx (e.g., /app/course/[id]/page.tsx or /pages/course-detail.tsx)
"use client";

import React, { useState, useEffect, useRef } from 'react';
import Header from '@/components/layout/Header'; // Adjust path if needed
import Footer from '@/components/layout/Footer'; // Adjust path if needed
import { FiArrowLeft } from 'react-icons/fi';
import {
    LearningContentCard,
    UpcomingClassesCard,
    CourseMaterialSection,
    AttendanceCard,
    CertificateCard,
    LearningWeek,      // Type for learningWeeksData
    UpcomingClass,     // Type for upcomingClassesData
    CourseMaterial     // Type for courseMaterialData
} from './components'; // Assuming components.tsx is in the same directory

// --- Sample Data (remains in page.tsx for this example) ---
const contentTabsData = ['Learning', 'Assessments', 'Mock Papers', 'Work Sheet'];

const learningWeeksData: LearningWeek[] = Array.from({ length: 4 }, (_, i) => ({
	id: `week${i + 1}`,
	title: `Learning Videos ( Week ${i + 1} )`,
	videoCount: i === 0 ? 4 : 3, // Example: first week has 4 videos, others 3
	videos: Array.from({ length: i === 0 ? 4 : 3 }, (_, j) => ({
		id: `v${i + 1}-${j + 1}`, // More unique ID
		topic: `Topic ${j + 1} of Week ${i + 1}`,
	})),
}));

const upcomingClassesData: UpcomingClass[] = Array.from({ length: 3 }, (_, i) => ({ // Reduced for better initial view
	id: i + 1,
	title: 'Title of Upcoming Class Example',
	teacher: "Teacher's Name Here",
	description: 'A short description about what this upcoming class will cover.',
	time: '16:30 - 17:30',
	date: `1${i + 6}/5/25`, // Example varying date
}));

const courseMaterialData: CourseMaterial[] = [
	{ id: 1, fileName: 'File Name', date: '24th June 2025' },
	{ id: 2, fileName: 'File Name', date: '24th June 2025' },
	{ id: 3, fileName: 'File Name', date: '24th June 2025' },
	{ id: 4, fileName: 'File Name', date: '24th June 2025' },
    // Keeping 2 for desktop 2-column layout, can add more for scroll testing
];

const attendanceData = { total: 20, attended: 17, missed: 3, percentage: 85 };
// --- End Sample Data ---

export default function CourseDetailPage() {
	const [activeContentTab, setActiveContentTab] = useState(contentTabsData[0]);
	const [openAccordionId, setOpenAccordionId] = useState<string | null>(learningWeeksData[0]?.id || null);
	const [currentMonth, setCurrentMonth] = useState('June 2025');
	const [currentWeekFilter, setCurrentWeekFilter] = useState('Week 1');

	const leftColumnRef = useRef<HTMLDivElement>(null);
	const rightColumnRef = useRef<HTMLDivElement>(null);

	const headerUser = {
		name: 'Shlok Agheda', // Example user
		role: 'Student',
		avatarSrc: '/placeholder-avatar-student.jpg', // UPDATE THIS PATH
	};

	const handleAccordionToggle = (weekId: string) => {
		setOpenAccordionId(prevId => (prevId === weekId ? null : weekId));
	};

    const handleMonthPrev = () => { setCurrentMonth("May 2025"); /* Actual logic for date change */ };
    const handleMonthNext = () => { setCurrentMonth("July 2025"); /* Actual logic for date change */ };
    const handleWeekFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrentWeekFilter(e.target.value);
    };
    const handleBackClick = () => {
        if (typeof window !== "undefined") {
            window.history.back();
        }
    };

	const syncHeights = () => {
        if (window.innerWidth < 1024) { // Tailwind's lg breakpoint
            if (leftColumnRef.current) leftColumnRef.current.style.height = 'auto';
            if (rightColumnRef.current) rightColumnRef.current.style.height = 'auto';
            return;
        }
		if (leftColumnRef.current && rightColumnRef.current) {
			rightColumnRef.current.style.height = 'auto';
            requestAnimationFrame(() => {
                if (leftColumnRef.current && rightColumnRef.current) {
                    const leftHeight = leftColumnRef.current.offsetHeight;
                    rightColumnRef.current.style.height = `${leftHeight}px`;
                }
            });
		}
	};

    // Sync heights on various state changes and initial load
	useEffect(() => {
		const timer = setTimeout(syncHeights, 150);
		return () => clearTimeout(timer);
	}, [activeContentTab, openAccordionId, currentWeekFilter, currentMonth]); // Added currentMonth

    // Sync on resize
	useEffect(() => {
		window.addEventListener('resize', syncHeights);
        syncHeights(); // Initial sync on mount
		return () => window.removeEventListener('resize', syncHeights);
	}, []);

    // Sync with ResizeObserver for content changes in left column
	useEffect(() => {
		if (!leftColumnRef.current) return;
		const observer = new ResizeObserver(() => { setTimeout(syncHeights, 50); });
		observer.observe(leftColumnRef.current);
		return () => observer.disconnect();
	}, []);


	return (
		<div className="bg-[#eeeeee] min-h-screen flex flex-col">
			<Header user={headerUser} />

			<div className="flex items-center gap-2 bg-white px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
				<button
                    onClick={handleBackClick}
                    className="p-1 text-gray-600 hover:text-[#3366FF] focus:outline-none rounded-md"
                    aria-label="Go back"
                >
					<FiArrowLeft className="w-5 h-5 sm:w-5 sm:h-5 font-extrabold" /> {/* Original had font-extrabold */}
				</button>
				<h1 className="text-lg sm:text-xl font-bold text-[#FF3366]">Course Name</h1>
			</div>

			<main className="flex-grow container mx-auto p-3 sm:p-4 md:p-6 lg:p-8 space-y-6 md:space-y-8">
				{/* Main Content Grid (Top Part) */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 items-start">
					<div ref={leftColumnRef} className="lg:col-span-2 space-y-6 md:space-y-8">
						<LearningContentCard
                            tabs={contentTabsData}
                            activeTab={activeContentTab}
                            onTabClick={setActiveContentTab}
                            currentWeekFilter={currentWeekFilter}
                            onWeekFilterChange={handleWeekFilterChange}
                            currentMonth={currentMonth}
                            onMonthPrev={handleMonthPrev}
                            onMonthNext={handleMonthNext}
                            courseTitle="Earth and Space Science" // Example title
                            courseSubtitle="Solar system, weather patterns, and basic understanding of the Earth." // Example subtitle
                            learningWeeks={learningWeeksData}
                            openAccordionId={openAccordionId}
                            onAccordionToggle={handleAccordionToggle}
                        />
					</div>

					<div ref={rightColumnRef} className="lg:col-span-1"> {/* Removed space-y-6, height is synced */}
                        <UpcomingClassesCard
                            classes={upcomingClassesData}
                            currentWeekFilter={currentWeekFilter} // Assuming same filter applies
                            onWeekFilterChange={handleWeekFilterChange}
                            currentMonth={currentMonth}
                            onMonthPrev={handleMonthPrev}
                            onMonthNext={handleMonthNext}
                        />
					</div>
				</div>

				{/* Lower Content Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 items-start">
					<div className="lg:col-span-2"> {/* Removed space-y-8, direct child now */}
						<CourseMaterialSection materials={courseMaterialData} />
					</div>

					<div className="lg:col-span-1 space-y-4 md:space-y-6">
						<AttendanceCard attendance={attendanceData} />
						<CertificateCard />
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
}