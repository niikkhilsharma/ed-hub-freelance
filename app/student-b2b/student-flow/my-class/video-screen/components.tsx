// components.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import {
    FiArrowLeft, FiVolume2, FiMaximize, FiLock, FiChevronRight
} from 'react-icons/fi';
import { MainCategoryTab, InfoTabButton, SimpleIconButton } from './ui-components'; // Import UI components

// --- Data Interfaces ---
export interface PlaylistItemData { // Exported for page.tsx
	id: string; title: string; subtitle: string; date: string;
	duration?: string; isLocked?: boolean; isActive?: boolean;
}
export interface QuizResultItemData { // Exported for page.tsx
	id: string; name: string; subtitleOrDate: string;
	scorePercentage?: number; isLocked?: boolean; date?: string; // Keep 'date' for Quiz type
}

// --- Component 1: MainCategoryTabsBar ---
interface MainCategoryTabsBarProps {
    categories: string[];
    activeCategory: string;
    onCategoryClick: (category: string) => void;
    // Add onPrev/onNext handlers if arrows become functional
}
export const MainCategoryTabsBar: React.FC<MainCategoryTabsBarProps> = ({ categories, activeCategory, onCategoryClick }) => (
    <div className="mb-4 md:mb-6 bg-white px-2 py-1.5 sm:px-3 sm:py-2 rounded-2xl sm:rounded-3xl  overflow-x-auto custom-scrollbar-thin">
        <div className="flex space-x-2 sm:space-x-4 justify-start items-center relative min-w-max sm:min-w-full">
            <SimpleIconButton icon={<FiArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.5} />} ariaLabel="Scroll categories left" className="absolute left-0 z-10 bg-white/80 hover:bg-gray-200 md:hidden" /> {/* Show on mobile if needed */}
            {/* On desktop, the absolute left arrow in page.tsx was for the main categories, not this inner bar */}
            {categories.map(category => (
                <MainCategoryTab
                    key={category}
                    label={category}
                    isActive={activeCategory === category}
                    onClick={() => onCategoryClick(category)}
                    hasDropdown={category === 'Sports'}
                />
            ))}
             <SimpleIconButton icon={<FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.5}/>} ariaLabel="Scroll categories right" className="absolute right-0 z-10 bg-white/80 hover:bg-gray-200 md:hidden" />
        </div>
    </div>
);


