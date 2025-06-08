"use client";

import Header from "@/components/layout/Header"; // Adjust path as needed
import Footer from "@/components/layout/Footer"; // Adjust path as needed
import React, { useState, useMemo } from "react";
import {
  FiSearch,
  FiFilter,
  FiChevronDown,
  FiFileText,
  FiImage,
  FiUpload,
} from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";

// Define the File interface
interface ManagedFile {
  id: string;
  name: string;
  type: "pdf" | "image" | "doc" | "other"; // Add more types as needed
  size: string; // e.g., "300 KB", "1.2 MB"
  // Add other properties like uploadDate, url etc. if needed
}

// Sample Data
const dummyFiles: ManagedFile[] = [
  { id: "1", name: "File Name One.pdf", type: "pdf", size: "300 KB" },
  { id: "2", name: "Image_001.jpg", type: "image", size: "1.2 MB" },
  { id: "3", name: "Document_final.pdf", type: "pdf", size: "650 KB" },
  { id: "4", name: "Presentation_draft.png", type: "image", size: "800 KB" },
  { id: "5", name: "Another_PDF.pdf", type: "pdf", size: "450 KB" },
  { id: "6", name: "Screenshot.jpeg", type: "image", size: "220 KB" },
  { id: "7", name: "Important_Notes.pdf", type: "pdf", size: "150 KB" },
  { id: "8", name: "Cover_Art.png", type: "image", size: "2.5 MB" },
  { id: "9", name: "Report_v3.pdf", type: "pdf", size: "900 KB" },
];

// File Icon Component
const FileIcon: React.FC<{ type: ManagedFile["type"] }> = ({ type }) => {
  const iconProps = "w-5 h-5 text-[#F9FAFB]0 flex-shrink-0";
  switch (type) {
    case "pdf":
      return <FiFileText className={iconProps} />; // Using FiFileText for PDF, as common
    case "image":
      return <FiImage className={iconProps} />;
    // Add more cases for other file types
    // case 'doc':
    //   return <FiFileText className={iconProps} />; // Or a specific Word icon
    default:
      return <FiFileText className={iconProps} />; // Generic file icon
  }
};

// FileItem Component
const FileItem: React.FC<{ file: ManagedFile }> = ({ file }) => {
  return (
    <div className="flex items-center justify-between py-3 px-2 hover:bg-[#F9FAFB] transition-colors duration-150 rounded-md">
      <div className="flex items-center space-x-3 min-w-0">
        <FileIcon type={file.type} />
        <span
          className="text-sm text-black font-medium truncate"
          title={file.name}
        >
          {file.name}
        </span>
      </div>
      <span className="text-sm text-[#B0B0B0] flex-shrink-0 ml-4">
        {file.size}
      </span>
    </div>
  );
};

// Main File Management Content Component
const FileManagementContent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // In a real app, file data would likely come from props or a global state/API call
  const [files] = useState<ManagedFile[]>(dummyFiles);

  // Add states for filters if/when their logic is defined
  // const [activeFilters, setActiveFilters] = useState({});

  const filteredFiles = useMemo(() => {
    let f = files.filter((file) =>
      file.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // Add further filtering logic here based on activeFilters
    return f;
  }, [files, searchTerm /*, activeFilters */]);

  const handleUploadClick = () => {
    // Trigger file input click or open upload modal
    alert("Upload button clicked! Implement file upload logic.");
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 relative min-h-screen flex flex-col">
      {" "}
      {/* Header: Search and Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
        {/* Search Input */}
        <div className="relative flex-grow">
          <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-full h-4 sm:w-5 sm:h-5 text-black pointer-events-none" />
          <input
            type="text"
            placeholder="Search files..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-[#6B7280] bg-white rounded-full focus:ring-2 focus:ring-[#3366FF] focus:border-transparent outline-none text-sm appearance-none"
          />
        </div>

        {/* Filter Controls */}
        <div className="flex items-center gap-2 overflow-x-auto">
          <button
            onClick={() =>
              alert("General filter clicked. Implement filter logic.")
            }
            className="p-2.5 rounded-xl hover:bg-gray-100 text-[#FF3366] flex-shrink-0 transition-colors"
            aria-label="Open filters"
          >
            <FiFilter className="w-5 h-5" strokeWidth={2} />
          </button>
          {["Filter 1", "Filter 2", "Filter 3"].map((filterName) => (
            <button
              key={filterName}
              onClick={() =>
                alert(`${filterName} clicked. Implement filter logic.`)
              }
              className="flex items-center justify-center gap-1.5 px-3.5 py-2.5 border border-[#E5E7EB] bg-[#F9FAFB] text-black font-medium rounded-xl text-xs sm:text-sm whitespace-nowrap hover:bg-gray-100 flex-shrink-0 transition-colors"
            >
              <span>{filterName}</span>
              <FiChevronDown className="w-4 h-4 text-black" />
            </button>
          ))}
        </div>
      </div>
      {/* File List */}
      <div className="flex-grow overflow-y-auto custom-scrollbar pr-1">
        {" "}
        {/* Added custom-scrollbar if you have it defined */}
        {filteredFiles.length > 0 ? (
          <div className="space-y-1">
            {" "}
            {/* Reduced spacing between file items */}
            {filteredFiles.map((file) => (
              <FileItem key={file.id} file={file} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10 text-[#F9FAFB]0">
            <FiSearch className="w-12 h-12 mx-auto mb-3 text-black" />
            <h3 className="text-lg font-semibold mb-1">No Files Found</h3>
            <p className="text-sm">
              Try adjusting your search or filter criteria, or upload a new
              file.
            </p>
          </div>
        )}
      <button
        onClick={handleUploadClick}
        className="px-5 ml-auto mt-4  text-center bg-[#FFCC00] text-white font-semibold  py-3 rounded-full shadow-lg hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2 text-sm"
        aria-label="Upload new file"
      >
        Upload
      </button>
      </div>
    </div>
  );
};

export default function StudentSubmittedPapersPage() {
  const headerUser = {
    name: "Shlok Agheda",
    role: "Student",
    avatarSrc: "/placeholder-avatar-student.jpg", // UPDATE THIS PATH
  };

  const handleBackClick = () => {
    // Implement back navigation, e.g., using Next.js router or window.history
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };

  return (
    <div className="bg-[#eeeeee] min-h-screen flex flex-col">
      <Header user={headerUser} />

      {/* Back Button and Page Title */}
      <div className="flex items-center gap-2 bg-white px-4 sm:px-6 py-4 shadow-sm">
        <button
          onClick={handleBackClick}
          className="p-1.5 text-blacl hover:text-[#3366FF] focus:outline-none rounded-md"
          aria-label="Go back"
        >
          <FiArrowLeft className="w-5 h-5" />
        </button>
        {/* You can make this title dynamic based on context */}
        <h1 className="text-lg sm:text-xl font-bold text-[#FF3366]">
          Folder Name
        </h1>
      </div>

      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        {/* 
          The space-y-8 from your example is removed here if FileManagementContent 
          is the only direct child and already has its own internal spacing/padding.
          If you have other elements directly within main, you can add space-y back.
        */}
        <FileManagementContent />
      </main>

      <Footer />
    </div>
  );
}
