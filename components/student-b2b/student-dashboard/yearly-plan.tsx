/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  FiArrowLeft,
  FiChevronDown,
  FiChevronUp,
  FiChevronLeft as FiMonthLeft,
  FiChevronRight as FiMonthRight,
} from 'react-icons/fi';

//
// --- Subject Tab Component ---

const SubjectTab = ({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`whitespace-nowrap px-5 py-2 text-[20px] font-semibold transition-colors rounded-full ${
      isActive
        ? 'bg-[#FF3366] text-white'
        : 'text-[#6B7280] hover:bg-gray-100'
    }`}
  >
    {label}
  </button>
);

//
// --- Accordion Item Component for Modules ---
interface UnitDetail {
  point: string;
}
interface Unit {
  id: number;
  name: string;
  periods?: number;
  marks?: number;
  details: UnitDetail[];
  patternSrc?: string;
}
const AccordionItem = ({
  unit,
  isOpen,
  onToggle,
}: {
  unit: Unit;
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <div
    className={`rounded-[25px] overflow-hidden shadow-sm ${
      isOpen ? 'bg-transparent border-0' : 'bg-[#F9FAFB] border border-[#E5E7EB]' // CSS colors
    }`}
  >
    <button
      onClick={onToggle}
      className={`w-full flex justify-between items-center px-5 py-4 focus:outline-none ${ // py-4 matches CSS p-20px for outer ModuleandTestCard
        isOpen ? 'bg-white hover:bg-gray-50 rounded-t-[25px]' : 'hover:bg-gray-100 rounded-[25px]'
      }`}
    >
      <span className="text-[22px] font-medium text-black">{unit.name}</span> {/* CSS Poppins 500, black */}
      <div className="flex items-center gap-5">
        {isOpen && unit.periods !== undefined && ( // Show periods/marks in open state header as per image
          <span className="text-[14px] text-[#6B7280]">Periods : {unit.periods}</span>
        )}
        {isOpen && unit.marks !== undefined && ( // Show periods/marks in open state header as per image
          <span className="text-[14px] text-[#6B7280]">Marks: {unit.marks}</span>
        )}
        <div
          className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ${
            isOpen ? 'bg-black/30' : 'bg-transparent' // Chevron bg from CSS for open state
          }`}
        >
          {isOpen ? (
            <FiChevronUp className="w-3 h-1.5 text-white" /> // Adjusted icon size for 12x6px vector
          ) : (
            <FiChevronDown className="w-3 h-1.5 text-black" /> // Adjusted icon size
          )}
        </div>
      </div>
    </button>

    {isOpen && (
      <div className="relative rounded-b-[25px]"> {/* Outer container for pattern + content box */}
        {unit.patternSrc && (
          <div className="absolute inset-0 z-0 rounded-b-[25px] overflow-hidden">
            <Image
              src={unit.patternSrc}
              alt="Unit background pattern"
              layout="fill"
              objectFit="cover"
            />
            {/* Dark overlay from CSS */}
            <div className="absolute inset-0 bg-black/20 z-10"></div>
          </div>
        )}
        {/* White content box on top of pattern */}
        <div className="relative z-20 p-5 bg-white rounded-[25px] mx-5 mb-5"> {/* CSS shows SubDetails as a separate white box */}
          <h3 className="text-[16px] font-normal text-[#6B7280] mb-3"> {/* Poppins 400, #6B7280, size 16px */}
            {unit.details[0]?.point}
          </h3>
          <ol className="list-decimal list-inside space-y-1 text-[16px] text-[#6B7280] leading-[24px] ml-4"> {/* line-height 24px */}
            {unit.details.slice(1).map((detail, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: detail.point.replace(/\n/g, '<br/>') }}></li>
            ))}
          </ol>
        </div>
      </div>
    )}
  </div>
);
//
// --- Sample Data ---
//
// In a real app, you’d fetch these from your API; here we hardcode them for demonstration.
//
const subjects = ['Subject 1', 'Subject 2', 'Subject 3', 'Subject 4', 'Subject 5'];

const unitDetailsSample: UnitDetail[] = [
  { point: 'REAL NUMBERS' },
  {
    point:
      'Review of representation of natural numbers, integers, and rational numbers on the number line. Rational numbers as recurring/terminating decimals. Operations on real numbers.',
  },
  {
    point:
      'Examples of non-recurring/non-terminating decimals. Existence of non-rational numbers (irrational numbers) such as √2, √3 and their representation on the number line. Explaining that every real number is represented by a unique point on the number line and conversely, every point on the number line represents a unique real number.',
  },
  { point: 'Definition of nth root of a real number.' },
  { point: 'Rationalization (with precise meaning) of real numbers of the type.' },
];

// Create 8 “Unit Name” items; only the first one has periods/marks/pattern.
const modulesData: Unit[] = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: `Unit Name`,
  periods: i === 0 ? 18 : undefined,
  marks: i === 0 ? 20 : undefined,
  patternSrc: i === 0 ? '/Background2.png' : undefined,
  details:
    i === 0
      ? unitDetailsSample
      : [{ point: `Content for Unit Name ${i + 1}` }],
}));

const courseStructureData = [
  { unit: 'I', name: 'Number Systems', marks: '10' },
  { unit: 'II', name: 'Algebra', marks: '20' },
  { unit: 'III', name: 'Coordinate Geometry', marks: '04' },
  { unit: 'IV', name: 'Geometry', marks: '27' },
  { unit: 'V', name: 'Mensuration', marks: '13' },
  { unit: 'VI', name: 'Statistics', marks: '06' },
];
const totalCourseMarks = courseStructureData.reduce((sum, item) => sum + parseInt(item.marks), 0);

const questionPaperDesignData = [
  {
    sno: '1.',
    typology:
      'Remembering: Exhibit memory of previously learned material by recalling facts, terms, basic concepts, and answers. Understanding: Demonstrate understanding of facts and ideas by organizing, comparing, translating, interpreting, giving descriptions, and stating main ideas',
    totalMarks: '43',
    weightage: '54',
  },
  {
    sno: '2.',
    typology:
      'Applying: Solve problems to new situations by applying acquired knowledge, facts, techniques and rules in a different way.',
    totalMarks: '19',
    weightage: '24',
  },
  {
    sno: '3.',
    typology:
      'Analysing: Examine and break information into parts by identifying motives or causes. Make inferences and find evidence to support generalizations. Evaluating: Present and defend opinions by making judgments about information, validity of ideas, or quality of work based on a set of criteria. Creating: Compile information together in a new pattern or proposing alternative solutions',
    totalMarks: '18',
    weightage: '22',
  },
];
const totalDesignMarks = questionPaperDesignData.reduce(
  (sum, item) => sum + parseInt(item.totalMarks),
  0
);
const totalDesignWeightage = questionPaperDesignData.reduce(
  (sum, item) => sum + parseInt(item.weightage),
  0
);

const internalAssessmentData = [
  { item: 'Pen Paper Test and Multiple Assessment (5+5)', marks: '10 Marks' },
  { item: 'Portfolio', marks: '05 Marks' },
  { item: 'Lab Practical (Lab activities to be done from the prescribed books)', marks: '05 Marks' },
];
const totalInternalMarks =
  internalAssessmentData.reduce((sum, item) => sum + parseInt(item.marks.split(' ')[0]), 0) +
  ' Marks';

//
// --- Yearly Plan Overview Page ---
//
export default function YearlyPlanOverviewPage() {
  const [activeSubject, setActiveSubject] = useState(subjects[0]);
  const [openAccordionId, setOpenAccordionId] = useState<number | null>(modulesData[0].id);
  const [viewType, setViewType] = useState<'Weekly' | 'Monthly'>('Weekly');
  const [currentMonth] = useState('June 2025');

  const handleAccordionToggle = (unitId: number) => {
    setOpenAccordionId((prev) => (prev === unitId ? null : unitId));
  };

  const headerUser = {
    name: 'Shlok Agheda',
    role: 'Student',
    avatarSrc: '/placeholder-avatar-student.jpg',
  };

  return (
    <div className="bg-[#EEEEEE] min-h-screen flex flex-col">
      {/* HEADER */}
      <Header user={headerUser} />

      {/* Title Bar (“← Yearly Plan Overview”) */}
      <div className="flex items-center gap-2 px-6 py-4 bg-white">
            <button className="text-gray-700 hover:text-pink-500">
                <FiArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-semibold text-[#FF3366]">
                Yearly Plan Overview
            </h1>
        </div>

      {/* Subject Tabs Bar */}
    <div className="w-full bg-[#f1f1f1] py-4 px-10">
        <div className="w-full bg-white rounded-[25px] shadow-md px-6 py-2 flex items-center justify-center gap-6">
            {subjects.map((subject) => (
            <button
                key={subject}
                onClick={() => setActiveSubject(subject)}
                className={`px-5 py-2 text-sm font-medium rounded-full transition-colors duration-200
                ${activeSubject === subject
                    ? 'bg-[#FF3366] text-white shadow-sm'
                    : 'text-slate-700 hover:text-pink-500'}`}
            >
                {subject}
            </button>
            ))}
        </div>
    </div>



      <main className="flex-grow mt-[30px] px-10 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* ── LEFT COLUMN: Modules ── */}
          <div className="lg:col-span-2 bg-white rounded-[25px] shadow-lg pt-6 pb-8 px-6 relative">
            {/* “Modules” Header + Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
              <h2 className="text-[22px] font-semibold text-[#3366FF]">Modules</h2>

              <div className="flex items-center gap-3">
                {/* Weekly/Monthly dropdown */}
                <div className="relative">
                  <select
                    value={viewType}
                    onChange={(e) => setViewType(e.target.value as 'Weekly' | 'Monthly')}
                    className="appearance-none text-[20px] font-medium text-[#1E1E1E] bg-[#F9FAFB] border border-[#E5E7EB] px-5 py-2 rounded-[10px] pr-10 focus:outline-none"
                  >
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                  </select>
                  <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
                </div>

                {/* Month selector with arrows */}
                <div className="flex items-center gap-2 text-[20px] font-medium text-[#1E1E1E] bg-[#F9FAFB] border border-[#E5E7EB] px-5 py-2 rounded-[10px]">
                  <FiMonthLeft className="w-6 h-6 cursor-pointer hover:text-[#3366FF]" />
                  <span>{currentMonth}</span>
                  <FiMonthRight className="w-6 h-6 cursor-pointer hover:text-[#3366FF]" />
                </div>
              </div>
            </div>

            {/* Accordion List */}
            <div className="space-y-4 max-h-[calc(100vh-22rem)] overflow-y-auto pr-3">
              {modulesData.map((unit) => (
                <AccordionItem
                  key={unit.id}
                  unit={unit}
                  isOpen={openAccordionId === unit.id}
                  onToggle={() => handleAccordionToggle(unit.id)}
                />
              ))}
            </div>

            {/* Custom Scrollbar Track (visual simulation) */}
            <div className="absolute right-6 top-28 bottom-8 w-2 bg-[#FFC79A] rounded-full hidden md:block">
              <div className="w-full h-1/4 bg-[#FF8C00] rounded-full"></div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Course Structure & Question Paper Design ── */}
          <div className="lg:col-span-1 space-y-6">
            {/* Course Structure Card */}
            <div className="bg-white rounded-[25px] shadow-lg p-6">
              <h3 className="text-[18px] font-semibold text-[#3366FF] text-center mb-4">
                COURSE STRUCTURE CLASS - IX
              </h3>
              <table className="w-full text-[16px] border border-[#E5E7EB]">
                <thead className="bg-[#E0F2FE]">
                  <tr>
                    <th className="px-3 py-2 border border-[#E5E7EB] text-left font-medium text-[#1E1E1E]">
                      Units
                    </th>
                    <th className="px-3 py-2 border border-[#E5E7EB] text-left font-medium text-[#1E1E1E]">
                      Unit Name
                    </th>
                    <th className="px-3 py-2 border border-[#E5E7EB] text-left font-medium text-[#1E1E1E]">
                      Marks
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {courseStructureData.map((item) => (
                    <tr key={item.unit} className="bg-white">
                      <td className="px-3 py-2 border border-[#E5E7EB] text-[#1E1E1E]">
                        {item.unit}
                      </td>
                      <td className="px-3 py-2 border border-[#E5E7EB] text-[#1E1E1E]">
                        {item.name}
                      </td>
                      <td className="px-3 py-2 border border-[#E5E7EB] text-[#1E1E1E] font-medium">
                        {item.marks}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-[#E0F2FE] font-semibold">
                    <td colSpan={2} className="px-3 py-2 border border-[#E5E7EB] text-[#1E1E1E]">
                      Total
                    </td>
                    <td className="px-3 py-2 border border-[#E5E7EB] text-[#1E1E1E]">
                      {totalCourseMarks}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Question Paper Design Card */}
            <div className="bg-white rounded-[25px] shadow-lg p-6">
              <h3 className="text-[18px] font-semibold text-[#3366FF] text-center mb-1">
                MATHEMATICS
              </h3>
              <h4 className="text-[16px] font-medium text-[#1E1E1E] text-center mb-1">
                QUESTION PAPER DESIGN
              </h4>
              <h4 className="text-[16px] font-medium text-[#1E1E1E] text-center mb-4">
                CLASS - IX
              </h4>
              <div className="flex justify-between items-center text-[14px] text-[#6B7280] mb-3">
                <span>Time: 3 Hrs.</span>
                <span>Max. Marks: 80</span>
              </div>
              <table className="w-full text-[14px] leading-relaxed border border-[#E5E7EB]">
                <thead className="bg-[#E0F2FE]">
                  <tr>
                    <th className="px-2 py-1 border border-[#E5E7EB] text-left font-medium text-[#1E1E1E]">
                      S. No.
                    </th>
                    <th className="px-2 py-1 border border-[#E5E7EB] text-left font-medium text-[#1E1E1E]">
                      Typology of Questions
                    </th>
                    <th className="px-2 py-1 border border-[#E5E7EB] text-left font-medium text-[#1E1E1E] text-center">
                      Total Marks
                    </th>
                    <th className="px-2 py-1 border border-[#E5E7EB] text-left font-medium text-[#1E1E1E] text-center">
                      % Weightage
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {questionPaperDesignData.map((item) => (
                    <tr key={item.sno} className="bg-white">
                      <td className="px-2 py-1 border border-[#E5E7EB] text-[#1E1E1E] align-top">
                        {item.sno}
                      </td>
                      <td className="px-2 py-1 border border-[#E5E7EB] text-[#1E1E1E] align-top">
                        {item.typology}
                      </td>
                      <td className="px-2 py-1 border border-[#E5E7EB] text-[#1E1E1E] font-medium text-center align-top">
                        {item.totalMarks}
                      </td>
                      <td className="px-2 py-1 border border-[#E5E7EB] text-[#1E1E1E] font-medium text-center align-top">
                        {item.weightage}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-[#E0F2FE] font-semibold">
                    <td colSpan={2} className="px-2 py-1 border border-[#E5E7EB] text-[#1E1E1E]">
                      Total
                    </td>
                    <td className="px-2 py-1 border border-[#E5E7EB] text-[#1E1E1E] text-center">
                      {totalDesignMarks}
                    </td>
                    <td className="px-2 py-1 border border-[#E5E7EB] text-[#1E1E1E] text-center">
                      {totalDesignWeightage}
                    </td>
                  </tr>
                </tbody>
              </table>

              <h3 className="text-[18px] font-semibold text-[#3366FF] text-center mt-6 mb-2">
                INTERNAL ASSESSMENT
              </h3>
              <table className="w-full text-[16px] border border-[#E5E7EB]">
                <thead className="bg-[#E0F2FE]">
                  <tr>
                    <th className="px-2 py-1 border border-[#E5E7EB] text-left font-medium text-[#1E1E1E] w-3/4"></th>
                    <th className="px-2 py-1 border border-[#E5E7EB] text-left font-medium text-[#1E1E1E]">
                      Marks
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {internalAssessmentData.map((item) => (
                    <tr key={item.item} className="bg-white">
                      <td className="px-2 py-1 border border-[#E5E7EB] text-[#1E1E1E]">
                        {item.item}
                      </td>
                      <td className="px-2 py-1 border border-[#E5E7EB] text-[#1E1E1E] font-medium text-center">
                        {item.marks}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-[#E0F2FE] font-semibold">
                    <td className="px-2 py-1 border border-[#E5E7EB] text-[#1E1E1E]">Total</td>
                    <td className="px-2 py-1 border border-[#E5E7EB] text-[#1E1E1E] text-center">
                      {totalInternalMarks}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      
        <Footer />
      </div>
    
  );
}
