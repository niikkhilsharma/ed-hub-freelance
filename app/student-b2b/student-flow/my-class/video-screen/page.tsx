// page.tsx (e.g., /app/course/video/[id]/page.tsx)
"use client";

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
// Removed FiArrowLeft from here, use SimpleIconButton from ui-components if needed for page header
import {
    MainCategoryTabsBar,
    VideoPlayerSection,
    PlaylistSidebar,
    VideoInfoSection,
    PlaylistItemData, // Import types for sample data
    QuizResultItemData
} from './components';

// --- Sample Data (kept in page.tsx) ---
const mainCategoriesData = ['Academics', 'Skill Development', 'Brain Function', 'Sports', 'STEMnology', 'Competition', 'Extra curriculars'];
const playlistDataPage: PlaylistItemData[] = [
	{ id: 'v1', title: 'Title 1', subtitle: 'Subtitle for video 1', date: '23 / 5 / 25', duration: '45 Mins', isActive: true },
	{ id: 'v2', title: 'Quiz Name 1', subtitle: 'Subtitle for quiz 1', date: '23 / 5 / 25', duration: '15 Mins' },
	{ id: 'v3', title: 'Title 2 Locked', subtitle: 'Subtitle for video 2', date: '24 / 5 / 25', duration: '30 Mins', isLocked: true },
    // Added 5 more items to match original data count
	{ id: 'v4', title: 'Title 3', subtitle: 'Subtitle for video 3', date: '25 / 5 / 25', duration: '50 Mins'},
    { id: 'v5', title: 'Title 4', subtitle: 'Subtitle for video 4', date: '26 / 5 / 25', duration: '25 Mins'},
    { id: 'v6', title: 'Quiz Name 2 Locked', subtitle: 'Subtitle for quiz 2', date: '27 / 5 / 25', duration: '20 Mins', isLocked: true},
    { id: 'v7', title: 'Title 5', subtitle: 'Subtitle for video 5', date: '28 / 5 / 25', duration: '60 Mins'},
    { id: 'v8', title: 'Title 6', subtitle: 'Subtitle for video 6', date: '29 / 5 / 25', duration: '35 Mins', isLocked: true},
];
const upcomingQuizDataPage: QuizResultItemData[] = [
	{ id: 'q1', name: 'Quiz Alpha', subtitleOrDate: 'Introduction to Topic', date: '23/2/24' },
	{ id: 'q2', name: 'Quiz Beta (Locked)', subtitleOrDate: 'Advanced Concepts', isLocked: true, date: '23/2/24' },
	{ id: 'q3', name: 'Quiz Gamma (Locked)', subtitleOrDate: 'Final Review', isLocked: true, date: '23/2/24' },
];
const resultDataPage: QuizResultItemData[] = [
	{ id: 'r1', name: 'Quiz Alpha Result', subtitleOrDate: 'Completed: 20/5/25', scorePercentage: 60 },
	{ id: 'r2', name: 'Quiz Delta Result', subtitleOrDate: 'Completed: 15/5/25', scorePercentage: 85 },
];
const loremIpsumData = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros sapien, semper id velit quis, sollicitudin egestas sem. In ac bibendum lacus, at luctus nunc. Proin elementum ullamcorper luctus. Aenean nec nulla imperdiet, sodales lacus quis, tempus neque. Vestibulum id purus augue. Fusce vel lectus ac nibh auctor tristique. Aliquam a leo risus. Integer ut gravida risus. Aliquam lobortis tortor at tellus consequat egestas eget ac mi. Suspendisse id ligula accumsan, ullamcorper nibh non, semper felis. Integer efficitur luctus sem, varius vehicula tellus hendrerit nec. Vestibulum ut aliquet turpis. Suspendisse ac semper nisi. Donec tristique ligula a volutpat mollis. Duis vel ligula in mi cursus accumsan vel at quam. Nullam in metus nec turpis mattis ullamcorper sit amet at est. Aliquam fringilla sapien nec arcu faucibus luctus. Nullam elementum aliquam arcu, vitae lacinia erat aliquam nec. Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In ac lorem vitae urna elementum bibendum sed sit amet neque. Nam quis sem ac augue porta tempor vel non tortor. Etiam sollicitudin odio ligula, vel eleifend nisl viverra quis. Sed sed nunc scelerisque, fringilla magna vitae, condimentum odio. Phasellus sed rutrum ligula, sed interdum lorem. Etiam massa nisi, eleifend ut sollicitudin accumsan, viverra vel ex. Pellentesque id enim tincidunt, consequat felis a, tempor nisi. Cras hendrerit lacinia tellus at sollicitudin. Nullam dolor enim, luctus id auctor ut, ultrices eget nulla. Cras vestibulum quam id sapien efficitur volutpat. Cras tempor magna elementum maximus faucibus.';
// --- End Sample Data ---


