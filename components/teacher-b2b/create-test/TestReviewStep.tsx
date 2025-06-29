"use client";

import React from "react";
import {
  TestDetailsData,
  TestQuestion,
  sampleClassesData,
  sampleGroupsData, // Import sample data for display
  INPUT_BORDER,
  PRIMARY_BLUE, // Import styles
} from "./CreateBWTestPage"; // Assuming co-location for simplicity of imports

interface TestReviewStepProps {
  testDetails: TestDetailsData;
  questions: TestQuestion[];
  onEditStep: (stepNumber: number) => void;
}

const TestReviewStep: React.FC<TestReviewStepProps> = ({
  testDetails,
}) => {
  const {
    selectedClasses,
    selectedGroup,
  } = testDetails;

  const selectedClassName =
    sampleClassesData.find((c) => c.value === selectedClasses)?.label || "N/A";
  const selectedGroupName =
    sampleGroupsData.find((g) => g.value === selectedGroup)?.label || "N/A";

  return (
    <div className="space-y-6">
      <TestPreviewPageHardcoded />
    </div>
  );

};
export default TestReviewStep;

import { IoCheckmarkCircle } from "react-icons/io5"; // Make sure this is installed

// --- Style Constants (as per your OptionDisplay component) ---
// Define these or ensure they are imported/available in the scope
// const COLOR_CORRECT_TEXT = "text-green-600"; // Example: text-green-700
// const COLOR_INCORRECT_ICON = "text-red-500"; // Example: text-red-600
// const COLOR_INCORRECT_TEXT = "text-red-600"; // Example: text-red-700
const COLOR_NEUTRAL_TEXT = "text-gray-600"; // Example: text-black

// --- Data Interfaces (as per your components) ---
interface Option {
  id: string;
  text: string;
  isCorrect?: boolean;
  isSelected?: boolean; // User's selection (not student's answer in this preview context)
}

interface Question {
  id: string;
  questionNumber: number;
  text: string;
  options: Option[];
  points: number; // Added points as seen in the image
}

// --- Hardcoded Data ---
const testPreviewData = {
  title: "Test Title",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  details: {
    scheduledFor: "12/04/2025, 08:00 AM",
    batch: "Batch 1",
    time: "30 Minutes",
    totalPoint: 100,
    passing: 40,
    expiryDate: "14/04/2025",
  },
  questions: [
    {
      id: "q1",
      questionNumber: 1,
      text: "Which part of the plant makes food ?",
      points: 4,
      options: [
        { id: "q1o1", text: "Option" },
        { id: "q1o2", text: "Option", isCorrect: true, isSelected: true }, // isSelected here means it's the marked correct answer for preview
        { id: "q1o3", text: "Option" },
      ],
    },
    {
      id: "q2",
      questionNumber: 1, // Numbering seems off in image, should be 2
      text: "Which part of the plant makes food ?",
      points: 4,
      options: [
        { id: "q2o1", text: "Option" },
        { id: "q2o2", text: "Option", isCorrect: true, isSelected: true },
        { id: "q2o3", text: "Option" },
      ],
    },
    // Add more questions as needed
  ],
};

// --- Provided OptionDisplay Component (with minor adjustments for image consistency) ---
const OptionDisplay: React.FC<{ option: Option }> = ({ option }) => {
  let iconComponent = null;
  let optionTextColor = COLOR_NEUTRAL_TEXT;
  let optionBgColor = "bg-white"; // Default background

  // In this preview context, isSelected signifies the correct answer to be shown
  if (option.isSelected && option.isCorrect) {
    iconComponent = (
      <IoCheckmarkCircle
        className={`w-5 h-5 sm:w-8 sm:h-8 text-[#8DD9B3] flex-shrink-0`}
      />
    ); // Adjusted size and color slightly
    optionTextColor = "text-[#8DD9B3]"; // Darker green for text
    optionBgColor = "bg-white"; // Light green background for selected correct option
  } else {
    // For unselected options in preview, no icon needed, just text
    iconComponent = <div className="w-5 h-5 sm:w-8 sm:h-8 flex-shrink-0"></div>; // Placeholder for alignment
  }

  return (
    <div
      className={`w-full flex items-center p-3 sm:p-3 ${optionBgColor} rounded-full `}
    >
      {iconComponent}
      <span className={`ml-2 sm:ml-2.5 text-sm ${optionTextColor} font-medium`}>
        {option.text}
      </span>
    </div>
  );
};

// --- Adapted QuestionItem Component ---
const QuestionPreviewItem: React.FC<{ question: Question }> = ({
  question,
}) => {
  return (
    <div className="p-5 sm:p-6 max-w-2xl bg-[#F9FAFB] rounded-2xl ">
      {" "}
      {/* Slightly different bg and shadow than original provided */}
      <div className="flex justify-between items-start mb-3">
        <div>
          <p className="text-sm text-gray-500 mb-1">
            Question {question.questionNumber}
          </p>
          <h3 className="text-base sm:text-lg font-semibold text-black leading-tight">
            {question.text || "Question text not available"}
          </h3>
        </div>
        <p className="text-sm sm:text-md font-semibold text-[#6B7280] self-end whitespace-nowrap">
          {question.points} Points
        </p>
      </div>
      <div className="space-y-2.5 sm:space-y-3 mt-4">
        {question.options.map((opt) => (
          <OptionDisplay key={opt.id} option={opt} />
        ))}
      </div>
      <div className="mt-5 text-left">
        <button
          onClick={() => alert(`Edit question ${question.questionNumber}`)}
          className="px-5 py-2 bg-[#B0B0B01A] text-black text-xs font-medium rounded-full hover:bg-gray-300 transition-colors"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

// --- Main Test Preview Component ---
const TestPreviewPageHardcoded: React.FC = () => {
  const { title, description, details, questions } = testPreviewData;

  return (
      <div className=" mx-auto p-6 sm:p-8">
        {/* Test Header Section */}
        <div className="mb-5">
          <h1 className="text-2xl  font-semibold text-black mb-3">
            {title}
          </h1>
          <p className="text-sm sm:text-sm text-[#777777] leading-relaxed mb-5">
            {description}
          </p>
          <div className="p-4 bg-[#F9FAFB] rounded-2xl space-y-1.5 text-xs text-[#808080]">
            <p>
              Scheduled for:{" "}
              <span className="font-medium text-[#F9326F]">
                {details.scheduledFor}
              </span>
              <span className="text-[#F9326F] mx-1.5"></span>
              Batch:{" "}
              <span className="font-medium text-[#F9326F]">{details.batch}</span>
            </p>
            <p>
              Time: <span className="font-medium">{details.time}</span>
            </p>
            <p>
              Total Point:{" "}
              <span className="font-medium">{details.totalPoint}</span>
            </p>
            <p>
              Passing: <span className="font-medium">{details.passing}</span>
            </p>
            <p>
              Expiry Date:{" "}
              <span className="font-medium">{details.expiryDate}</span>
            </p>
          </div>
          <div className="mt-5 text-left">
            {" "}
            {/* Aligned to left as per image */}
            <button
              onClick={() => alert(`Edit Test Details`)}
              className="px-6 py-2 bg-[#F9FAFB] text-black text-xs font-medium rounded-full hover:bg-gray-300 transition-colors"
            >
              Edit
            </button>
          </div>
        </div>

        {/* Questions List Section */}
        <div className="space-y-6">
          {questions.map((question, index) => (
            <QuestionPreviewItem
              key={question.id}
              // Ensure question numbers are sequential if they are off in sample data
              question={{ ...question, questionNumber: index + 1 }}
            />
          ))}
        </div>
      </div>
  );
};
