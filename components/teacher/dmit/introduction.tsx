'use client';

import Sidebar from '@/components/teacher/layout'; 
import Image from 'next/image';
import { FiSearch, FiBell, FiChevronDown } from 'react-icons/fi';

export default function DmtiIntroductionPage() {
    const descriptionText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />

            <main className="flex-1 ml-64"> {/* ml-64 for sidebar */}
                {/* Top Bar */}
                <header className="bg-white shadow-sm sticky top-0 z-30">
                    <div className="max-w-full mx-auto px-6 md:px-8 h-16 flex justify-between items-center">
                        <div>
                            {/* Title reflects DMIT test based on content */}
                            <h1 className="text-xl font-semibold text-gray-800">Introduction</h1>
                            <p className="text-xs text-gray-500">Dashboard</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="relative hidden sm:block">
                                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input type="text" placeholder="Search" className="pl-10 pr-4 py-2 w-48 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" />
                            </div>
                            <button className="p-2 bg-white border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 relative"> <FiBell className="w-5 h-5" /> </button>
                            <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg p-1.5 pr-2 cursor-pointer hover:bg-gray-50">
                                <Image src="/placeholder-avatar.jpg" alt="User Avatar" width={28} height={28} className="rounded-full" />
                                <div className="hidden md:block"> <p className="text-xs font-medium text-gray-800">Robert Allen</p> <p className="text-xs text-gray-500">Teacher</p> </div>
                                <FiChevronDown className="w-4 h-4 text-gray-500" />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content Area */}
                <div className="p-6 md:p-8">
                    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col items-center text-center">
                        {/* Illustration */}
                        <div className="mb-8 max-w-sm"> {/* Limit width of image container */}
                             <Image
                                src="/placeholder-dmit-illustration.png" // <-- REPLACE WITH YOUR ILLUSTRATION PATH
                                alt="DMIT Test Illustration"
                                width={500} // Adjust based on your image aspect ratio
                                height={350}
                                className="w-full h-auto object-contain"
                            />
                        </div>

                        {/* Title */}
                        <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 max-w-xl">
                            5-level DMIT (Dermatoglyphics Multiple Intelligence Test) and skill assessment
                        </h1>

                        {/* Description */}
                         <p className="text-sm text-gray-600 leading-relaxed mb-8 max-w-xl">
                            {descriptionText}
                        </p>

                        {/* Summary Badges */}
                        <div className="flex flex-wrap justify-center gap-3 text-sm mb-10">
                            <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md">Total Questions : 100</span>
                            <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md">Total Mark : 100</span>
                            <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md">Time : 0h:30m :10s</span>
                        </div>

                        {/* Next Button */}
                        <div className="w-full flex justify-end">
                            <button
                                onClick={() => console.log("Next button clicked")} // Replace with actual navigation or action
                                className="px-8 py-2.5 bg-blue-600 text-white font-medium text-sm rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}