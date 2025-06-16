"use client";

import React from "react";
import { FiPlus, FiTrash2 } from "react-icons/fi";
import {
  TestQuestion,
  NumOptionsInput,
  QuestionPointsInput, // Import helpers
  INPUT_BG,
  INPUT_BORDER,
  PRIMARY_BLUE, // Import styles
} from "./CreateAssessmentPage"; // Assuming co-location for simplicity of imports

interface TestQuestionnaireStepProps {
  questions: TestQuestion[];
  onAddNewQuestion: () => void;
 onUpdateQuestionField: <K extends keyof TestQuestion>(
  questionId: string,
  field: K,
  value: TestQuestion[K]
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

  return (
    <div className="space-y-6">
      {questions.map((q, index) => (
        <div
          key={q.id}
          className={`p-4 sm:p-5 rounded-lg border ${INPUT_BORDER} bg-slate-50 shadow-sm relative`}
        >
          <div className="flex justify-between items-start mb-3">
            <label className="text-sm font-semibold text-black">
              Question {index + 1}.
            </label>
            <button
              onClick={() => onRemoveQuestion(q.id)}
              className="text-red-500 hover:text-red-700 p-1 -mt-1 -mr-1"
            >
              <FiTrash2 className="w-4 h-4" />
            </button>
          </div>
          <textarea
            placeholder="Enter question text"
            value={q.questionText}
            onChange={(e) =>
              onUpdateQuestionField(q.id, "questionText", e.target.value)
            }
            rows={2}
            className={`w-full px-3 py-2 mb-3 ${INPUT_BG} ${INPUT_BORDER} border rounded-xl shadow-sm focus:ring-1 focus:ring-[${PRIMARY_BLUE}] focus:border-[${PRIMARY_BLUE}] outline-none text-sm resize-none`}
          />{" "}
          {/* rounded-xl for consistency */}
          <div className="flex justify-between items-center mb-3">
            <label className="text-xs font-medium text-gray-700">Options</label>
            <NumOptionsInput
              value={q.numOptions}
              onChange={(val) => onUpdateNumOptionsForQuestion(q.id, val)}
            />
          </div>
          <div className="space-y-2 mb-4">
            {q.options.slice(0, q.numOptions).map((opt, optIndex) => (
              <div key={opt.id} className="flex items-center">
                <label
                  htmlFor={`q${q.id}_opt${opt.id}`}
                  className="text-xs text-gray-600 mr-2 w-16 shrink-0"
                >
                  Option {optIndex + 1}:
                </label>
                <input
                  type="text"
                  id={`q${q.id}_opt${opt.id}`}
                  placeholder={`Option ${optIndex + 1} text`}
                  value={opt.text}
                  onChange={(e) =>
                    onUpdateQuestionOptionText(q.id, optIndex, e.target.value)
                  }
                  className={`flex-grow px-3 py-2 ${INPUT_BG} ${INPUT_BORDER} border rounded-lg shadow-sm focus:ring-1 focus:ring-[${PRIMARY_BLUE}] focus:border-[${PRIMARY_BLUE}] outline-none text-sm`}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              {q.options.slice(0, q.numOptions).map((opt, optIndex) => (
                <label
                  key={opt.id}
                  className="flex items-center space-x-1.5 cursor-pointer"
                >
                  <input
                    type="radio"
                    name={`correctOpt_${q.id}`}
                    value={opt.id}
                    checked={q.correctOptionId === opt.id}
                    onChange={() =>
                      onUpdateQuestionField(q.id, "correctOptionId", opt.id)
                    }
                    className={`form-radio h-4 w-4 text-[${PRIMARY_BLUE}] focus:ring-offset-0 focus:ring-[${PRIMARY_BLUE}] border-gray-400`}
                  />
                  <span className="text-xs text-gray-700">
                    Option {optIndex + 1}
                  </span>
                </label>
              ))}
            </div>
            <QuestionPointsInput
              value={q.points}
              onChange={(val) => onUpdateQuestionField(q.id, "points", val)}
            />
          </div>
        </div>
      ))}
      <button
        onClick={onAddNewQuestion}
        className={`w-full flex items-center justify-center gap-2 py-2.5 border-2 border-dashed border-[${PRIMARY_BLUE}] text-[${PRIMARY_BLUE}] hover:bg-blue-50 rounded-lg transition-colors text-sm font-medium`}
      >
        <FiPlus className="w-4 h-4" /> Add Question
      </button>
      {/* Hidden file input for the upload button in parent (CreateBWTestContent) to trigger */}
      <input
        type="file"
        id="fileUploadInputHidden_questionnaire"
        className="hidden"
        onChange={handleFileUpload}
        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
      />
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
  // Dummy handlers, as this is hardcoded presentational
  const handleIncrement = () => console.log("Increment");
  const handleDecrement = () => console.log("Decrement");
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
              <h3 className="text-sm font-semibold text-black">Options</h3>
              <NumberSpinnerInput value={data.numOptionsValue} />
            </div>
            <div className="space-y-2.5">
              {data.options.map((optPlaceholder, index) => (
                <div key={`q${data.qNumber}_opt${index}`}>
                  <label
                    htmlFor={`q${data.qNumber}_option_${index + 1}`}
                    className="block text-xs font-medium text-gray-600 mb-1"
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
