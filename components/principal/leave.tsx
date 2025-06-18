'use client';
import React,{useState} from "react";
import Image from 'next/image';

const filters = ['Filter 1', 'Filter 2', 'Filter 3'];
import { FaSearch } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

type leavecards = {
    id:number,
  image: string,
  name: string,
  course: string,
  level:string,
  group:string,
  reason:string,
  email:string
};

const teachers = Array.from({ length: 4}, (_, i) => ({
  id: i + 5,
  name: 'Teacher',
  course: 'Subject',
  level: 'Class Assigned',
  group: 'Batch Assigned',
  image: "/teacher-avatar-4.png", // Use same image or add logic to vary if needed,
  reason:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam cum illum, itaque et perferendis ea hic alias modi ex reiciendis animi eum quam minus, autem deserunt voluptatibus ducimus, officiis corporis?',
  email:"Email ID"
}));

export const sampleData: leavecards[] = [ ...teachers];

const Leave = () => {
    const [activeTab, setActiveTab] = useState<'teacher'>('teacher');
    
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>(filters.map(() => ''));

  const handleFilterChange = (index: number, value: string) => {
    const updated = [...selectedFilters];
    updated[index] = value;
    setSelectedFilters(updated);
  };
  return (
    <>

    
    <div className="p-4 ">
      {/* Tabs */}
      <div className="bg-white rounded-2xl p-4">

        <div className="flex items-center mb-4 gap-2">
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
        </div >

        

{teachers.map((item) => (
            <div key={item.id} className="flex flex-wrap items-center border border-gray-300 gap-4 bg-gray-50 rounded-2xl p-2 inline-block mr-4 mb-4 shadow-sm">
                <div className="flex">
              <div className="rounded-xl relative overflow-hidden">
                <Image src={item.image} alt={item.name} width={100} height={100} className="object-cover" />
              </div>
              <div className="flex-1 ml-4">
                <div className="font-semibold text-m ">{item.name}</div>
                    <div className="text-sm font-semibold text-[#FF3366]">{item.course}</div>
                    <div className="text-xs text-gray-500">{item.level}</div>
                    <div className="text-xs text-gray-500"> {item.group} </div>
                    <div className="text-xs text-gray-500"> {item.email} </div>
              </div>
              </div>

              <div className="flex flex-col items-center space-y-4 p-4 bg-gray-100 rounded-2xl shadow-md max-w-xl m-3  ">
    <p className="text-center text-black font-bold text-lg">
      Reason</p>
    <p className="text-center text-black-600 text-base">
      {item.reason}
    </p>
  </div>
<div className="flex justify-center gap-4 mt-4">
    <button className="px-6 py-2 bg-red-100 text-red-800 rounded-3xl">
     Reject
    </button>
    <button className="px-6 py-2 bg-[#3366FF] text-white rounded-3xl">
      Approve
    </button>
  </div>
  
              
            </div>
          ))}

        </div>
        </div>
        </>
  )
}
export default Leave;