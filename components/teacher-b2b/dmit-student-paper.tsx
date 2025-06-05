"use client";

import React, { useState } from 'react';
import { IoCheckmarkCircle, IoCloseCircle, IoTimeOutline, IoStar, IoStarOutline, IoArrowBack } from 'react-icons/io5'; // Re-using IoArrowBack if needed for internal back button. For page level, use FiArrowLeft.
import { FiArrowLeft } from 'react-icons/fi'; // Using FiArrowLeft for consistency with your previous page titles
import Header from "@/components/layout/Header"; // Adjust path as needed
import Footer from "@/components/layout/Footer"; // Adjust path as needed


// --- Data Interfaces (re-using from previous AssessmentReviewPage) ---
interface Option {
  id: string;
  text: string;
  isCorrect?: boolean;
  isSelected?: boolean;
}

interface Question {
  id: string;
  questionNumber: number;
  text: string;
  options: Option[];
}

interface RatingCategory {
  id: string;
  name: string;
  score: number;
  maxScore: number;
}

// --- New Data Interface for Individual Scores ---
interface IndividualSkillScore {
  id: string;
  skillName: string;
  percentage: number;
  colorClass: string; // Tailwind CSS class for the progress bar color e.g., 'bg-blue-500'
}

interface ExtendedAssessmentSummaryData {
  assessmentScore: number;
  // incorrectAnswers: number; // This is removed as per the new image
  individualScores: IndividualSkillScore[];
  ratings: RatingCategory[];
}


// --- Sample Data (extending previous) ---
const sampleQuestionsData: Question[] = [
  {
    id: 'q1',
    questionNumber: 1,
    text: 'Which of the following is a primary color?',
    options: [
      { id: 'q1o1', text: 'Option 1 (e.g. Red)', isCorrect: true, isSelected: true },
      { id: 'q1o2', text: 'Option 2 (e.g. Green)' },
      { id: 'q1o3', text: 'Option 3 (e.g. Orange)' },
      { id: 'q1o4', text: 'Option 4 (e.g. Purple)' },
    ],
  },
  {
    id: 'q2',
    questionNumber: 2,
    text: 'What is 2 + 2?',
    options: [
      { id: 'q2o1', text: 'Option 1 (e.g. 3)', isSelected: true, isCorrect: false },
      { id: 'q2o2', text: 'Option 2 (e.g. 4)', isCorrect: true },
      { id: 'q2o3', text: 'Option 3 (e.g. 5)' },
      { id: 'q2o4', text: 'Option 4 (e.g. 6)' },
    ],
  },
  {
    id: 'q3',
    questionNumber: 3,
    text: 'Select the capital of France.',
    options: [
      { id: 'q3o1', text: 'Option 1 (e.g. Berlin)' },
      { id: 'q3o2', text: 'Option 2 (e.g. London)' },
      { id: 'q3o3', text: 'Option 3 (e.g. Paris)', isCorrect: true, isSelected: true },
      { id: 'q3o4', text: 'Option 4 (e.g. Rome)' },
    ],
  },
];

const sampleExtendedSummaryData: ExtendedAssessmentSummaryData = {
  assessmentScore: 40,
  individualScores: [
    { id: 'is1', skillName: 'Academic Skills', percentage: 40, colorClass: 'bg-blue-500' },
    { id: 'is2', skillName: 'Brain Development', percentage: 60, colorClass: 'bg-yellow-400' },
    { id: 'is3', skillName: 'Personality Development', percentage: 50, colorClass: 'bg-pink-500' }, // Using Tailwind pink
    { id: 'is4', skillName: 'Emotional Intelligence', percentage: 20, colorClass: 'bg-teal-400' }, // Using Tailwind teal
    { id: 'is5', skillName: 'Pedagogy learning', percentage: 40, colorClass: 'bg-orange-400' }, // Using Tailwind orange
  ],
  ratings: [
    { id: 'r1', name: 'Concept', score: 3, maxScore: 5 },
    { id: 'r2', name: 'Critical thinking', score: 4, maxScore: 5 },
    { id: 'r3', name: 'Application of Concept', score: 5, maxScore: 5 },
    { id: 'r4', name: 'Retention', score: 3, maxScore: 5 },
    { id: 'r5', name: 'Logical Reasoning', score: 4, maxScore: 5 },
  ],
};


