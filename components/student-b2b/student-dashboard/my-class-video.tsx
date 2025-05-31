'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import {
    FiArrowLeft, FiChevronDown, FiVolume2, FiMaximize, FiLock,
    FiChevronLeft as FiNavLeft, FiChevronRight as FiNavRight // For playlist navigation
} from 'react-icons/fi';

// --- Tab Button Component ---
const InfoTabButton = ({ label, isActive, onClick }: { label: string, isActive: boolean, onClick: () => void }) => (
    <button
        onClick={onClick}
        className={`px-5 py-2 text-sm font-medium rounded-full transition-colors ${
            isActive
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-100'
        }`}
    >
        {label}
    </button>
);

// --- Playlist Item Component ---
interface PlaylistItemData {
    id: string;
    title: string;
    subtitle: string;
    date: string;
    duration?: string; // e.g., "45 Mins"
    isLocked?: boolean;
    isActive?: boolean; // To highlight the current video
}
const PlaylistItem = ({ item, onClick }: { item: PlaylistItemData, onClick: () => void }) => (
    <button
        onClick={onClick}
        className={`w-full text-left p-3 rounded-lg transition-colors flex justify-between items-center ${
            item.isActive ? 'bg-blue-500/10 border border-blue-300' : 'hover:bg-gray-100/70'
        }`}
    >
        <div>
            <h4 className={`text-sm font-semibold ${item.isActive ? 'text-blue-700' : 'text-gray-800'}`}>{item.title}</h4>
            <p className="text-xs text-gray-500">{item.subtitle}</p>
            <p className="text-xs text-gray-500">{item.date}</p>
        </div>
        <div className="text-right flex-shrink-0 ml-2">
            {item.isLocked ? (
                <FiLock className="w-4 h-4 text-pink-500" />
            ) : item.duration ? (
                <span className="text-xs text-gray-400">{item.duration}</span>
            ) : null}
        </div>
    </button>
);

// --- Quiz Item Component (for Quiz and Result tabs) ---
interface QuizResultItemData {
    id: string;
    name: string;
    subtitleOrDate: string; // "Subtitle" for upcoming, "Date" for results
    scorePercentage?: number; // For result tab
    isLocked?: boolean;
}
const QuizResultItem = ({ item }: { item: QuizResultItemData }) => (
    <div className="bg-gray-50/70 p-4 rounded-xl border border-gray-100 flex justify-between items-center">
        <div>
            <h4 className="text-sm font-semibold text-gray-800">{item.name}</h4>
            <p className="text-xs text-gray-500">{item.subtitleOrDate}</p>
        </div>
        {item.isLocked && <FiLock className="w-5 h-5 text-pink-500 flex-shrink-0 ml-2" />}
        {typeof item.scorePercentage === 'number' && !item.isLocked && (
            <div className="bg-sky-200 text-sky-700 text-sm font-semibold px-4 py-2 rounded-lg flex-shrink-0 ml-2">
                {item.scorePercentage}%
            </div>
        )}
    </div>
);


// --- Sample Data ---
const mainCategories = ['Academics', 'Skill Development', 'Brain Function', 'Sports', 'STEMnology', 'Competition', 'Extra curriculars'];
const playlistData: PlaylistItemData[] = [
    { id: 'v1', title: 'Title', subtitle: 'Subtitle', date: '23 / 5 / 25', duration: '45 Mins', isActive: true },
    { id: 'v2', title: 'Quiz Name', subtitle: 'Subtitle', date: '23 / 5 / 25', duration: '45 Mins' },
    { id: 'v3', title: 'Title', subtitle: 'Subtitle', date: '23 / 5 / 25', duration: '45 Mins', isLocked: true },
    { id: 'v4', title: 'Title', subtitle: 'Subtitle', date: '23 / 5 / 25', duration: '45 Mins', isLocked: true },
    { id: 'v5', title: 'Title', subtitle: 'Subtitle', date: '23 / 5 / 25', duration: '45 Mins', isLocked: true },
];
const upcomingQuizData: QuizResultItemData[] = [
    { id: 'q1', name: 'Quiz Name', subtitleOrDate: 'Subtitle', isLocked: false },
    { id: 'q2', name: 'Quiz Name', subtitleOrDate: 'Subtitle', isLocked: true },
    { id: 'q3', name: 'Quiz Name', subtitleOrDate: 'Subtitle', isLocked: true },
];
const resultData: QuizResultItemData[] = [
    { id: 'r1', name: 'Quiz Name', subtitleOrDate: 'Date', scorePercentage: 60 },
    { id: 'r2', name: 'Quiz Name', subtitleOrDate: 'Date', scorePercentage: 60 },
];


