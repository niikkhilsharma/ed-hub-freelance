"use client";

import React, { useState, useMemo } from 'react';

import Header from "@/components/layout/Header"; // Adjust path as needed
import Footer from "@/components/layout/Footer"; // Adjust path as needed
import { FiArrowLeft, FiInfo, FiChevronDown, FiX, FiCalendar } from 'react-icons/fi'; // Using FiCalendar as a generic icon for date filter

// --- Data Interfaces ---
type TabKey = 'scheduled' | 'completed' | 'saved';

interface TabItem {
  id: TabKey;
  label: string;
}

interface BaseTest {
  id: string;
  title: string;
  batch: string;
  dateFullText: string; // e.g., "Scheduled for May 28, 2025"
}

interface ScheduledTestItemData extends BaseTest {
  isOngoing?: boolean;
}

interface CompletedTestStatsData {
  enrolled: number;
  attended: number;
  averageScore: number; // As a number e.g. 40 for 40%
}

interface CompletedTestItemData extends BaseTest {
  stats: CompletedTestStatsData;
}

interface SavedTestItemData extends BaseTest {
  // No specific extra fields
}

interface BatchOption {
  value: string;
  label: string;
}

interface RightSidebarData {
  dateFilter: string;
  completeCount: number;
  totalCount: number;
  incompleteCount: number;
  averageScoreOverall: number; // Percentage
}

// --- Sample Data ---
const sampleScheduledTests: ScheduledTestItemData[] = [
  { id: 'st1', title: 'Test Title Alpha', batch: 'Batch 1', dateFullText: 'Scheduled for May 28, 2025' },
  { id: 'st2', title: 'Test Title Beta', batch: 'Batch 1', dateFullText: 'Scheduled for May 28, 2025' },
  { id: 'st3', title: 'Test Title Gamma', batch: 'Batch 1', dateFullText: 'Scheduled for May 28, 2025' },
  { id: 'st4', title: 'Test Title Delta', batch: 'Batch 1', dateFullText: 'Scheduled for May 28, 2025', isOngoing: true },
  { id: 'st5', title: 'Test Title Epsilon', batch: 'Batch 1', dateFullText: 'Planned for May 28, 2025', isOngoing: true }, // Note: image says 'Planned' here for ongoing
  { id: 'st6', title: 'Test Title Zeta', batch: 'Batch 1', dateFullText: 'Scheduled for May 28, 2025' },
];

const sampleCompletedTests: CompletedTestItemData[] = [
  { id: 'ct1', title: 'Test Title Completed A', batch: 'Batch 1', dateFullText: 'Planned for May 28, 2025', stats: { enrolled: 40, attended: 40, averageScore: 40 } },
  { id: 'ct2', title: 'Test Title Completed B', batch: 'Batch 1', dateFullText: 'Planned for May 28, 2025', stats: { enrolled: 50, attended: 45, averageScore: 75 } },
  { id: 'ct3', title: 'Test Title Completed C', batch: 'Batch 1', dateFullText: 'Planned for May 28, 2025', stats: { enrolled: 30, attended: 20, averageScore: 60 } },
];

const sampleSavedTests: SavedTestItemData[] = [
  { id: 'svt1', title: 'Test Title Saved X', batch: 'Batch 1', dateFullText: 'Scheduled for May 28, 2025' },
  { id: 'svt2', title: 'Test Title Saved Y', batch: 'Batch 1', dateFullText: 'Scheduled for May 28, 2025' },
];

const sampleBatchOptions: BatchOption[] = [
  { value: 'all', label: 'All Batches' },
  { value: 'batch1', label: 'Batch 1' },
  { value: 'batch2', label: 'Batch 2' },
];

const sampleSidebarData: RightSidebarData = {
  dateFilter: 'June 2025',
  completeCount: 2,
  totalCount: 20,
  incompleteCount: 1,
  averageScoreOverall: 15,
};

// --- Style Constants ---
const ACCENT_PINK = '#FF3366';
const PRIMARY_BLUE = '#3366FF';
const INPUT_BG = 'bg-gray-50';
const LIGHT_GREEN_BG = 'bg-green-100';
const GREEN_TEXT = 'text-green-700';

// --- Sub-components ---

