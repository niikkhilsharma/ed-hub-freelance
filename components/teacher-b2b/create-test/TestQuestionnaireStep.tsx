"use client";

import React, { useState } from "react";
import { FiPlus, FiTrash2 } from "react-icons/fi";
import {
  TestQuestion,
  // TestOption,
  NumOptionsInput,
  QuestionPointsInput, // Import helpers
  INPUT_BG,
  INPUT_BORDER,
  PRIMARY_BLUE, // Import styles
} from "./CreateBWTestPage"; // Assuming co-location for simplicity of imports

interface TestQuestionnaireStepProps {
  questions: TestQuestion[];
  onAddNewQuestion: () => void;
  onUpdateQuestionField: (
    questionId: string,
    field: keyof TestQuestion,
    value: string
  ) => void;
  onUpdateQuestionOptionText: (
    questionId: string,
    optionIndex: number,
    text: string
  ) => void;
  onUpdateNumOptionsForQuestion: (questionId: string, newNum: number) => void;
  onRemoveQuestion: (questionId: string) => void;
  // onUploadFile: () => void; // Add if file upload is handled here
}

const TestQuestionnaireStep: React.FC<TestQuestionnaireStepProps> = ({
  questions,
  onAddNewQuestion,
  onUpdateQuestionField,
  onUpdateQuestionOptionText,
  onUpdateNumOptionsForQuestion,
  onRemoveQuestion,
}) => {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      alert(
        `File ${event.target.files[0].name} selected for upload for questionnaire.`
      );
      // Actual upload logic would go here
      event.target.value = ""; // Reset file input
    }
  };

  return (
    <div className="space-y-6">
      <HardcodedQuestionForm />
    </div>
  );
};
export default TestQuestionnaireStep;

// Helper component for the number input with up/down arrows
const NumberSpinnerInput: React.FC<{
  value: string | number;
  label?: string;
  isPoints?: boolean;
}> = ({ value, label }) => {
  const [tempValue, setTempValue] = useState<string | number>(value);
  const handleIncrement = () => setTempValue(Number(tempValue)+1)
  const handleDecrement = () => setTempValue(Number(tempValue)-1)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    console.log("Change", e.target.value);

  return (
    <div className="flex items-center space-x-1.5">
      {label && (
        <span className="text-sm text-black font-medium">{label}</span>
      )}
      <div
        className={`relative inline-flex items-center justify-between px-2 py-1.5 mr-1 bg-[#F9FAFB] border border-[#E5E7EB] rounded-full  h-8 w-15`}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className="w-full text-center bg-transparent outline-none text-sm font-medium text-black appearance-none [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          maxLength={2}
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col items-center h-full justify-center">
          <button
            type="button"
            onClick={handleIncrement}
            className="text-[#6B7280]0 hover:text-gray-700 h-1/3 flex items-center text-[10px]"
          >
            ▲
          </button>
          <button
            type="button"
            onClick={handleDecrement}
            className="text-[#6B7280]0 hover:text-gray-700 h-1/3 flex items-center text-[10px]"
          >
            ▼
          </button>
        </div>
      </div>
    </div>
  );
};

const HardcodedQuestionForm: React.FC = () => {
  const questionData = [
    {
      qNumber: 1,
      qTextPlaceholder: "Question",
      options: ["Question", "Question", "Question", "Question"],
      correctOptionLabel: "Option 4", // For radio button selection
      numOptionsValue: "4",
      pointsValue: "00",
    },
    {
      qNumber: 2,
      qTextPlaceholder: "Question",
      options: ["Question", "Question", "Question", "Question"],
      correctOptionLabel: "Option 2", // Example different correct option
      numOptionsValue: "4",
      pointsValue: "00",
    },
  ];

  return (
    <div className=" max-w-4xl mx-auto space-y-8">
      {questionData.map((data, qIndex) => (
        <div
          key={`question-${qIndex}`}
          className={`space-y-4 ${
            qIndex > 0 ? "pt-6 border-t border-gray-700" : ""
          }`}
        >
          {/* Question Input Section */}
          <div>
            <label
              htmlFor={`question_text_${data.qNumber}`}
              className="block text-md font-semibold text-black mb-1.5"
            >
              Question
            </label>
            <div className="flex gap-1.5 items-center">
              <p className="text-md font-semibold text-black">{data.qNumber}.</p>
            <input
              type="text"
              id={`question_text_${data.qNumber}`}
              placeholder={data.qTextPlaceholder}
              className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#D5D5D5] rounded-full focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
              />
              </div>
          </div>

          {/* Options Section */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-base font-semibold text-black">Options</h3>
              <NumberSpinnerInput value={data.numOptionsValue} />
            </div>
            <div className="space-y-2.5">
              {data.options.map((optPlaceholder, index) => (
                <div key={`q${data.qNumber}_opt${index}`}>
                  <label
                    htmlFor={`q${data.qNumber}_option_${index + 1}`}
                    className="block text-xs font-medium text-black mb-1"
                  >
                    Option {index + 1}:
                  </label>
                  <input
                    type="text"
                    id={`q${data.qNumber}_option_${index + 1}`}
                    placeholder={optPlaceholder}
                    className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#D5D5D5] rounded-full focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Correct Option Selection & Points */}
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 pt-6">
            <div className="flex flex-grow items-center justify-between mr-24 gap-x-4 gap-y-1">
              {/* Radio buttons for correct option - labels should match options */}
              {data.options.map((_, index) => (
                <label
                  key={`q${data.qNumber}_radio_opt${index + 1}`}
                  className="flex items-center space-x-1.5 cursor-pointer"
                >
                  <input
                    type="radio"
                    name={`correct_option_q${data.qNumber}`}
                    className="form-radio h-4 w-4 rounded-full text-blue-600 border-gray-400 focus:ring-blue-500"
                  />
                  <span className="text-sm font-semibold text-black">
                    Option {index + 1}
                  </span>
                </label>
              ))}
            </div>
            <NumberSpinnerInput
              label="Points"
              value={data.pointsValue}
              isPoints
            />
          </div>
        </div>
      ))}
    </div>
  );
};
