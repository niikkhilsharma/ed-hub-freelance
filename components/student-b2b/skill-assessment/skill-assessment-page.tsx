<<<<<<< HEAD
'use client'

import Image from 'next/image'
import { FiHelpCircle, FiTarget, FiClock, FiCalendar, FiAlertTriangle } from 'react-icons/fi'

// Helper component for the info badges
const InfoBadge = ({
	icon: Icon,
	text,
	bgColor,
	textColor,
}: {
	icon: React.ElementType
	text: string
	bgColor: string
	textColor: string
}) => (
	<div className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-sm ${bgColor} ${textColor}`}>
		<Icon className="w-4 h-4" />
		<span className="text-sm font-medium">{text}</span>
	</div>
)

export default function TestStartPage() {
	const loremIpsum =
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

	return (
		<div
			className="min-h-screen flex items-center justify-center p-4 bg-blue-600" // Main blue background
			// If you have a pattern image for the blue background:
			// style={{ backgroundImage: 'url(/images/blue-pattern-bg.png)', backgroundRepeat: 'repeat', backgroundSize: 'auto' }}
		>
			<div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row w-full max-w-4xl lg:max-w-5xl">
				{/* Left Section - Test Information */}
				<div className="w-full md:w-3/5 bg-white p-6 sm:p-8 lg:p-10 flex flex-col">
					<div className="mb-6">
						<h1 className="text-xl md:text-2xl font-bold text-gray-800 leading-tight">
							5-Stage Dermatoglyphic Multiple Intelligence Test (DMIT) and skill assessment
						</h1>
					</div>

					<p className="text-sm text-gray-600 leading-relaxed mb-8">{loremIpsum}</p>

					{/* Info Badges */}
					<div className="flex flex-wrap justify-start gap-3 mb-8">
						<InfoBadge icon={FiHelpCircle} text="100 Questions" bgColor="bg-orange-100" textColor="text-orange-700" />
						<InfoBadge icon={FiTarget} text="100 Marks" bgColor="bg-sky-100" textColor="text-sky-700" />
						<InfoBadge icon={FiClock} text="30 minutes" bgColor="bg-green-100" textColor="text-green-700" />
					</div>

					{/* Test Window Information */}
					<div className="bg-gray-50 p-6 rounded-xl mb-8 space-y-3">
						<h3 className="text-md font-semibold text-gray-700 text-center mb-3">Test Window</h3>
						<div className="flex items-center gap-3 text-sm text-gray-600">
							<FiCalendar className="w-5 h-5 text-gray-500 flex-shrink-0" />
							<span>10 May 2025, 10:00 AM — 12 May 2025, 9:59 AM (2 Days)</span>
						</div>
						<div className="flex items-center gap-3 text-sm text-gray-600">
							<FiAlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
							<span>Complete the test within 48 hours or it will reset.</span>
						</div>
					</div>

					<div className="mt-auto flex justify-center">
						{' '}
						{/* mt-auto pushes button down if content is short */}
						<button
							onClick={() => console.log('Start Test Clicked')}
							className="px-12 py-3 bg-blue-600 text-white font-semibold text-sm rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors shadow-md">
							Start
						</button>
					</div>
				</div>

				{/* Right Section - Image */}
				<div className="w-full md:w-2/5 relative min-h-[350px] md:min-h-full">
					{/* Pattern Background for Image Area */}
					<div
						className="absolute inset-0 z-0 opacity-80" // Slightly transparent pattern
						style={{
							backgroundImage: 'url(/1782364.png)', // <-- UPDATE PATH to your colorful pattern
							backgroundRepeat: 'repeat',
							backgroundSize: 'auto',
						}}></div>
					{/* Image */}
					<div className="relative z-10 w-full h-full flex items-center justify-center p-0 md:p-0">
						<Image
							src="/images/student_with_laptop.svg" // <-- UPDATE PATH to your student image
							alt="Student with laptop"
							width={600} // Adjust based on image aspect ratio
							height={500} // Adjust based on image aspect ratio
							className="w-auto h-full max-h-[90%] object-contain" // Ensure image fits and doesn't overflow
						/>
					</div>
				</div>
			</div>
		</div>
	)
=======
"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";

import {
  FiHelpCircle,
  FiTarget,
  FiClock,
  FiCalendar,
  FiAlertTriangle,
} from "react-icons/fi";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

// Helper component for the info badges
const InfoBadge = ({
  icon: Icon,
  text,
  bgColor,
  textColor,
}: {
  icon: React.ElementType;
  text: string;
  bgColor: string;
  textColor: string;
}) => (
  <div
    className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-sm ${bgColor} ${textColor}`}
  >
    <Icon className="w-4 h-4" />
    <span className="text-sm font-medium">{text}</span>
  </div>
);

