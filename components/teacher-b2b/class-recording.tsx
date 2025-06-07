"use client";

import React, { useState, useMemo } from "react";
import {
  FiSearch,
  FiCalendar, // Using FiCalendar for the date filter icon
  FiChevronDown,
  FiX, // For clearing date filter
  FiPlayCircle, // For the play button
  FiShare2, // For the share button
  FiTrash2, // For the delete button
  FiFilm,
  FiArrowLeftCircle,
  FiArrowRightCircle, // Generic video icon
} from "react-icons/fi";
import Header from "@/components/layout/Header"; // Adjust path as needed
import Footer from "@/components/layout/Footer"; // Adjust path as needed
import { CiPlay1 } from "react-icons/ci";


// --- Style Constants ---
const ACCENT_PINK = "#FF3366";
const PRIMARY_BLUE = "#3366FF"; // For "Shared" button and default share icon
const LIGHT_BLUE_BUTTON_BG = "bg-[#3366FF1A]";
const LIGHT_BLUE_BUTTON_TEXT = `text-[${PRIMARY_BLUE}]`;
const LIGHT_GREEN_BUTTON_BG = "bg-[#8DD9B333]";
const LIGHT_GREEN_BUTTON_TEXT = "text-[#8DD9B3]";
const LIGHT_RED_BUTTON_BG = "bg-[#FF33661A]";
const LIGHT_RED_BUTTON_TEXT = "text-[#FF3366]";
const INPUT_BG = "bg-white"; // Search bar is white in this image
const FILTER_BG = "bg-[#F9FAFB]"; // Filters have a light gray background

// --- Data Interfaces ---
interface ClassRecording {
  id: string;
  title: string; // e.g., "Class 3"
  subjectUnitName: string; // e.g., "Unit Name"
  periodNumber: string; // e.g., "Number"
  date: string; // e.g., "29/5/25"
  isShared: boolean;
}

interface FilterOption {
  value: string;
  label: string;
}

// --- Sample Data ---
const sampleRecordings: ClassRecording[] = [
  {
    id: "rec1",
    title: "Class 3",
    subjectUnitName: "Unit Name",
    periodNumber: "Number",
    date: "29/5/25",
    isShared: true,
  },
  {
    id: "rec2",
    title: "Class 3",
    subjectUnitName: "Unit Name",
    periodNumber: "Number",
    date: "29/5/25",
    isShared: true,
  },
  {
    id: "rec3",
    title: "Class 3",
    subjectUnitName: "Unit Name",
    periodNumber: "Number",
    date: "29/5/25",
    isShared: true,
  },
  {
    id: "rec4",
    title: "Class 3",
    subjectUnitName: "Unit Name",
    periodNumber: "Number",
    date: "29/5/25",
    isShared: false,
  },
  {
    id: "rec5",
    title: "Class 3",
    subjectUnitName: "Unit Name",
    periodNumber: "Number",
    date: "29/5/25",
    isShared: false,
  },
];

const sampleBatchOptions: FilterOption[] = [
  { value: "batchA", label: "Batch A" },
];
const sampleSubjectOptions: FilterOption[] = [
  { value: "all", label: "Subject" },
  { value: "science", label: "Science" },
];

// --- Helper Components ---
const FilterDropdown: React.FC<{
  options: FilterOption[];
  value: string;
  onChange: (value: string) => void;
}> = ({ options, value, onChange }) => (
  <div className="relative">
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`pl-3 pr-7 py-2 text-xs ${FILTER_BG} border border-[#E5E7EB] rounded-lg focus:ring-1 focus:ring-[${PRIMARY_BLUE}] focus:border-[${PRIMARY_BLUE}] outline-none appearance-none shadow-sm`}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
    <FiChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-black pointer-events-none" />
  </div>
);

const RecordingCard: React.FC<{
  recording: ClassRecording;
  onPlay: () => void;
  onShare: () => void;
  onDelete: () => void;
}> = ({ recording, onPlay, onShare, onDelete }) => (
  <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-2  hover:shadow-md transition-shadow duration-200 flex items-center justify-between gap-4">
    <div className="flex items-center gap-4 flex-grow min-w-0">
      <div className="bg-[#FFCC001A] w-14 h-14 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center flex-shrink-0">
        <FiFilm className="w-7 h-7 sm:w-8 sm:h-8 text-[#FFCC00]" />
      </div>
      <div className="min-w-0">
        <h3 className="text-sm sm:text-base font-semibold text-gray-900 truncate">
          {recording.title}
        </h3>
        <p className="text-xs text-gray-500 mt-0.5 truncate">
          Subject: {recording.subjectUnitName}
        </p>
        <p className="text-xs text-gray-500 mt-0.5 truncate">
          Period: {recording.periodNumber}
        </p>
        <p className="text-xs text-gray-500 mt-0.5 truncate">
          Date: {recording.date}
        </p>
      </div>
    </div>
    <div className="flex items-center space-x-4 flex-shrink-0">
      {recording.isShared ? (
        <button
          className={`px-3 py-1 text-xs ${LIGHT_BLUE_BUTTON_BG} ${LIGHT_BLUE_BUTTON_TEXT} font-medium rounded-full`}
        >
          Shared
        </button>
      ) : (
        <button
          onClick={onShare}
          className={`p-2 rounded-full ${LIGHT_BLUE_BUTTON_BG} hover:bg-blue-200`}
          aria-label="Share recording"
        >
          <FiShare2 className={`w-4 h-4 ${LIGHT_BLUE_BUTTON_TEXT}`} />
        </button>
      )}
      <button
        onClick={onPlay}
        className={`p-2 rounded-full ${LIGHT_GREEN_BUTTON_BG} hover:bg-green-200`}
        aria-label="Play recording"
      >
        <CiPlay1 className={`w-4 h-4 ${LIGHT_GREEN_BUTTON_TEXT}`} strokeWidth={2}/>
      </button>
      <button
        onClick={onDelete}
        className={`p-2 rounded-full ${LIGHT_RED_BUTTON_BG} hover:bg-red-200`}
        aria-label="Delete recording"
      >
        <FiTrash2 className={`w-4 h-4 ${LIGHT_RED_BUTTON_TEXT}`} />
      </button>
    </div>
  </div>
);

