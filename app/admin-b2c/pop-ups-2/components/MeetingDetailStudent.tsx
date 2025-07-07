import React from 'react';
import { FiX, FiCalendar, FiClock } from 'react-icons/fi';
import Image from 'next/image';
import { BaseModal, PopupProp } from '../page';



const MeetingDetailStudent: React.FC<PopupProp> = ({ isOpen, onClose }) => {
    const students = Array.from({ length: 6 }).map((_, i) => ({
        name: 'Student Name',
        course: 'Level / Grade',
        image: '/common-images/student.png',
    }));

    return (
        <BaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-4xl">
            <div className="relative bg-white rounded-2xl p-6">


                <h2 className="text-lg font-semibold text-center mb-6">Meeting Details</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Form */}
                    <div className="space-y-7 mt-2">
                        <input
                            type="text"
                            placeholder="Lecture Title"
                            className="w-full border rounded-full px-4 py-2 bg-gray-100 text-sm"
                        />

                        <input
                            type="text"
                            placeholder="URL"
                            className="w-full border rounded-full px-4 py-2 bg-gray-100 text-sm"
                        />
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="DD / MM / YYYY"
                                className="w-full border rounded-full px-4 py-2 bg-gray-100 text-sm pr-10"
                            />
                            <FiCalendar className="absolute right-3 top-2.5 text-gray-400" size={16} />
                        </div>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="18:00"
                                className="w-full border rounded-full px-4 py-2 bg-gray-100 text-sm pr-10"
                            />
                            <FiClock className="absolute right-3 top-2.5 text-gray-400" size={16} />
                        </div>
                        <input
                            type="text"
                            placeholder="Course Name"
                            className="w-full border rounded-full px-4 py-2 bg-gray-100 text-sm"
                        />
                        <input
                            type="text"
                            placeholder="Batch Name"
                            className="w-full border rounded-full px-4 py-2 bg-gray-100 text-sm"
                        />
                    </div>

                    {/* Right List */}
                    <div className='bg-gray-100 px-3 pb-3 pt-4 rounded-2xl'>
                        <h3 className="text-sm font-semibold mb-3">Student List</h3>
                        <div className="space-y-3 max-h-[20rem] overflow-y-auto custom-peach-scrollbar pr-2 ">
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
                                            <p className="font-medium text-sm">{student.name}</p>
                                            <p className="text-xs text-gray-500">{student.course}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="mt-6 flex justify-center gap-4">
                    <button className="bg-[#3366ff] text-white px-6 py-2 rounded-full text-sm font-medium shadow">
                        Edit
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-gray-200 text-gray-700 cursor-pointer px-6 py-2 rounded-full text-sm font-medium">
                        Discard
                    </button>
                </div>
            </div>
        </BaseModal>
    );
};

export default MeetingDetailStudent;
