// page.tsx (e.g. /app/recordings/page.tsx)
"use client";

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { RecordingsDateGroup, RecordingsByDate } from './components';

// --- Sample Data (Strictly from your original) ---
const initialRecordingsData: RecordingsByDate[] = [
	{
		date: 'Date', // This was your original placeholder
		recordings: Array.from({ length: 3 }, (_, i) => ({
			id: `rec_a_${i + 1}`,
			imageSrc: '/course-image-personality.jpg', // UPDATE PATH
			category: 'PERSONALITY DEVELOPMENT',
			topicName: 'Topic Name',
			classInfo: 'Class',
			boardInfo: 'Board',
			duration: '00 hrs : 00 mins',
		})),
	},
	{
		date: 'Date', // This was your original placeholder
		recordings: Array.from({ length: 3 }, (_, i) => ({
			id: `rec_b_${i + 1}`,
			imageSrc: '/course-image-personality.jpg', // UPDATE PATH
			category: 'PERSONALITY DEVELOPMENT',
			topicName: 'Topic Name',
			classInfo: 'Class',
			boardInfo: 'Board',
			duration: '00 hrs : 00 mins',
		})),
	},
	{
		date: 'Date', // This was your original placeholder
		recordings: Array.from({ length: 3 }, (_, i) => ({
			id: `rec_c_${i + 1}`,
			imageSrc: '/course-image-personality.jpg', // UPDATE PATH
			category: 'PERSONALITY DEVELOPMENT',
			topicName: 'Topic Name',
			classInfo: 'Class',
			boardInfo: 'Board',
			duration: '00 hrs : 00 mins',
		})),
	},
];
// --- End Sample Data ---


export default function RecordingsPage({imageSrc}:{imageSrc?:string}) { // Retained your imageSrc prop
	const [recordingsByDate, setRecordingsByDate] = useState<RecordingsByDate[]>(initialRecordingsData);

	const headerUser = {
		name: 'Shlok Agheda',
		role: 'Student',
		avatarSrc: imageSrc || '/teacher-b2b/profile.png', // Your original logic
	};

	const handleDeleteRecording = (id: string) => {
		console.log('Deleting recording with ID:', id);
		setRecordingsByDate(prevData =>
			prevData
				.map(dateGroup => ({
					...dateGroup,
					recordings: dateGroup.recordings.filter(rec => rec.id !== id),
				}))
				.filter(dateGroup => dateGroup.recordings.length > 0)
		);
	};

	return (
		// Original wrapper: <></> and <div className="bg-[#eeeeee] min-h-screen flex flex-col">
        // Combined into one main div for cleaner structure
		<div className="bg-[#eeeeee] min-h-screen flex flex-col">
			<Header user={headerUser} />
            {/* Original main: container p-4 max-w-[90vw] sm:p-6 lg:p-8 bg-white m-6 mx-auto rounded-2xl */}
			<main className="flex-grow container mx-auto my-4 p-3 bg-white rounded-xl 
                           sm:my-6 sm:p-4 md:p-6 lg:p-8 sm:rounded-2xl 
                           max-w-[95vw] md:max-w-[90vw]">
				{recordingsByDate.length === 0 ? (
                    // Original: text-center py-20 text-gray-500 text-lg
					<div className="text-center py-16 sm:py-20">
						<p className="text-gray-500 text-md sm:text-lg">No recordings found.</p>
					</div>
				) : (
					recordingsByDate.map((dateGroup, index) => ( // Using index for key as date might not be unique
						<RecordingsDateGroup 
                            key={dateGroup.date + '-' + index} 
                            dateGroup={dateGroup} 
                            onDeleteRecording={handleDeleteRecording} 
                        />
					))
				)}
			</main>
			<Footer />
		</div>
	);
}