// --- Component 2: VideoPlayerSection ---
interface VideoPlayerSectionProps {
    courseTitle: string;
    courseSubtitle: string;
    videoThumbnailSrc: string;
    currentVideoTime: number; // 0-100 for progress
    onBackClick?: () => void; // For the back arrow within this section
}
export const VideoPlayerSection: React.FC<VideoPlayerSectionProps> = ({
    courseTitle, courseSubtitle, videoThumbnailSrc, currentVideoTime, onBackClick
}) => (
    // The `flex-1` for this component is handled by its parent div in page.tsx for lg screens.
    // For mobile, it will be block and take full width.
    <div className="flex flex-col h-full"> {/* Ensure it tries to fill height if parent allows */}
        <div className="py-3 sm:py-4 px-2 sm:px-3 flex items-start gap-2 sm:gap-4">
            {onBackClick && <SimpleIconButton onClick={onBackClick} icon={<FiArrowLeft className="w-5 h-5" strokeWidth={3} />} ariaLabel="Back to course list" />}
            <div className="flex-grow min-w-0"> {/* Added min-w-0 here for text truncation if needed */}
                <h2 className="text-lg sm:text-2xl font-semibold text-[#3366FF] leading-tight truncate">{courseTitle}</h2>
                <p className="text-sm sm:text-lg font-light text-[#3366FF] mt-0.5 leading-tight line-clamp-2 sm:line-clamp-none">{courseSubtitle}</p>
            </div>
        </div>
        {/* 
            The h-full on the outer div of VideoPlayerSection and flex-grow here make this part
            take up remaining vertical space.
        */}
        <div className="px-3 pb-3 sm:px-6 sm:pb-6 flex-grow flex flex-col">
            <div className="relative aspect-video bg-black group rounded-xl sm:rounded-2xl overflow-hidden w-full"> {/* Ensure w-full */}
                <Image src={videoThumbnailSrc} alt="Video player placeholder" layout="fill" objectFit="cover" />
                {/* Custom Controls */}
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-full h-1 sm:h-1.5 bg-[#3366FF99]/50 rounded-full mb-1.5 sm:mb-2 relative cursor-pointer">
                        <div className="absolute top-0 left-0 h-full bg-[#FF3366] rounded-full" style={{ width: `${currentVideoTime}%` }}></div>
                        <div className="absolute h-3 w-3 sm:h-3.5 sm:w-3.5 bg-white rounded-full -top-1  border border-gray-300" style={{ left: `calc(${currentVideoTime}% - 6px)` }}></div>
                    </div>
                    <div className="flex justify-between items-center text-white">
                        <div className="flex items-center gap-2 sm:gap-3"><FiVolume2 className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer" /></div>
                        <FiMaximize className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

// --- Component 3: PlaylistItem ---
interface PlaylistItemPropsComponent { item: PlaylistItemData; onClick: () => void; } // Renamed to avoid conflict
export const PlaylistItem: React.FC<PlaylistItemPropsComponent> = ({ item, onClick }) => (
	<button
		onClick={onClick}
		className={`w-full text-left py-2.5 px-3 sm:py-3 sm:px-4 border bg-[#F9FAFB] border-[#E5E7EB] rounded-xl sm:rounded-2xl transition-colors flex justify-between items-center 
        ${ item.isActive ? 'bg-[#3366FF1A] border-transparent' : 'hover:bg-gray-100/70' }`}
    >
		<div>
			<h4 className={`text-md sm:text-lg ${item.isActive ? 'text-[#3366FF]' : 'text-black'}`}>{item.title}</h4>
			<p className={`text-xs sm:text-sm font-light ${item.isActive ? 'text-[#3366FF99]' : 'text-[#6B7280]'}`}>{item.subtitle}</p>
			<p className={`text-xs sm:text-sm font-light ${item.isActive ? 'text-[#3366FF99]' : 'text-[#6B7280]'}`}>{item.date}</p>
		</div>
		<div className="text-right flex-shrink-0 flex flex-col ml-2 gap-1 items-end mt-auto">
			{item.isLocked ? (
				<div className="bg-[#FF33661A] rounded-full p-2 sm:p-3 h-fit w-fit">
					<FiLock className="w-3 h-3 sm:w-4 sm:h-4 text-[#FF3366]" strokeWidth={3} />
				</div>
			) : item.duration ? (
				'' // Empty string as per original if not locked and has duration (duration shown below)
			) : null}
			<span className={`text-sm sm:text-md mt-auto font-light ${item.isActive ? 'text-[#3366FF99]' : 'text-[#6B7280]'}`}>
				{item.duration}
			</span>
		</div>
	</button>
);

// --- Component 4: PlaylistSidebar ---
interface PlaylistSidebarProps {
    playlistItems: PlaylistItemData[];
    onItemClick: (item: PlaylistItemData) => void;
}
export const PlaylistSidebar: React.FC<PlaylistSidebarProps> = ({ playlistItems, onItemClick }) => (
    // On lg screens, it has a fixed width. On smaller, it's w-full.
    <div className="w-full lg:w-80 xl:w-96 bg-white rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none p-4 sm:p-6 lg:p-3 lg:pl-3 flex-shrink-0 
                    h-64 lg:h-auto overflow-hidden custom-scrollbar">
        {/* Added lg:p-3 and flex-shrink-0 to prevent it from shrinking if content is too wide */}
        <div className="relative z-10 h-full">
            <div className="space-y-1.5 sm:space-y-2 lg:max-h-127 h-full overflow-y-auto custom-scrollbar pr-1 sm:pr-2">
                {playlistItems.map(item => (
                    <PlaylistItem key={item.id} item={item} onClick={() => onItemClick(item)} />
                ))}
            </div>
        </div>
    </div>
);

// --- Component 5: QuizResultItem ---
interface QuizResultItemPropsComponent { item: QuizResultItemData; } // Renamed to avoid conflict
export const QuizResultItem: React.FC<QuizResultItemPropsComponent> = ({ item }) => (
	<div className="bg-[#F9FAFB] p-3 sm:p-4 rounded-2xl border border-[#E5E7EB] flex items-center justify-between">
		<div className="flex flex-col justify-between min-h-[50px] sm:min-h-[60px]"> {/* Adjusted min-height for mobile */}
			<h4 className="text-sm sm:text-md font-medium text-black">{item.name}</h4>
			<p className="text-[10px] sm:text-xs font-light text-[#6B7280]">{item.subtitleOrDate}</p>
			{item.date && <p className="text-[10px] sm:text-xs font-light text-[#6B7280]">{item.date}</p>} {/* Ensure item.date is rendered if present */}
		</div>
		<div className="text-right flex-shrink-0 flex flex-col ml-2 self-start gap-1 items-end">
			{item.isLocked && (
				<div className="bg-[#FF33661A] rounded-full p-2 sm:p-3 h-fit w-fit">
					<FiLock className="w-3 h-3 sm:w-4 sm:h-4 text-[#FF3366]" strokeWidth={3} />
				</div>
			)}
			{typeof item.scorePercentage === 'number' && !item.isLocked && (
				<div className="bg-[#99DEFF] text-black text-sm sm:text-md px-4 py-5 sm:px-6 sm:py-7 rounded-xl sm:rounded-2xl flex-shrink-0 ml-2">{item.scorePercentage}%</div>
			)}
		</div>
	</div>
);


// --- Component 6: VideoInfoSection ---
interface VideoInfoSectionProps {
    activeTab: 'Overview' | 'Quiz' | 'Result';
    onTabChange: (tab: 'Overview' | 'Quiz' | 'Result') => void;
    overviewContent: string; // Simple string for lorem ipsum
    upcomingQuizzes: QuizResultItemData[];
    results: QuizResultItemData[];
}
export const VideoInfoSection: React.FC<VideoInfoSectionProps> = ({
    activeTab, onTabChange, overviewContent, upcomingQuizzes, results
}) => (
    <div className="bg-white rounded-2xl  p-4 sm:p-6">
        <div>
            <div className="flex items-center font-semibold gap-3 sm:gap-6 mb-4 sm:mb-6 border-gray-200 pb-2 sm:pb-3"> {/* Added border-b */}
                <InfoTabButton label="Overview" isActive={activeTab === 'Overview'} onClick={() => onTabChange('Overview')} />
                <InfoTabButton label="Quiz" isActive={activeTab === 'Quiz'} onClick={() => onTabChange('Quiz')} />
                <InfoTabButton label="Result" isActive={activeTab === 'Result'} onClick={() => onTabChange('Result')} />
            </div>

            {activeTab === 'Overview' && (
                <div className="text-xs sm:text-sm text-gray-600 leading-relaxed space-y-2 sm:space-y-3">
                    {/* Splitting lorem ipsum for paragraph tags, adjust substring length as needed */}
                    <p>{overviewContent.substring(0, 400)}...</p>
                    <p>{overviewContent.substring(400, 800)}...</p>
                </div>
            )}
            {activeTab === 'Quiz' && (
                <div>
                    <h3 className="text-md sm:text-lg font-semibold text-[#FF3366] mb-3 sm:mb-4">Upcoming Quiz</h3>
                    <div className="space-y-2 sm:space-y-3">
                        {upcomingQuizzes.map(quiz => <QuizResultItem key={quiz.id} item={quiz} />)}
                    </div>
                </div>
            )}
            {activeTab === 'Result' && (
                <div>
                    <div className="space-y-2 sm:space-y-3">
                        {results.map(result => <QuizResultItem key={result.id} item={result} />)}
                    </div>
                </div>
            )}
        </div>
    </div>
);