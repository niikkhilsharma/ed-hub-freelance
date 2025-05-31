'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function SchoolCodePage() {
    const [schoolCode, setSchoolCode] = useState('');

    return (
        <div
            className="min-h-screen flex items-center justify-center p-4 bg-blue-600" // Main blue background
            // If you have a pattern image:
            // style={{ backgroundImage: 'url(/images/blue-pattern-bg.png)', backgroundRepeat: 'repeat', backgroundSize: 'auto' }}
        >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row w-full max-w-4xl lg:max-w-5xl">

                {/* Left Section - Pink with Grid (Identical to Choose Profile Page) */}
                <div className="w-full md:w-1/2 relative bg-pink-500 text-white p-8 lg:p-12 flex flex-col justify-between min-h-[450px] md:min-h-0">
                    {/* Grid Overlay */}
                    <div
                        className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage: 'url(/images/pink-grid-overlay.png)', // UPDATE PATH
                            backgroundRepeat: 'repeat',
                            backgroundSize: '20px 20px',
                        }}
                    ></div>

                    {/* Text Content */}
                    <div className="relative z-10 mb-auto pt-4 md:pt-0">
                        <h1 className="text-3xl lg:text-4xl font-bold mb-3">Become a Future School</h1>
                        <p className="text-sm lg:text-base opacity-90 max-w-md">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>

                    {/* Yellow Circle Background */}
                    <div className="absolute bottom-0 left-0 w-full h-2/3 md:h-3/4 z-0 overflow-hidden">
                        <div className="absolute -bottom-1/4 -left-1/4 w-[150%] h-[150%] bg-yellow-400 rounded-full transform scale-75 md:scale-100"></div>
                    </div>

                    {/* Main Image */}
                    <div className="relative z-10 mt-auto flex justify-center md:block">
                         <Image
                            src="/images/teacher-student-main.png" // <-- UPDATE PATH
                            alt="Teacher helping student"
                            width={500}
                            height={400}
                            className="w-full max-w-md h-auto object-contain drop-shadow-lg"
                        />
                    </div>
                </div>

                {/* Right Section - Light Pink School Code Input */}
                <div className="w-full md:w-1/2 bg-pink-50 p-8 lg:p-12 flex flex-col justify-center"> {/* Added justify-center */}
                    <div className="w-full max-w-sm mx-auto"> {/* Center content and limit width */}
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">School Code</h2>
                        <p className="text-sm text-gray-500 mb-10">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>

                        <div className="space-y-2 mb-8">
                            <label htmlFor="school-code" className="block text-sm font-semibold text-gray-700 mb-2">
                                Unique School Code
                            </label>
                            <input
                                id="school-code"
                                type="text"
                                value={schoolCode}
                                onChange={(e) => setSchoolCode(e.target.value)}
                                placeholder="Enter Unique School Code"
                                className="block w-full rounded-full border border-gray-200 bg-white px-6 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                            />
                        </div>

                        <button
                            onClick={() => console.log("School Code:", schoolCode)}
                            className="w-full bg-blue-500 text-white font-medium py-3.5 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-colors shadow-md"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}