// --- Style Constants (from previous, can be extended) ---
const COLOR_CORRECT_TEXT = 'text-green-600';
const COLOR_CORRECT_ICON = 'text-green-500';
const COLOR_INCORRECT_TEXT = 'text-red-600';
const COLOR_INCORRECT_ICON = 'text-red-500';
const COLOR_NEUTRAL_TEXT = 'text-gray-500';
const COLOR_SCORE_BLUE = 'text-[#3366FF]';
const COLOR_RATING_STARS = 'text-[#FF3366]';
const COLOR_BUTTON_PRIMARY_BG = 'bg-[#3366FF]';
const COLOR_BUTTON_PRIMARY_TEXT = 'text-white';
const BACKGROUND_LIGHT_GRAY_BOX = 'bg-[#F9FAFB]';
const BORDER_GRAY = 'border-gray-200';


// --- Sub-components (Re-using OptionDisplay, QuestionItem, StarRatingDisplay from previous) ---

const OptionDisplay: React.FC<{ option: Option }> = ({ option }) => {
  let iconComponent = null;
  let optionTextColor = COLOR_NEUTRAL_TEXT;

  if (option.isSelected && option.isCorrect) {
    iconComponent = <IoCheckmarkCircle className={`w-[22px] h-[22px] ${COLOR_CORRECT_ICON} flex-shrink-0`} />;
    optionTextColor = COLOR_CORRECT_TEXT;
  } else if (option.isSelected && !option.isCorrect) {
    iconComponent = <IoCloseCircle className={`w-[22px] h-[22px] ${COLOR_INCORRECT_ICON} flex-shrink-0`} />;
    optionTextColor = COLOR_INCORRECT_TEXT;
  } else if (!option.isSelected && option.isCorrect) {
    iconComponent = <IoCheckmarkCircle className={`w-[22px] h-[22px] ${COLOR_CORRECT_ICON} flex-shrink-0`} />;
    optionTextColor = COLOR_CORRECT_TEXT;
  } else {
    iconComponent = <div className="w-[22px] h-[22px] flex-shrink-0"></div>;
  }

  return (
    <div className={`w-full flex items-center p-3.5 bg-white rounded-xl ${BORDER_GRAY} border shadow-sm`}>
      {iconComponent}
      <span className={`ml-2.5 text-sm font-medium ${optionTextColor}`}>{option.text}</span>
    </div>
  );
};

const QuestionItem: React.FC<{ question: Question }> = ({ question }) => {
  return (
    <div className="p-5 sm:p-6 bg-[#F9FAFB] rounded-2xl shadow-lg">
      <h3 className="text-md font-semibold text-black mb-4">
        {question.questionNumber}) {question.text || "Question"}
      </h3>
      <div className="space-y-3">
        {question.options.map((opt) => (
          <OptionDisplay key={opt.id} option={opt} />
        ))}
      </div>
    </div>
  );
};

const StarRatingDisplay: React.FC<{ currentRating: number; maxRating: number }> = ({
  currentRating,
  maxRating,
}) => {
  return (
    <div className="flex items-center">
      {Array.from({ length: maxRating }).map((_, index) =>
        index < currentRating ? (
          <IoStar key={index} className={`w-[18px] h-[18px] ${COLOR_RATING_STARS}`} />
        ) : (
          <IoStarOutline key={index} className={`w-[18px] h-[18px] text-gray-300`} />
        )
      )}
    </div>
  );
};

