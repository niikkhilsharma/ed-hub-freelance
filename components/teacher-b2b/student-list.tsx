"use client";
import React, { useMemo, useState } from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FiArrowLeft, FiSearch, FiFilter, FiChevronDown } from 'react-icons/fi';


export default function StudentListPage() {
  const headerUser = {
    name: "Shlok Agheda",
    role: "Student",
    avatarSrc: "/placeholder-avatar-student.jpg",
  }; // UPDATE PATH

  return (
    <div className="bg-[#eeeeee] min-h-screen flex flex-col">
      <Header user={headerUser} />

      {/* Back Button and Page Title */}
      <div className="flex items-center gap-2 bg-white px-6 py-4">
        <button className="p-1.5 text-black hover:text-[#3366FF] focus:outline-none">
          <FiArrowLeft className="w-5 h-5 font-extrabold" />
        </button>
        <h1 className="text-xl font-bold text-[#FF3366]">Test Name</h1>{" "}
        {/* Or dynamic course name */}
      </div>

      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
        <StudentPerformancePage />
      </main>

      <Footer />
    </div>
  );
}



interface Student {
  id: string;
  avatarUrl: string;
  name: string;
  courseName: string;
  levelGrade: string;
  group: string;
  score: number;
  status: 'Passed' | 'Failed';
}

// Placeholder avatar URL (same image for all students, B&W as in screenshot)
const AVATAR_URL = 'https://picsum.photos/seed/studentprofile/80/80?grayscale';

// Sample Data: Mimics the structure and repetition seen in the image
const dummyStudents: Student[] = [
  { id: '1', avatarUrl: AVATAR_URL, name: 'Student Name', courseName: 'Course Name', levelGrade: 'Level / Grade', group: 'Group', score: 40, status: 'Passed' },
  { id: '2', avatarUrl: AVATAR_URL, name: 'Student Name', courseName: 'Course Name', levelGrade: 'Level / Grade', group: 'Group', score: 40, status: 'Failed' },
  { id: '3', avatarUrl: AVATAR_URL, name: 'Student Name', courseName: 'Course Name', levelGrade: 'Level / Grade', group: 'Group', score: 40, status: 'Passed' },
  { id: '4', avatarUrl: AVATAR_URL, name: 'Student Name', courseName: 'Course Name', levelGrade: 'Level / Grade', group: 'Group', score: 40, status: 'Passed' },
  { id: '5', avatarUrl: AVATAR_URL, name: 'Student Name', courseName: 'Course Name', levelGrade: 'Level / Grade', group: 'Group', score: 40, status: 'Passed' },
  { id: '6', avatarUrl: AVATAR_URL, name: 'Student Name', courseName: 'Course Name', levelGrade: 'Level / Grade', group: 'Group', score: 40, status: 'Passed' },
  { id: '7', avatarUrl: AVATAR_URL, name: 'Student Name', courseName: 'Course Name', levelGrade: 'Level / Grade', group: 'Group', score: 40, status: 'Passed' },
  { id: '8', avatarUrl: AVATAR_URL, name: 'Student Name', courseName: 'Course Name', levelGrade: 'Level / Grade', group: 'Group', score: 40, status: 'Passed' },
];

// StudentCard Component
const StudentCard: React.FC<{ student: Student }> = ({ student }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:space-x-4 hover:shadow-md transition-shadow duration-200">
      {/* Avatar */}
      <img
        src={student.avatarUrl}
        alt={`${student.name}'s avatar`}
        className="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-lg object-cover flex-shrink-0"
      />
      
      {/* Student Info */}
      <div className="flex-grow min-w-0"> {/* min-w-0 prevents text overflow issues */}
        <h3 className="text-base sm:text-lg font-semibold text-gray-900">{student.name}</h3>
        <p className="text-xs sm:text-sm text-gray-500 mt-0.5">{student.courseName}</p>
        <p className="text-xs sm:text-sm text-gray-500 mt-0.5">{student.levelGrade}</p>
        <p className="text-xs sm:text-sm text-gray-500 mt-0.5">{student.group}</p>
      </div>
      
      {/* Score and Status */}
      <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0 mt-2 sm:mt-0 self-start sm:self-center">
        <div className="bg-slate-50 rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 text-center min-w-[75px] sm:min-w-[90px]">
          <p className="text-[10px] sm:text-xs text-gray-500 mb-0.5">Score</p>
          <p className="text-lg sm:text-xl font-bold text-[#3366FF]">{student.score}</p>
        </div>
        <div className="bg-slate-50 rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 text-center min-w-[75px] sm:min-w-[90px]">
          <p className="text-[10px] sm:text-xs text-gray-500 mb-0.5">Status</p>
          <p className={`text-sm sm:text-base font-semibold ${student.status === 'Passed' ? 'text-green-600' : 'text-red-600'}`}>
            {student.status}
          </p>
        </div>
      </div>
    </div>
  );
};

// Main Page Component
const StudentPerformancePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  // In a real app, student data would likely come from props or a global state/API call
  const [students] = useState<Student[]>(dummyStudents); 

  // Add states for filters if/when their logic is defined
  // const [activeFilters, setActiveFilters] = useState({});

  const filteredStudents = useMemo(() => {
    let S = students.filter(student =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.group.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // Add further filtering logic here based on activeFilters
    return S;
  }, [students, searchTerm /*, activeFilters */]);

  return (
    <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8 space-y-6 bg-gray-50 min-h-screen">
      {/* Header: Search and Filters */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Search Input */}
        <div className="relative flex-grow md:flex-grow-0 md:w-full md:max-w-xs lg:max-w-sm xl:max-w-md">
          <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search by name, course, group..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 bg-white rounded-xl focus:ring-2 focus:ring-[#3366FF] focus:border-transparent outline-none text-sm shadow-sm appearance-none"
          />
        </div>
        
        {/* Filter Controls */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-1 md:pb-0">
          <button
            onClick={() => alert('General filter clicked. Implement filter logic.')}
            className="p-3 border border-gray-300 bg-white rounded-xl shadow-sm hover:bg-gray-100 text-gray-600 flex-shrink-0 transition-colors"
            aria-label="Open filters"
          >
            <FiFilter className="w-5 h-5" />
          </button>
          {['Filter 1', 'Filter 2', 'Filter 3'].map((filterName) => (
            <button
              key={filterName}
              onClick={() => alert(`${filterName} clicked. Implement filter logic.`)}
              className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 bg-white text-gray-700 font-medium rounded-xl text-sm whitespace-nowrap shadow-sm hover:bg-gray-100 flex-shrink-0 transition-colors"
            >
              <span>{filterName}</span>
              <FiChevronDown className="w-4 h-4 text-gray-500" />
            </button>
          ))}
        </div>
      </div>

      {/* Student List */}
      {filteredStudents.length > 0 ? (
        <div className="space-y-3">
          {filteredStudents.map(student => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-500 bg-white rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-xl font-semibold mb-2">No Students Found</h3>
          <p>Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </main>
  );
};
