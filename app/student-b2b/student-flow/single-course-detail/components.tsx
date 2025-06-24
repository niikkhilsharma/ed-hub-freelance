// components.tsx
"use client";

import React from "react";
import {
  FiChevronDown,
  FiChevronUp,
  FiFileText as FiFileIcon,
  FiDownload,
} from "react-icons/fi";
import {
  ContentTab,
  VideoItem,
  DateNavigatorWithArrows,
  FilterDropdown,
  ActionButton,
} from "./ui-components";

// --- Learning Accordion Interfaces & Component ---
export interface LearningWeek {
  // Export if used by page.tsx
  id: string;
  title: string;
  videoCount: number;
  videos: { id: string; topic: string }[];
}
interface LearningAccordionProps {
  week: LearningWeek;
  isOpen: boolean;
  onToggle: () => void;
}
export const LearningAccordion: React.FC<LearningAccordionProps> = ({
  week,
  isOpen,
  onToggle,
}) => (
  <div className="bg-[#F9FAFB] rounded-2xl  overflow-hidden border border-[#E5E7EB]">
    <button
      onClick={onToggle}
      className="w-full flex justify-between items-center p-3 sm:p-4 hover:bg-[#F3F4F6] focus:outline-none transition-colors"
    >
      <div>
        <h3 className="text-sm sm:text-md mb-0.5 sm:mb-1 font-medium text-black text-left">
          {week.title}
        </h3>{" "}
        {/* Added text-left */}
        <p className="text-[10px] sm:text-xs text-left mt-1 sm:mt-1.5 text-gray-500">
          {week.videoCount} videos
        </p>
      </div>
      {isOpen ? (
        <FiChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
      ) : (
        <FiChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
      )}
    </button>
    {isOpen && (
      <div className="p-3 sm:p-4 bg-[#F9FAFB] space-y-1.5 sm:space-y-2">
        {week.videos.map((video) => (
          <VideoItem key={video.id} topic={video.topic} />
        ))}
      </div>
    )}
  </div>
);

// --- Upcoming Class Interfaces & Component ---
export interface UpcomingClass {
  // Export if used by page.tsx
  id: number;
  title: string;
  teacher: string;
  description: string;
  time: string;
  date: string;
}
interface UpcomingClassItemProps {
  uClass: UpcomingClass;
}
export const UpcomingClassItem: React.FC<UpcomingClassItemProps> = ({
  uClass,
}) => (
  <div className="bg-[#F9FAFB]/70 p-3 sm:p-4 rounded-2xl border border-[#E5E7EB]/100 flex flex-col xs:flex-row xs:items-stretch">
    <div className="mb-2 xs:mb-0">
    
       <div className="flex justify-between items-start">
         <h4 className="text-sm sm:text-md font-bold text-black">
        {uClass.title}
      </h4>
       <p className="text-[10px]  sm:text-xs text-gray-400 mb-1 xs:mb-0">
        {uClass.date}
      </p>
       </div>
     
      
      <p className="text-[10px] sm:text-xs text-[#FFCC00] font-light tracking-wide mt-0.5">
        {uClass.teacher}
      </p>
      <p className="text-[10px] sm:text-xs text-[#6B7280] font-light tracking-tight mt-1">
        {uClass.description}
      </p>
     
    </div>
    <div className="flex justify-between items-center">
       <p className="text-[10px] sm:text-xs text-[#6B7280] font-light tracking-tight mt-0.5">
        {uClass.time}
      </p>
      <ActionButton variant="primary" size="sm" className=" xs:w-auto">
        Join
      </ActionButton>
    </div>
  </div>
);

