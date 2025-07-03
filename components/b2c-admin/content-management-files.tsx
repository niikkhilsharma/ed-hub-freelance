
"use client";
import React, { useState, useMemo } from "react";
import {
  FiSearch,
  FiChevronDown,
  FiFileText
} from "react-icons/fi";
import { MdOutlineFileDownload, MdSettings } from "react-icons/md";
import { LuInfo } from "react-icons/lu";
import MaxWidthWrapper from "../max-width-wrapper";
import GoBack from "@/components/principal/goback";

// --- Style Constants ---
// const ACCENT_PINK = "#FF3366";
const PRIMARY_BLUE = "#3366FF"; // Placeholder if needed for other active states
const INPUT_BG_SEARCH = "bg-white"; // Search bar background
const INPUT_BG_FILTERS = "bg-[#F9FAFB]"; // Background for filter dropdowns
// const FOLDER_ICON_BG = "bg-sky-300"; // Light blue for folder icon background
const FOLDER_CARD_BG = "bg-[#F9FAFB]"; // Very light gray for folder card

// --- Data Interfaces ---
interface SubjectTab {
  id: string;
  name: string;
}

interface FolderItem {
  id: string;
  name: string;
  fileCount: string;
  subjectId: string; // To link folder to a subject tab
  // Add other properties like lastModified, etc. if needed
}

interface GeneralFilterOption {
  id: string;
  label: string;
  // Define specific options for each filter if they are dropdowns
}

// --- Sample Data ---
const sampleSubjectTabs: SubjectTab[] = [
  { id: "subj1", name: "Subject 1" },
  { id: "subj2", name: "Subject 2" },
  { id: "subj3", name: "Subject 3" },
  { id: "subj4", name: "Subject 4" },
  { id: "subj5", name: "Subject 5" },
];

const sampleFolders: FolderItem[] = Array.from({ length: 100 }, (_, i) => ({
  id: `f${i + 1}`,
  name: "File Name",
  fileCount: "23ᵗʰ June 2025",
  subjectId: sampleSubjectTabs[i % sampleSubjectTabs.length].id, // Distribute folders among subjects
}));

const sampleGeneralFilters: GeneralFilterOption[] = [
  { id: "filter1", label: "Filter 1" },
  { id: "filter2", label: "Filter 2" },
  { id: "filter3", label: "Filter 3" },
];

const FolderCard: React.FC<{ folder: FolderItem }> = ({ folder }) => (
  <div
    className={`${FOLDER_CARD_BG} rounded-2xl p-3 border border-[#E5E7EB] hover:shadow-lg transition-shadow duration-200 flex items-center gap-4 relative`}
  >
    <div className="absolute right-5 top-5 text-gray-400">
      <LuInfo />
    </div>
    <div
      className={`bg-[#8dd9b3] w-28 h-28 rounded-xl flex items-center justify-center flex-shrink-0`}
    >
      <FiFileText
        className="w-12 h-12 text-black opacity-80"
        strokeWidth={1.5}
      />
    </div>
    <div className="flex flex-col flex-wrap w-full gap-4">
      <div className="">
        <h3 className="text-sm sm:text-lg font-semibold text-black truncate">
          {folder.name}
        </h3>
        <p className="text-sm text-[#6B7280] mt-1">{folder.fileCount}</p>
      </div>
      <div className="flex gap-2 w-full flex-wrap xl:flex-nowrap">
        <div className="w-full flex gap-2 ">
          <button className="bg-gray-100 text-nowrap w-full rounded-full p-1 flex items-center gap-2 cursor-pointer justify-center text-gray-600 text-base lg:text-lg"> <MdSettings /> Manage Access</button>
        </div>
        <div className="w-full flex gap-2 ">
          <button className="bg-gray-100 w-full rounded-full p-1 flex items-center gap-2 cursor-pointer justify-center text-gray-600 text-base lg:text-lg"> <MdOutlineFileDownload /> Download</button>
        </div>
      </div>
    </div>
  </div>
);

const GeneralFilterButton: React.FC<{
  filter: GeneralFilterOption;
  onClick: () => void;
}> = ({ filter, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-center gap-1.5 px-3.5 py-2.5 border border-gray-300 ${INPUT_BG_FILTERS} text-[#1E1E1E] font-medium rounded-xl text-xs sm:text-sm whitespace-nowrap hover:bg-gray-100 flex-shrink-0 transition-colors`}
  >
    <span>{filter.label}</span>
    <FiChevronDown className="w-4 h-4 text-[#1E1E1E]" />
  </button>
);

// --- SubjectFolderViewContent Component ---
const SubjectFolderViewContent: React.FC = () => {
  const [activeSubjectId] = useState<string>(
    sampleSubjectTabs[0]?.id || ""
  );
  const [searchTerm, setSearchTerm] = useState("");
  // Add states for general filters if their logic becomes more complex (e.g., selected options for dropdowns)
  // const [activeGeneralFilters, setActiveGeneralFilters] = useState({});

  const filteredFoldersBySubject = useMemo(() => {
    return sampleFolders.filter(
      (folder) => folder.subjectId === activeSubjectId
    );
  }, [activeSubjectId]);

  const searchedAndFilteredFolders = useMemo(() => {
    let folders = filteredFoldersBySubject;
    if (searchTerm) {
      folders = folders.filter((folder) =>
        folder.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    // Add logic for general filters here
    // e.g., if (activeGeneralFilters.someFilter) { folders = folders.filter(...) }
    return folders;
  }, [filteredFoldersBySubject, searchTerm /*, activeGeneralFilters */]);

  return (
    <>
      {/* Top Section: Subject Tabs */}



      <div className="bg-white rounded-2xl  p-4 sm:p-6 lg:p-8 space-y-6">
        {/* Mid Section: Search and General Filters */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div className="relative flex-grow">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-black pointer-events-none" />
            <input
              type="text"
              placeholder="Search folders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-3 text-sm ${INPUT_BG_SEARCH} border border-[#6B7280] rounded-full focus:ring-1 focus:ring-[${PRIMARY_BLUE}] focus:border-[${PRIMARY_BLUE}] outline-none`}
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto">

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
        {/* Bottom Section: Folders Grid */}
        {searchedAndFilteredFolders.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {searchedAndFilteredFolders.map((folder) => (
              <FolderCard key={folder.id} folder={folder} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-[#6B7280]">
            <FiFileText className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <h3 className="text-xl font-semibold mb-2">No Folders Found</h3>
            <p className="text-sm">
              Try adjusting your search or filter criteria, or select a
              different subject.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

// --- Main Page Export ---
export default function MaterialPageCourse() {
  // This page design does not include a prominent title bar or back button below the main header.
  // Navigation would typically be handled by the global Header or side navigation.

  return (
    <div className="bg-[#eeeeee] min-h-screen flex flex-col">
      <div className="bg-gray-100">
        <GoBack GoBackHeading="Folder Name" />
        <main className="flex-grow w-full max-w-screen-xl mx-auto p-4 sm:p-6 lg:p-8">
          <SubjectFolderViewContent />
        </main>
      </div>
    </div>
  );
}

