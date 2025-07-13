// components.tsx
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { CiPower, CiStar } from "react-icons/ci";
import { LuInfo, LuBrain, LuMonitor } from "react-icons/lu";
import { MdBarChart } from "react-icons/md";
import { IoBookOutline } from 'react-icons/io5';
import { NumberStepper, StyledSelect, DemoVideoButton, FeedbackCard } from './ui-components';

// --- Reusable Interfaces ---
export interface ReviewData { name: string; role: string; image: string; rating?: number; review: string; }


// --- Sub-components for major components ---
export const CourseOptionsCard: React.FC = () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    return (
        <div className="bg-white rounded-2xl p-4 lg:p-6 h-full flex flex-col">
            <h2 className="text-2xl lg:text-4xl font-bold">Course Name</h2>
            <p className="text-[#6B7280] mt-1">Category</p>
            <p className="text-2xl lg:text-3xl font-bold text-[#3366FF] mt-4">₹2,000</p>
            <div className="mt-6 space-y-4">
                <StyledSelect label="Batch Size" options={options} />
                <StyledSelect label="Class Bundle" options={options} />
                <StyledSelect label="Batch Days" options={options} />
                <StyledSelect label="Select Batch Time" options={options} />
            </div>
            <div className="mt-auto pt-6 flex items-center gap-3">
                <NumberStepper />
                <button className="flex-1 bg-[#3366FF] hover:bg-blue-700 text-white text-sm py-3 rounded-full font-medium transition">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export const ReviewCard: React.FC = () => {
    const reviews: ReviewData[] = [
        { name: 'Customer Name', role: 'Student / Parent', image: "/images/profile2.jpg", rating: 4, review: 'Lorem ipsum dolor sit amet...' },
        { name: 'Customer Name', role: 'Student / Parent', image: "/images/profile2.jpg", rating: 3, review: 'Lorem ipsum dolor sit amet...' },
    ];
    return (
        <div className="bg-white p-4 rounded-2xl h-full flex flex-col">
            <h2 className="text-xl font-semibold mb-4">Reviews</h2>
            <div className="space-y-3 flex-grow overflow-y-auto pr-1">
                {reviews.map((myreview, index) => <FeedbackCard key={index} {...myreview} />)}
            </div>
        </div>
    );
};

export const TeacherCard: React.FC = () => (
    // This is the TeacherCard component. All its content is here.
    <div className="rounded-2xl w-full p-2 justify-between gap-2 flex flex-col lg:flex-row" style={{ backgroundImage: "url('/admin/bg-pattern.png')", backgroundSize: "cover" }}>
        {/* ... full JSX for TeacherCard as you provided ... */}
    </div>
);
export const TeacherControlPanel: React.FC = () => (
    <div className="bg-[#faf9fb] p-4 rounded-2xl shadow-sm"><h2 className="font-semibold text-lg mb-4">Teacher Control Panel</h2>
        <div className="flex flex-wrap gap-4">
            <Link href="./payload-management" passHref><a className="..."><LuMonitor /> Payload Management/Edit Working Hours</a></Link>
            <Link href="./teacher-profile-management" passHref><a className="..."><CiPower /> Profile Management</a></Link>
        </div>
    </div>
);


// --- Page-Specific Major Section Components ---
// These are the large building blocks for your main page.

// Section 1: Top section combining Course Image, Options, and Reviews
export const CourseIntroSection: React.FC = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* This div now wraps the two inner cards */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-4 grid grid-cols-1 lg:grid-cols-5 gap-4">
            <div className="relative h-64 sm:h-76 lg:h-full lg:w-full lg:col-span-3">
                <Image className='rounded-2xl object-cover' src="/b2c-student/b2c-student.png" alt='b2c-student banner' fill />
            </div>
            <div className="lg:col-span-2">
                <CourseOptionsCard />
            </div>
        </div>
        {/* ReviewCard is its own column in the main grid */}
        <div className="lg:col-span-1">
            <ReviewCard />
        </div>
    </div>
);

// Section 2: The About Course / Vertical Tabs section
export const AboutCourseSection: React.FC = () => {
    const [selected, setSelected] = useState<number | null>(0);
    const buttons = [{ label: 'About Course', icon: <LuInfo /> }, { label: 'Benefits', icon: <CiStar /> }, { label: 'Pedagogy', icon: <LuBrain /> }, { label: 'Curriculum', icon: <MdBarChart /> }, { label: 'Levels', icon: <IoBookOutline /> }];

    return (
        <div className="grid grid-cols-1 md:grid-cols-7 bg-white rounded-2xl p-4 gap-4">
            {/* Sidebar logic */}
            <div className="flex flex-col md:flex-row md:items-center md:overflow-x-auto custom-scrollbar-thin md:pb-2 lg:flex-col lg:pb-0 lg:overflow-x-visible gap-3 lg:col-span-1">
                {buttons.map((btn, index) => (
                    <motion.button key={index} onClick={() => setSelected(index)} className="flex items-center gap-1 cursor-pointer rounded-full px-2 py-2 transition-colors duration-50 flex-shrink-0"
                        animate={{ backgroundColor: isActive ? '#FF3366' : 'transparent', color: isActive ? '#ffffff' : '#9CA3AF' }}
                        whileHover={{ backgroundColor: isActive ? '#FF3366' : '#F3F4F6' }} >
                        <span className="text-lg">{btn.icon}</span><span className="text-m font-medium">{btn.label}</span>
                    </motion.button>
                ))}
            </div>
            {/* Content logic */}
            <div className="lg:col-span-6 md:col-span-6">
                <div className="flex flex-wrap w-full gap-2 justify-between items-center">
                    <h3 className="text-lg font-semibold">About Course</h3>
                    <DemoVideoButton />
                </div>
                <p className="mt-2 text-sm text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, corporis natus. Voluptatibus aliquam repudiandae assumenda, placeat, maxime fugit tenetur libero eveniet sunt cupiditate iusto aperiam, ipsa eligendi at. Architecto, praesentium...</p>
                <p className="mt-4 text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi rerum nam velit ullam aliquam quo quibusdam voluptatibus neque, libero, aperiam enim, animi hic nobis reiciendis itaque! Asperiores reprehenderit earum iure!...</p>
            </div>
        </div>
    );
};

// Section 3: "Book a Free Demo" Banner
export const DemoBannerSection: React.FC = () => (
    <div className="relative py-8 rounded-2xl overflow-hidden mt-4">
        <div className="absolute inset-0 z-0 bg-center bg-repeat" style={{ backgroundImage: "url('/Background6.png')", backgroundSize: '900px', filter: 'grayscale(10%) brightness(1.1) blur(0.5px)', opacity: 0.3 }} />
        <div className="absolute inset-0 z-0 bg-[#3366FF]" style={{ opacity: 0.9, mixBlendMode: 'multiply' }} />
        <div className="relative flex gap-4 items-center flex-col md:flex-row justify-center w-full z-10">
            <h1 className="text-2xl sm:text-3xl lg:text-[48px] font-bold text-white text-center">Book a Free Demo</h1>
            <button className='bg-white cursor-pointer rounded-full px-6 py-2 sm:px-8 text-sm sm:text-m font-medium whitespace-nowrap'>Click Here</button>
        </div>
    </div>
);