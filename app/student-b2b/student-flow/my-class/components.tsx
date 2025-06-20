// components.tsx
"use client";

import React from 'react';
import {
    FiChevronDown, FiChevronUp, FiChevronRight, FiArrowLeft
} from 'react-icons/fi';
import {
    MainCategoryTab, SubCategoryItem, ContentUITab, VideoItem,
    DateNavigatorWithArrows, FilterDropdown
} from './ui-components'; // Import UI components

// --- Data Interfaces ---
export interface LearningWeek {
    id: string; title: string; videoCount: number;
    videos: { id: string; topic: string }[];
}
export interface AssessmentItemData { id: string; title: string; resourcesCount: number; }
export interface MockPaperItemData { id: string; title: string; }
export interface WorkSheetItemData { id: string; title: string; }

// --- Accordion Item ---
interface LearningAccordionProps { week: LearningWeek; isOpen: boolean; onToggle: () => void; }
export const LearningAccordion: React.FC<LearningAccordionProps> = ({ week, isOpen, onToggle }) => (
    <div className="bg-[#F9FAFB] rounded-2xl overflow-hidden border border-[#E5E7EB]">
        <button onClick={onToggle} className={`w-full flex justify-between items-center px-3 py-2.5 sm:px-4 sm:py-3 focus:outline-none ${isOpen ? '' : 'hover:bg-[#F3F4F6]'}`}>
            <div>
                <h3 className="text-sm sm:text-md mb-1 sm:mb-3 font-medium text-black text-left">{week.title}</h3> {/* text-left ensures it doesn't center with button flex */}
                <p className="text-xs sm:text-sm text-left text-[#6B7280]">{week.videoCount} videos</p>
            </div>
            {isOpen ? <FiChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-black" /> : <FiChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-black" />}
        </button>
        {isOpen && (<div className="p-3 sm:p-4 bg-[#F9FAFB] space-y-1.5 sm:space-y-2">{week.videos.map(video => (<VideoItem key={video.id} topic={video.topic} />))}</div>)}
    </div>
);

// --- Assessment Item ---
interface AssessmentItemProps { assessment: AssessmentItemData; onClick?: () => void; }
export const AssessmentItem: React.FC<AssessmentItemProps> = ({ assessment, onClick }) => (
    <button onClick={onClick} className="w-full flex justify-between items-center p-3 sm:p-4 text-left bg-[#F9FAFB] hover:bg-gray-100/70 rounded-2xl border border-[#E5E7EB] transition-colors">
        <div>
            <h3 className="text-base font-semibold text-black mb-1 sm:mb-2">{assessment.title}</h3>
            <p className="text-[10px] sm:text-xs text-[#6B7280]">{assessment.resourcesCount} Resources</p>
        </div>
        <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-black flex-shrink-0" />
    </button>
);

// --- Mock Paper Item ---
interface MockPaperItemProps { item: MockPaperItemData; onClick?: () => void; }
export const MockPaperItem: React.FC<MockPaperItemProps> = ({ item, onClick }) => (
    <button onClick={onClick} className="w-full flex justify-between items-center p-3 sm:p-4 text-left bg-gray-50/70 hover:bg-gray-100/70 rounded-2xl border border-[#E5E7EB]  transition-colors">
        <h3 className="tracking-wide text-black text-sm sm:text-base">{item.title}</h3>
        <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-black flex-shrink-0" />
    </button>
);

// --- Work Sheet Item ---
interface WorkSheetItemProps { item: WorkSheetItemData; onClick?: () => void; }
export const WorkSheetItem: React.FC<WorkSheetItemProps> = ({ item, onClick }) => (
    <button onClick={onClick} className="w-full flex justify-between items-center p-3 sm:p-4 text-left bg-gray-50/70 hover:bg-gray-100/70 rounded-2xl border border-[#E5E7EB]  transition-colors">
        <h3 className="text-black text-sm sm:text-base">{item.title}</h3>
        <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-black flex-shrink-0" />
    </button>
);


// --- Major Section Components ---

