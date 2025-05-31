'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { FiTrash2 } from 'react-icons/fi';

// --- Recording Card Component ---
interface Recording {
    id: string;
    imageSrc: string;
    category: string; // e.g., "PERSONALITY DEVELOPMENT"
    topicName: string;
    classInfo: string; // e.g., "Class"
    boardInfo: string; // e.g., "Board"
    duration: string;  // e.g., "00 hrs : 00 mins"
}

const RecordingCard = ({ recording, onDelete }: { recording: Recording, onDelete: (id: string) => void }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow group">
        <div className="relative">
            <Image
                src={recording.imageSrc}
                alt={recording.topicName}
                width={400}
                height={200} // Adjust aspect ratio as needed
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Category and Edunique overlays */}
            <div className="absolute top-2 left-2 bg-black/40 text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                {recording.category.toUpperCase()}
            </div>
            <div className="absolute top-2 right-2 bg-white/80 text-gray-700 text-[10px] font-semibold px-2 py-0.5 rounded">
                EDUNIQUE
            </div>
        </div>
        <div className="p-4 flex-grow flex flex-col">
            <h3 className="text-md font-semibold text-gray-800 mb-1">{recording.topicName}</h3>
            <p className="text-xs text-gray-500">{recording.classInfo}</p>
            <p className="text-xs text-gray-500">{recording.boardInfo}</p>
            <p className="text-xs text-gray-500 mt-0.5">{recording.duration}</p>

            <div className="mt-auto pt-3 flex justify-end">
                <button
                    onClick={() => onDelete(recording.id)}
                    className="p-2 bg-pink-100 text-pink-600 rounded-full hover:bg-pink-200 hover:text-pink-700 focus:outline-none transition-colors"
                    title="Delete Recording"
                >
                    <FiTrash2 className="w-4 h-4" />
                </button>
            </div>
        </div>
    </div>
);

// --- Sample Data Grouped by Date ---
interface RecordingsByDate {
    date: string; // e.g., "20 May 2025"
    recordings: Recording[];
}

const initialRecordingsData: RecordingsByDate[] = [
    {
        date: 'Date', // This should be a dynamic date, e.g., "20 May 2025"
        recordings: Array.from({ length: 3 }, (_, i) => ({
            id: `rec_a_${i + 1}`,
            imageSrc: '/course-image-personality.jpg', // UPDATE PATH
            category: 'PERSONALITY DEVELOPMENT',
            topicName: 'Topic Name',
            classInfo: 'Class',
            boardInfo: 'Board',
            duration: '00 hrs : 00 mins',
        }))
    },
    {
        date: 'Date', // This should be a dynamic date
        recordings: Array.from({ length: 3 }, (_, i) => ({
            id: `rec_b_${i + 1}`,
            imageSrc: '/course-image-personality.jpg', // UPDATE PATH
            category: 'PERSONALITY DEVELOPMENT',
            topicName: 'Topic Name',
            classInfo: 'Class',
            boardInfo: 'Board',
            duration: '00 hrs : 00 mins',
        }))
    },
    {
        date: 'Date', // This should be a dynamic date
        recordings: Array.from({ length: 3 }, (_, i) => ({
            id: `rec_c_${i + 1}`,
            imageSrc: '/course-image-personality.jpg', // UPDATE PATH
            category: 'PERSONALITY DEVELOPMENT',
            topicName: 'Topic Name',
            classInfo: 'Class',
            boardInfo: 'Board',
            duration: '00 hrs : 00 mins',
        }))
    },
];


export default function RecordingsPage() {
    const [recordingsByDate, setRecordingsByDate] = useState<RecordingsByDate[]>(initialRecordingsData);

    // Dummy user for Header
    const headerUser = {
        name: "Shlok Agheda",
        role: "Student",
        avatarSrc: "/placeholder-avatar-student.jpg" // UPDATE PATH
    };

    const handleDeleteRecording = (id: string) => {
        console.log("Deleting recording with ID:", id);
        // In a real app, you would:
        // 1. Call an API to delete the recording from the backend.
        // 2. On success, update the local state to remove the recording from the UI.
        setRecordingsByDate(prevData =>
            prevData.map(dateGroup => ({
                ...dateGroup,
                recordings: dateGroup.recordings.filter(rec => rec.id !== id)
            })).filter(dateGroup => dateGroup.recordings.length > 0) // Remove date group if empty
        );
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <Header user={headerUser} />

            <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-10"> {/* Increased padding */}
                {recordingsByDate.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-lg">No recordings found.</p>
                    </div>
                ) : (
                    recordingsByDate.map((dateGroup, index) => (
                        <section key={index} className="mb-12">
                            <h2 className="text-xl font-semibold text-gray-800 mb-6">{dateGroup.date}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {dateGroup.recordings.map(recording => (
                                    <RecordingCard
                                        key={recording.id}
                                        recording={recording}
                                        onDelete={handleDeleteRecording}
                                    />
                                ))}
                            </div>
                        </section>
                    ))
                )}
            </main>

            <Footer />
        </div>
    );
}