export default function CourseVideoPage() {
    const [activeMainCategory, setActiveMainCategory] = useState(mainCategories[0]);
    const [activeInfoTab, setActiveInfoTab] = useState<'Overview' | 'Quiz' | 'Result'>('Overview');
    const [currentVideoTime] = useState(30); // Example: 30% progress
    

    // Dummy user for Header
    const headerUser = { name: "Shlok Agheda", role: "Student", avatarSrc: "/placeholder-avatar-student.jpg" }; // UPDATE PATH

    const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros sapien, semper id velit quis, sollicitudin egestas sem. In ac bibendum lacus, at luctus nunc. Proin elementum ullamcorper luctus. Aenean nec nulla imperdiet, sodales lacus quis, tempus neque. Vestibulum id purus augue. Fusce vel lectus ac nibh auctor tristique. Aliquam o leo risus. Integer ut gravida risus. Aliquam lobortis tortor at tellus consequat egestas eget ac mi. Suspendisse id ligula accumsan, ullamcorper nibh non, semper felis. Integer efficitur luctus sem, varius vehicula tellus hendrerit nec. Vestibulum ut aliquet turpis. Suspendisse ac semper nisi. Donec tristique ligula a volutpat mollis. Duis vel ligula in mi cursus accumsan vel at quam. Nullam in metus nec turpis mattis ullamcorper sit amet at est. Aliquam fringilla sapien nec arcu faucibus luctus. Nullam elementum aliquam arcu, vitae lacinia erat aliquam nec. Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In ac lorem vitae urna elementum bibendum sed sit amet neque. Nam quis sem ac augue porta tempor vel non tortor. Etiam sollicitudin odio ligula, vel eleifend nisl viverra quis. Sed sed nunc scelerisque, fringilla magna vitae, condimentum odio. Phasellus sed rutrum ligula, sed interdum lorem. Etiam massa nisi, eleifend ut sollicitudin accumsan, viverra vel ex. Pellentesque id enim tincidunt, consequat felis a, tempor nisi. Cras hendrerit lacinia tellus at sollicitudin. Nullam dolor enim, luctus id auctor ut, ultrices eget nulla. Cras vestibulum quam id sapien efficitur volutpat. Cras tempor magna elementum maximus faucibus.";


    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <Header user={headerUser} />

            <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
                {/* Back Button and Top Category Tabs */}
                <div className="flex items-center gap-3 mb-6">
                    <button className="p-1.5 text-gray-600 hover:text-blue-600 focus:outline-none">
                        <FiArrowLeft className="w-5 h-5" />
                    </button>
                    <div className="bg-white p-2 rounded-xl shadow-sm overflow-x-auto flex-grow">
                        <div className="flex space-x-1">
                            {mainCategories.map(category => (
                                <button
                                    key={category}
                                    onClick={() => setActiveMainCategory(category)}
                                    className={`flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                                        activeMainCategory === category
                                            ? 'bg-pink-500 text-white shadow-md'
                                            : 'text-gray-500 hover:bg-gray-100'
                                    }`}
                                >
                                    {category}
                                    {category === 'Sports' && <FiChevronDown className="w-3 h-3" />}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Content Grid: Video Player + Playlist */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                    {/* Left Column: Video Player & Info Tabs */}
                    <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl overflow-hidden">
                        {/* Video Header */}
                        <div className="p-6">
                            <h1 className="text-lg font-bold text-blue-700">Earth and Space Science</h1>
                            <p className="text-sm text-gray-500 mt-1">Solar system, weather patterns, and basic understanding of the Earth.</p>
                        </div>

                        {/* Video Player Placeholder */}
                        <div className="relative aspect-video bg-black group">
                            <Image
                                src="/video-thumbnail-solar-system.jpg" // <-- UPDATE PATH to your video thumbnail
                                alt="Video player placeholder"
                                layout="fill"
                                objectFit="cover"
                            />
                            {/* Custom Controls (Simplified) */}
                            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-full h-1.5 bg-gray-500/50 rounded-full mb-2 relative cursor-pointer">
                                    <div className="absolute top-0 left-0 h-full bg-pink-500 rounded-full" style={{ width: `${currentVideoTime}%` }}></div>
                                    <div className="absolute h-3.5 w-3.5 bg-white rounded-full -top-1 shadow border border-gray-300" style={{ left: `calc(${currentVideoTime}% - 7px)` }}></div>
                                </div>
                                <div className="flex justify-between items-center text-white">
                                    {/* Add Play/Pause, time display if needed */}
                                    <div className="flex items-center gap-3">
                                        {/* <FiPlay className="w-5 h-5 cursor-pointer" /> */}
                                        <FiVolume2 className="w-5 h-5 cursor-pointer" />
                                    </div>
                                    <FiMaximize className="w-5 h-5 cursor-pointer" />
                                </div>
                            </div>
                        </div>

                        {/* Info Tabs: Overview, Quiz, Result */}
                        <div className="p-6">
                            <div className="flex items-center gap-2 mb-6 border-b border-gray-200 pb-3">
                                <InfoTabButton label="Overview" isActive={activeInfoTab === 'Overview'} onClick={() => setActiveInfoTab('Overview')} />
                                <InfoTabButton label="Quiz" isActive={activeInfoTab === 'Quiz'} onClick={() => setActiveInfoTab('Quiz')} />
                                <InfoTabButton label="Result" isActive={activeInfoTab === 'Result'} onClick={() => setActiveInfoTab('Result')} />
                            </div>

                            {activeInfoTab === 'Overview' && (
                                <div className="text-sm text-gray-600 leading-relaxed space-y-3">
                                    <p>{loremIpsum.substring(0,400)}</p>
                                    <p>{loremIpsum.substring(400,800)}</p>
                                </div>
                            )}

                            {activeInfoTab === 'Quiz' && (
                                <div>
                                    <h3 className="text-md font-semibold text-pink-600 mb-4">Upcoming Quiz</h3>
                                    <div className="space-y-3">
                                        {upcomingQuizData.map(quiz => <QuizResultItem key={quiz.id} item={quiz} />)}
                                    </div>
                                </div>
                            )}

                            {activeInfoTab === 'Result' && (
                                <div>
                                    {/* No specific title for result list in image, direct items */}
                                    <div className="space-y-3">
                                        {resultData.map(result => <QuizResultItem key={result.id} item={result} />)}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column: Playlist */}
                    <div
                        className="lg:col-span-1 bg-white rounded-2xl shadow-xl p-6 relative overflow-hidden min-h-[400px]"
                        style={{
                            backgroundImage: 'url(/images/playlist-pattern.png)', // <-- UPDATE PATH
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'bottom right',
                            backgroundSize: 'contain' // Or adjust as needed
                        }}
                    >
                         {/* Overlay to ensure text readability over pattern */}
                        <div className="absolute inset-0 bg-white/80 z-0 md:bg-transparent"></div>

                        <div className="relative z-10">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-md font-semibold text-gray-800">Playlist</h3>
                                <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                                    <FiNavLeft className="w-3.5 h-3.5 cursor-pointer hover:text-gray-700" />
                                    <span>1/5</span> {/* Example pagination */}
                                    <FiNavRight className="w-3.5 h-3.5 cursor-pointer hover:text-gray-700" />
                                </div>
                            </div>
                            <div className="space-y-2 max-h-96 overflow-y-auto custom-scrollbar pr-1"> {/* Scrollable playlist */}
                                {playlistData.map(item => (
                                    <PlaylistItem key={item.id} item={item} onClick={() => console.log('Play:', item.title)} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}