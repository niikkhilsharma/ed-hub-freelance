// components.tsx
"use client";

import React from 'react';
import { FiArrowLeft } from 'react-icons/fi'; // Only icons directly used by these major components
import { ActionButton, MainCategoryTab, OptionButton, SimpleIconButton } from './ui-components';

// --- Data Interfaces (from your original) ---
export interface Option { id: string; text: string; }
export interface QuestionData { id: number; text: string; options: Option[]; }

// --- Component 1: MainCategoryTabsBar ---
interface MainCategoryTabsBarProps {
    categories: string[];
    activeCategory: string;
    onCategoryClick: (category: string) => void;
}
export const MainCategoryTabsBar: React.FC<MainCategoryTabsBarProps> = ({ categories, activeCategory, onCategoryClick }) => (
    // Original desktop wrapper: mb-6 bg-white px-3 py-2 rounded-3xl shadow-sm overflow-x-auto
    <div className="mb-4 bg-white px-2 py-1.5 rounded-2xl shadow-sm overflow-x-auto custom-scrollbar-thin
                   sm:mb-6 sm:px-3 sm:py-2 sm:rounded-3xl">
        {/* Original inner div: flex space-x-4 justify-center items-center relative */}
        <div className="flex space-x-2 justify-start items-center relative min-w-max 
                       sm:space-x-4 sm:justify-center sm:min-w-full">
            {/* Original button: absolute left-0 p-1.5 text-black cursor-pointer focus:outline-none */}
            <SimpleIconButton 
                icon={<FiArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />} // Preserved your strokeWidth
                ariaLabel="Scroll categories left" 
                className="absolute left-0 z-10 bg-white/80 hover:bg-gray-200" // This positioning might need adjustment for mobile if tabs are too many
            />
            {categories.map(category => (
                <MainCategoryTab
                    key={category}
                    label={category}
                    isActive={activeCategory === category}
                    onClick={() => onCategoryClick(category)}
                    hasDropdown={category === "Sports"} // Your example
                />
            ))}
            {/* No right arrow in your original for this component */}
        </div>
    </div>
);

// --- Component 2: QuizHeader ---
interface QuizHeaderProps {
    onBackClick?: () => void; // Assuming this arrow is for navigation
    quizTitle: string;
    topicName: string;
}
export const QuizHeader: React.FC<QuizHeaderProps> = ({ onBackClick, quizTitle, topicName }) => (
    // Original: mb-8 flex items-center gap-3
    <div className="mb-6 flex items-center gap-2 sm:mb-8 sm:gap-3">
        {onBackClick && (
            // Original button: p-1.5 text-black cursor-pointer focus:outline-none
            <SimpleIconButton 
                onClick={onBackClick}
                icon={<FiArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3} />} 
                ariaLabel="Go back"
            />
        )}
        {/* Original inner div: flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 */}
        {/* This structure stacks title/subtitle by default */}
        <div> 
            {/* Original h2: text-2xl font-bold text-[#FF3366] */}
            <h2 className="text-xl font-bold text-[#FF3366] sm:text-2xl">{quizTitle}</h2>
            {/* Original p: text-md text-black mt-1 */}
            <p className="text-sm text-black mt-0.5 sm:text-md sm:mt-1">{topicName}</p>
        </div>
    </div>
);

// --- Component 3: QuestionBlock ---
interface QuestionBlockProps {
  question: QuestionData;
  questionNumber: number;
  selectedOptionId: string | null;
  onOptionSelect: (questionId: number, optionId: string) => void;
}
export const QuestionBlock: React.FC<QuestionBlockProps> = ({
  question, questionNumber, selectedOptionId, onOptionSelect,
}) => (
  // Original: mb-4 p-6 bg-[#F9FAFB] max-w-2xl rounded-3xl
  // Retaining max-w-2xl for desktop. On mobile, it will be constrained by parent.
  // Removed mx-auto, parent container (QuizContent) will handle centering if needed.
  <div className="mb-4 p-4 bg-[#F9FAFB] w-full rounded-2xl
                 sm:p-6 sm:rounded-3xl md:max-w-2xl"> {/* md:max-w-2xl to apply only on medium screens up */}
    {/* Original h3: text-md font-semibold text-gray-800 mb-4 */}
    <h3 className="text-sm font-semibold text-gray-800 mb-3 sm:text-md sm:mb-4">
      {questionNumber}) {question.text || "Question"}
    </h3>
    {/* Original options div: space-y-3 */}
    <div className="space-y-2.5 sm:space-y-3">
      {question.options.map((option) => (
        <OptionButton
          key={option.id}
          text={option.text}
          isSelected={selectedOptionId === option.id}
          onClick={() => onOptionSelect(question.id, option.id)}
        />
      ))}
    </div>
    
  </div>
);

// --- Component 4: QuizContent (New major component to hold questions and submit button) ---
interface QuizContentProps {
    questions: QuestionData[];
    answers: Record<number, string | null>;
    onOptionSelect: (questionId: number, optionId: string) => void;
    onSubmit: (e: React.FormEvent) => void;
}
export const QuizContent: React.FC<QuizContentProps> = ({ questions, answers, onOptionSelect, onSubmit}) => (
    <form onSubmit={onSubmit} className="w-full"> {/* Form wraps questions and submit */}
        {questions.map((question, index) => (
            <QuestionBlock
                key={question.id}
                question={question}
                questionNumber={index + 1}
                selectedOptionId={answers[question.id] || null}
                onOptionSelect={onOptionSelect}
            />
        ))}
        {/* Original submit button container: mt-10 flex justify-center max-w-2xl */}
        {/* Retaining max-w-2xl for the button centering logic for desktop, and justify-center */}
        <div className="mt-8 flex justify-center sm:mt-10 max-w-2xl">
            <ActionButton type="submit" fullWidthOnMobile={true}>
                Submit
            </ActionButton>
        </div>
    </form>
);