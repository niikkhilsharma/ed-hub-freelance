"use client";


import React, { useState, useMemo } from 'react';
import Header from "@/components/layout/Header"; // Adjust path as needed
import Footer from "@/components/layout/Footer"; // Adjust path as needed
import {
  FiSearch,
  FiChevronDown,
  FiCalendar,
  FiClock,
  FiX, // Using FiX for the clear icon next to date
  FiChevronUp,
  FiArrowLeft,
  FiChevronDown as FiArrowDownSmall, // For number inputs
} from 'react-icons/fi';

// --- Data Interfaces ---
interface StepperStep {
  id: number;
  name: string;
}

interface DropdownOption {
  value: string;
  label: string;
}

interface UnitaryItemData {
  id: string;
  title: string;
  subtitle: string;
}

interface StudentData {
  id: string;
  avatarUrl: string;
  name: string;
  courseName: string;
  levelGrade: string;
  group: string;
}

// --- Sample Data ---
const AVATAR_PLACEHOLDER = 'https://picsum.photos/seed/student/60/60?grayscale'; // Placeholder

const sampleSubjects: DropdownOption[] = [
  { value: 'math', label: 'Mathematics' },
  { value: 'science', label: 'Science' },
  { value: 'english', label: 'English' },
];

const sampleClasses: DropdownOption[] = [
  { value: 'class10a', label: 'Class 10 - Section A' },
  { value: 'class9b', label: 'Class 9 - Section B' },
];

const sampleGroups: DropdownOption[] = [
  { value: 'groupAlpha', label: 'Alpha Group' },
  { value: 'groupBeta', label: 'Beta Group' },
];

const sampleUnitaryItems: UnitaryItemData[] = [
  { id: 'u1', title: 'Algebra Basics', subtitle: 'Introduction to algebraic expressions' },
  { id: 'u2', title: 'Newton\'s Laws', subtitle: 'Fundamental principles of motion' },
  { id: 'u3', title: 'Shakespearean Sonnets', subtitle: 'Analysis of poetic structure' },
  { id: 'u4', title: 'Cellular Biology', subtitle: 'The study of cells' },
];

const sampleStudents: StudentData[] = [
  { id: 's1', avatarUrl: AVATAR_PLACEHOLDER, name: 'Student Alpha', courseName: 'Mathematics', levelGrade: '10th Grade', group: 'Alpha' },
  { id: 's2', avatarUrl: AVATAR_PLACEHOLDER, name: 'Student Beta', courseName: 'Science', levelGrade: '10th Grade', group: 'Alpha' },
  { id: 's3', avatarUrl: AVATAR_PLACEHOLDER, name: 'Student Gamma', courseName: 'English', levelGrade: '9th Grade', group: 'Beta' },
  { id: 's4', avatarUrl: AVATAR_PLACEHOLDER, name: 'Student Delta', courseName: 'Mathematics', levelGrade: '10th Grade', group: 'Beta' },
];

const sampleStandards: DropdownOption[] = [
    { value: '1std', label: '1st STD' },
    { value: '2std', label: '2nd STD' },
    // ... more standards
];


// --- Style Constants ---
const ACCENT_PINK = '#FF3366';
const PRIMARY_BLUE = '#3366FF';
const INPUT_BG = 'bg-gray-50'; // Slightly off-white for inputs
const INPUT_BORDER = 'border-gray-300';
const SCROLLBAR_THUMB_ORANGE = 'scrollbar-thumb-orange-400'; // Custom class for scrollbar
const SCROLLBAR_TRACK_LIGHT = 'scrollbar-track-orange-100'; // Custom class for scrollbar track

// --- Helper Components ---