// 1. MainCategoryTabsBar
interface MainCategoryTabsBarProps {
    categories: string[];
    activeCategory: string;
    onCategoryClick: (category: string) => void;
}
export const MainCategoryTabsBar: React.FC<MainCategoryTabsBarProps> = ({ categories, activeCategory, onCategoryClick }) => (
    <div className="mb-4 md:mb-6 bg-white px-2 py-1.5 sm:px-3 sm:py-2 rounded-2xl sm:rounded-3xl shadow-sm overflow-x-auto custom-scrollbar-thin">
        <div className="flex space-x-2 sm:space-x-4 justify-start sm:justify-center items-center relative min-w-max sm:min-w-full"> {/* min-w-max for mobile scroll */}
            <button className="p-1 sm:p-1.5 text-black cursor-pointer focus:outline-none md:absolute md:left-0"> {/* md:absolute for desktop */}
                <FiArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.5} /> {/* strokeWidth was 3 */}
            </button>
            {categories.map(category => (
                <MainCategoryTab
                    key={category}
                    label={category}
                    isActive={activeCategory === category}
                    onClick={() => onCategoryClick(category)}
                    hasDropdown={category === 'Sports'} // Example
                />
            ))}
        </div>
    </div>
);

// 2. SubCategorySidebar
interface SubCategorySidebarProps {
    subCategories: string[];
    activeSubCategory: string;
    onSubCategoryClick: (subCategory: string) => void;
}
export const SubCategorySidebar: React.FC<SubCategorySidebarProps> = ({ subCategories, activeSubCategory, onSubCategoryClick }) => (
    <div className="bg-white rounded-2xl shadow-lg p-3 sm:p-4 space-y-1.5 sm:space-y-2 lg:max-h-[calc(100vh-250px)] lg:overflow-y-auto custom-scrollbar-thin"> {/* Adjusted max-h for lg */}
        {subCategories.map(subCat => (
            <SubCategoryItem
                key={subCat}
                label={subCat}
                isActive={activeSubCategory === subCat}
                onClick={() => onSubCategoryClick(subCat)}
            />
        ))}
    </div>
);

// 3. ContentDisplayArea
interface ContentDisplayAreaProps {
    contentTabs: string[];
    activeContentTab: string;
    onContentTabClick: (tab: string) => void;
    currentWeekFilter: string;
    onWeekFilterChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    currentMonth: string;
    onMonthPrev?: () => void;
    onMonthNext?: () => void;
    contentTitle: string;
    contentSubtitle?: string | null;
    children: React.ReactNode; // For rendering dynamic content based on activeContentTab
}
export const ContentDisplayArea: React.FC<ContentDisplayAreaProps> = (props) => (
    <div className="bg-white rounded-2xl  p-4 md:p-6">
        <div className="mb-4 md:mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
            <nav className="-mb-px flex space-x-1 sm:space-x-2 overflow-x-auto custom-scrollbar-thin" aria-label="Content Tabs">
                {props.contentTabs.map(tab => (
                    <ContentUITab key={tab} label={tab} isActive={props.activeContentTab === tab} onClick={() => props.onContentTabClick(tab)} />
                ))}
            </nav>
            <div className="flex items-center gap-2 sm:gap-3 self-end sm:self-center">
                <FilterDropdown
                    value={props.currentWeekFilter}
                    onChange={props.onWeekFilterChange}
                    options={[{ value: "Weekly", label: "Weekly" }, { value: "Week 1", label: "Week 1" }, { value: "Week 2", label: "Week 2" }]} // Added Weekly as per original
                />
                <DateNavigatorWithArrows currentDate={props.currentMonth} onPrevious={props.onMonthPrev} onNext={props.onMonthNext} />
            </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 md:mb-6 gap-2 sm:gap-4">
            <div>
                <h2 className="text-lg md:text-xl font-semibold text-[#3366FF]">{props.contentTitle}</h2>
                {props.contentSubtitle && <p className="text-sm md:text-base text-[#3366FF] mt-0.5 sm:mt-1">{props.contentSubtitle}</p>}
            </div>
        </div>
        <div>{props.children}</div>
    </div>
);