'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
// import Image from 'next/image'; // For the metric conversion image
import {
    FiArrowLeft, FiChevronDown,
    FiChevronLeft as FiPageLeft, FiChevronRight as FiPageRight
} from 'react-icons/fi';

// --- Main Category Tab Component (Reused) ---
const MainCategoryTab = ({ label, isActive, onClick, hasDropdown = false }: { label: string, isActive: boolean, onClick: () => void, hasDropdown?: boolean }) => (
    <button
        onClick={onClick}
        className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
            isActive
                ? 'bg-pink-500 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-200'
        }`}
    >
        {label}
        {hasDropdown && <FiChevronDown className={`w-4 h-4 transition-transform duration-200 ${isActive ? 'transform rotate-180' : ''} `} />}
    </button>
);

// --- Sample Data ---
const mainCategories = ['Academics', 'Skill Development', 'Brain Function', 'Sports', 'STEMnology', 'Competition', 'Extra curriculars'];

// This would typically be fetched based on worksheetId and pageNumber
const worksheetContent = {
    title: "Understanding Unitary Method – Level 1",
    subTitle: "Worksheet",
    page: 1,
    totalPages: 5, // Example total pages
    contentHtml: `
        <h2 class="text-xl font-bold text-gray-800 mb-2">What <span class="text-blue-600">is Unitary method?</span></h2>
        <p class="mb-4"><span class="text-blue-600 font-semibold">The unitary method</span> is a method in which you find the value of a unit and then the value of a required number of units.</p>
        <p class="mb-4">Suppose you go to the market to purchase 6 apples. The shopkeeper tells you that he is selling 10 apples for Rs 100. In this case, the apples are the units, and the cost of the apples is the value. While solving a problem using the unitary method, it is important to recognize the units and values.</p>
        <p class="mb-6">For simplification, always write the things to be calculated on the right-hand side and things known on the left-hand side.</p>

        <div class="bg-gray-100 p-6 rounded-xl shadow-inner mb-6 border border-gray-200 max-w-md mx-auto text-center">
            <p class="text-md font-semibold text-gray-700">10 Apples = <span class="text-pink-600">Rs.100</span></p>
            <p class="text-md font-semibold text-gray-700">1 Apple    = 100/10 = <span class="text-pink-600">Rs.10</span></p>
            <p class="text-md font-semibold text-gray-700">6 Apples = 10 x 6 = <span class="text-pink-600">Rs.60</span></p>
        </div>

        <p class="mb-4">Consider another <span class="text-blue-600 font-semibold">example</span>; a car runs 150 km on 15 litres of fuel, how many kilometres will it run on 10 litres of fuel?</p>
        <p class="mb-4"><span class="text-blue-600 font-semibold">In the above question</span>, try and identify units (known) and values (unknown).</p>
        <p class="mb-2">Kilometre = Unknown (Right Hand Side)</p>
        <p class="mb-4">No of litres of fuel = Known (Left Hand Side)</p>

        <div class="flex flex-col md:flex-row items-start md:items-center gap-6 mb-4">
            <div class="flex-1">
                <p class="mb-2">Now we will try and solve this problem.</p>
                <p>15 litres = 150 km</p>
                <p>1 litre = 150/15 = 10 km</p>
                <p>10 litres = 10 x 10 = 100 km</p>
                <p class="mt-2 text-blue-600 font-semibold">The car will run 100 kilometres on 10 litres of fuel.</p>
            </div>
            <div class="flex-shrink-0">
                <img src="/images/metric-conversion-steps.png" alt="Metric Conversion Steps" class="max-w-xs w-full md:w-auto h-auto rounded" />
            </div>
        </div>

        <h2 class="text-xl font-bold text-gray-800 my-6">Solved <span class="text-blue-600">Questions-</span></h2>
        <div class="space-y-6">
            <div>
                <p class="mb-1"><span class="text-blue-600 font-semibold">Example 1.</span> Income of Amir is Rs 12000 per month, and that of Amit is Rs 191520 per annum. If the monthly expenditure of each of them is Rs 9960 per month, find the ratio of their savings.</p>
                <p class="font-semibold text-blue-600">Solution:</p>
                <p>Savings of Amir per month = Rs (12000 – 9960) = Rs 2040</p>
                <p>In 12 month Amit earn = Rs.191520</p>
                <p>Income of Amit per month = Rs 191520/12 = Rs. 15960</p>
                <p>Savings of Amit per month = Rs (15960 – 9960) = Rs 6000</p>
                <p class="mt-1"><span class="font-semibold text-blue-600">Therefore, the ratio of savings of Amir and Amit = 2040:6000 = 17:50</span></p>
            </div>
            <div>
                <p class="mb-1"><span class="text-blue-600 font-semibold">Example 2.</span> A car travelling at a speed of 140 kmph covers 420 km. How much time will it take to cover 280 km?</p>
                <p class="font-semibold text-blue-600">Solution:</p>
                <p>First, we need to find the time required to cover 420 km.</p>
                <p>Speed = Distance/Time</p>
                <p>140 = 420/T</p>
                <p>T = 3 hours</p>
                <p>Applying the unitary method,</p>
                <p>420 km = 3 hours</p>
                <p>1 km = 3/420 hour</p>
                <p>280 km = (3/420) x 280 = <span class="text-blue-600 font-semibold">2 hours</span></p>
            </div>
            <div>
                <p class="mb-1"><span class="text-blue-600 font-semibold">Example 3.</span> “A” finishes his work in 15 days while “B” takes 10 days. How many days will the same work be done if they work together?</p>
                {/* Solution for example 3 would go here */}
            </div>
        </div>
    `
};

export default function WorksheetViewPage() {
    const [activeMainCategory, setActiveMainCategory] = useState(mainCategories[0]);
    const [currentPage, setCurrentPage] = useState(worksheetContent.page);
    const totalPages = worksheetContent.totalPages;

    const headerUser = { name: "Shlok Agheda", role: "Student", avatarSrc: "/placeholder-avatar-student.jpg" }; // UPDATE PATH

    const goToPreviousPage = () => {
        setCurrentPage(prev => Math.max(1, prev - 1));
        // Add logic to fetch content for the previous page
    };

    const goToNextPage = () => {
        setCurrentPage(prev => Math.min(totalPages, prev + 1));
        // Add logic to fetch content for the next page
    };


    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <Header user={headerUser} />

            <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
                {/* Top Bar: Back Button & Category Tabs */}
                <div className="flex items-center gap-3 mb-6">
                    <button className="p-1.5 text-gray-600 hover:text-blue-600 focus:outline-none">
                        <FiArrowLeft className="w-5 h-5" />
                    </button>
                    <div className="bg-white p-2 rounded-xl shadow-sm overflow-x-auto flex-grow">
                        <div className="flex space-x-1">
                            {mainCategories.map(category => (
                                <MainCategoryTab
                                    key={category}
                                    label={category}
                                    isActive={activeMainCategory === category}
                                    onClick={() => setActiveMainCategory(category)}
                                    hasDropdown={category === 'Sports'}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Worksheet Content Card */}
                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
                    {/* Worksheet Header */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                        <div>
                            <h1 className="text-xl md:text-2xl font-bold text-pink-600">{worksheetContent.title}</h1>
                            <p className="text-sm text-gray-500 mt-1">{worksheetContent.subTitle}</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-100 px-3 py-2 rounded-full">
                            <button onClick={goToPreviousPage} disabled={currentPage === 1} className="disabled:opacity-50">
                                <FiPageLeft className="w-4 h-4 cursor-pointer hover:text-gray-800" />
                            </button>
                            <span>Page {currentPage}</span>
                            <button onClick={goToNextPage} disabled={currentPage === totalPages} className="disabled:opacity-50">
                                <FiPageRight className="w-4 h-4 cursor-pointer hover:text-gray-800" />
                            </button>
                        </div>
                    </div>

                    {/* Worksheet Content (Rendered from HTML string) */}
                    {/* For security, if content comes from users, sanitize it properly */}
                    <article
                        className="prose prose-sm sm:prose-base max-w-none prose-h2:text-xl prose-h2:font-bold prose-h2:text-gray-800 prose-p:mb-4 prose-strong:text-blue-600"
                        dangerouslySetInnerHTML={{ __html: worksheetContent.contentHtml }}
                    />
                    {/* Add more interactive elements or structured components if content is not HTML */}

                </div>
            </main>

            <Footer />
        </div>
    );
}