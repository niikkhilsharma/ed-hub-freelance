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
    text: 'Question',
    options: [
      { id: 'q1o1', text: 'Option 1', isCorrect: true, isSelected: true },
      { id: 'q1o2', text: 'Option 2' },
      { id: 'q1o3', text: 'Option 3' },
      { id: 'q1o4', text: 'Option 4' },
    ],
  },
  {
    id: 'q2',
    questionNumber: 2,
    text: 'Question',
    options: [
      { id: 'q2o1', text: 'Option 1', isSelected: true, isCorrect: false },
      { id: 'q2o2', text: 'Option 2', isCorrect: true }, // User missed this, but it's correct
      { id: 'q2o3', text: 'Option 3' },
      { id: 'q2o4', text: 'Option 4' },
    ],
  },
  {
    id: 'q3',
    questionNumber: 3,
    text: 'Question',
    options: [
      { id: 'q3o1', text: 'Option 1' },
      { id: 'q3o2', text: 'Option 2' },
      { id: 'q3o3', text: 'Option 3', isCorrect: true, isSelected: true },
      { id: 'q3o4', text: 'Option 4' },
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
const COLOR_CORRECT_TEXT = 'text-[#8DD9B3]'; // Standard Tailwind green
// const COLOR_CORRECT_ICON = 'text-[#8DD9B3]'; // A slightly different shade for icon if desired, or same
const COLOR_INCORRECT_TEXT = 'text-[#E57373]'; // Standard Tailwind red
const COLOR_INCORRECT_ICON = 'text-[#E57373]';
const COLOR_NEUTRAL_TEXT = 'text-[#6B7280]'; // Lighter gray for neutral options
const COLOR_SCORE_BLUE = 'text-[#3366FF]';
const COLOR_RATING_STARS = 'text-[#FF3366]'; // Pinkish-red from your theme
const COLOR_BUTTON_PRIMARY_BG = 'bg-[#3366FF]';
const COLOR_BUTTON_PRIMARY_TEXT = 'text-white';
const BACKGROUND_LIGHT_GRAY_BOX = 'bg-[#F3F4F6]'; // For score boxes and report button
const BORDER_GRAY = 'border-[#D5D5D5]'; // Consistent border color

// --- Sub-components ---

const OptionDisplay: React.FC<{ option: Option }> = ({ option }) => {
  let iconComponent = null;
  let optionTextColor = COLOR_NEUTRAL_TEXT;

  // Determine icon and text color based on option state
  if (option.isSelected && option.isCorrect) {
    iconComponent = <IoCheckmarkCircle className={`w-[40px] h-[40px] text-[#8DD9B3] flex-shrink-0`} />;
    optionTextColor = COLOR_CORRECT_TEXT;
  } else if (option.isSelected && !option.isCorrect) {
    iconComponent = <IoCloseCircle className={`w-[40px] h-[40px] ${COLOR_INCORRECT_ICON} flex-shrink-0`} />;
    optionTextColor = COLOR_INCORRECT_TEXT;
  } else if (!option.isSelected && option.isCorrect) {
    // Show the correct answer even if not selected by the user
    iconComponent = <IoCheckmarkCircle className={`w-[40px] h-[40px] text-[#8DD9B3] flex-shrink-0`} />;
    optionTextColor = COLOR_CORRECT_TEXT;
  } else {
    // Neutral, unselected, incorrect option: Provide a placeholder for alignment if icons are present elsewhere
    iconComponent = <div className="w-[40px] h-[40px] flex-shrink-0"></div>;
  }

  return (
    <div className={`w-full flex items-center p-6 bg-white rounded-full`}>
      {iconComponent}
      <span className={`ml-2.5 text-md font-medium ${optionTextColor}`}>{option.text}</span>
    </div>
  );
};

const QuestionItem: React.FC<{ question: Question }> = ({ question }) => {
  return (
    // Styling similar to your old QuestionReviewBlock
    <div className=" text-lg p-5 sm:p-6 bg-[#F9FAFB] h-[524px] w-full rounded-2xl "> {/* Image shows more prominent shadow here */}
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
    <div className="flex items-center gap-2">
      {Array.from({ length: maxRating }).map((_, index) =>
        index < currentRating ? (
          <IoStar key={index} className={`w-[15px] h-[15px] ${COLOR_RATING_STARS}`} />
        ) : (
          <IoStarOutline key={index} className={`w-[15px] h-[15px] text-gray-300`} />
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
   <div
  className="relative rounded-2xl p-4 space-y-5 overflow-hidden"
  style={{
    backgroundImage: "url('/images/brandpatternnoti.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 h-full bg-black/40 z-0 rounded-2xl"></div>

  {/* Content Layer */}
  <div className="relative z-10 space-y-5">
    {/* Assessment Score */}
    <div className="bg-white p-4 rounded-xl text-center shadow">
      <p className="text-lg text-gray-500 mb-1">Assessment Score</p>
      <p className={`text-4xl font-bold ${COLOR_SCORE_BLUE}`}>{summary.assessmentScore}</p>
    </div>

    {/* Incorrect Answers */}
    <div className="bg-white p-4 rounded-xl text-center shadow">
      <p className="text-lg text-gray-500 mb-1">Incorrect Answers</p>
      <p className={`text-4xl font-bold ${COLOR_SCORE_BLUE}`}>{summary.incorrectAnswers}</p>
    </div>

    {/* View Detailed Report Button */}
    <button className="w-full flex items-center justify-center gap-2 py-2 bg-white rounded-xl hover:bg-gray-200 transition-colors shadow">
      <IoTimeOutline className={`w-5 h-5 ${COLOR_RATING_STARS}`} />
      <span className={`text-xl ${COLOR_RATING_STARS}`}>View Detailed Report</span>
    </button>

    {/* Ratings Section */}
    <div className="space-y-6  rounded-2xl px-3 py-6 bg-white">
      {summary.ratings.map((rating) => (
        <div key={rating.id} className="flex justify-between items-center">
          <p className="text-md text-[#6b7280] font-medium">{rating.name}</p>
          <StarRatingDisplay currentRating={rating.score} maxRating={rating.maxScore} />
        </div>
      ))}
    

    {/* Feedback Form */}
    <form onSubmit={handleFeedbackSubmit} className="space-y-3 pt-1">
      <div>
        <label htmlFor="feedback" className="block text-md font-semibold text-black mb-1.5">
          Write a Feedback
        </label>
        <textarea
          id="feedback"
          rows={4}
          value={feedbackText}
          onChange={(e) => setFeedbackText(e.target.value)}
          placeholder="Text"
          className={`w-full h-40 text-[#6B7280] p-3 bg-[#F9FAFB] border ${BORDER_GRAY} rounded-xl focus:ring-1 focus:ring-[#3366FF] focus:border-[#3366FF] outline-none text-sm resize-none`}
        />
      </div>
      <button
        type="submit"
        className={`w-32 py-2.5 sm:py-3 ${COLOR_BUTTON_PRIMARY_BG} ${COLOR_BUTTON_PRIMARY_TEXT} rounded-full hover:opacity-90 transition-opacity text-sm sm:text-md `}
      >
        Submit
      </button>
    </form>
    </div>
  </div>
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
    <div className="flex-col bg-white p-6 w-full h-[1700px] rounded-2xl flex  sm:flex-row gap-8 items-start">
      {/* Left Column: Questions List */}
      <div className=" w-[55%] space-y-6">
        {questionsData.map((question) => (
          <QuestionItem key={question.id} question={question} />
        ))}
      </div>

      {/* Right Column: Summary Panel */}
      <div className="w-[40%] ">
        <SummaryPanel summary={summaryData} />
      </div>
    </div>
  );
};

export default function StudentPaperPage() {
  const headerUser = {
    name: "Shlok Agheda",
    role: "Student",
    avatarSrc: "/teacher-b2b/profile.jpg",
  }; // UPDATE PATH

  const handleBackClick = () => {
		if (typeof window !== 'undefined') {
			window.history.back()
		}
	}
  return (
    <div className="bg-[#eeeeee] min-h-screen flex flex-col">
      <Header user={headerUser} />

      {/* Back Button and Page Title */}
      <div className='bg-white'>
              <div className="flex items-center mx-auto max-w-[96rem] gap-3  px-4 sm:px-6 py-3.5 sticky top-0 z-40">
              <button
                onClick={handleBackClick}
                className="p-1.5 text-black hover:text-[#FF3366] focus:outline-none rounded-md" // Using ACCENT_PINK for hover
                aria-label="Go back">
                <FiArrowLeft className="w-5 h-5" />
              </button>
              <h1 className="text-lg sm:text-xl font-semibold text-[#ff3366]" >
                Student Name
              </h1>
            </div>
            </div>

      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
        <AssessmentReviewPage />
      </main>

      <Footer />
    </div>
  );
}