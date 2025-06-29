"use client"
import React from 'react'
import { FiArrowLeft } from 'react-icons/fi';

interface GoBackProps {
  GoBackHeading: string;
}

const GoBack: React.FC<GoBackProps> = ({ GoBackHeading }) => {
  const handleBackClick = () => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };
  return (
    <div className="flex items-center gap-3 bg-white px-4 sm:px-6 py-3.5 sticky top-0 z-40">
      <button
        onClick={handleBackClick}
        className="p-1.5 text-black hover:text-[#FF3366] focus:outline-none rounded-md" // Using ACCENT_PINK for hover
        aria-label="Go back"
      >
        <FiArrowLeft className="w-5 h-5" />
      </button>
      <h1 className="text-lg sm:text-xl font-semibold text-[#FF3366]">
        {GoBackHeading}
      </h1>
    </div>
  )
}

export default GoBack