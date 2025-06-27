// /app/select-type/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import MaxWidthWrapper from "@/components/max-width-wrapper";

// --- Data for the selection options ---
const selectionOptions = [
    { id: 'explore_courses', title: 'Explore EdUnique Courses', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', iconSrc: '/select1.png' },
    { id: 'future_school', title: 'Become a Future School', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', iconSrc: '/select2.png' },
    { id: 'membership_plans', title: 'Membership Plans', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', iconSrc: '/select3.png' },
    { id: 'subscribe', title: 'Subscribe @199', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', iconSrc: '/select4.png' },
];

// --- Color Palette ---
const COLORS = {
    primaryBlue: '#3366FF',
    textBlack: '#000000',
    textGray: '#777777',
};

// --- Reusable SelectionCard Component ---
interface SelectionCardProps {
    option: typeof selectionOptions[0];
    isSelected: boolean;
    onSelect: () => void;
}
const SelectionCard: React.FC<SelectionCardProps> = ({ option, isSelected, onSelect }) => (
    <button onClick={onSelect} className="w-full flex items-center gap-4 p-3 rounded-full bg-white hover:shadow-lg transition-all duration-200 cursor-pointer">
        <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center ">
            <Image src={option.iconSrc} alt={option.title} width={90} height={90} className="w-full h-full object-contain" priority quality={100}/>
        </div>
        <div className="flex-1 text-left">
            <h3 className="text-base font-bold" style={{ color: COLORS.textBlack }}>{option.title}</h3>
            <p className="text-sm mt-1 leading-snug" style={{ color: COLORS.textGray }}>{option.description}</p>
        </div>
        <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
            {isSelected && (
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: COLORS.primaryBlue }}>
                    <FiCheck className="w-6 h-6 text-white" strokeWidth={3} />
                </div>
            )}
        </div>
    </button>
);


// --- Main Static Page Component ---
export default function SelectTypePage() {
    const [selectedOptionId, setSelectedOptionId] = useState<string>(selectionOptions[0].id);

    return (
        <div className="bg-black">

        <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6">
            
            <div className="relative w-full max-w-2xl rounded-3xl overflow-hidden">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundColor: 'white',
                        backgroundImage: "url(/pattern.png)",
                        backgroundRepeat: 'repeat',
                        backgroundSize: "1000px",
                        filter: "brightness(60%) grayscale(10%)"
                    }}
                />
                <div
                    className="absolute inset-0 z-10"
                    style={{
                        backgroundColor: '#cccccc',
                        filter: "brightness(120%) opacity(70%)"
                    }}
                />

                <div className="relative z-20 px-12 py-8 md:px-16">
                    <div className="space-y-4">
                        {selectionOptions.map((option) => (
                            <SelectionCard
                            key={option.id}
                            option={option}
                            isSelected={selectedOptionId === option.id}
                            onSelect={() => setSelectedOptionId(option.id)}
                            />
                        ))}
                    </div>

                    <div className="mt-6 flex justify-center">
                        <button
                            className="px-12 text-white font-bold py-3 rounded-full transition-colors duration-200 hover:opacity-90"
                            style={{ backgroundColor: COLORS.primaryBlue }}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
                            </div>
    );
}