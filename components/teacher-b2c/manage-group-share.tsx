"use client"

import { FiArrowLeft, FiChevronDown, FiFilter, FiSearch } from "react-icons/fi"
import Footer from "../layout/Footer"
import Header from "../layout/Header"
import { FiSettings } from "react-icons/fi";
import { useState } from "react"
import Image from "next/image";



const dummyGroups = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: "Group Name",
  students: "No. of Students",
  image: "/b2c-teacher/manage-group-share.png", // Replace with actual path later
}));

const GroupCardList = () => {
  return (
    <div className="grid grid-cols-2 px-20 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {dummyGroups.map((group) => (
        <div
          key={group.id}
          className="flex items-start justify-between p-2 bg-white border border-gray-200 rounded-2xl"
        >
          {/* Left side: image + text */}
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gray-200 relative overflow-hidden flex items-center justify-center">
              <Image src={group.image} alt={group.name} fill className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-md font-semibold text-gray-800">{group.name}</span>
              <span className="text-xs text-gray-500">{group.students}</span>
            </div>
          </div>

          {/* Right side: icon */}
          <FiSettings className="text-gray-700 bg-gray-50 rounded-full border w-8 h-8 p-1.5" />
        </div>
      ))}
    </div>
  );
};


interface GeneralFilterOption {
    id: string;
    label: string;
}

const GeneralFilterButton: React.FC<{
    filter: GeneralFilterOption;
    onClick: () => void;
}> = ({ filter, onClick }) => (
    <button
        onClick={onClick}
        className={`flex items-center justify-center gap-1.5 px-3.5 py-2.5 border border-gray-300 bg-[#F9FAFB] text-[#1E1E1E] font-medium rounded-xl text-xs sm:text-sm whitespace-nowrap hover:bg-gray-100 flex-shrink-0 transition-colors`}
    >
        <span>{filter.label}</span>
        <FiChevronDown className="w-4 h-4 text-[#1E1E1E]" />
    </button>
);



const GroupShare = () => {
    const sampleGeneralFilters: GeneralFilterOption[] = [
        { id: "filter1", label: "Filter 1" },
        { id: "filter2", label: "Filter 2" },
        { id: "filter3", label: "Filter 3" },
    ];
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <>
            <div className="bg-white rounded-3xl min-h-screen my-4 mx-4 lg:mx-6 p-2 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div className="relative flex-grow">
                        <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-full h-4 sm:w-5 sm:h-5 text-black pointer-events-none" />
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className={`w-full pl-10 pr-4 py-3 text-sm bg-white border border-[#6B7280] rounded-full focus:ring-1 focus:ring-[#3366FF] focus:border-[#3366FF] outline-none`}
                        />
                    </div>
                    <div className="flex items-center gap-2 overflow-x-auto">
                        <button
                            onClick={() =>
                                alert(
                                    "Main filter icon clicked. Implement general filter logic."
                                )
                            }
                            className={`p-3 rounded-xl hover:bg-gray-100 text-[#ff3366] flex-shrink-0 transition-colors`}
                            aria-label="Open main filters"
                        >
                            <FiFilter className="w-5 h-5" strokeWidth={2} />
                        </button>
                        {sampleGeneralFilters.map((filter) => (
                            <GeneralFilterButton
                                key={filter.id}
                                filter={filter}
                                onClick={() =>
                                    alert(
                                        `${filter.label} clicked. Implement specific filter logic.`
                                    )
                                }
                            />
                        ))}
                    </div>
                </div>
                <GroupCardList />
            </div>
        </>
    )
}

const ManageGroup = () => {
    const headerUser = {
        name: 'Shlok Agheda',
        role: 'Student',
        avatarSrc: '/placeholder-avatar-student.jpg', // UPDATE THIS PATH
    }
    const handleBackClick = () => {
        if (typeof window !== "undefined") {
            window.history.back();
        }
    }
    return (
        <div className="bg-gray-100">
            <Header user={headerUser} />
            <div className="flex items-center justify-between gap-3 bg-white px-4 sm:px-6 py-3.5 sticky top-0 z-40">
                <div className="flex gap-3 items-center w-full">
                    <button
                        onClick={handleBackClick}
                        className="p-1.5 text-black hover:text-[#FF3366] focus:outline-none rounded-md" // Using ACCENT_PINK for hover
                        aria-label="Go back"
                    >
                        <FiArrowLeft className="w-5 h-5" />
                    </button>
                    <h1 className="text-lg sm:text-xl font-semibold text-[#FF3366]">
                        Manage Group Share
                    </h1>
                </div>
                <button className="rounded-full bg-[#ff3366] p-2 text-white whitespace-nowrap font-medium">Create new group</button>
            </div>
                <GroupShare />
            <Footer />
        </div>
    )
}

export default ManageGroup;