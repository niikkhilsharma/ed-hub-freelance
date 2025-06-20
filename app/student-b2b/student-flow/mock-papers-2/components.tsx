// components.tsx
"use client";

import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { MainCategoryTab, OptionButton, SimpleIconButton, ActionButton } from './ui-components';

// --- Data Interfaces ---
export interface Option { id: string; text: string; }
export interface QuestionData { id: number; text: string; options: Option[]; }

// --- Component 1: MainCategoryTabsBar ---
interface MainCategoryTabsBarProps { categories: string[]; activeCategory: string; onCategoryClick: (category: string) => void; }
export const MainCategoryTabsBar: React.FC<MainCategoryTabsBarProps> = ({ categories, activeCategory, onCategoryClick }) => (
    <div className="mb-4 bg-white px-2 py-1.5 rounded-2xl shadow-sm overflow-x-auto custom-scrollbar-thin sm:mb-6 sm:px-3 sm:py-2 sm:rounded-3xl">
        <div className="flex space-x-2 justify-start items-center relative min-w-max sm:space-x-4 sm:justify-center sm:min-w-full">
            <SimpleIconButton icon={<FiArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />} ariaLabel="Scroll categories left" className="absolute left-0 z-10 bg-white/80 hover:bg-gray-200"/>
            {categories.map(category => (
                <MainCategoryTab key={category} label={category} isActive={activeCategory === category} onClick={() => onCategoryClick(category)} hasDropdown={category === "Sports"}/>
            ))}
        </div>
    </div>
);

// --- Component 2: TestHeader (Similar to QuizHeader) ---
interface TestHeaderProps { onBackClick?: () => void; testTitle: string; assessmentType: string; }
export const TestHeader: React.FC<TestHeaderProps> = ({ onBackClick, testTitle, assessmentType }) => (
    <div className="mb-6 flex items-start gap-2 sm:mb-8 sm:gap-3"> {/* items-start for title alignment */}
        {onBackClick && <SimpleIconButton onClick={onBackClick} icon={<FiArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3} />} ariaLabel="Go back"/>}
        <div>
            <h2 className="text-xl font-bold text-[#FF3366] sm:text-2xl">{testTitle}</h2>
            <p className="text-sm font-light text-black mt-0.5 sm:text-md sm:mt-1">{assessmentType}</p>
        </div>
    </div>
);

// --- Component 3: QuestionBlock ---
interface QuestionBlockProps {
  question: QuestionData; questionNumber: number; selectedOptionId: string | null; // Renamed from selectedOption
  onOptionSelect: (questionId: number, optionId: string) => void;
}
export const QuestionBlock: React.FC<QuestionBlockProps> = ({ question, questionNumber, selectedOptionId, onOptionSelect }) => (
  // Original: mb-4 p-6 bg-[#F9FAFB] max-w-2xl rounded-3xl
  // Parent will handle max-w-2xl if needed for the group of questions.
  <div className="mb-4 p-4 bg-[#F9FAFB] rounded-2xl w-full sm:p-6 sm:rounded-3xl">
    {/* Original h3: text-md font-medium text-gray-800 mb-4 */}
    <h3 className="text-sm font-medium text-gray-800 mb-3 sm:text-md sm:mb-4">
      {questionNumber}) <span className="ml-1">{question.text || "Question"}</span> {/* Display question.text */}
    </h3>
    <div className="space-y-2.5 sm:space-y-3">
      {question.options.map((option) => (
        <OptionButton key={option.id} text={option.text} isSelected={selectedOptionId === option.id} onClick={() => onOptionSelect(question.id, option.id)}/>
      ))}
    </div>
  </div>
);

// --- Component 4: TestContent (Wraps questions and submit button) ---
interface TestContentProps {
    questions: QuestionData[]; answers: Record<number, string | null>;
    onOptionSelect: (questionId: number, optionId: string) => void;
    onSubmit: (e: React.FormEvent) => void;
}
export const TestContent: React.FC<TestContentProps> = ({ questions, answers, onOptionSelect, onSubmit}) => (
    <form onSubmit={onSubmit} className="w-full">
        {/* The QuestionBlocks will take the width of their container. */}
        {/* If the container of TestContent needs to be max-w-2xl and centered, that happens in page.tsx */}
        {questions.map((question, index) => (
            <QuestionBlock key={question.id} question={question} questionNumber={index + 1} selectedOptionId={answers[question.id] || null} onOptionSelect={onOptionSelect}/>
        ))}
        {/* Original submit button wrapper: mt-10 flex justify-center max-w-2xl */}
        {/* This centering and max-width should apply to the button itself if it's narrower than the form */}
        <div className="mt-8 flex justify-center sm:mt-10">
            <ActionButton type="submit" fullWidthOnMobile={false}> {/* fullWidthOnMobile=false to match original centered button */}
                Submit
            </ActionButton>
        </div>
    </form>
);