// --- New Sub-component for Individual Scores ---
const IndividualScoresPanel: React.FC<{ scores: IndividualSkillScore[] }> = ({ scores }) => {
  return (
    <div className="pt-2 pb-1"> {/* Adjust padding as needed */}
      <h3 className="text-lg font-bold text-gray-900 mb-3">Individual Scores</h3>
      <div className="space-y-3">
        {scores.map(score => (
          <div key={score.id} className="flex items-center">
            <p className="text-xs sm:text-sm text-gray-700 font-medium w-2/5 truncate pr-2">{score.skillName}</p>
            <div className="flex-grow bg-gray-200 rounded-full h-2.5 sm:h-3 mr-2">
              <div
                className={`${score.colorClass} h-2.5 sm:h-3 rounded-full`}
                style={{ width: `${score.percentage}%` }}
              ></div>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 font-medium w-[3em] text-right">{score.percentage}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};


// --- Extended Summary Panel Component ---
const ExtendedSummaryPanel: React.FC<{ summary: ExtendedAssessmentSummaryData }> = ({ summary }) => {
  const [feedbackText, setFeedbackText] = useState('');

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Feedback submitted:', feedbackText);
    alert(`Feedback submitted: ${feedbackText}`);
    setFeedbackText('');
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 space-y-5">
      {/* Assessment Score */}
      <div className={`${BACKGROUND_LIGHT_GRAY_BOX} p-4 rounded-xl text-center`}>
        <p className="text-xs sm:text-sm text-gray-500 mb-1">Assessment Score</p>
        <p className={`text-4xl font-bold ${COLOR_SCORE_BLUE}`}>{summary.assessmentScore}</p>
      </div>

      {/* Individual Scores - NEW */}
      <IndividualScoresPanel scores={summary.individualScores} />

      {/* View Detailed Report Button */}
      <button className={`w-full flex items-center justify-center gap-2 py-3 ${BACKGROUND_LIGHT_GRAY_BOX} rounded-xl hover:bg-gray-200 transition-colors`}>
        <IoTimeOutline className={`w-5 h-5 ${COLOR_RATING_STARS}`} />
        <span className={`text-sm font-semibold ${COLOR_RATING_STARS}`}>View Detailed Report</span>
      </button>

      {/* Ratings Section */}
      <div className="space-y-3 pt-1">
        {summary.ratings.map((rating) => (
          <div key={rating.id} className="flex justify-between items-center">
            <p className="text-xs sm:text-sm text-gray-700 font-medium">{rating.name}</p>
            <StarRatingDisplay currentRating={rating.score} maxRating={rating.maxScore} />
          </div>
        ))}
      </div>

      {/* Write a Feedback Form */}
      <form onSubmit={handleFeedbackSubmit} className="space-y-3 pt-1">
        <div>
          <label htmlFor="feedback" className="block text-sm font-semibold text-gray-900 mb-1.5">
            Write a Feedback
          </label>
          <textarea
            id="feedback"
            rows={4}
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
            placeholder="Text"
            className={`w-full p-3 border ${BORDER_GRAY} rounded-xl focus:ring-1 focus:ring-[#3366FF] focus:border-[#3366FF] outline-none text-sm shadow-sm resize-none`}
          />
        </div>
        <button
          type="submit"
          className={`w-full py-2.5 sm:py-3 ${COLOR_BUTTON_PRIMARY_BG} ${COLOR_BUTTON_PRIMARY_TEXT} font-semibold rounded-xl hover:opacity-90 transition-opacity text-sm`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

// --- Main TestReportContent Component ---
const TestReportContent: React.FC = () => {
  const [questionsData] = useState<Question[]>(sampleQuestionsData);
  const [summaryData] = useState<ExtendedAssessmentSummaryData>(sampleExtendedSummaryData);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
      {/* Left Column: Questions List */}
      <div className="lg:col-span-2 space-y-6">
        {questionsData.map((question) => (
          <QuestionItem key={question.id} question={question} />
        ))}
      </div>

      {/* Right Column: Summary Panel */}
      <div className="lg:col-span-1">
        <ExtendedSummaryPanel summary={summaryData} />
      </div>
    </div>
  );
};



export default function StudentTestReportPage() {
  // This should ideally come from page props or context
  const studentName = "Student Name"; // Placeholder, make this dynamic

  const headerUser = {
    name: "Shlok Agheda", // Example User
    role: "Student",     // Example Role
    avatarSrc: "/placeholder-avatar-student.jpg", // UPDATE THIS PATH
  };

  const handleBackClick = () => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };

  return (
    <div className="bg-[#eeeeee] min-h-screen flex flex-col">
      <Header user={headerUser} />

      {/* Page Title Bar */}
      <div className="flex items-center gap-3 bg-white px-4 sm:px-6 py-3.5 shadow-sm sticky top-0 z-40">
        <button
          onClick={handleBackClick}
          className="p-1.5 text-gray-700 hover:text-[#FF3366] focus:outline-none rounded-md"
          aria-label="Go back"
        >
          <FiArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-lg sm:text-xl font-semibold text-[#FF3366]">{studentName}</h1>
      </div>

      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        <TestReportContent />
      </main>

      <Footer />
    </div>
  );
}