"use client"; // For useState hooks used in sub-components

import React, { useState } from 'react';
import { IoCheckmarkCircle, IoCloseCircle, IoTimeOutline, IoStar, IoStarOutline } from 'react-icons/io5';
import { FiArrowLeft} from 'react-icons/fi';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// --- Data Interfaces ---
interface Option {
  id: string;
  text: string;
  isCorrect?: boolean;
  isSelected?: boolean;
}

interface Question {
  id: string;
  questionNumber: number;
  text: string; // Actual question text (placeholder "Question" in image, but better with real text)
  options: Option[];
}

interface RatingCategory {
  id: string;
  name: string;
  score: number;
  maxScore: number;
}

interface AssessmentSummaryData {
  assessmentScore: number;
  incorrectAnswers: number;
  ratings: RatingCategory[];
}

// --- Sample Data ---
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
      { id: 'q2o2', text: 'Option 2 (e.g. 4)', isCorrect: true }, // User missed this, but it's correct
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

const sampleSummaryData: AssessmentSummaryData = {
  assessmentScore: 40,
  incorrectAnswers: 3,
  ratings: [
    { id: 'r1', name: 'Concept', score: 3, maxScore: 5 },
    { id: 'r2', name: 'Critical thinking', score: 4, maxScore: 5 },
    { id: 'r3', name: 'Application of Concept', score: 5, maxScore: 5 },
    { id: 'r4', name: 'Retention', score: 3, maxScore: 5 },
    { id: 'r5', name: 'Logical Reasoning', score: 4, maxScore: 5 },
  ],
};

// --- Style Constants (derived from your theme and image) ---
const COLOR_CORRECT_TEXT = 'text-green-600'; // Standard Tailwind green
const COLOR_CORRECT_ICON = 'text-green-500'; // A slightly different shade for icon if desired, or same
const COLOR_INCORRECT_TEXT = 'text-red-600'; // Standard Tailwind red
const COLOR_INCORRECT_ICON = 'text-red-500';
const COLOR_NEUTRAL_TEXT = 'text-gray-500'; // Lighter gray for neutral options
const COLOR_SCORE_BLUE = 'text-[#3366FF]';
const COLOR_RATING_STARS = 'text-[#FF3366]'; // Pinkish-red from your theme
const COLOR_BUTTON_PRIMARY_BG = 'bg-[#3366FF]';
const COLOR_BUTTON_PRIMARY_TEXT = 'text-white';
const BACKGROUND_LIGHT_GRAY_BOX = 'bg-[#F9FAFB]'; // For score boxes and report button
const BORDER_GRAY = 'border-gray-200'; // Consistent border color

// --- Sub-components ---

const OptionDisplay: React.FC<{ option: Option }> = ({ option }) => {
  let iconComponent = null;
  let optionTextColor = COLOR_NEUTRAL_TEXT;

  // Determine icon and text color based on option state
  if (option.isSelected && option.isCorrect) {
    iconComponent = <IoCheckmarkCircle className={`w-[22px] h-[22px] ${COLOR_CORRECT_ICON} flex-shrink-0`} />;
    optionTextColor = COLOR_CORRECT_TEXT;
  } else if (option.isSelected && !option.isCorrect) {
    iconComponent = <IoCloseCircle className={`w-[22px] h-[22px] ${COLOR_INCORRECT_ICON} flex-shrink-0`} />;
    optionTextColor = COLOR_INCORRECT_TEXT;
  } else if (!option.isSelected && option.isCorrect) {
    // Show the correct answer even if not selected by the user
    iconComponent = <IoCheckmarkCircle className={`w-[22px] h-[22px] ${COLOR_CORRECT_ICON} flex-shrink-0`} />;
    optionTextColor = COLOR_CORRECT_TEXT;
  } else {
    // Neutral, unselected, incorrect option: Provide a placeholder for alignment if icons are present elsewhere
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
    // Styling similar to your old QuestionReviewBlock
    <div className="p-5 sm:p-6 bg-[#F9FAFB] rounded-2xl shadow-lg"> {/* Image shows more prominent shadow here */}
      <h3 className="text-md font-semibold text-black mb-4">
        {question.questionNumber}) {question.text || "Question"} {/* Fallback if text is empty */}
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

const SummaryPanel: React.FC<{ summary: AssessmentSummaryData }> = ({ summary }) => {
  const [feedbackText, setFeedbackText] = useState('');

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this feedback to a server
    console.log('Feedback submitted:', feedbackText);
    alert(`Feedback submitted: ${feedbackText}`); // Placeholder
    setFeedbackText('');
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 space-y-5">
      {/* Assessment Score */}
      <div className={`${BACKGROUND_LIGHT_GRAY_BOX} p-4 rounded-xl text-center`}>
        <p className="text-xs sm:text-sm text-gray-500 mb-1">Assessment Score</p>
        <p className={`text-4xl font-bold ${COLOR_SCORE_BLUE}`}>{summary.assessmentScore}</p>
      </div>

      {/* Incorrect Answers */}
      <div className={`${BACKGROUND_LIGHT_GRAY_BOX} p-4 rounded-xl text-center`}>
        <p className="text-xs sm:text-sm text-gray-500 mb-1">Incorrect Answers</p>
        <p className={`text-4xl font-bold ${COLOR_SCORE_BLUE}`}>{summary.incorrectAnswers}</p>
      </div>

      {/* View Detailed Report Button */}
      <button className={`w-full flex items-center justify-center gap-2 py-3 ${BACKGROUND_LIGHT_GRAY_BOX} rounded-xl hover:bg-gray-200 transition-colors`}>
        <IoTimeOutline className={`w-5 h-5 ${COLOR_RATING_STARS}`} />
        <span className={`text-sm font-semibold ${COLOR_RATING_STARS}`}>View Detailed Report</span>
      </button>

      {/* Ratings Section */}
      <div className="space-y-3 pt-1"> {/* Reduced top padding for tighter spacing */}
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

// --- Main AssessmentReviewPage Component ---
const AssessmentReviewPage: React.FC = () => {
  // Data would typically come from props, context, or an API call
  const [questionsData] = useState<Question[]>(sampleQuestionsData);
  const [summaryData] = useState<AssessmentSummaryData>(sampleSummaryData);

  return (
    // This div acts as the content area for the page, to be placed inside your <main> tag
    // It uses a responsive grid layout
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
      {/* Left Column: Questions List */}
      <div className="lg:col-span-2 space-y-6">
        {questionsData.map((question) => (
          <QuestionItem key={question.id} question={question} />
        ))}
      </div>

      {/* Right Column: Summary Panel */}
      <div className="lg:col-span-1">
        <SummaryPanel summary={summaryData} />
      </div>
    </div>
  );
};

export default function StudentPaperPage() {
  const headerUser = {
    name: "Shlok Agheda",
    role: "Student",
    avatarSrc: "/placeholder-avatar-student.jpg",
  }; // UPDATE PATH

  return (
    <div className="bg-[#eeeeee] min-h-screen flex flex-col">
      <Header user={headerUser} />

      {/* Back Button and Page Title */}
      <div className="flex items-center gap-2 bg-white px-6 py-4">
        <button className="p-1.5 text-black hover:text-[#3366FF] focus:outline-none">
          <FiArrowLeft className="w-5 h-5 font-extrabold" />
        </button>
        <h1 className="text-xl font-bold text-[#FF3366]">Test Name</h1>{" "}
        {/* Or dynamic course name */}
      </div>

      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
        <AssessmentReviewPage />
      </main>

      <Footer />
    </div>
  );
}