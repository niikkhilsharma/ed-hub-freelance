'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { FiArrowLeft, FiChevronDown, FiCheckCircle, FiXCircle, FiSmile } from 'react-icons/fi';

// --- Main Category Tab Component (Reused) ---
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

// --- Question Review Block Component ---
interface OptionReview {
    id: string;
    text: string;
    isUserSelected: boolean;
    isCorrect: boolean;
}
interface QuestionReviewData {
    id: number;
    text: string; // Placeholder as question text is not visible
    options: OptionReview[];
}
const QuestionReviewBlock = ({ question, questionNumber }: { question: QuestionReviewData, questionNumber: number }) => (
    <div className="mb-8 p-6 bg-gray-50 rounded-xl shadow-inner">
        <h3 className="text-md font-semibold text-gray-800 mb-4">
            {questionNumber}) Question {/* Replace "Question" with actual question.text if available */}
        </h3>
        <div className="space-y-3">
            {question.options.map(option => {
                let optionStyle = 'bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50';
                let icon = null;
                let textColor = 'text-gray-700';

                if (option.isUserSelected) {
                    if (option.isCorrect) {
                        optionStyle = 'bg-green-50 border-green-300';
                        icon = <FiCheckCircle className="w-5 h-5 text-green-500" />;
                        textColor = 'text-green-700';
                    } else {
                        optionStyle = 'bg-red-50 border-red-300';
                        icon = <FiXCircle className="w-5 h-5 text-red-500" />;
                        textColor = 'text-red-700';
                    }
                } else if (option.isCorrect) { // Show correct answer if user didn't select it or selected wrong
                     optionStyle = 'bg-green-50 border-green-300 opacity-70'; // Slightly faded if not selected by user
                     icon = <FiCheckCircle className="w-5 h-5 text-green-500" />;
                     textColor = 'text-green-600';
                }


                return (
                    <div
                        key={option.id}
                        className={`w-full flex items-center p-3.5 border-2 rounded-xl transition-all duration-150 ${optionStyle}`}
                    >
                        {icon && <span className="mr-2">{icon}</span>}
                        <span className={`text-sm ${textColor}`}>{option.text}</span>
                    </div>
                );
            })}
        </div>
    </div>
);

// --- Radial Progress/Score Chart Component ---
const ScoreChart = ({ percentage, correct, total }: { percentage: number, correct: number, total: number }) => {
    const circumference = 2 * Math.PI * 45; // Assuming radius of 45 for the circle
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className="relative w-48 h-48 mx-auto">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                {/* Background circle */}
                <circle
                    className="text-gray-200"
                    strokeWidth="10"
                    stroke="currentColor"
                    fill="transparent"
                    r="45"
                    cx="50"
                    cy="50"
                />
                {/* Progress circle */}
                <circle
                    className="text-blue-500" // Progress color
                    strokeWidth="10"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="45"
                    cx="50"
                    cy="50"
                />
            </svg>
            {/* Smiley icon in the center */}
            <div className="absolute inset-0 flex items-center justify-center">
                <FiSmile className="w-16 h-16 text-blue-500" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 text-center transform translate-y-1/2">
                <p className="text-4xl font-bold text-green-500">{percentage}%</p>
                <p className="text-xs text-gray-500 mt-0.5">You got {correct} correct out of {total} !</p>
            </div>
        </div>
    );
};


// --- Sample Data ---
const mainCategories = ['Academics', 'Skill Development', 'Brain Function', 'Sports', 'STEMnology', 'Competition', 'Extra curriculars'];
const reviewQuestions: QuestionReviewData[] = [
    {
        id: 1, text: "Question 1 Text", options: [
            { id: 'a', text: 'Option 1', isUserSelected: true, isCorrect: true },
            { id: 'b', text: 'Option 2', isUserSelected: false, isCorrect: false },
            { id: 'c', text: 'Option 3', isUserSelected: false, isCorrect: false },
            { id: 'd', text: 'Option 4', isUserSelected: false, isCorrect: false },
        ]
    },
    {
        id: 2, text: "Question 2 Text", options: [
            { id: 'a', text: 'Option 1', isUserSelected: true, isCorrect: false }, // User selected wrong
            { id: 'b', text: 'Option 2', isUserSelected: false, isCorrect: true }, // Actual correct
            { id: 'c', text: 'Option 3', isUserSelected: false, isCorrect: false },
            { id: 'd', text: 'Option 4', isUserSelected: false, isCorrect: false },
        ]
    },
    {
        id: 3, text: "Question 3 Text", options: [
            { id: 'a', text: 'Option 1', isUserSelected: false, isCorrect: false },
            { id: 'b', text: 'Option 2', isUserSelected: false, isCorrect: false },
            { id: 'c', text: 'Option 3', isUserSelected: true, isCorrect: true },
            { id: 'd', text: 'Option 4', isUserSelected: false, isCorrect: false },
        ]
    },
];
const totalQuestionsInTest = 3;
const correctAnswersCount = reviewQuestions.filter(q => q.options.find(opt => opt.isUserSelected && opt.isCorrect)).length;
const scorePercentage = Math.round((correctAnswersCount / totalQuestionsInTest) * 100);


export default function MockTestReviewPage() {
    const [activeMainCategory, setActiveMainCategory] = useState(mainCategories[0]);
    // No timer needed for review page

    const headerUser = { name: "Shlok Agheda", role: "Student", avatarSrc: "/placeholder-avatar-student.jpg" }; // UPDATE PATH

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <Header user={headerUser} />

            <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
                {/* Top Bar: Back Button & Category Tabs */}
                <div className="flex items-center gap-3 mb-6">
                    <button className="p-1.5 text-gray-600 hover:text-blue-600 focus:outline-none">
                        <FiArrowLeft className="w-5 h-5" />
                    </button>
                    <div className="bg-white p-2 rounded-xl shadow-sm overflow-x-auto flex-grow">
                        <div className="flex space-x-1">
                            {mainCategories.map(category => (
                                <MainCategoryTab
                                    key={category}
                                    label={category}
                                    isActive={activeMainCategory === category}
                                    onClick={() => setActiveMainCategory(category)}
                                    hasDropdown={category === 'Sports'}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Content: Two Columns - Questions & Score */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                    {/* Left Column: Questions Review */}
                    <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-6 md:p-8">
                        <div className="mb-8">
                            <h1 className="text-xl font-bold text-pink-600">Addition Mock Test</h1>
                            <p className="text-sm text-gray-500 mt-1">Assessment</p>
                        </div>
                        {reviewQuestions.map((question, index) => (
                            <QuestionReviewBlock
                                key={question.id}
                                question={question}
                                questionNumber={index + 1}
                            />
                        ))}
                         {/* No Submit button on review page */}
                    </div>

                    {/* Right Column: Score Chart */}
                    <div className="lg:col-span-1 bg-white rounded-2xl shadow-xl p-6 md:p-8 flex flex-col items-center justify-center min-h-[300px] lg:sticky lg:top-24"> {/* Sticky for score */}
                        <ScoreChart percentage={scorePercentage} correct={correctAnswersCount} total={totalQuestionsInTest} />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}