"use client"
import { useRef, useState } from "react";
import { FiCalendar } from "react-icons/fi";

const DropCourseComponent = () => {
 const hiddenDateInputRef = useRef<HTMLInputElement>(null);

  const handleIconClick = () => {
    hiddenDateInputRef.current?.showPicker?.(); // Works in modern browsers
    hiddenDateInputRef.current?.focus();
  };
    const courses = [
        "Mathematics Foundation Course",
    ];

    return (
        <form>
            {/* Heading */}
            <div className="flex flex-col">
                <h1 className="text-blue-600 py-3.5 text-lg lg:text-xl px-2 bg-[#B0B0B014] font-semibold rounded-xl">Contact Information</h1>
                <div className="max-w-lg flex flex-col gap-1 pt-2 pb-4">
                    <label className='font-medium text-base' htmlFor="fullName">Full Name</label>
                    <input id="fullName" type="text" className='rounded-xl px-4 py-2 bg-[#f9fafb] border' placeholder='Text' />
                </div>
                <div className="max-w-lg flex flex-col gap-1 pb-4">
                    <label className='font-medium text-base' htmlFor="email">Email ID</label>
                    <input id="email" type="email" className='rounded-xl px-4 py-2 bg-[#f9fafb] border' placeholder='Text' />
                </div>
            </div>
            <div className="flex flex-col">
                <h1 className="text-blue-600 py-3.5 text-lg lg:text-xl px-2 bg-[#B0B0B014] font-semibold rounded-xl">
                    Course to Discontinue
                </h1>

                <div className="max-w-lg w-full text-sm space-y-4">
                    {/* Subtext */}


                    {/* Custom Radio Group */}
                    <div className="rounded-xl border border-gray-200 mt-2 bg-white p-4 space-y-3">
                        {courses.map((course) => (
                            <div
                                key={course}
                            >

                                <span className="text-zinc-800 font-medium text-base md:text-lg">{course}</span>
                            </div>
                        ))}
                    </div>

                    {/* Date Picker */}
                    <div className="w-full">
      <label className="block font-medium mb-1 text-base">Effective From</label>

      {/* Hidden actual date input */}
      <input
        type="date"
        ref={hiddenDateInputRef}
        className="hidden"
        onChange={() => {
          // optional: sync value with visible input if needed
        }}
      />

      <div className="relative">
        <input
          type="text"
          placeholder="17 / 06 / 25"
          className="w-full rounded-xl border bg-[#f9fafb] border-gray-300 px-4 py-2 pr-10 text-gray-500 placeholder:text-gray-400"
          onFocus={handleIconClick}
          readOnly
        />

        <FiCalendar
          className="absolute right-3 top-1/2 -translate-y-1/2 text-black cursor-pointer"
          size={18}
          onClick={handleIconClick}
        />
      </div>
    </div>

                    {/* Reason Textarea */}
                    <div>
                        <label className="block font-medium mb-1 text-base">Reason For Dropping A Subject</label>
                        <textarea
                            rows={4}
                            className="w-full rounded-xl border border-gray-300 bg-[#f9fafb] p-3 resize-none"
                        />
                    </div>
                </div>
                {/* Custom Checkbox */}


                <div className="font-medium flex-wrap flex justify-center gap-2 mt-6 md:mt-12">
                    <button
                        type="submit"
                        className=" rounded-full text-sm md:text-base bg-pink-50 text-[#ff3366] cursor-pointer py-2.5 px-6 transition duration-200"
                    >
                        Reject Request
                    </button>
                    <button
                        type="submit"
                        className=" rounded-full text-sm md:text-base bg-blue-600 cursor-pointer text-white py-2.5 px-4 transition duration-200"
                    >
                        Approve Request
                    </button>
                </div>
            </div>

        </ form>
    );
};

export default DropCourseComponent;