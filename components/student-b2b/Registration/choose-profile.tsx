'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FiCheck } from 'react-icons/fi'; // For the checkmark

const profiles = [
    { id: 'student', label: 'Student / Parents', iconSrc: '/images/icon-student-profile.png' }, // UPDATE PATH
    { id: 'teacher', label: 'Teacher', iconSrc: '/images/icon-teacher-profile.png' },       // UPDATE PATH
    { id: 'principal', label: 'Principal', iconSrc: '/images/icon-principal-profile.png' }, // UPDATE PATH
];

export default function ChooseProfilePage() {
    const [selectedProfile, setSelectedProfile] = useState<string>(profiles[0].id);

    return (
        <div
            className="min-h-screen flex items-center justify-center p-4 bg-blue-600" // Main blue background
            // The repeating pattern is complex, better done with CSS or a dedicated BG image
            // For simplicity, using a solid blue. If you have a pattern image:
            // style={{ backgroundImage: 'url(/images/blue-pattern-bg.png)', backgroundRepeat: 'repeat', backgroundSize: 'auto' }}
        >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row w-full max-w-4xl lg:max-w-5xl">

                {/* Left Section - Pink with Grid */}
                <div className="w-full md:w-1/2 relative bg-pink-500 text-white p-8 lg:p-12 flex flex-col justify-between min-h-[450px] md:min-h-0">
                    {/* Grid Overlay */}
                    <div
                        className="absolute inset-0 opacity-20" // Adjust opacity as needed
                        style={{
                            backgroundImage: 'url(/images/pink-grid-overlay.png)', // UPDATE PATH
                            backgroundRepeat: 'repeat',
                            backgroundSize: '20px 20px', // Adjust grid size
                        }}
                    ></div>

                    {/* Text Content */}
                    <div className="relative z-10 mb-auto pt-4 md:pt-0">
                        <h1 className="text-3xl lg:text-4xl font-bold mb-3">Become a Future School</h1>
                        <p className="text-sm lg:text-base opacity-90 max-w-md">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>

                    {/* Yellow Circle Background - behind the main image */}
                    <div className="absolute bottom-0 left-0 w-full h-2/3 md:h-3/4 z-0 overflow-hidden">
                        <div className="absolute -bottom-1/4 -left-1/4 w-[150%] h-[150%] bg-yellow-400 rounded-full transform scale-75 md:scale-100"></div>
                    </div>


                    {/* Main Image */}
                    <div className="relative z-10 mt-auto flex justify-center md:block"> {/* Ensure image is above yellow circle */}
                         <Image
                            src="/images/teacher-student-main.png" // <-- UPDATE PATH
                            alt="Teacher helping student"
                            width={500} // Adjust based on your image aspect ratio
                            height={400}
                            className="w-full max-w-md h-auto object-contain drop-shadow-lg"
                        />
                    </div>
                </div>

                {/* Right Section - Light Pink Profile Choice */}
                <div className="w-full md:w-1/2 bg-pink-50 p-8 lg:p-12 flex flex-col">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Choose Profile</h2>
                    <p className="text-sm text-gray-500 mb-8">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>

                    <div className="space-y-4 mb-8 flex-grow">
                        {profiles.map((profile) => (
                            <div
                                key={profile.id}
                                onClick={() => setSelectedProfile(profile.id)}
                                className={`flex items-center justify-between p-4 border rounded-xl cursor-pointer transition-all duration-150 bg-white shadow-sm hover:shadow-md ${
                                    selectedProfile === profile.id
                                        ? 'border-blue-500 ring-2 ring-blue-500 ring-offset-1'
                                        : 'border-gray-200 hover:border-gray-300'
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <Image
                                        src={profile.iconSrc}
                                        alt={`${profile.label} icon`}
                                        width={32} // Adjust icon size
                                        height={32}
                                        className="object-contain" // Using object-contain if icons are not perfectly square
                                    />
                                    <span className="text-sm font-medium text-gray-700">{profile.label}</span>
                                </div>
                                {/* Custom Radio Button Visual */}
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 transition-colors ${
                                    selectedProfile === profile.id ? 'bg-blue-600 border-blue-600' : 'border-gray-300 bg-white'
                                }`}>
                                    {selectedProfile === profile.id && (
                                        <FiCheck className="w-4 h-4 text-white" />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Next Button - This was not explicitly shown, but common for such forms */}
                    <button
                        onClick={() => console.log("Next with profile:", selectedProfile)}
                        className="w-full bg-blue-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors mt-auto"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}