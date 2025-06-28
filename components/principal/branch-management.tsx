'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { FaSearch } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import { IoSettingsOutline } from 'react-icons/io5'
import { Button } from '../ui/button'
import ActiveTab from './active-inactive'
type CardData = {
	id: number
	name: string
	address: string
	detail1: string
	detail2: string
	detail3: string
	detail4: string
	image: string
}

const branch = Array.from({ length: 3 }, (_, i) => ({
	id: i + 1,
	name: 'School Name',
	address: 'Address',
	detail1: 'Detail 1',
	detail2: 'Detail 2',
	detail3: 'Detail 3',
	detail4: 'Detail 4',
	image: '/principal/school-login-banner.png',
}))

export const sampleData: CardData[] = [...branch]

const filters = ['Filter 1', 'Filter 2', 'Filter 3']

const BranchManagement = () => {
	  const [selectedFilters, setSelectedFilters] = useState<string[]>(filters.map(() => ''))

	const handleFilterChange = (index: number, value: string) => {
		const updated = [...selectedFilters]
		updated[index] = value
		setSelectedFilters(updated)
	}
	const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="py-4 px-4 md:px-16">
      {/* Tabs */}
      <div className="bg-white rounded-2xl p-4">

        <div className="flex items-center mb-4 gap-2 overflow-x-auto custom-scrollbar-thin">
          {/* Search Input */}
          <div className="relative w-full min-w-[7rem]">
            <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-zinc-700 text-sm" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-zinc-700 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>
          {filters.map((filter, index) => (
            <div key={filter} className="relative">
              <select
                className="appearance-none border border-gray-300 text-sm px-4 py-1.5 rounded-xl pr-4 bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
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
          <Button className="bg-gray-50 px-4 sm:px-0 sm:w-56 py-2 cursow-pointer text-zinc-800 text-md font-medium border rounded-2xl whitespace-nowrap">Manage Staff</Button>
          <Button className="bg-gray-50 px-4 sm:px-0 sm:w-56 py-2 cursow-pointer text-zinc-800 text-md font-medium border rounded-2xl whitespace-nowrap">Add Branch</Button>
          <Button className="bg-gray-50 px-4 sm:px-0 sm:w-56 py-2 cursow-pointer text-zinc-800 text-md font-medium border rounded-2xl whitespace-nowrap">Manage Approval</Button>
          {/* Filters with dropdown icons */}
        </div>
        <ActiveTab />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">


          {/* Cards */}
          {branch.map((item) => (
            <div key={item.id} className="relative flex flex-wrap border border-gray-300 gap-4 bg-gray-50 rounded-2xl p-2">
              <div className={`w-full sm:w-56 h-42 rounded-2xl relative overflow-hidden`}>
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-m">{item.name}</p>


                <p className="text-sm text-gray-500">{item.address}</p>
                <p className="text-xs text-gray-500">{item.detail1}</p>
                <p className="text-xs text-gray-500">{item.detail2}</p>
                <p className="text-xs text-gray-500">{item.detail3}</p>
                <p className="text-xs text-gray-500">{item.detail4}</p>


              </div>
              <div className="flex gap-2 absolute items-center right-5 bottom-5">
                <button className="bg-gray-100  text-pink-600 p-3 text-sm rounded-full ">
                  <IoSettingsOutline />
                </button>
                <button className=" bg-blue-500 text-zinc-900 py-2 px-4 text-sm rounded-full">
                  Active
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BranchManagement