// --- Course Material Interfaces & Component ---
export interface CourseMaterial {
  // Export if used by page.tsx
  id: number;
  fileName: string;
  date: string;
}
export const CourseMaterialItem: React.FC<Omit<CourseMaterial, "id">> = ({
  fileName,
  date,
}) => (
  <div className="bg-[#F9FAFB] p-3 sm:p-4 rounded-2xl border border-[#E5E7EB]  flex flex-col sm:flex-row items-center gap-3 sm:gap-4 hover:shadow-md transition-shadow">
    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#8DD9B3] rounded-2xl flex items-center justify-center flex-shrink-0">
      {" "}
      {/* Adjusted size for mobile */}
      <FiFileIcon className="w-10 h-10 sm:w-12 sm:h-12 text-black" />
    </div>
    <div className="flex-1 min-w-0 w-full sm:w-auto text-center sm:text-left">
      <h4 className="text-md sm:text-lg font-semibold text-black mb-0.5 sm:mb-1 truncate">
        {fileName}
      </h4>
      <p className="text-[10px] sm:text-xs text-[#6B7280] mb-2 sm:mb-3">
        {date}
      </p>
     
       <ActionButton
        variant="secondary"
        size="sm"
        className="w-full flex justify-center items-center max-w-xs mx-auto sm:mx-0"
      >
        <FiDownload className="w-3.5 h-3.5 sm:w-4 sm:h-4 self-center text-black mr-1.5 sm:mr-2" />{" "}
        Download
      </ActionButton>
     
    </div>
  </div>
);

// --- Major Section Components ---

// 1. LearningContentCard
interface LearningContentCardProps {
  tabs: string[];
  activeTab: string;
  onTabClick: (tab: string) => void;
  currentWeekFilter: string;
  onWeekFilterChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  currentMonth: string;
  onMonthPrev?: () => void;
  onMonthNext?: () => void;
  courseTitle: string;
  courseSubtitle: string;
  learningWeeks: LearningWeek[];
  openAccordionId: string | null;
  onAccordionToggle: (weekId: string) => void;
}
export const LearningContentCard: React.FC<LearningContentCardProps> = (
  props
) => (
  <div className="bg-white rounded-2xl  p-4 md:p-6">
    <div className="mb-4 md:mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
      <nav
        className="-mb-px flex space-x-1 sm:space-x-2 overflow-x-auto custom-scrollbar-thin"
        aria-label="Content Tabs"
      >
        {props.tabs.map((tab) => (
          <ContentTab
            key={tab}
            label={tab}
            isActive={props.activeTab === tab}
            onClick={() => props.onTabClick(tab)}
          />
        ))}
      </nav>
      <div className="flex items-center gap-2 sm:gap-3 self-end sm:self-center">
        {" "}
        {/* Filters */}
        <FilterDropdown
          value={props.currentWeekFilter}
          onChange={props.onWeekFilterChange}
          options={[
            { value: "Week 1", label: "Week 1" },
            { value: "Week 2", label: "Week 2" },
          ]}
        />
        <DateNavigatorWithArrows
          currentDate={props.currentMonth}
          onPrevious={props.onMonthPrev}
          onNext={props.onMonthNext}
        />
      </div>
    </div>
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 md:mb-6 gap-2 sm:gap-4">
      <div>
        <h2 className="text-lg md:text-xl font-bold text-[#3366FF]">
          {props.courseTitle}
        </h2>
        <p className="text-md md:text-lg text-[#3366FF] mt-0.5 text-sm">
          {props.courseSubtitle}
        </p>{" "}
        {/* Original had text-lg, adjusted for balance */}
      </div>
    </div>
    {props.activeTab === "Learning" && (
      <div className="space-y-2 md:space-y-3">
        {props.learningWeeks.map((week) => (
          <LearningAccordion
            key={week.id}
            week={week}
            isOpen={props.openAccordionId === week.id}
            onToggle={() => props.onAccordionToggle(week.id)}
          />
        ))}
      </div>
    )}
    {props.activeTab !== "Learning" && (
      <div className="text-center py-8 md:py-10 text-gray-500 text-sm md:text-base">
        {props.activeTab} content goes here.
      </div>
    )}
  </div>
);