// --- ClassRecordingContent Component ---
const ClassRecordingContent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState("June 2025");
  const [batchFilter, setBatchFilter] = useState(sampleBatchOptions[0].value);
  const [subjectFilter, setSubjectFilter] = useState(
    sampleSubjectOptions[0].value
  );

  const recordings = useMemo(() => {
    // Implement actual filtering based on searchTerm, dateFilter, batchFilter, subjectFilter
    return sampleRecordings.filter(
      (rec) =>
        rec.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        rec.subjectUnitName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, dateFilter, batchFilter, subjectFilter]);

  // Group recordings by date for display
  const recordingsByDate = useMemo(() => {
    const grouped: { [date: string]: ClassRecording[] } = {};
    recordings.forEach((rec) => {
      const displayDate = rec.date; // Or format this date as needed for grouping key
      if (!grouped[displayDate]) {
        grouped[displayDate] = [];
      }
      grouped[displayDate].push(rec);
    });
    return grouped;
  }, [recordings]);

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6">
      {/* Header: Tab, Search, Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
        {/* Left section: Title + Search */}
        <div className="flex items-center gap-4 flex-grow">
          <button
            className={`px-4 py-2 text-sm font-medium text-[${ACCENT_PINK}] border-b-2 border-[${ACCENT_PINK}] whitespace-nowrap w-fit`}
          >
            Class Recording
          </button>

          {/* Search input grows to fill available space */}
          <div className="relative flex-grow">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-black pointer-events-none" />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-2.5 border border-[#6B7280] bg-white rounded-full focus:ring-2 focus:ring-[#3366FF] focus:border-transparent outline-none text-sm`}
            />
          </div>
        </div>

        {/* Right section: Filters (don’t shrink, don’t scroll horizontally) */}
        <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap justify-end flex-shrink-0 mt-2 sm:mt-0">
          <div className="flex items-center gap-2 text-sm border border-[#E5E7EB] text-black bg-[#F9FAFB] px-3 py-2 rounded-xl">
            <FiArrowLeftCircle className="w-4 h-4 cursor-pointer hover:text-black" />
            <span>June 2025</span>
            <FiArrowRightCircle className="w-4 h-4 cursor-pointer hover:text-black" />
          </div>

          <FilterDropdown
            options={sampleBatchOptions}
            value={batchFilter}
            onChange={setBatchFilter}
          />
          <FilterDropdown
            options={sampleSubjectOptions}
            value={subjectFilter}
            onChange={setSubjectFilter}
          />
        </div>
      </div>

      {/* Recordings List */}
      {Object.keys(recordingsByDate).length > 0 ? (
        <div className="space-y-6">
          {Object.entries(recordingsByDate).map(([date, recs]) => (
            <div key={date}>
              <h2 className="text-lg font-semibold text-black mb-2 ml-1">
                Date
              </h2>{" "}
              {/* Using date from card as group title */}
              <div className="space-y-3">
                {recs.map((rec) => (
                  <RecordingCard
                    key={rec.id}
                    recording={rec}
                    onPlay={() => alert(`Playing ${rec.title}`)}
                    onShare={() => alert(`Sharing ${rec.title}`)}
                    onDelete={() => alert(`Deleting ${rec.title}`)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-500">
          <FiFilm className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <h3 className="text-xl font-semibold mb-2">No Recordings Found</h3>
          <p className="text-sm">
            Try adjusting your search or filter criteria.
          </p>
        </div>
      )}
    </div>
  );
};

// --- Main Page Export ---
export default function ClassRecordingPage() {
  const headerUser = {
    name: "Educator Name",
    role: "Teacher",
    avatarSrc: "/teacher-b2b/profile.png",
  };
  // No back button in this design directly, but could be part of Header or global navigation

  return (
    <div className="bg-[#eeeeee] min-h-screen flex flex-col">
      <Header user={headerUser} />
      {/* This page design does not show a separate title bar below the main header,
          the "Class Recording" tab acts as the primary context. */}
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        <ClassRecordingContent />
      </main>
      <Footer />
    </div>
  );
}
