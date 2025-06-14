'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ClassTab from './class-tab';
type CardData = {
  id: number;
  name: string;
  role: 'student' | 'teacher';
  course: string;
  level: string;
  group: string;
  image: string;
};

const students = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  name: 'Student Name',
  role: 'student' as const,
  course: 'Course Name',
  level: 'Level / Grade',
  group: 'Group',
  image: '/student-avatar-1.png', // Use same image or add logic to vary if needed
}));

const teachers = Array.from({ length: 16 }, (_, i) => ({
  id: i + 17,
  name: 'Teacher Name',
  role: 'teacher' as const,
  course: 'Subject',
  level: 'Class Assigned',
  group: 'Batch Assigned',
  image: '/teacher-avatar-4.png', // Use same image or add logic to vary if needed
}));

export const sampleData: CardData[] = [...students, ...teachers];

const filters = ['Filter 1', 'Filter 2', 'Filter 3'];

const SchoolLogin = () => {
  const [activeTab, setActiveTab] = useState<'student' | 'teacher'>('teacher');

  const filteredData = sampleData.filter((item) => item.role === activeTab);


  return (
    <div className="p-4 ">
      {/* Tabs */}
      <div className="bg-white rounded-2xl p-3">
        <div className="grid grid-cols-1 gap-4 md:gap-12 justify-between pb-4 md:grid-cols-[2fr_1fr]">
          <div className="h-62 relative">
            <Image src="/principal/school-login-banner.png" alt='school-login-principal-image' fill objectFit='cover' className='rounded-2xl' />
          </div>
          <div className="flex flex-col">
            <p className="text-sm"><strong>Email:</strong> example@gm.com
            </p>
            <p className="text-sm"><strong>Contact:</strong> +91 1234567890</p>
            <p className="text-sm"><strong>City:</strong> Mumbai</p>
            <p className="text-sm"><strong>State:</strong> Maharashtra</p>
            <p className="text-sm"><strong>Address:</strong> Vivamus sit amet sem ac nibh bibendum condimentum vel in sem. Curabitur tincidunt pretium faucibus. Vestibulum eget pellentesque justo. Vivamus ut pulvinar nibh</p>
          </div>
        </div>
        <h2 className="text-m font-medium my-4">Branch Name</h2>
        <div className="flex mb-4 space-x-4 text-sm font-medium">
          <button
            className={`pb-2 text-m cursor-pointer ${activeTab === 'teacher' ? 'text-blue-500 font-medium border-b-2 border-blue-500' : 'text-zinc-900'}`}
            onClick={() => setActiveTab('teacher')}
          >
            Teachers
          </button>
          <button
            className={`pb-2 text-m cursor-pointer ${activeTab === 'student' ? 'text-blue-500 font-medium border-b-2 border-blue-500' : 'text-zinc-900'}`}
            onClick={() => setActiveTab('student')}
          >
            Students
          </button>
        </div>
        <ClassTab />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">


          {/* Cards */}
          {filteredData.map((item) => (
            <div key={item.id} className="flex items-center border border-gray-300 gap-4 bg-gray-50 rounded-2xl p-2 shadow-sm">
              <div className={`${item.role === "teacher" ? "w-20 h-20" : "w-10 h-10"} rounded-xl relative overflow-hidden`}>
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <div className={`font-semibold ${item.role === "teacher" ? "text-m" : "text-sm"}`}>{item.name}</div>
                {item.role === 'teacher' && (
                  <>
                    <div className="text-sm font-semibold text-[#FF3366]">{item.course}</div>

                  </>
                )}
                <div className="text-xs text-gray-500">{item.level}</div>
                <div className="text-xs text-gray-500">{item.group}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchoolLogin;
