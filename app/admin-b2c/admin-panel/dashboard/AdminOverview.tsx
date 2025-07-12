'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

type Stat = {
    label: string;
    value: number;
};

const summaryStats: Stat[] = [
    { label: 'Resumed', value: 10 },
    { label: 'New Enrollments', value: 5 },
    { label: 'Continued', value: 8 },
];

const tableData = Array(7).fill({
    student: 'Lorem ipsum',
    course: 'Lorem ipsum',
    lastActive: '12/10/25',
    resumedOn: '14/10/25',
});

const columns = ['Student', 'Course', 'Last Active Date', 'Resumed On', 'Action'];

const Overview: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Resumed');
    return (
        <div className="space-y-4 rounded-2xl p-4 mb-4 mt-2 bg-white">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {summaryStats.map((stat) => {
                    const isActive = stat.label === activeTab;

                    return (
                        <motion.div
                            key={stat.label}
                            onClick={() => setActiveTab(stat.label)}
                            whileTap={{ scale: 0.97 }}
                            layout
                            className={`cursor-pointer rounded-2xl px-4 py-6 text-center transition-colors duration-300 ${isActive ? 'bg-[#99DEFF] border-transparent' : 'bg-white border border-gray-200'
                                }`}
                        >
                            <p className="text-lg lg:text-xl mb-2 font-medium">{stat.label}</p>
                            <motion.p
                                key={isActive ? 'active' : 'inactive'}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-2xl lg:text-[38px] font-bold"
                            >
                                {stat.value}
                            </motion.p>
                        </motion.div>
                    );
                })}
            </div>
            <div className="overflow-x-auto max-w-[850px] custom-scrollbar-thin">
                {/* Table Header */}
                <div className="flex bg-[#8DD9B3] justify-between items-center font-semibold text-sm rounded-2xl px-12 py-5.5 gap-x-6 mb-3">
                    {columns.map((col, i) => (
                        <div
                            key={i}
                            className={`flex-1 flex items-center ${i === 0 ? 'justify-start' : i === columns.length - 1 ? 'justify-end' : 'justify-center'
                                }`}
                        >
                            {col}
                        </div>
                    ))}

                </div>

                {/* Table Rows */}
                <div className="space-y-2">
                    {tableData.map((row, idx) => (
                        <div
                            key={idx}
                            className="flex items-center bg-[#f9fafb] text-sm rounded-2xl px-12 py-3 border border-gray-200 gap-x-6"
                        >
                            <div className="flex-1 flex justify-start items-center">{row.student}</div>
                            <div className="flex-1 flex justify-center items-center">{row.course}</div>
                            <div className="flex-1 flex justify-center items-center">{row.lastActive}</div>
                            <div className="flex-1 flex justify-center items-center">{row.resumedOn}</div>
                            <div className="flex-1 flex justify-end items-center">
                                <button className="rounded-full bg-white border border-gray-300 px-4 py-1 hover:bg-[#f9fafb] transition">
                                    Details
                                </button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Overview;
