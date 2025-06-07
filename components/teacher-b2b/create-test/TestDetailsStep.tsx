"use client";

import React, { useMemo } from "react";
import {
  FiSearch,
  FiChevronDown,
  FiClock,
  FiX,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import {
  TestDetailsData,
  UnitaryItemData,
  StudentData,
  DropdownOption,
  FormField,
  FormSelect,
  FormDateInput,
  DurationPointInput,
  UnitaryItemCard,
  StudentSelectItemCard,
  sampleUnitaryItems,
  sampleStudents,
  sampleClassesData,
  sampleGroupsData,
  sampleStandardsData, // Import sample data for filtering
  INPUT_BG,
  INPUT_BORDER,
  PRIMARY_BLUE,
  SCROLLBAR_THUMB_ORANGE,
  SCROLLBAR_TRACK_LIGHT, // Import styles
} from "./CreateBWTestPage"; // Assuming co-location for simplicity of imports

interface TestDetailsStepProps {
  testDetails: TestDetailsData;
  onDetailsChange: (name: keyof TestDetailsData, value: any) => void;
  unitarySearch: string;
  onUnitarySearchChange: (value: string) => void;
  studentSearch: string;
  onStudentSearchChange: (value: string) => void;
  studentDateFilter: string;
  onStudentDateFilterChange: (value: string) => void;
  studentStandardFilter: string;
  onStudentStandardFilterChange: (value: string) => void;
}

const TestDetailsStep: React.FC<TestDetailsStepProps> = ({
  testDetails,
  onDetailsChange,
  unitarySearch,
  onUnitarySearchChange,
  studentSearch,
  onStudentSearchChange,
  studentDateFilter,
  onStudentDateFilterChange,
  studentStandardFilter,
  onStudentStandardFilterChange,
}) => {
  const handleFormInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    onDetailsChange(e.target.name as keyof TestDetailsData, e.target.value);
  };

  const handleDurationPointChange = (
    name: keyof TestDetailsData,
    value: string
  ) => {
    onDetailsChange(name, value);
  };

  const toggleStudentSelection = (studentId: string) => {
    const newSelectedStudentIds = testDetails.selectedStudentIds.includes(
      studentId
    )
      ? testDetails.selectedStudentIds.filter((id) => id !== studentId)
      : [...testDetails.selectedStudentIds, studentId];
    onDetailsChange("selectedStudentIds", newSelectedStudentIds);
  };

  const filteredUnitaryItems = useMemo(
    () =>
      sampleUnitaryItems.filter((item) =>
        item.title.toLowerCase().includes(unitarySearch.toLowerCase())
      ),
    [unitarySearch]
  );

  const filteredStudents = useMemo(
    () =>
      sampleStudents.filter((student) =>
        student.name.toLowerCase().includes(studentSearch.toLowerCase())
      ), // Add other filters if needed
    [studentSearch /*, studentDateFilter, studentStandardFilter */]
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
      {/* Left Column: Form */}
      <div className="space-y-5">
        <FormField
          label="Test Name"
          name="testName"
          value={testDetails.testName}
          onChange={handleFormInputChange}
        />
        <FormField
          label="Description"
          name="description"
          value={testDetails.description}
          onChange={handleFormInputChange}
          type="textarea"
        />
        <FormSelect
          label="Select Classes"
          name="selectedClasses"
          value={testDetails.selectedClasses}
          onChange={handleFormInputChange}
          options={sampleClassesData}
        />
        <FormSelect
          label="Select Group"
          name="selectedGroup"
          value={testDetails.selectedGroup}
          onChange={handleFormInputChange}
          options={sampleGroupsData}
        />
        <FormDateInput
          label="Test Date"
          name="testDate"
          value={testDetails.testDate}
          onChange={handleFormInputChange}
        />
        <FormDateInput
          label="Expiry Date"
          name="expiryDate"
          value={testDetails.expiryDate}
          onChange={handleFormInputChange}
        />
        <div>
          <label className="block text-sm font-medium text-black mb-2">
            Duration & Point
          </label>{" "}
          {/* text-black as per FormField label */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <DurationPointInput
              name="durationHours"
              label="Hours"
              value={testDetails.durationHours}
              onChange={(val) =>
                handleDurationPointChange("durationHours", val)
              }
            />
            <DurationPointInput
              name="durationMinutes"
              label="Minutes"
              value={testDetails.durationMinutes}
              onChange={(val) =>
                handleDurationPointChange("durationMinutes", val)
              }
            />
            <DurationPointInput
              name="totalPoints"
              label="Total Points"
              value={testDetails.totalPoints}
              onChange={(val) => handleDurationPointChange("totalPoints", val)}
              isPoints={true}
            />
            <DurationPointInput
              name="passPoints"
              label="Pass Points"
              value={testDetails.passPoints}
              onChange={(val) => handleDurationPointChange("passPoints", val)}
              isPoints={true}
            />
          </div>
        </div>
      </div>

      {/* Right Column: Selections */}
      <div className="space-y-6">
        {/* Unitary Selection */}
        <div className={`p-4 rounded-2xl border ${INPUT_BORDER} bg-[#F9FAFB] `}>
          <div className="relative mb-3">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black" />
            <input
              type="text"
              placeholder="Unitary"
              value={unitarySearch}
              onChange={(e) => onUnitarySearchChange(e.target.value)}
              className={`w-full pl-9 pr-3 py-2 ${INPUT_BG} ${INPUT_BORDER} border rounded-xl focus:ring-1 focus:ring-[${PRIMARY_BLUE}] focus:border-[${PRIMARY_BLUE}] outline-none text-sm`}
                />
          </div>
          <div
            className={`space-y-2 max-h-52 overflow-y-auto pr-1 scrollbar-thin ${SCROLLBAR_THUMB_ORANGE} ${SCROLLBAR_TRACK_LIGHT}`}
          >
            {filteredUnitaryItems.map((item) => (
              <UnitaryItemCard
                key={item.id}
                item={item}
                isSelected={testDetails.selectedUnitaryId === item.id}
                onSelect={() => onDetailsChange("selectedUnitaryId", item.id)}
              />
            ))}
            {filteredUnitaryItems.length === 0 && (
              <p className="text-xs text-gray-400 text-center py-2">
                No items match your search.
              </p>
            )}
          </div>
        </div>

        {/* Student Selection */}
        <div className={`p-4 rounded-2xl border ${INPUT_BORDER} bg-[#F9FAFB] `}>
          <div className="flex items-center space-x-4 mb-3">
            <label className="flex items-center space-x-1.5 cursor-pointer">
              <input
                type="radio"
                name="studentAssignType"
                value="all"
                checked={testDetails.studentAssignType === "all"}
                onChange={() => onDetailsChange("studentAssignType", "all")}
                className={`form-radio h-4 w-4 text-[${PRIMARY_BLUE}] focus:ring-[${PRIMARY_BLUE}] border-gray-400`}
              />
              <span className="text-md text-black">For all</span>
            </label>
            <label className="flex items-center space-x-1.5 cursor-pointer">
              <input
                type="radio"
                name="studentAssignType"
                value="selective"
                checked={testDetails.studentAssignType === "selective"}
                onChange={() =>
                  onDetailsChange("studentAssignType", "selective")
                }
                className={`form-radio h-4 w-4 text-[${PRIMARY_BLUE}] focus:ring-[${PRIMARY_BLUE}] border-gray-400`}
              />
              <span className="text-md text-black">For selective Students</span>
            </label>
          </div>
          {testDetails.studentAssignType === "selective" && (
            <>
              <div className="flex grid-cols-1 sm:grid-cols-3 gap-3 mb-3 items-stretch justify-between">
                <div className="relative flex-grow sm:col-span-1">
                  <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search Student"
                    value={studentSearch}
                    onChange={(e) => onStudentSearchChange(e.target.value)}
                    className={`w-full pl-9 pr-3 py-2 ${INPUT_BG} ${INPUT_BORDER} border rounded-full  text-sm focus:outline-none focus:ring-1 focus:ring-[${PRIMARY_BLUE}]`}
                  />
                </div>
                <div className="relative sm:col-span-1">
                  <div className="flex items-center gap-2.5 text-sm border border-[#E5E7EB] text-black bg-[#F9FAFB] px-3 py-2 rounded-xl">
                    <FiArrowLeftCircle className="w-4 h-4 cursor-pointer hover:text-black" />
                    <span>June 2025</span>
                    <FiArrowRightCircle className="w-4 h-4 cursor-pointer hover:text-black" />
                  </div>
                </div>
                <div className="relative sm:col-span-1">
                  <select
                    value={studentStandardFilter}
                    onChange={(e) =>
                      onStudentStandardFilterChange(e.target.value)
                    }
                    className={`w-full px-3 py-2 ${INPUT_BG} ${INPUT_BORDER} border rounded-lg appearance-none text-sm pr-8 focus:outline-none focus:ring-1 focus:ring-[${PRIMARY_BLUE}]`}
                      >
                    <option value="">1st STD</option>{" "}
                    {/* Added a default option */}
                    {sampleStandardsData.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
              </div>
              <div
                className={`space-y-2 max-h-96 overflow-y-auto pr-1 scrollbar-thin ${SCROLLBAR_THUMB_ORANGE} ${SCROLLBAR_TRACK_LIGHT}`}
              >
                {filteredStudents.map((student) => (
                  <StudentSelectItemCard
                    key={student.id}
                    student={student}
                    isSelected={testDetails.selectedStudentIds.includes(
                      student.id
                    )}
                    onSelect={() => toggleStudentSelection(student.id)}
                  />
                ))}
                {filteredStudents.length === 0 && (
                  <p className="text-xs text-gray-400 text-center py-2">
                    No students match your search.
                  </p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default TestDetailsStep;
