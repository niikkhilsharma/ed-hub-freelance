'use client';

import React from 'react';

const summaryStats = [
    { label: 'Resumed', value: 10, bg: 'bg-[#99DEFF]' },
    { label: 'New Enrollments', value: 5, bg: 'bg-white' },
    { label: 'Continued', value: 8, bg: 'bg-white' },
];

const tableData = Array(7).fill({
    student: 'Lorem ipsum',
    course: 'Lorem ipsum',
    lastActive: '12/10/25',
    resumedOn: '14/10/25',
});

const columns = ['Student', 'Course', 'Last Active Date', 'Resumed On', 'Action'];

const Overview: React.FC = () => {
    return (
        <div className="space-y-4 rounded-2xl p-4 mb-4 mt-2 bg-white">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {summaryStats.map((stat) => (
                    <div
                        key={stat.label}
                        className={`rounded-2xl p-4 text-center ${stat.bg} border ${stat.bg === 'bg-white' ? 'border-gray-200' : 'border-transparent'
                            }`}
                    >
                        <p className="text-sm font-medium">{stat.label}</p>
                        <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                ))}
            </div>
            <div className="overflow-x-auto min-w-[850px] custom-scrollbar-thin">
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
                            className="flex items-center bg-gray-100 text-sm rounded-2xl px-12 py-3 border border-gray-200 gap-x-6"
                        >
                            <div className="flex-1 flex justify-start items-center">{row.student}</div>
                            <div className="flex-1 flex justify-center items-center">{row.course}</div>
                            <div className="flex-1 flex justify-center items-center">{row.lastActive}</div>
                            <div className="flex-1 flex justify-center items-center">{row.resumedOn}</div>
                            <div className="flex-1 flex justify-end items-center">
                                <button className="rounded-full bg-white border border-gray-300 px-4 py-1 hover:bg-gray-100 transition">
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
