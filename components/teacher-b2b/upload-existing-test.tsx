"use client";

import React, { useState, useMemo } from 'react';
import { FiArrowLeft, FiFolder, FiSettings, FiInfo } from 'react-icons/fi';
import Header from "@/components/layout/Header"; // Adjust path as needed
import Footer from "@/components/layout/Footer"; // Adjust path as needed

// --- Data Interfaces ---
interface Category {
  id: string;
  name: string;
}

interface Folder {
  id: string;
  name: string;
  fileCount: number;
  categoryId: string; // To link folder to a category
}

// --- Sample Data ---
const sampleCategories: Category[] = [
  { id: 'cat1', name: 'Category 1' },
  { id: 'cat2', name: 'Category 2' },
  { id: 'cat3', name: 'Category 3' },
  { id: 'cat4', name: 'Category 4' },
  { id: 'cat5', name: 'Category 5' },
];

const sampleFolders: Folder[] = [
  { id: 'f1', name: 'Mathematics Mid-Term', fileCount: 100, categoryId: 'cat1' },
  { id: 'f2', name: 'Science Unit Tests', fileCount: 75, categoryId: 'cat1' },
  { id: 'f3', name: 'History Quizzes', fileCount: 120, categoryId: 'cat2' },
  { id: 'f4', name: 'English Essays', fileCount: 50, categoryId: 'cat2' },
  { id: 'f5', name: 'Physics Labs', fileCount: 90, categoryId: 'cat3' },
  { id: 'f6', name: 'Chemistry Finals', fileCount: 60, categoryId: 'cat1' },
  { id: 'f7', name: 'Art Projects', fileCount: 30, categoryId: 'cat4' },
  { id: 'f8', name: 'Music Theory', fileCount: 45, categoryId: 'cat5' },
];

// --- Sub-components ---

interface CategoryTabProps {
  category: Category;
  isActive: boolean;
  onClick: () => void;
}

const CategoryTab: React.FC<CategoryTabProps> = ({ category, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap
        ${isActive
          ? 'bg-[#FF3366] text-white shadow-md'
          : 'bg-transparent text-gray-600 hover:bg-gray-100'
        }`}
    >
      {category.name}
    </button>
  );
};

interface FolderCardProps {
  folder: Folder;
}

const FolderCard: React.FC<FolderCardProps> = ({ folder }) => {
  return (
    <div className="bg-slate-50 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-200 relative flex flex-col sm:flex-row sm:items-center gap-4">
      {/* Info Icon */}
      <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600" aria-label="Folder information">
        <FiInfo className="w-5 h-5" />
      </button>

      {/* Folder Icon Area */}
      <div className="bg-sky-300 w-24 h-24 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center flex-shrink-0">
        <FiFolder className="w-10 h-10 sm:w-8 sm:h-8 text-black opacity-80" strokeWidth={1.5} />
      </div>

      {/* Folder Details */}
      <div className="flex flex-col flex-grow">
        <h3 className="text-base font-semibold text-gray-900 mb-0.5">{folder.name}</h3>
        <p className="text-xs text-gray-500 mb-3">{folder.fileCount} Files</p>
        <button
          onClick={() => alert(`Manage Access for ${folder.name}`)}
          className="w-full sm:w-auto sm:self-start flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium rounded-full transition-colors"
        >
          <FiSettings className="w-4 h-4" />
          Manage Access
        </button>
      </div>
    </div>
  );
};


// --- Main Content Component ---
const UploadExistingTestContent: React.FC = () => {
  const [categories] = useState<Category[]>(sampleCategories);
  const [allFolders] = useState<Folder[]>(sampleFolders);
  const [activeCategoryId, setActiveCategoryId] = useState<string>(sampleCategories[0]?.id || '');

  const filteredFolders = useMemo(() => {
    if (!activeCategoryId) return allFolders; // Or an empty array if no default selection
    return allFolders.filter(folder => folder.categoryId === activeCategoryId);
  }, [allFolders, activeCategoryId]);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8">
      {/* Category Tabs */}
      <div className="mb-6 sm:mb-8 pb-3 border-b border-gray-200">
        <nav className="flex space-x-1 sm:space-x-2 overflow-x-auto custom-scrollbar-thin">
          {categories.map(cat => (
            <CategoryTab
              key={cat.id}
              category={cat}
              isActive={activeCategoryId === cat.id}
              onClick={() => setActiveCategoryId(cat.id)}
            />
          ))}
        </nav>
      </div>

      {/* Folders Grid */}
      {filteredFolders.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {filteredFolders.map(folder => (
            <FolderCard key={folder.id} folder={folder} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-500">
          <FiFolder className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <h3 className="text-xl font-semibold mb-2">No Tests Found</h3>
          <p className="text-sm">There are no tests available in this category.</p>
        </div>
      )}
    </div>
  );
};


export default function SelectExistingTestPage() {
  const headerUser = {
    name: "Shlok Agheda", // Example, should be dynamic or from context
    role: "Teacher",    // Example role
    avatarSrc: "/placeholder-avatar-teacher.jpg", // UPDATE THIS PATH
  };

  const handleBackClick = () => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };

  return (
    <div className="bg-[#eeeeee] min-h-screen flex flex-col">
      <Header user={headerUser} />

      {/* Page Title Bar */}
      <div className="flex items-center gap-3 bg-white px-4 sm:px-6 py-3.5 shadow-sm sticky top-0 z-40"> {/* Made title bar sticky */}
        <button
          onClick={handleBackClick}
          className="p-1.5 text-gray-700 hover:text-[#FF3366] focus:outline-none rounded-md"
          aria-label="Go back"
        >
          <FiArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-lg sm:text-xl font-semibold text-[#FF3366]">Select Existing Test</h1>
      </div>

      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        <UploadExistingTestContent />
      </main>

      <Footer />
    </div>
  );
}