export default function CourseVideoPage() {
	const [activeMainCategory, setActiveMainCategory] = useState(mainCategoriesData[0]);
	const [activeInfoTab, setActiveInfoTab] = useState<'Overview' | 'Quiz' | 'Result'>('Result'); // Matched original default
	const [currentVideoTime, setCurrentVideoTime] = useState(30); // Example
    const [activePlaylistItemId, setActivePlaylistItemId] = useState<string | null>(playlistDataPage[0]?.id || null);


	const headerUser = { name: 'Shlok Agheda', role: 'Student', avatarSrc: '/placeholder-avatar-student.jpg' };

    const handlePlaylistItemClick = (item: PlaylistItemData) => {
        if (!item.isLocked) {
            setActivePlaylistItemId(item.id);
            console.log('Playing:', item.title);
            // Add logic to change video source etc.
        } else {
            console.log('Video locked:', item.title);
            // Optionally show a message or do nothing
        }
    };

    const handleVideoPlayerBackClick = () => {
        console.log("Video player back clicked - navigate to course detail or previous page");
        // e.g., router.back() or router.push('/courses/some-course-id')
    };

	return (
		<div className="bg-gray-100 min-h-screen flex flex-col">
			<Header user={headerUser} />

			<main className="flex-grow container mx-auto p-3 sm:p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6">
				<MainCategoryTabsBar
                    categories={mainCategoriesData}
                    activeCategory={activeMainCategory}
                    onCategoryClick={setActiveMainCategory}
                />

                {/* THIS IS THE CRITICAL SECTION FOR LAYOUT */}
				<div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* 
                        On large screens (lg:), VideoPlayerSection needs to know it shouldn't
                        try to be wider than the space left by the fixed-width playlist.
                        Adding `lg:w-[calc(100%-width_of_playlist)]` or `min-w-0` to the flex child helps.
                        Tailwind's `flex-1` usually handles this, but sometimes `min-w-0` is needed on a flex child
                        to prevent its content from forcing it to be too wide.
                    */}
					<div className="lg:flex-1 lg:min-w-0"> {/* Added lg:min-w-0 */}
                        <VideoPlayerSection
                            courseTitle="Earth and Space Science"
                            courseSubtitle="Solar system, weather patterns, and basic understanding of the Earth."
                            videoThumbnailSrc="/images/video-image.png" // UPDATE PATH
                            currentVideoTime={currentVideoTime}
                            onBackClick={handleVideoPlayerBackClick}
                        />
                    </div>
					<PlaylistSidebar
                        playlistItems={playlistDataPage.map(item => ({ ...item, isActive: item.id === activePlaylistItemId }))}
                        onItemClick={handlePlaylistItemClick}
                    />
				</div>

				<VideoInfoSection
                    activeTab={activeInfoTab}
                    onTabChange={setActiveInfoTab}
                    overviewContent={loremIpsumData}
                    upcomingQuizzes={upcomingQuizDataPage}
                    results={resultDataPage}
                />
			</main>

			<Footer />
		</div>
	);
}