
"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";


export default function FeedbackDashboardPage() {
  const headerUser = {
    name: "Educator Name",
    role: "Teacher",
    avatarSrc: "/teacher-b2b/profile.png",
  };
  return (
    <>
      <Header user={headerUser} />
      <div className="bg-[#eeeeee] min-h-screen">
        <div className="flex bg-white py-3 px-8 items-center gap-4 mb-2">
          <button className="h-8 rounded-full  hover:bg-gray-100"><FiArrowLeft className="w-5 h-5" strokeWidth={2} /></button>
          <h1 className="text-2xl font-semibold text-[#FF3366]">Student Progress Report</h1>
        </div>

        <AcademicFeedbackPage/>
        
      </div>
      <Footer />
    </>
  );
}















interface FeedbackQuestion {
    id: string;
    text: string;
    number: number;
}

interface FeedbackOption {
    id: string;
    text: string;
}

const tabData = ["Student Engagement", "Attitude", "Academics", "Exams"];

const questions: FeedbackQuestion[] = [
    { id: 'q1', number: 1, text: 'Meets Academic Outcomes' },
    { id: 'q2', number: 2, text: 'Quality' },
    { id: 'q3', number: 3, text: 'Demonstrates understanding of key terms' },
    { id: 'q4', number: 4, text: 'Applies knowledge and understanding to new concepts' },
];

const ratingOptions: FeedbackOption[] = [
    { id: 'opt1', text: 'rarely meets deadlines' },
    { id: 'opt2', text: 'sometimes meets deadlines' },
    { id: 'opt3', text: 'generally meets deadlines' },
    { id: 'opt4', text: 'consistently meets deadlines' },
];

const ratingHeaders = ["Not Yet", "Occasionally", "Frequently", "Consistently"];


// --- Reusable UI Sub-Components ---

const TopTabs: React.FC<{ activeTab: string; onTabChange: (tab: string) => void }> = ({ activeTab, onTabChange }) => (
    <div className="flex justify-center items-center gap-2 mb-6 p-1.5 bg-white rounded-2xl">
        {tabData.map(tab => (
            <button
                key={tab}
                onClick={() => onTabChange(tab)}
                className={`px-4 sm:px-6 py-2 rounded-xl text-sm font-semibold transition-colors duration-200 ${
                    activeTab === tab
                        ? 'bg-[#FF3366] text-white'
                        : 'text-[#6B7280] hover:bg-gray-200'
                }`}
            >
                {tab}
            </button>
        ))}
    </div>
);

const FeedbackRow: React.FC<{ question: FeedbackQuestion; selectedValue: string | undefined; onSelect: (optionId: string) => void; }> = ({ question, selectedValue, onSelect }) => (
    <>
        {/* Question Cell */}
        <div className="p-4 flex items-center bg-[#F9FAFB] rounded-2xl">
            <p className="font-semibold text-black text-sm">
                {question.number}. {question.text}
            </p>
        </div>
        
        {/* Option Cells */}
        {ratingOptions.map((option, index) => (
            <div key={option.id} className="p-4 flex items-center bg-[#F9FAFB] rounded-2xl">
                <label className="flex items-center gap-3 cursor-pointer">
                    {/* Custom Radio Button */}
                    <div className="relative flex items-center justify-center w-5 h-5">
                        <input
                            type="radio"
                            name={question.id}
                            value={option.id}
                            checked={selectedValue === option.id}
                            onChange={() => onSelect(option.id)}
                            className="sr-only" // Hide the default radio button
                        />
                        <div className={`w-5 h-5 rounded-full border-2 transition-all ${selectedValue === option.id ? 'border-[#3366FF] bg-white' : 'border-gray-300 bg-gray-100'}`}></div>
                        {selectedValue === option.id && (
                            <div className="absolute w-3 h-3 bg-[#3366FF] rounded-full"></div>
                        )}
                    </div>
                    <span className="text-sm text-black">{option.text}</span>
                </label>
            </div>
        ))}
    </>
);


// --- Main Page Component ---

function AcademicFeedbackPage() {
    const [activeTab, setActiveTab] = useState("Academics");
    const [answers, setAnswers] = useState<Record<string, string>>({});

    const handleSelect = (questionId: string, optionId: string) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: optionId,
        }));
    };

    return (
        <div className="min-h-screen bg-[#eeeeee] p-4 sm:p-8 flex items-center justify-center">
            <div className="w-full max-w-7xl mx-auto">
                
                <TopTabs activeTab={activeTab} onTabChange={setActiveTab} />

                <div className="bg-white rounded-2xl p-4 ">
                  <div className="py-3 px-4 bg-[#B0B0B014] rounded-2xl mb-6">

                    <h1 className="text-xl sm:text-2xl font-semibold text-[#3366FF]">Academics</h1>
                  </div>

                    {/* This container makes the grid horizontally scrollable on small screens */}
                    <div className="overflow-x-auto custom-scrollbar-thin">
                        
                        <div className="grid grid-cols-5 gap-x-4 gap-y-4 min-w-[800px]">
                            
                            {/* Header Row */}
                            <div className="p-4 rounded-xl bg-[#8DD9B3] font-semibold text-black text-sm text-center">Academics</div>
                            {ratingHeaders.map(header => (
                                <div key={header} className="p-4 rounded-xl bg-[#8DD9B3] font-semibold text-black text-sm text-center">
                                    {header}
                                </div>
                            ))}

                            {/* Data Rows */}
                            {questions.map((question, index) => (
                                <div key={question.id} className={`contents`}>
                                     {/* The `contents` class makes this div's children act as direct children of the grid */}
                                     {/* This ensures the bottom border spans correctly */}
                                     <div className={`col-span-5 grid grid-cols-5 gap-x-4 rounded-2xl`}>
                                        <FeedbackRow 
                                            question={question}
                                            selectedValue={answers[question.id]}
                                            onSelect={(optionId) => handleSelect(question.id, optionId)}
                                        />
                                     </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Action Button */}
                    <div className="mt-8 flex justify-center">
                        <button className="bg-[#3366FF] text-white font-semibold text-lg px-12 py-3 rounded-full hover:bg-blue-700 transition-colors hover:shadow-xl">
                            Continue
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}