const FormField: React.FC<{ label: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void; type?: 'text' | 'textarea'; placeholder?: string; required?: boolean; }> = ({ label, name, value, onChange, type = 'text', placeholder, required }) => (
  <div>
    <label htmlFor={name} className="block text-xs font-medium text-gray-700 mb-1">{label}</label>
    {type === 'textarea' ? (
      <textarea
        id={name}
        name={name}
        rows={3}
        value={value}
        onChange={onChange}
        placeholder={placeholder || "Text"}
        required={required}
        className={`w-full px-3 py-2 ${INPUT_BG} ${INPUT_BORDER} border rounded-lg shadow-sm focus:ring-1 focus:ring-[${PRIMARY_BLUE}] focus:border-[${PRIMARY_BLUE}] outline-none text-sm resize-none`}
      />
    ) : (
      <input
        type="text" // Changed from type to always be text for simplicity, date handled separately
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder || "Text"}
        required={required}
        className={`w-full px-3 py-2 ${INPUT_BG} ${INPUT_BORDER} border rounded-lg shadow-sm focus:ring-1 focus:ring-[${PRIMARY_BLUE}] focus:border-[${PRIMARY_BLUE}] outline-none text-sm`}
      />
    )}
  </div>
);

const FormSelect: React.FC<{ label: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; options: DropdownOption[]; required?: boolean; }> = ({ label, name, value, onChange, options, required }) => (
  <div>
    <label htmlFor={name} className="block text-xs font-medium text-gray-700 mb-1">{label}</label>
    <div className="relative">
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full px-3 py-2.5 ${INPUT_BG} ${INPUT_BORDER} border rounded-lg shadow-sm appearance-none focus:ring-1 focus:ring-[${PRIMARY_BLUE}] focus:border-[${PRIMARY_BLUE}] outline-none text-sm pr-8`}
      >
        {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
      </select>
      <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
    </div>
  </div>
);

const FormDateInput: React.FC<{ label: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; required?: boolean; }> = ({ label, name, value, onChange, required }) => (
    <div>
      <label htmlFor={name} className="block text-xs font-medium text-gray-700 mb-1">{label}</label>
      <div className="relative">
        <input
          type="text" // Use text to allow placeholder and custom icon handling; use a date picker library for actual date selection
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder="Select date"
          required={required}
          className={`w-full px-3 py-2 ${INPUT_BG} ${INPUT_BORDER} border rounded-lg shadow-sm focus:ring-1 focus:ring-[${PRIMARY_BLUE}] focus:border-[${PRIMARY_BLUE}] outline-none text-sm pr-10`}
        />
        <FiCalendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
      </div>
    </div>
  );

const DurationPointInput: React.FC<{ label: string; value: string; onChange: (newValue: string) => void; name: string }> = ({ label, value, onChange, name }) => {
    const handleIncrement = () => {
        const numValue = parseInt(value) || 0;
        onChange(String(numValue + 1).padStart(2, '0'));
    };
    const handleDecrement = () => {
        const numValue = parseInt(value) || 0;
        onChange(String(Math.max(0, numValue - 1)).padStart(2, '0'));
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = e.target.value;
        const num = parseInt(rawValue);
        if (!isNaN(num) && num >= 0 && num <= 99) { // Assuming max 99 for HH/MM/Points
            onChange(String(num).padStart(2, '0'));
        } else if (rawValue === "") {
            onChange("00");
        }
    };

    return (
      <div className="text-center">
        <label className="block text-[10px] font-medium text-gray-500 mb-0.5">{label}</label>
        <div className={`relative inline-flex items-center justify-between px-2 py-1.5 ${INPUT_BG} ${INPUT_BORDER} border rounded-lg shadow-sm w-20 h-9`}>
          <input
            type="text" // text to control formatting
            name={name}
            value={value}
            onChange={handleChange}
            className="w-full text-center bg-transparent outline-none text-sm font-medium text-gray-800 appearance-none [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            maxLength={2}
          />
          <div className="absolute right-1.5 top-1/2 -translate-y-1/2 flex flex-col items-center h-full justify-center">
            <button type="button" onClick={handleIncrement} className="text-gray-500 hover:text-gray-700 h-1/2 flex items-center text-[8px]">▲</button>
            <button type="button" onClick={handleDecrement} className="text-gray-500 hover:text-gray-700 h-1/2 flex items-center text-[8px]">▼</button>
          </div>
        </div>
      </div>
    );
};


const Stepper: React.FC<{ steps: StepperStep[]; currentStep: number; setCurrentStep: (step: number) => void }> = ({ steps, currentStep, setCurrentStep }) => (
  <div className="flex items-center justify-center space-x-4 sm:space-x-8 mb-6 sm:mb-10">
    {steps.map((step) => (
      <button
        key={step.id}
        onClick={() => setCurrentStep(step.id)}
        className="flex items-center space-x-2 group focus:outline-none"
      >
        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold border-2
          ${currentStep === step.id ? `bg-[${ACCENT_PINK}] text-white border-[${ACCENT_PINK}]` : 'bg-gray-200 text-gray-500 border-gray-300 group-hover:border-gray-400'}`}
        >
          {step.id}
        </span>
        <span className={`text-sm font-medium ${currentStep === step.id ? `text-[${ACCENT_PINK}]` : 'text-gray-500 group-hover:text-gray-700'}`}>
          {step.name}
        </span>
      </button>
    ))}
  </div>
);

