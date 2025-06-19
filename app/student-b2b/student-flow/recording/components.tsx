// components.tsx
"use client";

import React from 'react';
import Image from 'next/image';

// --- Data Interfaces ---
export interface Recording {
	id: string;
	imageSrc: string;
	category: string; // Kept as it was in your interface
	topicName: string;
	classInfo: string;
	boardInfo: string;
	duration: string;
}

// --- Component 1: RecordingCard ---
interface RecordingCardProps {
  recording: Recording;
  onDelete: (id: string) => void;
}
export const RecordingCard: React.FC<RecordingCardProps> = ({ recording, onDelete }) => (
    // Original desktop: bg-white rounded-2xl overflow-hidden flex flex-col group
	<div className="bg-white rounded-2xl overflow-hidden flex flex-col group border border-[#E5E7EB] hover:shadow-lg transition-shadow duration-200">
		<div className="relative w-full">
            {/* Original Image: width={256} height={256} className="w-full h-44 object-fill ... */}
			<Image
				src={recording.imageSrc} alt={recording.topicName}
				width={256} height={176} // Using a 16:9 equivalent for 256 width, h-44 is 176px
				className="w-full h-40 object-fill group-hover:scale-105 transition-transform duration-300 
                           sm:h-44" // Desktop h-44
			/>
		</div>
        {/* Original text section wrapper: flex gap-4 items-center justify-between */}
		<div className="flex gap-2 items-center justify-between p-3 sm:p-4">
			{/* Original text content wrapper: p-4 flex-grow flex flex-col */}
            {/* The p-4 from original is now on the outer flex, so inner one doesn't need it */}
			<div className="flex-grow flex flex-col min-w-0"> {/* Added min-w-0 for truncation */}
                {/* Original h3: text-md font-semibold text-gray-800 mb-1 */}
				<h3 className="text-sm font-semibold text-gray-800 mb-0.5 truncate sm:text-md sm:mb-1">{recording.topicName}</h3>
                {/* Original p: text-sm text-gray-500 */}
				<p className="text-xs text-gray-500 truncate sm:text-sm">{recording.classInfo}</p>
                {/* Original p: text-sm text-gray-500 mt-1 */}
				<p className="text-xs text-gray-500 mt-0.5 truncate sm:text-sm sm:mt-1">{recording.boardInfo}</p>
                {/* Original p: text-xs text-gray-500 mt-0.5 */}
				<p className="text-[10px] text-gray-500 mt-0.5 sm:text-xs">{recording.duration}</p>
			</div>
            {/* Original SVG: width={40} height={41} */}
			<button 
                onClick={() => onDelete(recording.id)} 
                className="p-1 hover:bg-red-100 rounded-full transition-colors flex-shrink-0"
                aria-label={`Delete ${recording.topicName}`}
            >
                <svg width="32" height="33" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-[33px] sm:w-10 sm:h-[41px]"> {/* Responsive SVG size */}
                    <rect y="0.5" width="50" height="50" rx="25" fill="#FF3366" fillOpacity="0.1" />
                    <path d="M16 19.5H18H34" stroke="#FF3366" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M32 19.5V33.5C32 34.0304 31.7893 34.5391 31.4142 34.9142C31.0391 35.2893 30.5304 35.5 30 35.5H20C19.4696 35.5 18.9609 35.2893 18.5858 34.9142C18.2107 34.5391 18 34.0304 18 33.5V19.5M21 19.5V17.5C21 16.9696 21.2107 16.4609 21.5858 16.0858C21.9609 15.7107 22.4696 15.5 23 15.5H27C27.5304 15.5 28.0391 15.7107 28.4142 16.0858C28.7893 16.4609 29 16.9696 29 17.5V19.5" stroke="#FF3366" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
		</div>
	</div>
);

// --- Component 2: RecordingsDateGroup ---
export interface RecordingsByDate { // Export if page.tsx needs it
	date: string;
	recordings: Recording[];
}
interface RecordingsDateGroupProps {
    dateGroup: RecordingsByDate;
    onDeleteRecording: (id: string) => void;
}
export const RecordingsDateGroup: React.FC<RecordingsDateGroupProps> = ({ dateGroup, onDeleteRecording }) => (
    // Original section: mb-12
    <section className="mb-8 md:mb-12">
        {/* Original h2: text-xl font-semibold text-black mb-6 */}
        <h2 className="text-lg font-semibold text-black mb-4 sm:text-xl sm:mb-6">{dateGroup.date}</h2>
        {/* Original grid: grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
            {dateGroup.recordings.map(recording => (
                <RecordingCard key={recording.id} recording={recording} onDelete={onDeleteRecording} />
            ))}
        </div>
    </section>
);