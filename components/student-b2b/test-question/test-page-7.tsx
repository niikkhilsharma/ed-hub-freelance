'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiBell, FiClock } from 'react-icons/fi';

// --- Simplified Header for In-Test View ---
// You might use your full Header component or a simplified one for focus.
const TestHeader = ({ userName, userRole, userAvatar }: { userName: string, userRole: string, userAvatar: string }) => (
    <header className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
            <div className="flex items-center">
                <span className="text-2xl font-bold italic">EDUNIQUE</span>
            </div>
            <div className="flex items-center space-x-4">
                <button className="p-1.5 rounded-full hover:bg-blue-700 focus:outline-none">
                    <FiBell className="w-5 h-5" />
                </button>
                <div className="flex items-center space-x-2">
                    <Image src={userAvatar} alt={userName} width={32} height={32} className="rounded-full" />
                    <div>
                        <p className="text-sm font-medium">{userName}</p>
                        <p className="text-xs opacity-80">{userRole}</p>
                    </div>
                </div>
            </div>
        </div>
    </header>
);

// --- Category Tab Component ---
const CategoryTab = ({ label, isActive, onClick }: { label: string, isActive: boolean, onClick: () => void }) => (
    <button
        onClick={onClick}
        className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full whitespace-nowrap focus:outline-none transition-colors duration-150 ${
            isActive
                ? 'bg-pink-500 text-white shadow'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
    >
        {label}
    </button>
);


// --- Sample Data ---
interface EssayQuestionData {
    id: number;
    text: string;
}

const essayQuestion: EssayQuestionData = {
    id: 1,
    text: 'Describe a good friend. What makes someone a good friend?'
};

const TOTAL_QUESTIONS_IN_SET = 10; // Total questions in this particular DMIT set
const TIME_LIMIT_MINUTES_DMIT = 20; // Time limit for this set
const tabCategoriesData = ['Academic Skills', 'Brain Development', 'Personality Development', 'Emotional Intelligence'];

export default function DmittTest_7_Page() {
    const [activeCategory, setActiveCategory] = useState(tabCategoriesData[2]); // Default to "Personality Development"
    const [currentQuestionNumber] = useState(7); // For "1 / 10" display
    const [answerText, setAnswerText] = useState('');
    const [timeLeft, setTimeLeft] = useState(TIME_LIMIT_MINUTES_DMIT * 60); // Time in seconds

    // User data for header
    const headerUser = {
        userName: "Shlok Agheda",
        userRole: "Student",
        userAvatar: "/placeholder-avatar-student.jpg" // UPDATE PATH
    };

    // Timer useEffect
    useEffect(() => {
        if (timeLeft <= 0) {
            console.log("Time's up!");
            // Handle time up (e.g., auto-submit)
            return;
        }
        const timer = setInterval(() => {
            setTimeLeft(prevTime => prevTime - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const handleNext = () => {
        console.log('Answer for Question', currentQuestionNumber, ':', answerText);
        // Save current answer
        // If there are more questions:
        if (currentQuestionNumber < TOTAL_QUESTIONS_IN_SET) {
            // setCurrentQuestionNumber(prev => prev + 1);
            // setAnswerText(''); // Clear for next question
            // Fetch next question data
            alert("Next question logic to be implemented. Current answer saved (logged).");
        } else {
            // Handle end of test
            alert('Test Finished. Answers submitted (logged).');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <TestHeader userName={headerUser.userName} userRole={headerUser.userRole} userAvatar={headerUser.userAvatar} />

            <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl p-6 md:p-8">
                    {/* Test Title */}
                    <h1 className="text-lg md:text-xl font-semibold text-gray-800 text-center mb-6">
                        DMIT (Dermatoglyphics Multiple Intelligence Test) and skill assessment
                    </h1>

                    {/* Category Tabs */}
                    <div className="mb-8 overflow-x-auto pb-2">
                        <div className="flex justify-center space-x-2 sm:space-x-3">
                            {tabCategoriesData.map(category => (
                                <CategoryTab
                                    key={category}
                                    label={category}
                                    isActive={activeCategory === category}
                                    onClick={() => setActiveCategory(category)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Test Info: Questions, Time Limit, Progress, Timer */}
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                        <div className="text-left">
                            <p className="text-md font-semibold text-gray-700">Questions : {TOTAL_QUESTIONS_IN_SET}</p>
                            <p className="text-xs text-gray-500">Time Limit: {TIME_LIMIT_MINUTES_DMIT} Minutes</p>
                            <div className="mt-2 inline-flex items-center justify-center px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                                {currentQuestionNumber} / {TOTAL_QUESTIONS_IN_SET}
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="flex items-center gap-1.5 text-pink-500">
                                <FiClock className="w-5 h-5" />
                                <span className="text-2xl font-bold">{formatTime(timeLeft)}</span>
                            </div>
                            <p className="text-xs text-pink-500">Min Left</p>
                        </div>
                    </div>

                    {/* Current Essay Question */}
                    <div className="bg-gray-50 p-6 rounded-xl shadow-inner">
                        <p className="text-xs text-gray-500 mb-1">Question {currentQuestionNumber}</p>
                        <h2 className="text-md font-semibold text-gray-800 mb-6">{essayQuestion.text}</h2>
                        <textarea
                            value={answerText}
                            onChange={(e) => setAnswerText(e.target.value)}
                            placeholder="Type your answer here..."
                            rows={8} // Adjust rows as needed
                            className="w-full p-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-700 placeholder-gray-400 resize-none bg-white"
                        />
                    </div>

                    {/* Navigation */}
                    <div className="mt-10 flex justify-center"> {/* Centered Next button */}
                        <button
                            onClick={handleNext}
                            className="px-12 py-3 bg-blue-600 text-white font-semibold text-sm rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors shadow-md"
                        >
                           {currentQuestionNumber === TOTAL_QUESTIONS_IN_SET ? 'Submit' : 'Next'}
                        </button>
                    </div>
                </div>
            </main>
            {/* Footer component is omitted as it's not in the image for this specific test view */}
        </div>
    );
}