// 2. UpcomingClassesCard
interface UpcomingClassesCardProps {
  classes: UpcomingClass[];
  currentWeekFilter: string; // Assuming same filter is used, adjust if different
  onWeekFilterChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  currentMonth: string;
  onMonthPrev?: () => void;
  onMonthNext?: () => void;
}
export const UpcomingClassesCard: React.FC<UpcomingClassesCardProps> = (
  props
) => (
  <div className="bg-white rounded-2xl  p-4 md:p-6 flex flex-col h-full">
    <div className="flex justify-between items-center mb-3 md:mb-4">
      <h3 className="text-lg md:text-xl font-bold text-[#FF3366]">
        Upcoming Classes
      </h3>
    </div>
    <div className="flex justify-center items-center gap-2 sm:gap-3 mb-3 md:mb-4">
      {" "}
      {/* Filters centered */}
      <FilterDropdown
        value={props.currentWeekFilter}
        onChange={props.onWeekFilterChange}
        options={[
          { value: "Week 1", label: "Week 1" },
          { value: "Week 2", label: "Week 2" },
        ]}
      />
      <DateNavigatorWithArrows
        currentDate={props.currentMonth}
        onPrevious={props.onMonthPrev}
        onNext={props.onMonthNext}
      />
    </div>
    <div className="flex-1 min-h-0">
      {" "}
      {/* For proper scrollbar behavior */}
      <div className="space-y-2 md:space-y-3 h-full overflow-y-auto pr-1 md:pr-2 custom-scrollbar">
        {props.classes.map((uClass) => (
          <UpcomingClassItem key={uClass.id} uClass={uClass} />
        ))}
        {props.classes.length === 0 && (
          <p className="text-center text-sm text-gray-500 py-4">
            No upcoming classes.
          </p>
        )}
      </div>
    </div>
  </div>
);

// 3. CourseMaterialSection
interface CourseMaterialSectionProps {
  materials: CourseMaterial[];
}
export const CourseMaterialSection: React.FC<CourseMaterialSectionProps> = ({
  materials,
}) => (
  <div className="bg-white rounded-2xl  p-4 md:p-6">
    <h2 className="text-lg md:text-xl font-bold text-[#FF3366] mb-4 md:mb-6">
      Course Material
    </h2>
    {materials.length > 0 ? (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {materials.map((material) => (
          <CourseMaterialItem
            key={material.id}
            fileName={material.fileName}
            date={material.date}
          />
        ))}
      </div>
    ) : (
      <p className="text-center text-sm text-gray-500 py-4">
        No course materials available.
      </p>
    )}
  </div>
);

// 4. AttendanceCard
interface AttendanceData {
  total: number;
  attended: number;
  missed: number;
  percentage: number;
}
interface AttendanceCardProps {
  attendance: AttendanceData;
}
export const AttendanceCard: React.FC<AttendanceCardProps> = ({
  attendance,
}) => (
  <div className="bg-white rounded-2xl  p-4 md:p-6">
    <h3 className="text-md md:text-lg font-semibold text-black mb-1.5 md:mb-2">
      Attendance
    </h3>
    <p className="text-[10px] md:text-xs text-black mb-2 md:mb-3">
      Total : {attendance.total}   Attended : {attendance.attended}   Missed :{" "}
      {attendance.missed}
    </p>
    <div className="w-full flex rounded-full h-2.5 md:h-3 bg-gray-200">
      {" "}
      {/* Added track bg */}
      <div
        className="bg-[#3366FF] relative h-full rounded-full"
        style={{ width: `${attendance.percentage}%` }}
      >
        {" "}
        {/* h-full */}
        <p className="absolute right-0 bottom-0 self-center translate-x-[115%] translate-y-[1px] sm:translate-y-[2px] text-xs md:text-sm text-[#B0B0B0] font-medium text-right mt-1">
          {attendance.percentage}%
        </p>
      </div>
    </div>
  </div>
);

// 5. CertificateCard
export const CertificateCard: React.FC = () => (
  <div className="bg-white rounded-2xl  p-3 md:p-4 text-left">
    {" "}
    {/* text-left was original */}
    <h3 className="font-medium text-black mb-3 md:mb-4 text-sm md:text-base">
      Download Certificate
    </h3>{" "}
    {/* text-sm for mobile */}
   
      <ActionButton variant="secondary" size="sm" className="w-full flex justify-center items-center">
      <FiDownload className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />{" "}
      Download{" "}
      {/* Removed text-black from icon as ActionButton handles text color */}
    </ActionButton>
    
  </div>
);
