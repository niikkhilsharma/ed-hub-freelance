// page.tsx (e.g., /app/assessments/page.tsx)
"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
// Removed FiArrowLeft from here as it's not in page header, but in ui-components if needed
import {
  SubCategorySidebar,
  ContentDisplayArea,
  LearningAccordion,
  AssessmentItem,
  MockPaperItem,
  WorkSheetItem,
  LearningWeek, // Types
  AssessmentItemData,
  MockPaperItemData,
  WorkSheetItemData,
} from "./components";
import { OptimizedCategoryTabsBar } from "@/components/common-components/topbar";

// --- Sample Data (kept in page.tsx) ---
const mainCategoriesData = [
  "Academics",
  "Skill Development",
  "Brain Function",
  "Sports",
  "STEMnology",
  "Competition",
  "Extra curriculars",
];
const academicSubCategoriesData = [
  "Understanding Unitary Method – Level 1",
  "Numbers in Action – Sheet 1",
  "Everyday Maths – Skill Builder 1",
  "Stepwise Solutions – Worksheet A",
  "Think & Solve – Level 1",
  "Learning Ladder – Level 1",
]; // Added more for scrolling
const academicSubCategoriesData2 = [
  "Addition Mock Test",
  "Subtraction Mock Test",
  "Multiplication Mock Test",
  "Subtraction Mock Test  2",
  "Division Mock Test ",
  "Multiplication Mock Test 2",
]; // Added more for scrolling
const academicSubCategoriesData3 = ["Math", "Science", "English"];
const contentTabsData = [
  "Learning",
  "Assessments",
  "Mock Papers",
  "Work Sheet",
];

const learningWeeksDataPage: LearningWeek[] = Array.from(
  { length: 5 },
  (_, i) => ({
    id: `week${i + 1}`,
    title: `Learning Videos ( Week 1 )`,
    videoCount: i === 0 ? 4 : 3,
    videos: Array.from({ length: i === 0 ? 4 : 3 }, (_, j) => ({
      id: `v${i}-${j}`,
      topic: `Topic ${j + 1}`,
    })),
  })
);
const assessmentDataPage: AssessmentItemData[] = Array.from(
  { length: 5 },
  (_, i) => ({ id: `assess${i + 1}`, title: `Title`, resourcesCount: 3 })
);
const mockPapersDataPage: MockPaperItemData[] = Array(6)
  .fill(null)
  .map((_, i) => ({
    id: `mp${i + 1}`,
    title: `${academicSubCategoriesData2[i]}`,
  })); // Example dynamic title
const workSheetDataPage: WorkSheetItemData[] = Array(6)
  .fill(null)
  .map((_, i) => ({
    id: `ws${i + 1}`,
    title: `${academicSubCategoriesData[i]}`,
  }));
// --- End Sample Data ---

export default function MyClassAssesmentPage() {
  const [activeMainCategory, setActiveMainCategory] = useState(
    mainCategoriesData[0]
  );
  const [activeSubCategory, setActiveSubCategory] = useState(
    academicSubCategoriesData3[0]
  );
  const [activeContentTab, setActiveContentTab] = useState(contentTabsData[0]); // Default to Learning
  const [openAccordionId, setOpenAccordionId] = useState<string | null>(
    learningWeeksDataPage[0]?.id || null
  );
  const [currentMonth, setCurrentMonth] = useState("June 2025");
  const [currentWeekFilter, setCurrentWeekFilter] = useState("Weekly"); // Matched original select default

  const headerUser = {
    name: "Shlok Agheda",
    role: "Student",
    avatarSrc: "/placeholder-avatar-student.jpg",
  };

  const handleAccordionToggle = (weekId: string) => {
    setOpenAccordionId((prevId) => (prevId === weekId ? null : weekId));
  };

  // Dummy handlers for date nav
  const handleMonthPrev = () => setCurrentMonth("May 2025");
  const handleMonthNext = () => setCurrentMonth("July 2025");

  const getContentTitle = () => {
    if (activeContentTab === "Learning") return `Earth and Space Science`;
    if (activeContentTab === "Assessments") return `Startup Math Part 1`;
    if (activeContentTab === "Mock Papers")
      return `${activeSubCategory} Mock Papers`;
    if (activeContentTab === "Work Sheet")
      return `${activeSubCategory} Work Sheet`;
    return `${activeSubCategory} ${activeContentTab}`;
  };
  const getContentSubTitle = () => {
    if (activeContentTab === "Learning")
      return `Solar system, weather patterns, and basic understanding of the Earth.`;
    return null;
  };

  const renderActiveContent = () => {
    switch (activeContentTab) {
      case "Learning":
        return (
          <div className="space-y-3">
            {learningWeeksDataPage.map((week) => (
              <LearningAccordion
                key={week.id}
                week={week}
                isOpen={openAccordionId === week.id}
                onToggle={() => handleAccordionToggle(week.id)}
              />
            ))}
          </div>
        );
      case "Assessments":
        return (
          <div className="space-y-3">
            {assessmentDataPage.map((assessment) => (
              <AssessmentItem key={assessment.id} assessment={assessment} />
            ))}
          </div>
        );
      case "Mock Papers":
        return (
          <div className="space-y-3">
            {mockPapersDataPage.map((item) => (
              <MockPaperItem key={item.id} item={item} />
            ))}
          </div>
        );
      case "Work Sheet":
        return (
          <div className="space-y-3">
            {workSheetDataPage.map((item) => (
              <WorkSheetItem key={item.id} item={item} />
            ))}
          </div>
        );
      default:
        return (
          <div className="text-center py-10 text-gray-500">
            {activeContentTab} content goes here.
          </div>
        );
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header user={headerUser} />
      <main className="flex-col w-full mx-auto p-3 sm:p-4 md:p-6 lg:p-8">
        <div className="mb-4">
          <OptimizedCategoryTabsBar
            categories={mainCategoriesData}
            activeCategory={activeMainCategory}
            onCategoryClick={(category) => setActiveMainCategory(category)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          <div className="md:col-span-1 lg:col-span-1">
            {" "}
            {/* Sidebar takes 1 col on md and lg */}
            <SubCategorySidebar
              subCategories={academicSubCategoriesData3} // This would be dynamic based on activeMainCategory
              activeSubCategory={activeSubCategory}
              onSubCategoryClick={setActiveSubCategory}
            />
          </div>
          <div className="md:col-span-3 lg:col-span-4">
            {" "}
            {/* Content takes remaining cols */}
            <ContentDisplayArea
              contentTabs={contentTabsData}
              activeContentTab={activeContentTab}
              onContentTabClick={setActiveContentTab}
              currentWeekFilter={currentWeekFilter}
              onWeekFilterChange={(e) => setCurrentWeekFilter(e.target.value)}
              currentMonth={currentMonth}
              onMonthPrev={handleMonthPrev}
              onMonthNext={handleMonthNext}
              contentTitle={getContentTitle()}
              contentSubtitle={getContentSubTitle()}
            >
              {renderActiveContent()}
            </ContentDisplayArea>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
