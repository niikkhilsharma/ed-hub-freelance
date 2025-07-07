"use client"
import { useState } from "react";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";

const DropCourseComponent = () => {
    const [agree, setAgree] = useState(true);

    const courses = [
        "Mathematics Foundation Course",
    ];

    return (
        <form>
            {/* Heading */}
            <div className="flex flex-col">
                <h1 className="text-blue-600 py-3.5 text-lg lg:text-xl px-2 bg-gray-100 font-semibold rounded-xl">Your Contact Information</h1>
                <div className="max-w-lg flex flex-col gap-1 pt-2 pb-4">
                    <label className='font-medium text-md' htmlFor="fullName">Full Name</label>
                    <input id="fullName" type="text" className='rounded-xl px-4 py-2 bg-gray-50 border' placeholder='Text' />
                </div>
                <div className="max-w-lg flex flex-col gap-1 pb-4">
                    <label className='font-medium text-md' htmlFor="email">Email</label>
                    <input id="email" type="email" className='rounded-xl px-4 py-2 bg-gray-50 border' placeholder='Text' />
                </div>
            </div>
            <div className="flex flex-col">
                <h1 className="text-blue-600 py-3.5 text-lg lg:text-xl px-2 bg-gray-100 font-semibold rounded-xl">
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

                                <span className="text-zinc-800 font-medium text-md md:text-lg">{course}</span>
                            </div>
                        ))}
                    </div>

                    {/* Date Picker */}
                    <div>
                        <label className="block font-medium mb-1">Effective From</label>
                        <input
                            type="date"
                            className="w-full rounded-xl border bg-gray-50 border-gray-300 px-4 py-2 text-gray-500"
                        />
                    </div>

                    {/* Reason Textarea */}
                    <div>
                        <label className="block font-medium mb-1">Reason For Dropping A Subject</label>
                        <textarea
                            rows={4}
                            className="w-full rounded-xl border border-gray-300 bg-gray-50 p-3 resize-none"
                        />
                    </div>
                </div>
                {/* Custom Checkbox */}


                <div className="font-medium flex-wrap flex justify-center gap-2 mt-6 md:mt-12">
                    <button
                        type="submit"
                        className=" rounded-full text-sm md:text-base bg-pink-50 text-[#ff3366] cursor-pointer py-2 px-6 transition duration-200"
                    >
                        Reject Request
                    </button>
                    <button
                        type="submit"
                        className=" rounded-full text-sm md:text-base bg-blue-600 cursor-pointer text-white py-2 px-4 transition duration-200"
                    >
                        Approve a Request
                    </button>
                </div>
            </div>

        </ form>
    );
};

export default DropCourseComponent;