// ui-components.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { FiChevronDown, FiStar } from 'react-icons/fi';
import { IoVideocamOutline } from 'react-icons/io5';

// --- Number Stepper (Used in CourseOptionsCard) ---
export const NumberStepper: React.FC = () => {
    const [count, setCount] = React.useState(0);
    const increment = () => setCount(prev => (prev < 99 ? prev + 1 : 99));
    const decrement = () => setCount(prev => (prev > 0 ? prev - 1 : 0));
    return (
        <div className="relative inline-flex items-center justify-center bg-[#F9FAFB] border border-[#E5E7EB] rounded-full w-[90px] h-[42px]">
            <span className="text-lg text-black font-sans">{String(count).padStart(2, '0')}</span>
            <div className="absolute right-3 flex flex-col h-full">
                <button onClick={increment} className="flex-grow flex items-end pb-0.5 text-[#6B7280] hover:text-black"><svg width="12" height="7" viewBox="0 0 12 7" fill="currentColor"><path d="M6 0.5L11.1962 6.5H0.803848L6 0.5Z" /></svg></button>
                <button onClick={decrement} className="flex-grow flex items-start pt-0.5 text-[#6B7280] hover:text-black"><svg width="12" height="7" viewBox="0 0 12 7" fill="currentColor"><path d="M6 6.5L0.803847 0.5L11.1962 0.5L6 6.5Z" /></svg></button>
            </div>
        </div>
    );
};

// --- Custom Select Dropdown (Used in CourseOptionsCard) ---
interface StyledSelectProps {
    label: string;
    options: string[];
}
export const StyledSelect: React.FC<StyledSelectProps> = ({ label, options }) => (
    <div>
        <label className="block text-sm text-black">{label}<span className="text-[#FF3366]">*</span></label>
        <div className="relative">
            <select className="mt-1 w-full border rounded-full border-[#D5D5D5] bg-[#F9FAFB] py-2 px-4 pr-8 text-sm text-black appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500">
                {options.map((opt, i) => <option key={i}>{opt}</option>)}
            </select>
            <FiChevronDown className="absolute right-3 top-[55%] transform -translate-y-1/2 text-[#6B7280] text-xs pointer-events-none" />
        </div>
    </div>
);

// --- Generic "Watch Demo" button ---
export const DemoVideoButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
    <button onClick={onClick} className='rounded-xl p-2 w-fit bg-[#8DD9B3] text-white flex items-center gap-2 text-sm font-medium whitespace-nowrap hover:bg-green-500 transition-colors'>
        <IoVideocamOutline size={25} />
        Watch demo Video
    </button>
);

// --- Simple Card for Reviews/Feedback ---
interface FeedbackCardProps { name: string; role: string; image: string; review: string; }
export const FeedbackCard: React.FC<FeedbackCardProps> = ({ name, role, image, review }) => (
    <div className="bg-[#F3F4F6] p-4 rounded-2xl flex flex-col h-full">
        <div className="flex items-center mb-2">
            <Image src={image} alt={name} width={64} height={64} className="w-16 h-16 rounded-full object-cover mr-4" />
            <div>
                <h4 className="font-semibold text-black mb-1">{name}</h4>
                <p className="text-xs text-[#6B7280] mb-0.5">{role}</p>
                <div className="flex items-center gap-1.5">{[...Array(4)].map((_, i) => <FiStar key={i} className={`w-3.5 h-3.5 text-[#FFCC00] fill-current `} />)}</div>
            </div>
        </div>
        <p className="text-[10px] text-[#6B7280] leading-tight flex-grow mb-1 ">{review}</p>
    </div>
);

// NOTE: Components like TeacherCard, QuestionForm, etc. are larger, specific "major components" and belong in `components.tsx`.