const TabButton: React.FC<{ label: string; isActive: boolean; onClick: () => void; }> = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2.5 text-sm font-medium rounded-t-lg transition-all duration-150 whitespace-nowrap focus:outline-none
      ${isActive ? `text-[${ACCENT_PINK}] border-b-2 border-[${ACCENT_PINK}]` : 'text-gray-600 hover:text-gray-800 border-b-2 border-transparent hover:border-gray-300'}`}
  >
    {label}
  </button>
);

const TestItemCardBase: React.FC<{ test: BaseTest; children?: React.ReactNode; isOngoing?: boolean }> = ({ test, children, isOngoing }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200 relative">
    <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600" aria-label="Test information">
      <FiInfo className="w-5 h-5" />
    </button>
    <h3 className="text-sm font-semibold text-gray-900 mb-0.5 pr-6">{test.title}</h3>
    <p className="text-xs text-gray-500 mb-2">{test.batch} | {test.dateFullText}</p>
    {children}
    {isOngoing && (
      <span className={`absolute bottom-3 right-3 ${LIGHT_GREEN_BG} ${GREEN_TEXT} text-xs font-medium px-2 py-0.5 rounded-full`}>
        Ongoing
      </span>
    )}
  </div>
);

const CompletedTestStatsDisplay: React.FC<{ stats: CompletedTestStatsData }> = ({ stats }) => (
  <div className="grid grid-cols-3 gap-2 mt-2 pt-2 border-t border-gray-100">
    {(['enrolled', 'attended', 'averageScore'] as const).map(key => (
      <div key={key} className={`${INPUT_BG} rounded-lg px-2 py-1.5 text-center`}>
        <p className="text-[10px] text-gray-500 mb-0.5 capitalize">
          {key === 'averageScore' ? 'Average Score' : `Students ${key}`}
        </p>
        <p className={`text-sm font-bold text-[${PRIMARY_BLUE}]`}>
          {key === 'averageScore' ? `${stats[key]}%` : stats[key]}
        </p>
      </div>
    ))}
  </div>
);

const RightSidebarPanel: React.FC<{ data: RightSidebarData; onDateChange: (date: string) => void; onClearDate: () => void }> = ({ data, onDateChange, onClearDate }) => (
  <div className="bg-white rounded-xl shadow-lg p-4 space-y-4 sticky top-24"> {/* Sticky for when list scrolls */}
    <div className="flex justify-between items-center">
      <h4 className="text-sm font-semibold text-gray-800">Test</h4>
      <div className="relative flex items-center">
        <FiCalendar className="absolute left-2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
        <input 
          type="text" 
          value={data.dateFilter} 
          onChange={(e) => onDateChange(e.target.value)}
          className={`pl-7 pr-6 py-1 text-xs border border-gray-300 rounded-md focus:ring-1 focus:ring-[${PRIMARY_BLUE}] focus:border-[${PRIMARY_BLUE}] outline-none w-32`}
          placeholder="Select Month"
        />
        {data.dateFilter && <FiX onClick={onClearDate} className="absolute right-1.5 w-3.5 h-3.5 text-gray-400 hover:text-gray-600 cursor-pointer" />}
      </div>
    </div>
    <div className="flex justify-between items-baseline">
      <div>
        <p className="text-xs text-gray-500">Complete</p>
        <p className="text-lg font-bold text-gray-800">{data.completeCount} <span className="text-sm text-gray-500">/ {data.totalCount}</span></p>
      </div>
      <div>
        <p className="text-xs text-gray-500">Incomplete</p>
        <p className={`text-lg font-bold text-[${ACCENT_PINK}]`}>{data.incompleteCount}</p>
      </div>
    </div>
    <div className={`${INPUT_BG} p-3 rounded-lg flex justify-between items-center`}>
      <p className="text-xs text-gray-500">Average Score</p>
      <p className={`text-sm font-semibold text-[${PRIMARY_BLUE}]`}>{data.averageScoreOverall}%</p>
    </div>
  </div>
);


// --- Main Content Component ---
const TestManagementContent: React.FC = () => {
  const TABS: TabItem[] = [
    { id: 'scheduled', label: 'Scheduled Test' },
    { id: 'completed', label: 'Completed Tests' },
    { id: 'saved', label: 'Saved' },
  ];
  const [activeTab, setActiveTab] = useState<TabKey>(TABS[0].id);
  const [selectedBatch, setSelectedBatch] = useState<string>(sampleBatchOptions[0].value);
  const [sidebarData, setSidebarData] = useState<RightSidebarData>(sampleSidebarData); // Make this dynamic later

  const testsToDisplay = useMemo(() => {
    // Add batch filtering here if needed
    switch (activeTab) {
      case 'scheduled': return sampleScheduledTests;
      case 'completed': return sampleCompletedTests;
      case 'saved': return sampleSavedTests;
      default: return [];
    }
  }, [activeTab, selectedBatch]);

  const handleDateChange = (newDate: string) => {
    setSidebarData(prev => ({...prev, dateFilter: newDate}));
    // Add logic to refetch/filter data based on newDate
  };
  const handleClearDate = () => {
    setSidebarData(prev => ({...prev, dateFilter: ''}));
    // Add logic to refetch/filter data for all dates
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-0 lg:pr-6"> {/* No padding on lg for edge-to-edge list */}
      {/* Header: Tabs, Filters, Create Button */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6 px-0 lg:px-6 pt-4 lg:pt-6">
        <div className="flex space-x-1 border-b border-gray-200 w-full sm:w-auto overflow-x-auto custom-scrollbar-thin pb-0">
          {TABS.map(tab => (
            <TabButton key={tab.id} label={tab.label} isActive={activeTab === tab.id} onClick={() => setActiveTab(tab.id)} />
          ))}
        </div>
        <div className="flex items-center gap-3 mt-3 sm:mt-0 w-full sm:w-auto justify-between sm:justify-end">
          <div className="relative">
            <select
              value={selectedBatch}
              onChange={(e) => setSelectedBatch(e.target.value)}
              className={`py-2 pl-3 pr-8 text-xs border border-gray-300 rounded-lg ${INPUT_BG} focus:ring-1 focus:ring-[${PRIMARY_BLUE}] focus:border-[${PRIMARY_BLUE}] outline-none appearance-none shadow-sm`}
            >
              {sampleBatchOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
            </select>
            <FiChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500 pointer-events-none" />
          </div>
          <button
            onClick={() => alert('Create BW Test clicked')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[${PRIMARY_BLUE}] rounded-lg shadow-md hover:opacity-90 transition-opacity whitespace-nowrap`}
          >
            Create BW Test
          </button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Test List */}
        <div className="lg:col-span-2 space-y-3 max-h-[calc(100vh-280px)] overflow-y-auto custom-scrollbar pr-2 lg:pl-6 pb-4"> {/* Adjust max-h as needed */}
          {testsToDisplay.map(test => {
            if (activeTab === 'completed') {
              const completedTest = test as CompletedTestItemData;
              return (
                <TestItemCardBase key={completedTest.id} test={completedTest}>
                  <CompletedTestStatsDisplay stats={completedTest.stats} />
                </TestItemCardBase>
              );
            }
            if (activeTab === 'scheduled') {
              const scheduledTest = test as ScheduledTestItemData;
              return <TestItemCardBase key={scheduledTest.id} test={scheduledTest} isOngoing={scheduledTest.isOngoing} />;
            }
            // For 'saved' tab or any other
            return <TestItemCardBase key={test.id} test={test} />;
          })}
          {testsToDisplay.length === 0 && (
            <div className="text-center py-10 text-gray-500">No tests found for this category.</div>
          )}
        </div>

        {/* Right Column: Summary Panel */}
        <div className="lg:col-span-1 hidden lg:block"> {/* Hidden on small screens, shown on lg */}
          <RightSidebarPanel data={sidebarData} onDateChange={handleDateChange} onClearDate={handleClearDate} />
        </div>
      </div>
    </div>
  );
};





export default function BiWeeklyPage() {
  const headerUser = {
    name: "Educator Name", // Example
    role: "Teacher",      // Example
    avatarSrc: "/placeholder-avatar-teacher.jpg", // UPDATE THIS PATH
  };

  const handleBackClick = () => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };

  // Using Tailwind JIT requires these colors to be recognized.
  // If not using JIT, define these in your tailwind.config.js or global CSS.
  const ACCENT_PINK_COLOR = '#FF3366'; 
  const PRIMARY_BLUE_COLOR = '#3366FF';

  return (
    <div className="bg-[#eeeeee] min-h-screen flex flex-col">
      <Header user={headerUser} />

      {/* Page Title Bar (Only back arrow in this design) */}
      <div className="flex items-center bg-white px-4 sm:px-6 py-3 shadow-sm sticky top-0 z-40">
        <button
          onClick={handleBackClick}
          className="p-1.5 text-gray-700 hover:text-gray-900 focus:outline-none rounded-md"
          aria-label="Go back"
        >
          <FiArrowLeft className="w-5 h-5" />
        </button>
        {/* No page title text next to the arrow in the image */}
      </div>

      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        <TestManagementContent />
      </main>

      <Footer />
    </div>
  );
}