const UnitaryItemCard: React.FC<{ item: UnitaryItemData; isSelected: boolean; onSelect: () => void; }> = ({ item, isSelected, onSelect }) => (
  <button
    onClick={onSelect}
    className={`w-full text-left p-3 rounded-lg border transition-all duration-150
      ${isSelected ? `bg-orange-100 border-orange-400 shadow-md` : `bg-white ${INPUT_BORDER} hover:bg-gray-50 hover:border-gray-400`}`}
  >
    <h4 className="text-sm font-semibold text-gray-800">{item.title}</h4>
    <p className="text-xs text-gray-500">{item.subtitle}</p>
  </button>
);

const StudentSelectItemCard: React.FC<{ student: StudentData; isSelected: boolean; onSelect: () => void; }> = ({ student, isSelected, onSelect }) => (
  <button
    onClick={onSelect}
    className={`w-full flex items-center p-3 rounded-lg border transition-all duration-150 gap-3
      ${isSelected ? `bg-blue-50 border-[${PRIMARY_BLUE}] shadow-sm` : `bg-white ${INPUT_BORDER} hover:bg-gray-50 hover:border-gray-400`}`}
  >
    <img src={student.avatarUrl} alt={student.name} className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
    <div className="flex-grow text-left min-w-0">
      <h4 className="text-sm font-semibold text-gray-800 truncate">{student.name}</h4>
      <p className="text-[11px] text-gray-500 truncate">{student.courseName}</p>
      <p className="text-[11px] text-gray-500 truncate">{student.levelGrade} - {student.group}</p>
    </div>
    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${isSelected ? `border-[${PRIMARY_BLUE}] bg-[${PRIMARY_BLUE}]` : `${INPUT_BORDER}`}`}>
        {isSelected && <div className="w-2 h-2 bg-white rounded-full"></div>}
    </div>
  </button>
);

// --- Main Content Component ---
const CreateAIAssessmentContent: React.FC = () => {
  const stepperSteps: StepperStep[] = [
    { id: 1, name: 'Assessment Details' },
    { id: 2, name: 'Review' },
  ];
  const [currentStep, setCurrentStep] = useState(1);

  // Form State (Left Column)
  const [formData, setFormData] = useState({
    assessmentName: '',
    description: '',
    subject: sampleSubjects[0]?.value || '',
    class: sampleClasses[0]?.value || '',
    group: sampleGroups[0]?.value || '',
    testDate: '',
    expiryDate: '',
    durationHours: '00',
    durationMinutes: '00',
    totalPoints: '00',
    passPoints: '00',
  });

  // Right Column State
  const [unitarySearch, setUnitarySearch] = useState('');
  const [selectedUnitaryId, setSelectedUnitaryId] = useState<string | null>(null);
  
  const [studentAssignType, setStudentAssignType] = useState<'all' | 'selective'>('all');
  const [studentSearch, setStudentSearch] = useState('');
  const [studentDateFilter, setStudentDateFilter] = useState('June 2025'); // Example
  const [studentStandardFilter, setStudentStandardFilter] = useState(sampleStandards[0]?.value || '');
  const [selectedStudentIds, setSelectedStudentIds] = useState<string[]>([]);


  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleDurationPointChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const filteredUnitaryItems = useMemo(() =>
    sampleUnitaryItems.filter(item => item.title.toLowerCase().includes(unitarySearch.toLowerCase())),
    [unitarySearch]
  );

  const filteredStudents = useMemo(() =>
    sampleStudents.filter(student => student.name.toLowerCase().includes(studentSearch.toLowerCase())),
    [studentSearch] // Add date/standard filters here later
  );

  const toggleStudentSelection = (studentId: string) => {
    setSelectedStudentIds(prev => 
        prev.includes(studentId) 
        ? prev.filter(id => id !== studentId) 
        : [...prev, studentId]
    );
  };


  const handleCreate = () => {
    console.log("Form Data:", formData);
    console.log("Selected Unitary:", selectedUnitaryId);
    console.log("Student Assignment:", studentAssignType, "Selected Students:", selectedStudentIds);
    alert("Assessment creation initiated! Check console for data.");
    // Navigate to next step or submit
    if (currentStep === 1) setCurrentStep(2);
    // else actual submission
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8">
      <Stepper steps={stepperSteps} currentStep={currentStep} setCurrentStep={setCurrentStep} />

      {currentStep === 1 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Left Column: Assessment Details Form */}
          <div className="space-y-5">
            <FormField label="Assessment Name" name="assessmentName" value={formData.assessmentName} onChange={handleFormChange} />
            <FormField label="Description" name="description" value={formData.description} onChange={handleFormChange} type="textarea" />
            <FormSelect label="Select Subject" name="subject" value={formData.subject} onChange={handleFormChange} options={sampleSubjects} />
            <FormSelect label="Select Classes" name="class" value={formData.class} onChange={handleFormChange} options={sampleClasses} />
            <FormSelect label="Select Group" name="group" value={formData.group} onChange={handleFormChange} options={sampleGroups} />
            <FormDateInput label="Test Date" name="testDate" value={formData.testDate} onChange={handleFormChange} />
            <FormDateInput label="Expiry Date" name="expiryDate" value={formData.expiryDate} onChange={handleFormChange} />
            
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-2">Duration & Point</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <DurationPointInput label="Hours" name="durationHours" value={formData.durationHours} onChange={(val) => handleDurationPointChange('durationHours', val)} />
                <DurationPointInput label="Minutes" name="durationMinutes" value={formData.durationMinutes} onChange={(val) => handleDurationPointChange('durationMinutes', val)} />
                <DurationPointInput label="Total Points" name="totalPoints" value={formData.totalPoints} onChange={(val) => handleDurationPointChange('totalPoints', val)} />
                <DurationPointInput label="Pass Points" name="passPoints" value={formData.passPoints} onChange={(val) => handleDurationPointChange('passPoints', val)} />
              </div>
            </div>
          </div>

          {/* Right Column: Unitary & Student Selection */}
          <div className="space-y-6">
            {/* Unitary Selection */}
            <div className={`p-4 rounded-lg border ${INPUT_BORDER} bg-slate-50 shadow-sm`}>
              <div className="relative mb-3">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search Unitary, Chapter or Topics"
                  value={unitarySearch}
                  onChange={(e) => setUnitarySearch(e.target.value)}
                  className={`w-full pl-9 pr-3 py-2 ${INPUT_BG} ${INPUT_BORDER} border rounded-lg shadow-sm focus:ring-1 focus:ring-[${PRIMARY_BLUE}] focus:border-[${PRIMARY_BLUE}] outline-none text-sm`}
                />
              </div>
              <div className={`space-y-2 max-h-48 overflow-y-auto pr-1 scrollbar-thin ${SCROLLBAR_THUMB_ORANGE} ${SCROLLBAR_TRACK_LIGHT}`}>
                {filteredUnitaryItems.map(item => (
                  <UnitaryItemCard key={item.id} item={item} isSelected={selectedUnitaryId === item.id} onSelect={() => setSelectedUnitaryId(item.id)} />
                ))}
              </div>
            </div>

            {/* Student Selection */}
            <div className={`p-4 rounded-lg border ${INPUT_BORDER} bg-slate-50 shadow-sm`}>
              <div className="flex items-center space-x-4 mb-3">
                <label className="flex items-center space-x-1.5 cursor-pointer">
                  <input type="radio" name="studentAssignType" value="all" checked={studentAssignType === 'all'} onChange={() => setStudentAssignType('all')} className="form-radio h-4 w-4 text-[${PRIMARY_BLUE}] focus:ring-[${PRIMARY_BLUE}]"/>
                  <span className="text-sm text-gray-700">For all</span>
                </label>
                <label className="flex items-center space-x-1.5 cursor-pointer">
                  <input type="radio" name="studentAssignType" value="selective" checked={studentAssignType === 'selective'} onChange={() => setStudentAssignType('selective')} className="form-radio h-4 w-4 text-[${PRIMARY_BLUE}] focus:ring-[${PRIMARY_BLUE}]"/>
                  <span className="text-sm text-gray-700">For selective Students</span>
                </label>
              </div>

              {studentAssignType === 'selective' && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3 items-center">
                    <div className="relative sm:col-span-1">
                        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input type="text" placeholder="Search Student" value={studentSearch} onChange={e => setStudentSearch(e.target.value)} className={`w-full pl-9 pr-3 py-2 ${INPUT_BG} ${INPUT_BORDER} border rounded-lg shadow-sm text-sm focus:outline-none focus:ring-1 focus:ring-[${PRIMARY_BLUE}]`} />
                    </div>
                    <div className="relative sm:col-span-1">
                        <FiClock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input type="text" value={studentDateFilter} onChange={e => setStudentDateFilter(e.target.value)} className={`w-full pl-9 pr-8 py-2 ${INPUT_BG} ${INPUT_BORDER} border rounded-lg shadow-sm text-sm focus:outline-none focus:ring-1 focus:ring-[${PRIMARY_BLUE}]`} />
                        <FiX onClick={() => setStudentDateFilter('')} className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer" />
                    </div>
                     <div className="relative sm:col-span-1">
                        <select value={studentStandardFilter} onChange={e => setStudentStandardFilter(e.target.value)} className={`w-full px-3 py-2 ${INPUT_BG} ${INPUT_BORDER} border rounded-lg shadow-sm appearance-none text-sm pr-8 focus:outline-none focus:ring-1 focus:ring-[${PRIMARY_BLUE}]`}>
                            {sampleStandards.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                        </select>
                        <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                    </div>
                  </div>
                  <div className={`space-y-2 max-h-60 overflow-y-auto pr-1 scrollbar-thin ${SCROLLBAR_THUMB_ORANGE} ${SCROLLBAR_TRACK_LIGHT}`}>
                    {filteredStudents.map(student => (
                      <StudentSelectItemCard key={student.id} student={student} isSelected={selectedStudentIds.includes(student.id)} onSelect={() => toggleStudentSelection(student.id)} />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div className="text-center py-12 text-gray-500">
          <h3 className="text-xl font-semibold mb-2">Review Step</h3>
          <p>Content for the review step will go here.</p>
        </div>
      )}

      {/* Action Buttons */}
      <div className="mt-8 pt-6 border-t border-gray-200 flex justify-end space-x-3">
        <button
          type="button"
          onClick={() => alert('Cancel clicked')}
          className="px-6 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleCreate}
          className={`px-8 py-2.5 text-sm font-medium text-white bg-[${PRIMARY_BLUE}] hover:opacity-90 rounded-lg shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[${PRIMARY_BLUE}]`}
        >
          {currentStep === 1 ? 'Next' : 'Create Assessment'}
        </button>
      </div>
    </div>
  );
};



export default function CreateAIAssessmentPage() {
  const headerUser = {
    name: "Educator Name", // Example, should be dynamic
    role: "Teacher",      // Example role
    avatarSrc: "/placeholder-avatar-teacher.jpg", // UPDATE THIS PATH
  };

  const handleBackClick = () => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };

  // Define colors for use in Tailwind JIT if not already in config
  const ACCENT_PINK_STYLE = '#FF3366'; 

  return (
    <div className="bg-[#eeeeee] min-h-screen flex flex-col">
      <Header user={headerUser} />

      {/* Page Title Bar */}
      <div className="flex items-center gap-3 bg-white px-4 sm:px-6 py-3.5 shadow-sm sticky top-0 z-40">
        <button
          onClick={handleBackClick}
          className="p-1.5 text-gray-700 hover:text-[#FF3366] focus:outline-none rounded-md" // Using ACCENT_PINK for hover
          aria-label="Go back"
        >
          <FiArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-lg sm:text-xl font-semibold" style={{ color: ACCENT_PINK_STYLE }}>Create AI Generated Assessment</h1>
      </div>

      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        <CreateAIAssessmentContent />
      </main>

      <Footer />
    </div>
  );
}