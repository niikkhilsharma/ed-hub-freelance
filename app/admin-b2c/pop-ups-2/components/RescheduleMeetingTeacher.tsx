"use client"
import React, { useState } from 'react';
import { FiCalendar, FiClock } from 'react-icons/fi';
import Image from 'next/image';
import { BaseModal, PopupProp } from '../page';
import TabSwitchLight from '@/components/common-components/TabSwitchLight';
import SearchFilter from '@/components/b2c-admin/common-component/SearchBarFilter';



const RescheduleMeetingTeacher: React.FC<PopupProp> = ({ isOpen, onClose }) => {

    const departmentTabs = ["Department 1", "Department 2", "Department 3", "Department 4", "Department 5"];
    const [activeDept, setActiveDept] = useState(departmentTabs[0]);

    const students = Array.from({ length: 3 }).map((_, i) => ({
        name: 'Name',
        subject: 'Subject',
        course: 'Course Assigned',
        batch: 'Batch Assigned',
        image: '/common-images/teacher.png',
    }));
 const filter = [
    { id: "f1", label: "Filter 1" },
  ];
    return (
        <BaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-4xl">
            <div className="relative bg-white rounded-2xl p-6 max-h-[90vh] overflow-y-auto custom-peach-scrollbar">


                <h2 className="text-lg font-semibold text-center mb-6">Edit Meeting</h2>
                <div className="">
                    <TabSwitchLight tabs={departmentTabs} selected={activeDept} onChange={setActiveDept} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Form */}
                    <div className="space-y-4 mt-2">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Meeting Title</label>
                            <input
                                type="text"
                                placeholder="Meeting Title"
                                className="w-full border rounded-full px-4 py-2 bg-gray-100 text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Meeting URL</label>
                            <input
                                type="text"
                                placeholder="URL"
                                className="w-full border rounded-full px-4 py-2 bg-gray-100 text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="DD / MM / YYYY"
                                    className="w-full border rounded-full px-4 py-2 bg-gray-100 text-sm pr-10"
                                />
                                <FiCalendar className="absolute right-3 top-2.5 text-gray-400" size={16} />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="18:00"
                                    className="w-full border rounded-full px-4 py-2 bg-gray-100 text-sm pr-10"
                                />
                                <FiClock className="absolute right-3 top-2.5 text-gray-400" size={16} />
                            </div>
                        </div>
                    </div>


                    {/* Right List */}
                    <div className='bg-gray-100 px-3 pb-3 pt-4 rounded-2xl'>
                        <h3 className="text-sm font-semibold mb-3">Student List</h3>

                        <div className="flex items-center gap-6">
                            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                <input
                                    type="radio"
                                    name="teacherType"
                                    value="all"
                                    className="form-radio text-gray-600"
                                />
                                For all
                            </label>
                            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                <input
                                    type="radio"
                                    name="teacherType"
                                    value="selective"
                                    className="form-radio text-gray-600"
                                />
                                For Selective Teacher
                            </label>
                        </div>

                        <SearchFilter filters={filter}/>

                        <div className="space-y-3 overflow-y-auto custom-peach-scrollbar pr-2 max-h-[20rem]">
                            {students.map((student, i) => (
                                <div
                                    key={i}
                                    className="flex items-center justify-between border rounded-2xl p-2 bg-gray-100"
                                >
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src={student.image}
                                            alt={student.name}
                                            width={75}
                                            height={75}
                                            className="rounded-2xl object-cover"
                                        />
                                        <div>
                                            <p className="font-semibold text-sm">{student.name}</p>
                                            <p className="text-xs text-[#FF3366]">{student.subject}</p>
                                            <p className="text-xs text-gray-500">{student.course}</p>
                                            <p className="text-xs text-gray-500">{student.batch}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="mt-8 flex justify-center flex-wrap gap-4">
                    <button className="bg-[#3366ff] text-white px-6 py-2 rounded-full text-sm font-medium shadow">
                        Reschedule
                    </button>
                    <button className="bg-red-100 text-red-600 px-6 py-2 rounded-full text-sm font-medium shadow hover:bg-red-200">
                        Cancel Meeting
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full text-sm font-medium"
                    >
                        Discard
                    </button>
                </div>
            </div>
        </BaseModal>
    );
};

export default RescheduleMeetingTeacher;
