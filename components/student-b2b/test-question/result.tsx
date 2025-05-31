'use client';

// import { useState } from 'react'; // May not be needed if data is static/from props for this page
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { FiStar, FiSmile } from 'react-icons/fi';

// --- Individual Score Progress Bar (Reused) ---
interface ScoreProgressBarProps {
    label: string;
    percentage: number;
    color: string;
}
const ScoreProgressBar = ({ label, percentage, color }: ScoreProgressBarProps) => (
    <div className="mb-3">
        <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-700">{label}</span>
            <span className="text-xs font-medium text-gray-500">{percentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
                className={`h-2.5 rounded-full ${color}`}
                style={{ width: `${percentage}%` }}
            ></div>
        </div>
    </div>
);

// --- Radial Score Chart (Reused) ---
const RadialScoreChart = ({ percentage }: { percentage: number }) => {
    const radius = 35;
    const strokeWidth = 8;
    const normalizedRadius = radius - strokeWidth / 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className="relative w-32 h-32 mx-auto mb-2">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 80 80">
                <circle className="text-gray-200" strokeWidth={strokeWidth} stroke="currentColor" fill="transparent" r={normalizedRadius} cx={radius + strokeWidth/2} cy={radius + strokeWidth/2} />
                <circle className="text-blue-500" strokeWidth={strokeWidth} strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" stroke="currentColor" fill="transparent" r={normalizedRadius} cx={radius + strokeWidth/2} cy={radius + strokeWidth/2} />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <FiSmile className="w-10 h-10 text-blue-500" />
            </div>
        </div>
    );
};

// --- Stats Item (Reused) ---
const StatItem = ({ label, value, valueColor = "text-gray-800" }: { label: string, value: string | number, valueColor?: string }) => (
    <div className="text-center">
        <p className="text-xs text-gray-500">{label}</p>
        <p className={`text-lg font-bold ${valueColor}`}>{value}</p>
    </div>
);

// --- Sample Static Data for the Page ---
// In a real app, this would be fetched or passed as props
const resultsData = {
    overallScore: 40,
    feedbackText: "Great effort! A little more focus will take you to the top",
    individualScores: [
        { label: 'Academic Skills', percentage: 40, color: 'bg-blue-500' },
        { label: 'Brain Development', percentage: 60, color: 'bg-yellow-400' },
        { label: 'Personality Development', percentage: 50, color: 'bg-pink-500' },
        { label: 'Emotional Intelligence', percentage: 20, color: 'bg-green-400' },
        { label: 'Pedagogy learning', percentage: 40, color: 'bg-orange-400' },
    ],
    stats: {
        totalMarks: 50,
        totalQuestions: 50,
        attempted: 40,
        correct: 30,
        incorrect: 10,
    }
};

export default function TestResultsPage() {
    // Dummy user for Header
    const headerUser = {
        name: "Shlok Agheda", // Or fetched dynamically
        role: "Student",
        avatarSrc: "/placeholder-avatar-student.jpg" // UPDATE PATH
    };

    const handleNext = () => {
        console.log("Next clicked from results page");
        // Navigate to next page or dashboard
    };

    return (
        <div
            className="min-h-screen flex flex-col bg-gray-700" // Darker background for the page
            style={{
                backgroundImage: 'url(/images/science-pattern-dark-bg.png)', // UPDATE PATH
                backgroundRepeat: 'repeat',
                backgroundSize: 'auto'
            }}
        >
            <Header user={headerUser} />

            <main className="flex-grow flex items-center justify-center p-4">
                {/* Results Card (was Modal Content) */}
                <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl p-6 md:p-8 relative">
                    <div className="flex items-center gap-2 mb-6">
                        <FiStar className="w-6 h-6 text-yellow-400" />
                        <h1 className="text-xl font-bold text-gray-800">Results</h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {/* Left Column: Overall Score Chart */}
                        <div className="md:col-span-1 bg-gray-50 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
                            <RadialScoreChart percentage={resultsData.overallScore} />
                            <p className="text-3xl font-bold text-green-500 mt-2">{resultsData.overallScore}%</p>
                            <p className="text-xs text-gray-600 mt-2 leading-snug max-w-xs">
                                {resultsData.feedbackText}
                            </p>
                        </div>

                        {/* Right Column: Individual Scores */}
                        <div className="md:col-span-2 bg-gray-50 p-6 rounded-2xl">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Individual Scores</h3>
                            {resultsData.individualScores.map((scoreItem) => (
                                <ScoreProgressBar
                                    key={scoreItem.label}
                                    label={scoreItem.label}
                                    percentage={scoreItem.percentage}
                                    color={scoreItem.color}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Bottom Stats Bar */}
                    <div className="bg-gray-50 p-4 rounded-2xl flex flex-wrap justify-around items-center mb-8 gap-2">
                        <StatItem label="Total Marks" value={resultsData.stats.totalMarks} />
                        <StatItem label="Total Questions" value={resultsData.stats.totalQuestions} />
                        <StatItem label="Attempted" value={resultsData.stats.attempted} />
                        <StatItem label="Correct" value={resultsData.stats.correct} valueColor="text-blue-600" />
                        <StatItem label="Incorrect" value={resultsData.stats.incorrect} valueColor="text-red-500" />
                    </div>

                    {/* Next Button */}
                    <div className="flex justify-center">
                        <button
                            onClick={handleNext}
                            className="px-12 py-3 bg-blue-600 text-white font-semibold text-sm rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors shadow-md"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}