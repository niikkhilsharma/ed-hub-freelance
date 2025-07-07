"use client";
import Image from "next/image";
import { FiSettings } from "react-icons/fi";

const TeacherCard = () => {
  return (
    <div
      className="rounded-2xl w-full max-w-[90rem] p-2 justify-between gap-2 flex flex-col lg:flex-row"
      style={{
        backgroundImage: "url('/admin/bg-pattern.png')",
        backgroundSize: "cover",
      }}
    >
      {/* Left: Teacher Info */}
      <div className="bg-white w-full lg:w-[55%] relative flex flex-col p-4 sm:p-6 rounded-3xl">
        {/* Settings Icon - adjusted right positioning for responsiveness */}
        <div className="absolute top-4 right-4 bg-[#faf9fb] border border-[#e5e7eb] rounded-full p-2">
          <FiSettings className="text-black w-4 h-4 sm:w-5 sm:h-5 cursor-pointer" />
        </div>

        {/* Profile Section */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start mb-6 text-center sm:text-left"> {/* Center on mobile */}
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <Image
              src="/teacher-b2b/profile2.png"
              alt="Teacher"
              width={96}
              height={96}
              className="rounded-full w-20 h-20 sm:w-24 sm:h-24 object-cover" 
            />
          </div>

          {/* Name and Tags */}
          <div className="flex-1 min-w-0">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">
              Teacher Name
            </h2>
            <div className="flex flex-wrap gap-1 sm:gap-2 justify-center sm:justify-start">
              <span className="bg-[#ff3366] text-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 rounded-l-2xl sm:rounded-l-3xl whitespace-nowrap">
                Batch Assigned
              </span>
              <span className="bg-[#ff3366] text-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 rounded-r-2xl sm:rounded-r-3xl whitespace-nowrap">
                Full-Time
              </span>
            </div>
          </div>

          {/* Personal Details - Desktop Right Side */}
          <div className="hidden lg:block text-sm xl:text-base whitespace-nowrap pt-2">
            <p className="mb-1">
              <strong>City:</strong> Mumbai
            </p>
            <p className="mb-1">
              <strong>State:</strong> Maharashtra
            </p>
            <p className="mb-1">
              <strong>Gender:</strong> Male
            </p>
            <p className="mb-1">
              <strong>DOB:</strong> 15 Jun 2015
            </p>
          </div>
        </div>

        {/* Contact Details */}
        <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
          <h3 className="font-semibold text-sm sm:text-base md:text-lg">
            Contact Details
          </h3>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3">
            <div className="bg-[#f3f4f6] border border-[#b0b0b0] px-3 py-2 sm:px-4 sm:py-3 rounded-full text-xs sm:text-sm md:text-base">
              +91 0000000000
            </div>
            <div className="bg-[#f3f4f6] border border-[#b0b0b0] px-3 py-2 sm:px-4 sm:py-3 rounded-full text-xs sm:text-sm md:text-base">
              example@gm.com
            </div>
          </div>
        </div>

        {/* Personal Details - Mobile/Tablet Bottom - Show on screens smaller than lg */}
        <div className="block lg:hidden mt-4 sm:mt-6 border-t border-gray-200 pt-4">
          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm sm:text-base">
            <p><strong>City:</strong> Mumbai</p>
            <p><strong>State:</strong> Maharashtra</p>
            <p><strong>Gender:</strong> Male</p>
            <p><strong>DOB:</strong> 15 Jun 2015</p>
          </div>
        </div>
      </div>

      {/* Right: Retention Rate */}
      <div className="bg-white w-full lg:w-[45%] rounded-3xl p-4 sm:p-6 flex-grow flex flex-col justify-center"> {/* Use flex-grow and justify-center */}
        <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4">
          <div className="flex-1 space-y-2 sm:space-y-3 text-center sm:text-left">
            <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4">
              Retention Rate
            </h3>
            <p className="text-sm sm:text-base">Total Teachers under mentor: 120</p>
            <p className="text-sm sm:text-base">Avg. Rating: 4.6</p>
            <p className="text-xs sm:text-sm text-[#238300] bg-[#8dd9b3]/50 rounded-full px-3 py-1 sm:px-4 sm:py-2 inline-block mt-2 sm:mt-3">
              +6% from last month
            </p>
          </div>
          
          <div className="flex items-center justify-center mt-4 sm:mt-0 sm:ml-4">
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#8dd9b3]">
              84%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;