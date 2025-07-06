'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import ClassTab from './class-tab';
type CardData = {
  id: number;
  name: string;
  course: string;
 
  group: string;
  image: string;
};

const teachers = Array.from({ length:5}, (_, i) => ({
  id: i + 6,
  name: 'Name',
  course: 'course',
  group: 'Batch Assigned',
  image: '/teacher-avatar-4.png', // Use same image or add logic to vary if needed
}));

export const sampleData: CardData[] = [ ...teachers];

const filters = ['Filter 1', 'Filter 2'];

const ReviewList = () => {
//   const [activeTab, setActiveTab] = useState<'student' | 'teacher'>('teacher');

//   const filteredData = sampleData.filter((item) => item.role === activeTab);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>(filters.map(() => ''));

  const handleFilterChange = (index: number, value: string) => {
    const updated = [...selectedFilters];
    updated[index] = value;
    setSelectedFilters(updated);
  };
  return (
    <div className="p-4 ">
      {/* Tabs */}
      <div className="bg-white rounded-2xl p-4">

        <div className="flex items-center mb-4 gap-2 overflow-x-auto custom-scrollbar-thin">
          {/* Search Input */}
          <div className="relative w-full ">
            <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>
        
          {/* Filters with dropdown icons */}
          {filters.map((filter, index) => (
            <div key={filter} className="relative overflow-x-auto custom-scrollbar">
              <select
                className=" border border-gray-300 text-sm px-3 py-2 rounded-xl pr-4 bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={selectedFilters[index]}
                onChange={(e) => handleFilterChange(index, e.target.value)}
              >
                <option value="Option 1">{filter}</option>
                <option value="Option 2">{filter}</option>
                <option value="Option 3">{filter}</option>
              </select>
              <IoIosArrowDown className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 font-medium text-gray-500 text-xs px-2" />
            </div>
          ))}
        </div>
        <ClassTab />
        <div className="mb-4 sm:grid-cols-2 gap-4">
          {/* Cards */}
          {sampleData.map((item) => (
            <div key={item.id} className="flex items-center border border-gray-300 gap-4 bg-gray-50 rounded-2xl px-2 py-1 shadow-sm">
              <div className ="w-20 h-20 rounded-xl relative overflow-hidden">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-m">{item.name}</div>
                    <div className="text-sm font-semibold text-[#FF3366]">{item.course}</div>
                    <div className="text-xs text-gray-500">{item.group}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewList;
