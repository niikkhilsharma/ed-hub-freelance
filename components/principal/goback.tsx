"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { FiArrowLeft } from 'react-icons/fi';

interface GoBackProps {
  GoBackHeading: string;
  toLink?:string;
}

const GoBack: React.FC<GoBackProps> = ({ GoBackHeading, toLink }) => {
  const Router = useRouter();
  const handleBackClick = () => {
    if(toLink){
      Router.push(toLink);

    } else if (typeof window !== "undefined") {
      window.history.back();
    }
  };
  return (
  <div className='bg-white'>
    <div className="flex   items-center gap-3 mx-auto max-w-[98rem] px-4 sm:px-6 py-3.5 sticky top-0 z-20">
      <button
        onClick={handleBackClick}
        className="p-1.5 text-black hover:text-[#FF3366] focus:outline-none rounded-md cursor-pointer" // Using ACCENT_PINK for hover
        aria-label="Go back"
      >
        <FiArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <h1 className="text-lg sm:text-xl font-semibold text-[#FF3366]">
        {GoBackHeading}
      </h1>
    </div>
    </div>
  )
}

export default GoBack