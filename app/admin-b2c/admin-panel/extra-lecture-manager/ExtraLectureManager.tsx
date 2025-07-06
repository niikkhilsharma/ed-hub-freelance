'use client';
import React, { useState } from "react";
import Image from 'next/image';

const filters = ['Filter 1', 'Filter 2', 'Filter 3', 'Filter 4'];
import { FaSearch } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { MdOutlineDateRange } from "react-icons/md";
import AdminB2CWrapper from "@/components/b2c-admin/common-component/AdminB2CPageWrapper";

type leavecards = {
    id: number,
    image: string,
    name: string,
    course: string,
    group: string,
    reason: string,
    email: string
};

const teachers = Array.from({ length: 9 }, (_, i) => ({
    id: i + 5,
    name: 'Teacher Name',
    course: 'Course Name',
    group: 'Batch Assigned',
    image: "/teacher-avatar-4.png", // Use same image or add logic to vary if needed,
    reason: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam cum illum, itaque et perferendis ea hic alias modi ex reiciendis animi eum quam minus, autem deserunt voluptatibus ducimus, officiis corporis?',
    email: "Email ID"
}));

export const sampleData: leavecards[] = [...teachers];

const ExtraLectureManager = () => {
    // const [activeTab, setActiveTab] = useState<'teacher'>('teacher');

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFilters, setSelectedFilters] = useState<string[]>(filters.map(() => ''));

    const handleFilterChange = (index: number, value: string) => {
        const updated = [...selectedFilters];
        updated[index] = value;
        setSelectedFilters(updated);
    };
    return (
        <>

            <AdminB2CWrapper>
                {/* Tabs */}
                <div className="bg-white rounded-2xl p-4">

                    <div className="flex items-center flex-col sm:flex-row mb-4 gap-2">
                        {/* Search Input */}
                        <div className="relative w-full ">
                            <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-black text-md" />
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search"
                                className="w-full pl-10 pr-4 py-2 border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            />
                        </div>
                        <div className="flex flex-wrap sm:flex-nowrap items-center gap-2">
                            {filters.map((filter, index) => (
                                <div key={filter} className="relative">
                                    <select
                                        className="appearance-none border border-gray-300 text-sm px-3 py-2 rounded-xl pr-4 bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        value={selectedFilters[index]}
                                        onChange={(e) => handleFilterChange(index, e.target.value)}
                                    >
                                        <option value="">{filter}</option>
                                        <option value="Option 1">Option 1</option>
                                        <option value="Option 2">Option 2</option>
                                    </select>
                                    <IoIosArrowDown className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 font-medium text-gray-500 text-xs" />
                                </div>
                            ))}
                        </div>
                    </div >
                    <div className="max-h-[764px] overflow-y-auto grid gap-1 grid-cols-1 sm:grid-cols-2 custom-peach-scrollbar">
                        {teachers.map((item) => (
                            <div key={item.id} className="flex flex-wrap items-center border border-gray-300 gap-4 bg-gray-50 rounded-2xl p-4 inline-block mr-2 mb-4  relative">
                                <div className="flex">
                                    <div className="rounded-3xl bg-white p-2 md:p-3 relative overflow-hidden">
                                        <Image src={item.image} alt={item.name} width={100} height={100} className="object-cover" />
                                    </div>
                                    <div className="flex-1 flex flex-col gap-1 justify-between ml-4">
                                        <div className="font-semibold text-md ">{item.name}</div>
                                        <div className="text-sm font-semibold text-[#FF3366]">{item.course}</div>
                                        <div className="text-xs text-gray-500"> {item.group} </div>
                                        <div className="text-xs text-gray-500"> {item.email} </div>

                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 pt-4">
                                    <p className=""><strong className="font-medium">Remaning Topics:</strong> Lorem Ipusm</p>
                                    <p className=""><strong className="font-medium">Remaning Left:</strong> Lorem Ipusm</p>
                                    <p className=""><strong className="font-medium">Deadline Missed:</strong> 22 / 6 / 25</p>
                                </div>
                                <div className="flex flex-col items-center space-y-4 p-4 bg-gray-100 rounded-2xl max-w-xl mt-5 mb-3 mx-2  ">
                                    <p className="text-center text-black font-bold text-lg">Note</p>
                                    <p className="text-center text-black-600 text-base">
                                        {item.reason}</p>
                                </div>
                                <div className="space-y-6 my-3 mx-2">
                                    {/* Schedule Date */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-black">Schedule Date</label>
                                        <input
                                            type="text"
                                            placeholder="Text"
                                            className="w-full bg-[#f9fafb] text-black text-sm py-2 px-4 mt-2 rounded-full border border-gray-200 focus:outline-none"
                                        />
                                    </div>

                                    {/* Schedule Time */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-black">Schedule Time</label>
                                        <input
                                            type="text"
                                            placeholder="Text"
                                            className="w-full bg-[#f9fafb] text-black text-sm py-2 px-4 mt-2 rounded-full border border-gray-200 focus:outline-none"
                                        />
                                    </div>

                                    {/* Fee */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-black">
                                            Fee to be Paid by Parents (₹)
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Text"
                                            className="w-full bg-[#f9fafb] text-black text-sm py-2 px-4 mt-2 rounded-full border border-gray-200 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="flex justify-center gap-4 mt-6">

                                    <button className="px-2 py-2 bg-[#3366FF] text-white rounded-3xl">
                                        Confirm & Schedule
                                    </button>
                                </div>


                            </div>
                        ))}
                    </div>
                </div>

            </AdminB2CWrapper>
        </>
    )
}
export default ExtraLectureManager;