export default function TestStartPage() {
  const loremIpsum =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

  return (
    // <div
    //   className="min-h-screen flex items-center justify-center p-4 " // Main blue background
    //   // If you have a pattern image for the blue background:
    //   // style={{ backgroundImage: 'url(/images/blue-pattern-bg.png)', backgroundRepeat: 'repeat', backgroundSize: 'auto' }}
    // >
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: "url('/Skill_Assessment_Page.png')",
        // backgroundRepeat: 'repeat',
        backgroundSize: 'cover',
        backgroundColor: "#2563EB", // fallback blue if image fails to load (Tailwind's blue-600)
      }}
    >
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row w-full max-w-4xl lg:max-w-5xl">
        {/* Left Section - Test Information */}
        <div className="w-full md:w-4/5 bg-white p-6 sm:p-8 lg:p-10 flex flex-col">
          <div className="mb-6 mt-12">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800 leading-tight">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900">
                  5-Stage Dermatoglyphic Multiple Intelligence
                  <br />
                  <span className="font-bold text-gray-800">
                    Test (DMIT) and skill assessment
                  </span>
                </h2>
              </div>
            </h1>
          </div>

          <p className="text-center font-poppins text-sm text-gray-600 max-w-xl mx-auto mt-2 mb-5">
            {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. */}

            {loremIpsum}
          </p>

          {/* Info Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-5 font-bold font-poppins">
            <InfoBadge
              icon={FiHelpCircle}
              text="100 Questions"
              bgColor="bg-orange-300"
              textColor="text-black-700 "
            />
            <InfoBadge
              icon={FiTarget}
              text="100 Marks"
              bgColor="bg-sky-200"
              textColor="text-black-700"
            />
            <InfoBadge
              icon={FiClock}
              text="30 minutes"
              bgColor="bg-green-200"
              textColor="text-black-700"
            />
          </div>

          {/* Test Window Information */}
          {/* <div className="bg-gray-50 p-6 rounded-xl mb-0 space-y-3">
                        <h3 className="text-md font-semibold text-gray-700 text-center mb-3">Test Window</h3>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                            <FiCalendar className="w-5 h-5 text-gray-500 flex-shrink-0" />
                            <span>10 May 2025, 10:00 AM — 12 May 2025, 9:59 AM (2 Days)</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                            <FiAlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
                            <span>Complete the test within 48 hours or it will reset.</span>
                        </div>
                    </div> */}
          <div className="bg-gray-50 rounded-xl p-4 text-center shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 ">
              Test Window
            </h3>

            <div className="flex justify-center items-center space-x-2 text-gray-700 text-sm mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3M3 11h18M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>10 May 2025, 10:00 AM — 12 May 2025, 9:59 AM (2 Days)</span>
            </div>

            <p className="text-sm text-gray-600">
              ✅ Complete the test within 48 hours or it will reset.
            </p>
          </div>

          <div className="mt-6 flex justify-center">
            {" "}
            {/* mt-auto pushes button down if content is short */}
            <button
              onClick={() => console.log("Start Test Clicked")}
              className="px-12 py-3 bg-blue-600 text-white font-semibold text-sm rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors shadow-md"
            >
              Start
            </button>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full md:w-2/5 relative min-h-[350px] md:min-h-full">
          {/* Pattern Background for Image Area */}
          <div
            className="absolute inset-0 z-0 opacity-80" // Slightly transparent pattern
            style={{
              backgroundImage: "url(/1782364.png)", // <-- UPDATE PATH to your colorful pattern
              backgroundRepeat: "repeat",
              backgroundSize: "auto",
            }}
          ></div>
          {/* Image */}
          <div className="relative z-99 w-full h-full flex items-center justify-center p-0 md:p-0">
            <Image
              src="/images/student_with_laptop.svg" // <-- UPDATE PATH to your student image
              alt="Student with laptop"
              width={600} // Adjust based on image aspect ratio
              height={500} // Adjust based on image aspect ratio
              className="w-auto h-full max-h-[90%] object-contain" // Ensure image fits and doesn't overflow
            />
          </div>
        </div>
      </div>
    </div>
  );
>>>>>>> 9ae84482629ae3ce1d7016fe7f14a7df119e025f
}
