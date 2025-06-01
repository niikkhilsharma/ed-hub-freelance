"use client";

import { useState, useMemo } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiBarChart2,
  FiZap,
  FiSmile,
} from "react-icons/fi";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// -------------------------
// Skill Progress Item (Circular SVG-based)
// -------------------------
interface SkillProgressItemProps {
  skillName: string;
  details: string;
  progressText: string; // e.g. "3/4"
  borderColor: string;  // Tailwind border class, e.g. "border-pink-500"
  textColor: string;    // Tailwind text class, e.g. "text-pink-600"
}

const SkillProgressItem = ({
  skillName,
  details,
  progressText,
  borderColor,
  textColor,
}: SkillProgressItemProps) => {
  // Parse "3/4" into numerator and denominator
  const [numStr, denomStr] = progressText.split("/");
  const numerator = parseInt(numStr, 10);
  const denominator = parseInt(denomStr, 10);
  const fraction = denominator > 0 ? numerator / denominator : 0;

  // Circle geometry
  const size = 40; // SVG viewport size: 40×40
  const strokeWidth = 4;
  const radius = (size - strokeWidth) / 2; // actual circle radius
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - fraction); // how much stroke is hidden

  // Map Tailwind borderColor class to actual hex
  const colorMap: Record<string, string> = {
    "border-teal-500": "#14B8A6",
    "border-purple-500": "#A855F7",
    "border-pink-500": "#EC4899",
    "border-red-600": "#DC2626",
  };
  const strokeColor = colorMap[borderColor] || "#ccc";

  return (
    <div className="flex items-center gap-3">
      <div className="relative w-[40px] h-[40px] flex-shrink-0">
        <svg
          width={size}
          height={size}
          className="rotate-[-90deg]"
          viewBox={`0 0 ${size} ${size}`}
        >
          {/* Background track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#e5e7eb" // Tailwind gray-200
            strokeWidth={strokeWidth}
            fill="none"
          />
          {/* Foreground arc */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            fill="none"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-xs font-semibold ${textColor}`}>
            {progressText}
          </span>
        </div>
      </div>
      <div>
        <p className="text-sm font-medium text-gray-700">{skillName}</p>
        <p className="text-xs text-gray-500">{details}</p>
      </div>
    </div>
  );
};

// -------------------------
// Skill Category Card
// -------------------------
interface SkillCategoryCardProps {
  title: string;
  overallProgressText: string; // e.g. "4/5"
  progressValue: number;       // 0–5
  skills: SkillProgressItemProps[];
  bgColor: string;       // Tailwind bg class, e.g. "bg-green-100"
  progressColor: string; // Tailwind bg class for progress bar, e.g. "bg-green-500"
  icon?: React.ReactNode;
}

const SkillCategoryCard = ({
  title,
  overallProgressText,
  progressValue,
  skills,
  bgColor,
  progressColor,
  icon,
}: SkillCategoryCardProps) => (
  <div className={`${bgColor} rounded-2xl shadow-xl p-5 flex flex-col h-full`}>
    <div className="flex justify-between items-center mb-3">
      <h3 className="text-base font-semibold text-gray-800">{title}</h3>
      {icon && <div className="text-gray-500">{icon}</div>}
    </div>

    <p className="text-xs text-gray-600 mb-1">Overall Progress</p>
    <div className="flex items-center gap-2 mb-5">
      <span className="text-lg font-bold text-gray-800">{overallProgressText}</span>
      <div className="flex-grow bg-white/50 rounded-full h-2.5 border border-gray-300/50 overflow-hidden">
        <div
          className={`${progressColor} h-full rounded-full`}
          style={{ width: `${(progressValue / 5) * 100}%` }}
        />
      </div>
      <span className="text-xs text-gray-500">5</span>
    </div>

    <div className="space-y-3 overflow-y-auto custom-scrollbar pr-1">
      {skills.map((skill, idx) => (
        <SkillProgressItem key={idx} {...skill} />
      ))}
    </div>
  </div>
);

// -------------------------
// Test Result Table Row
// -------------------------
interface TestResult {
  id: number;
  test: string;
  date1: string;
  date2: string;
  totalMarks: number;
  how: number;
  marks: string;    // e.g. "80/100"
  result: "Pass" | "Failed";
}

const TestResultRow = ({ data }: { data: TestResult }) => (
  <tr
    className={`${
      data.result === "Pass" ? "bg-green-50/50" : "bg-red-50/50"
    } hover:bg-gray-50`}
  >
    <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">{data.test}</td>
    <td className="px-4 py-3 text-sm text-gray-600 whitespace-nowrap">{data.date1}</td>
    <td className="px-4 py-3 text-sm text-gray-600 whitespace-nowrap">{data.date2}</td>
    <td className="px-4 py-3 text-sm text-gray-600 text-center whitespace-nowrap">
      {data.totalMarks}
    </td>
    <td className="px-4 py-3 text-sm text-gray-600 text-center whitespace-nowrap">
      {data.how}
    </td>
    <td className="px-4 py-3 text-sm text-gray-700 font-semibold text-center whitespace-nowrap">
      {data.marks}
    </td>
    <td
      className={`px-4 py-3 text-sm font-semibold text-center whitespace-nowrap ${
        data.result === "Pass" ? "text-green-600" : "text-red-600"
      }`}
    >
      {data.result}
    </td>
  </tr>
);

// -------------------------
// Sample Data
// -------------------------
const lineChartData = [
  { name: "Jan", basic: 10, critical: 15, personality: 5 },
  { name: "Feb", basic: 12, critical: 18, personality: 8 },
  { name: "Mar", basic: 20, critical: 22, personality: 15 },
  { name: "Apr", basic: 25, critical: 20, personality: 18 },
  { name: "May", basic: 30, critical: 35, personality: 25 },
  { name: "Jun", basic: 28, critical: 30, personality: 30 },
  { name: "Jul", basic: 40, critical: 45, personality: 38 },
  { name: "Aug", basic: 42, critical: 48, personality: 40 },
  { name: "Sep", basic: 45, critical: 50, personality: 42 },
  { name: "Oct", basic: 43, critical: 47, personality: 45 },
  { name: "Nov", basic: 48, critical: 52, personality: 46 },
  { name: "Dec", basic: 50, critical: 55, personality: 48 },
];

const basicAcademicSkills: SkillProgressItemProps[] = Array.from(
  { length: 6 },
  (_, i) => ({
    skillName: `Subject ${i + 1}`,
    details: "Pedagogy and Plan",
    progressText: "3/4",
    borderColor: "border-teal-500",
    textColor: "text-teal-600",
  })
);

const criticalAcademicSkills: SkillProgressItemProps[] = [
  {
    skillName: "Spoken English",
    details: "Pedagogy and Plan",
    progressText: "3/4",
    borderColor: "border-purple-500",
    textColor: "text-purple-600",
  },
  {
    skillName: "Vocabulary",
    details: "Pedagogy and Plan",
    progressText: "3/4",
    borderColor: "border-purple-500",
    textColor: "text-purple-600",
  },
  {
    skillName: "Hand Writing",
    details: "Pedagogy and Plan",
    progressText: "3/4",
    borderColor: "border-purple-500",
    textColor: "text-purple-600",
  },
  {
    skillName: "Olympiad",
    details: "Pedagogy and Plan",
    progressText: "3/4",
    borderColor: "border-purple-500",
    textColor: "text-purple-600",
  },
  {
    skillName: "Experiments",
    details: "Pedagogy and Plan",
    progressText: "3/4",
    borderColor: "border-purple-500",
    textColor: "text-purple-600",
  },
  {
    skillName: "Memory Games",
    details: "Pedagogy and Plan",
    progressText: "3/4",
    borderColor: "border-purple-500",
    textColor: "text-purple-600",
  },
];

const personalDevelopmentSkills: SkillProgressItemProps[] = [
  "Discipline",
  "Confidence",
  "Presentation",
  "Written",
  "Creativity",
  "Problem Solving",
].map((skill) => ({
  skillName: skill,
  details: "Pedagogy and Plan",
  progressText: "3/4",
  borderColor: "border-pink-500",
  textColor: "text-pink-600",
}));

const lifeSkillEnhancements: SkillProgressItemProps[] = [
  "Critical Thinking",
  "Visualization",
  "Accountability",
  "Like Challenges",
  "Social Skills",
  "Decision Making",
  "Focus",
  "Retention",
  "Adaptability",
  "Behavior",
  "Respect",
  "Emotional Skills",
].map((skill) => ({
  skillName: skill,
  details: "Pedagogy and Plan",
  progressText: "3/4",
  borderColor: "border-red-600",
  textColor: "text-red-700",
}));

const testResultsData: TestResult[] = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  test: "Mathematics test",
  date1: "04/01/2025",
  date2: "04/07/2025 04:30 pm",
  totalMarks: 100,
  how: 60,
  marks: "80/100",
  result: i % 2 === 0 ? "Pass" : "Failed",
}));

// -------------------------
// Main ReportPage Component
// -------------------------
export default function ReportPage() {
  const [monthFilter, setMonthFilter] = useState("Month");
  const [yearFilter, setYearFilter] = useState("2025");

  const headerUser = useMemo(
    () => ({
      name: "Shlok Agheda",
      role: "Student",
      avatarSrc: "/placeholder-avatar-student.jpg",
    }),
    []
  );

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header user={headerUser} />

      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
        {/* =========================================
            1) Top Section: Two-Column Grid
               – Left: Overall Progress Chart (spans 2/3 on lg)
               – Right: Personal Development Card (spans 1/3 on lg)
           ========================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* ---------- Left (Chart) ---------- */}
          <section className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div>
                <h2 className="text-xl font-semibold text-pink-600">
                  Overall Progress
                </h2>
                <div className="flex items-center gap-4 mt-3">
                  {[
                    { label: "Basic Academic Skills", color: "bg-sky-400" },
                    { label: "Critical Academic Skills", color: "bg-purple-500" },
                    { label: "Personality Development", color: "bg-pink-500" },
                  ].map((legend) => (
                    <div key={legend.label} className="flex items-center gap-1.5">
                      <span className={`w-3 h-3 rounded-sm ${legend.color}`}></span>
                      <span className="text-xs text-gray-600">{legend.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="relative">
                  <select
                    value={monthFilter}
                    onChange={(e) => setMonthFilter(e.target.value)}
                    className="appearance-none text-sm font-medium text-gray-700 bg-gray-100 px-4 py-2 rounded-lg pr-8 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="Month">Month</option>
                    {[
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ].map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                  <FiChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-100 px-3 py-2 rounded-lg">
                  <FiChevronLeft className="w-4 h-4 cursor-pointer hover:text-gray-800" />
                  <input
                    type="number"
                    value={yearFilter}
                    onChange={(e) => setYearFilter(e.target.value)}
                    className="w-16 text-center bg-transparent focus:outline-none"
                  />
                  <FiChevronRight className="w-4 h-4 cursor-pointer hover:text-gray-800" />
                </div>
              </div>
            </div>

            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <LineChart
                  data={lineChartData}
                  margin={{ top: 5, right: 20, left: -20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis
                    dataKey="name"
                    tick={{ fontSize: 12, fill: "#6b7280" }}
                    axisLine={{ stroke: "#e0e0e0" }}
                    tickLine={{ stroke: "#e0e0e0" }}
                  />
                  <YAxis
                    tick={{ fontSize: 12, fill: "#6b7280" }}
                    axisLine={{ stroke: "#e0e0e0" }}
                    tickLine={{ stroke: "#e0e0e0" }}
                  />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="basic"
                    stroke="#38bdf8"
                    strokeWidth={2.5}
                    dot={{ r: 4, fill: "#38bdf8" }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="critical"
                    stroke="#a855f7"
                    strokeWidth={2.5}
                    dot={{ r: 4, fill: "#a855f7" }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="personality"
                    stroke="#ec4899"
                    strokeWidth={2.5}
                    dot={{ r: 4, fill: "#ec4899" }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* ---------- Right (Personal Development Card) ---------- */}
          <section className="bg-white rounded-2xl shadow-xl p-5 flex flex-col">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-base font-semibold text-pink-600">
                Personal Development
              </h3>
            </div>
            <div className="space-y-3 overflow-y-auto custom-scrollbar pr-1 max-h-[300px]">
              {personalDevelopmentSkills.map((skill, idx) => (
                <SkillProgressItem key={idx} {...skill} />  
              ))}
            </div>
          </section>
        </div>

        {/* =========================================
            2) Middle Section: Three-Column Grid
               – Col 1: Basic Academic Skills
               – Col 2: Critical Academic Skills
               – Col 3: Life Skill Enhancements (taller)
           ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* ---------- Column 1: Basic Academic Skills ---------- */}
          <SkillCategoryCard
            title="Basic Academic Skills"
            overallProgressText="4/5"
            progressValue={4}
            skills={basicAcademicSkills}
            bgColor="bg-green-100"
            progressColor="bg-green-500"
            icon={<FiBarChart2 className="w-5 h-5" />}
          />

          {/* ---------- Column 2: Critical Academic Skills ---------- */}
          <SkillCategoryCard
            title="Critical Academic Skills"
            overallProgressText="4/5"
            progressValue={4}
            skills={criticalAcademicSkills}
            bgColor="bg-purple-100"
            progressColor="bg-purple-500"
            icon={<FiZap className="w-5 h-5" />}
          />

          {/* ---------- Column 3: Life Skill Enhancements ---------- */}
          <div className="bg-white rounded-2xl shadow-xl p-5 flex flex-col h-full">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-base font-semibold text-red-600">
                Life Skill Enhancements
              </h3>
              <FiSmile className="w-6 h-6 text-red-400" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 gap-x-6 gap-y-3 overflow-y-auto custom-scrollbar pr-1 max-h-[400px]">
              {lifeSkillEnhancements.map((skill, idx) => (
                <SkillProgressItem key={idx} {...skill} />
              ))}
            </div>
          </div>
        </div>

        {/* =========================================
            3) Bottom Section: Test Results Table
           ========================================= */}
        <section className="bg-white rounded-2xl shadow-xl p-6 overflow-x-auto">
          <table className="w-full min-w-[800px] text-left">
            <thead className="bg-gray-100">
              <tr>
                {["Test", "Date", "DateTime", "Total Marks", "How", "Marks", "Results"].map(
                  (header) => (
                    <th
                      key={header}
                      className="px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
                    >
                      {header}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {testResultsData.map((result) => (
                <TestResultRow key={result.id} data={result} />
              ))}
            </tbody>
          </table>
        </section>
      </main>

      <Footer />
    </div>
  );
}
