"use client";

import React, { useState, useMemo, useEffect, useCallback } from "react";
import {
  FiArrowLeft,
  FiGrid,
  FiZap,
  FiSearch,
  FiChevronDown,
  FiCalendar,
  FiClock,
  FiX,
  FiPlus,
  FiTrash2,
  FiUpload,
  FiEdit3,
  FiCheckCircle,
} from "react-icons/fi";
import Header from "@/components/layout/Header"; // Adjust path as needed
import Footer from "@/components/layout/Footer"; // Adjust path as needed
import { v4 as uuidv4 } from "uuid"; // For generating unique IDs

// --- Style Constants (Global for this file) ---
const ACCENT_PINK = "#FF3366";
const PRIMARY_BLUE = "#3366FF";
const YELLOW_BUTTON_BG = "bg-yellow-400"; // More Tailwind friendly
const YELLOW_BUTTON_TEXT = "text-black";
const INPUT_BG = "bg-gray-50";
const INPUT_BORDER = "border-gray-300";
const SCROLLBAR_THUMB_ORANGE = "scrollbar-thumb-orange-400";
const SCROLLBAR_TRACK_LIGHT = "scrollbar-track-orange-100";

// --- Data Interfaces (Global for this file) ---
interface StepperStep { id: number; name: string; }
interface DropdownOption { value: string; label: string; }
interface UnitaryItemData { id: string; title: string; subtitle: string; }
interface StudentData { id: string; avatarUrl: string; name: string; courseName: string; levelGrade: string; group: string; }

interface TestDetailsData {
  testName: string;
  description: string;
  selectedClasses: string;
  selectedGroup: string;
  testDate: string;
  expiryDate: string;
  durationHours: string;
  durationMinutes: string;
  totalPoints: string;
  passPoints: string;
  selectedUnitaryId: string | null;
  studentAssignType: 'all' | 'selective';
  selectedStudentIds: string[];
}

interface TestOption { id: string; text: string; }
interface TestQuestion {
  id: string;
  questionText: string;
  options: TestOption[];
  correctOptionId: string | null;
  points: string;
  numOptions: number;
}

// --- Sample Data (Global for this file) ---
const AVATAR_PLACEHOLDER = "https://picsum.photos/seed/student/60/60?grayscale";
const sampleClassesData: DropdownOption[] = [ { value: 'class10a', label: 'Class 10 - Section A' }, { value: 'class9b', label: 'Class 9 - Section B' }];
const sampleGroupsData: DropdownOption[] = [ { value: 'groupAlpha', label: 'Alpha Group' }, { value: 'groupBeta', label: 'Beta Group' }];
const sampleUnitaryItems: UnitaryItemData[] = [
    { id: 'u1', title: 'Algebra Basics', subtitle: 'Introduction to algebraic expressions' },
    { id: 'u2', title: 'Newton\'s Laws', subtitle: 'Fundamental principles of motion' },
    { id: 'u3', title: 'Photosynthesis', subtitle: 'How plants make food' },
];
const sampleStudents: StudentData[] = [
    { id: 's1', avatarUrl: AVATAR_PLACEHOLDER, name: 'Student Alpha', courseName: 'Mathematics', levelGrade: '10th', group: 'Alpha' },
    { id: 's2', avatarUrl: AVATAR_PLACEHOLDER, name: 'Student Beta', courseName: 'Science', levelGrade: '10th', group: 'Alpha' },
    { id: 's3', avatarUrl: AVATAR_PLACEHOLDER, name: 'Student Gamma', courseName: 'English', levelGrade: '9th', group: 'Beta' },
];
const sampleStandardsData: DropdownOption[] = [ { value: '1std', label: '1st STD' }, {value: '2std', label: '2nd STD'} ];

// --- Helper Components (Defined within the file) ---

const FormField: React.FC<{ label: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void; type?: 'text' | 'textarea'; placeholder?: string;}> = ({ label, name, value, onChange, type = 'text', placeholder }) => (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
      {type === 'textarea' ? (
        <textarea id={name} name={name} rows={4} value={value} onChange={onChange} placeholder={placeholder || "Text"} className={`w-full px-3 py-2 ${INPUT_BG} ${INPUT_BORDER} border rounded-lg shadow-sm focus:ring-1 focus:ring-[${PRIMARY_BLUE}] focus:border-[${PRIMARY_BLUE}] outline-none text-sm resize-none`}/>
      ) : (
        <input type="text" id={name} name={name} value={value} onChange={onChange} placeholder={placeholder || "Text"} className={`w-full px-3 py-2 ${INPUT_BG} ${INPUT_BORDER} border rounded-lg shadow-sm focus:ring-1 focus:ring-[${PRIMARY_BLUE}] focus:border-[${PRIMARY_BLUE}] outline-none text-sm`}/>
      )}
    </div>
  );

const FormSelect: React.FC<{ label: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; options: DropdownOption[]; }> = ({ label, name, value, onChange, options }) => (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
      <div className="relative">
        <select id={name} name={name} value={value} onChange={onChange} className={`w-full px-3 py-2.5 ${INPUT_BG} ${INPUT_BORDER} border rounded-lg shadow-sm appearance-none focus:ring-1 focus:ring-[${PRIMARY_BLUE}] focus:border-[${PRIMARY_BLUE}] outline-none text-sm pr-8`}>
          {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
        </select>
        <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
      </div>
    </div>
  );

  const FormDateInput: React.FC<{ label: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; }> = ({ label, name, value, onChange }) => (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
      <div className="relative">
        <input type="text" id={name} name={name} value={value} onChange={onChange} placeholder="Select date" className={`w-full px-3 py-2 ${INPUT_BG} ${INPUT_BORDER} border rounded-lg shadow-sm focus:ring-1 focus:ring-[${PRIMARY_BLUE}] focus:border-[${PRIMARY_BLUE}] outline-none text-sm pr-10`}/>
        <FiCalendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
      </div>
    </div>
  );

const DurationPointInput: React.FC<{ label: string; value: string; onChange: (newValue: string) => void; isPoints?: boolean }> = ({ label, value, onChange, isPoints }) => {
    const handleIncDec = (increment: boolean) => {
        let numVal = parseInt(value) || 0;
        numVal = increment ? numVal + 1 : Math.max(0, numVal - 1);
        if (isPoints && numVal > 99) numVal = 99; // Max 99 for points
        else if (!isPoints && numVal > (label === "Hours" ? 23 : 59)) numVal = (label === "Hours" ? 23 : 59); // Max 23 for hours, 59 for minutes
        onChange(String(numVal).padStart(2, '0'));
    };
    return (
      <div className="text-center">
        <label className="block text-[10px] font-medium text-gray-500 mb-0.5">{label}</label>
        <div className={`relative inline-flex items-center justify-between px-2 py-1.5 ${INPUT_BG} ${INPUT_BORDER} border rounded-lg shadow-sm w-20 h-9`}>
          <input type="text" value={value} 
                 onChange={(e) => {
                    const raw = e.target.value.replace(/[^0-9]/g, '').slice(0,2);
                    onChange(raw.padStart(raw.length === 1 ? 2 : 0, '0'));
                 }}
                 onBlur={(e) => { // Ensure it's padded on blur if user types single digit
                    const raw = e.target.value.replace(/[^0-9]/g, '');
                    if (raw.length === 1) onChange(raw.padStart(2, '0'));
                    else if (raw.length === 0) onChange('00');
                 }}
                 className="w-full text-center bg-transparent outline-none text-sm font-medium text-gray-800 appearance-none [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" maxLength={2}/>
          <div className="absolute right-1.5 top-1/2 -translate-y-1/2 flex flex-col items-center h-full justify-center">
            <button type="button" onClick={() => handleIncDec(true)} className="text-gray-500 hover:text-gray-700 h-1/2 flex items-center text-[8px]">▲</button>
            <button type="button" onClick={() => handleIncDec(false)} className="text-gray-500 hover:text-gray-700 h-1/2 flex items-center text-[8px]">▼</button>
          </div>
        </div>
      </div>
    );
};

const UnitaryItemCard: React.FC<{ item: UnitaryItemData; isSelected: boolean; onSelect: () => void; }> = ({ item, isSelected, onSelect }) => (
    <button onClick={onSelect} className={`w-full text-left p-3 rounded-lg border transition-all duration-150 ${isSelected ? `bg-orange-100 border-orange-400 shadow-md` : `bg-white ${INPUT_BORDER} hover:bg-gray-50 hover:border-gray-400`}`}>
      <h4 className="text-sm font-semibold text-gray-800">{item.title}</h4>
      <p className="text-xs text-gray-500">{item.subtitle}</p>
    </button>
);

const StudentSelectItemCard: React.FC<{ student: StudentData; isSelected: boolean; onSelect: () => void; }> = ({ student, isSelected, onSelect }) => (
    <button onClick={onSelect} className={`w-full flex items-center p-3 rounded-lg border transition-all duration-150 gap-3 ${isSelected ? `bg-blue-50 border-[${PRIMARY_BLUE}] shadow-sm` : `bg-white ${INPUT_BORDER} hover:bg-gray-50 hover:border-gray-400`}`}>
      <img src={student.avatarUrl} alt={student.name} className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
      <div className="flex-grow text-left min-w-0">
        <h4 className="text-sm font-semibold text-gray-800 truncate">{student.name}</h4>
        <p className="text-[11px] text-gray-500 truncate">{student.courseName}</p>
        <p className="text-[11px] text-gray-500 truncate">{student.levelGrade} - {student.group}</p>
      </div>
      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${isSelected ? `border-[${PRIMARY_BLUE}] bg-[${PRIMARY_BLUE}]` : `${INPUT_BORDER}`}`}>{isSelected && <div className="w-2 h-2 bg-white rounded-full"></div>}</div>
    </button>
);

const Stepper: React.FC<{ steps: StepperStep[]; currentStep: number; setCurrentStep?: (step: number) => void; isClickable?: boolean }> = ({ steps, currentStep, setCurrentStep, isClickable = true }) => (
    <div className="flex items-center justify-center space-x-4 sm:space-x-8 mb-6 sm:mb-10">
      {steps.map((step) => (
        <button key={step.id} onClick={() => isClickable && setCurrentStep && setCurrentStep(step.id)} disabled={!isClickable}
          className={`flex items-center space-x-2 group focus:outline-none ${isClickable ? 'cursor-pointer' : 'cursor-default'}`}>
          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold border-2 ${currentStep >= step.id ? `bg-[${ACCENT_PINK}] text-white border-[${ACCENT_PINK}]` : 'bg-gray-200 text-gray-500 border-gray-300 group-hover:border-gray-400'}`}>
            {currentStep > step.id ? <FiCheckCircle className="w-3.5 h-3.5 text-white"/> : step.id}
          </span>
          <span className={`text-sm font-medium ${currentStep >= step.id ? `text-[${ACCENT_PINK}]` : 'text-gray-500 group-hover:text-gray-700'}`}>{step.name}</span>
        </button>
      ))}
    </div>
);

const QuestionPointsInput: React.FC<{ value: string; onChange: (value: string) => void }> = ({ value, onChange }) => (
    <div className="flex items-center space-x-1.5">
        <span className="text-xs text-gray-600 font-medium">Points</span>
        <DurationPointInput label="" value={value} onChange={onChange} isPoints={true} />
    </div>
);

const NumOptionsInput: React.FC<{ value: number; onChange: (value: number) => void }> = ({ value, onChange }) => {
    const handleIncDec = (increment: boolean) => {
        let newVal = increment ? value + 1 : value - 1;
        newVal = Math.max(2, Math.min(6, newVal)); // Clamp between 2 and 6
        onChange(newVal);
    };
    return (
      <div className="flex items-center">
        <input type="text" value={value} readOnly // Display only, controlled by buttons
               className={`w-10 px-2 py-1 ${INPUT_BG} ${INPUT_BORDER} border rounded-l-md text-sm text-center focus:ring-0 focus:border-[${INPUT_BORDER}] outline-none`} />
        <div className="flex flex-col border-t border-b border-r ${INPUT_BORDER} rounded-r-md">
            <button type="button" onClick={() => handleIncDec(true)} className={`px-1.5 h-4 flex items-center justify-center text-gray-600 hover:bg-gray-200 text-[10px] rounded-tr-md border-b ${INPUT_BORDER}`}>▲</button>
            <button type="button" onClick={() => handleIncDec(false)} className={`px-1.5 h-4 flex items-center justify-center text-gray-600 hover:bg-gray-200 text-[10px] rounded-br-md`}>▼</button>
        </div>
      </div>
    );
};

// --- CreateBWTestContent Component ---
const CreateBWTestContent: React.FC = () => {
  const stepperSteps: StepperStep[] = [
    { id: 1, name: 'Test Details' },
    { id: 2, name: 'Test Questionnaire' },
    { id: 3, name: 'Review' },
  ];
  const [currentStep, setCurrentStep] = useState(1);

  const [testDetails, setTestDetails] = useState<TestDetailsData>({
    testName: '', description: '', selectedClasses: sampleClassesData[0]?.value || '', selectedGroup: sampleGroupsData[0]?.value || '',
    testDate: '', expiryDate: '', durationHours: '00', durationMinutes: '00', totalPoints: '00', passPoints: '00',
    selectedUnitaryId: null, studentAssignType: 'all', selectedStudentIds: [],
  });

  const [questions, setQuestions] = useState<TestQuestion[]>([]);

  const [unitarySearch, setUnitarySearch] = useState('');
  const [studentSearch, setStudentSearch] = useState('');
  const [studentDateFilter, setStudentDateFilter] = useState('June 2025');
  const [studentStandardFilter, setStudentStandardFilter] = useState(sampleStandardsData[0]?.value || '');

  const handleTestDetailsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTestDetails(prev => ({ ...prev, [name]: value }));
  };
  const handleDurationPointDetailsChange = (name: keyof TestDetailsData, value: string) => {
    setTestDetails(prev => ({ ...prev, [name]: value }));
  };
  const toggleStudentSelection = (studentId: string) => {
    setTestDetails(prev => ({
      ...prev,
      selectedStudentIds: prev.selectedStudentIds.includes(studentId)
        ? prev.selectedStudentIds.filter(id => id !== studentId)
        : [...prev.selectedStudentIds, studentId]
    }));
  };

  const filteredUnitaryItems = useMemo(() => sampleUnitaryItems.filter(item => item.title.toLowerCase().includes(unitarySearch.toLowerCase())), [unitarySearch]);
  const filteredStudents = useMemo(() => sampleStudents.filter(student => student.name.toLowerCase().includes(studentSearch.toLowerCase())), [studentSearch]);

  const addNewQuestion = () => {
    setQuestions(prev => [
      ...prev, { id: uuidv4(), questionText: '', options: Array.from({ length: 4 }, () => ({id: uuidv4(), text: ''})), correctOptionId: null, points: '00', numOptions: 4 }
    ]);
  };

  const updateQuestionField = (questionId: string, field: keyof TestQuestion, value: any) => {
    setQuestions(prev => prev.map(q => q.id === questionId ? { ...q, [field]: value } : q));
  };

  const updateQuestionOptionText = (questionId: string, optionIndex: number, text: string) => {
    setQuestions(prev => prev.map(q => {
      if (q.id === questionId) {
        const newOptions = [...q.options];
        newOptions[optionIndex] = { ...newOptions[optionIndex], text };
        return { ...q, options: newOptions };
      }
      return q;
    }));
  };
  
  const updateNumOptionsForQuestion = (questionId: string, newNum: number) => {
    setQuestions(prev => prev.map(q => {
        if (q.id === questionId) {
            const currentOpts = q.options;
            let newOpts = [...currentOpts];
            if (newNum > currentOpts.length) {
                for (let i = currentOpts.length; i < newNum; i++) newOpts.push({ id: uuidv4(), text: '' });
            } else if (newNum < currentOpts.length) {
                newOpts = newOpts.slice(0, newNum);
            }
            // Check if correctOptionId is still valid
            const newCorrectOptionId = newOpts.find(opt => opt.id === q.correctOptionId) ? q.correctOptionId : null;
            return { ...q, numOptions: newNum, options: newOpts, correctOptionId: newCorrectOptionId };
        }
        return q;
    }));
  };

  const removeQuestion = (questionId: string) => {
    setQuestions(prev => prev.filter(q => q.id !== questionId));
  };

  useEffect(() => {
    const calculatedTotalPoints = questions.reduce((sum, q) => sum + (parseInt(q.points) || 0), 0);
    handleDurationPointDetailsChange('totalPoints', String(calculatedTotalPoints).padStart(2, '0'));
  }, [questions]);

  const handleNextStep = () => currentStep < stepperSteps.length && setCurrentStep(currentStep + 1);
  const handleCancel = () => alert('Operation Cancelled');
  const handleSave = () => alert('Test Saved!');
  const handlePreview = () => alert('Preview Test');
  const handleUploadFile = () => document.getElementById('fileUploadInputHidden')?.click(); // Trigger hidden file input
  const handlePublish = () => alert('Test Published!');

  const Step1TestDetailsContent: React.FC = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
      <div className="space-y-5">
        <FormField label="Test Name" name="testName" value={testDetails.testName} onChange={handleTestDetailsChange} />
        <FormField label="Description" name="description" value={testDetails.description} onChange={handleTestDetailsChange} type="textarea" />
        <FormSelect label="Select Classes" name="selectedClasses" value={testDetails.selectedClasses} onChange={handleTestDetailsChange} options={sampleClassesData} />
        <FormSelect label="Select Group" name="selectedGroup" value={testDetails.selectedGroup} onChange={handleTestDetailsChange} options={sampleGroupsData} />
        <FormDateInput label="Test Date" name="testDate" value={testDetails.testDate} onChange={handleTestDetailsChange} />
        <FormDateInput label="Expiry Date" name="expiryDate" value={testDetails.expiryDate} onChange={handleTestDetailsChange} />
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Duration & Point</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <DurationPointInput label="Hours" value={testDetails.durationHours} onChange={(val) => handleDurationPointDetailsChange('durationHours', val)} />
            <DurationPointInput label="Minutes" value={testDetails.durationMinutes} onChange={(val) => handleDurationPointDetailsChange('durationMinutes', val)} />
            <DurationPointInput label="Total Points" value={testDetails.totalPoints} onChange={(val) => handleDurationPointDetailsChange('totalPoints', val)} isPoints={true} />
            <DurationPointInput label="Pass Points" value={testDetails.passPoints} onChange={(val) => handleDurationPointDetailsChange('passPoints', val)} isPoints={true} />
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <div className={`p-4 rounded-lg border ${INPUT_BORDER} bg-slate-50 shadow-sm`}>
          <div className="relative mb-3">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input type="text" placeholder="Search Unitary, Chapter or Topics" value={unitarySearch} onChange={(e) => setUnitarySearch(e.target.value)} className={`w-full pl-9 pr-3 py-2 ${INPUT_BG} ${INPUT_BORDER} border rounded-lg shadow-sm focus:ring-1 focus:ring-[${PRIMARY_BLUE}] focus:border-[${PRIMARY_BLUE}] outline-none text-sm`} />
          </div>
          <div className={`space-y-2 max-h-40 overflow-y-auto pr-1 scrollbar-thin ${SCROLLBAR_THUMB_ORANGE} ${SCROLLBAR_TRACK_LIGHT}`}>
            {filteredUnitaryItems.map(item => <UnitaryItemCard key={item.id} item={item} isSelected={testDetails.selectedUnitaryId === item.id} onSelect={() => setTestDetails(p => ({...p, selectedUnitaryId: item.id}))} />)}
            {filteredUnitaryItems.length === 0 && <p className="text-xs text-gray-400 text-center py-2">No items match your search.</p>}
          </div>
        </div>
        <div className={`p-4 rounded-lg border ${INPUT_BORDER} bg-slate-50 shadow-sm`}>
          <div className="flex items-center space-x-4 mb-3">
            <label className="flex items-center space-x-1.5 cursor-pointer"><input type="radio" name="studentAssignType" value="all" checked={testDetails.studentAssignType === 'all'} onChange={() => setTestDetails(p=>({...p, studentAssignType: 'all'}))} className={`form-radio h-4 w-4 text-[${PRIMARY_BLUE}] focus:ring-[${PRIMARY_BLUE}] border-gray-400`}/><span className="text-sm text-gray-700">For all</span></label>
            <label className="flex items-center space-x-1.5 cursor-pointer"><input type="radio" name="studentAssignType" value="selective" checked={testDetails.studentAssignType === 'selective'} onChange={() => setTestDetails(p=>({...p, studentAssignType: 'selective'}))} className={`form-radio h-4 w-4 text-[${PRIMARY_BLUE}] focus:ring-[${PRIMARY_BLUE}] border-gray-400`}/><span className="text-sm text-gray-700">For selective Students</span></label>
          </div>
          {testDetails.studentAssignType === 'selective' && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3 items-center">
                <div className="relative sm:col-span-1"><FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" /><input type="text" placeholder="Search Student" value={studentSearch} onChange={e => setStudentSearch(e.target.value)} className={`w-full pl-9 pr-3 py-2 ${INPUT_BG} ${INPUT_BORDER} border rounded-lg shadow-sm text-sm focus:outline-none focus:ring-1 focus:ring-[${PRIMARY_BLUE}]`} /></div>
                <div className="relative sm:col-span-1"><FiClock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" /><input type="text" value={studentDateFilter} onChange={e => setStudentDateFilter(e.target.value)} className={`w-full pl-9 pr-8 py-2 ${INPUT_BG} ${INPUT_BORDER} border rounded-lg shadow-sm text-sm focus:outline-none focus:ring-1 focus:ring-[${PRIMARY_BLUE}]`} /><FiX onClick={() => setStudentDateFilter('')} className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer" /></div>
                <div className="relative sm:col-span-1"><select value={studentStandardFilter} onChange={e => setStudentStandardFilter(e.target.value)} className={`w-full px-3 py-2 ${INPUT_BG} ${INPUT_BORDER} border rounded-lg shadow-sm appearance-none text-sm pr-8 focus:outline-none focus:ring-1 focus:ring-[${PRIMARY_BLUE}]`}>{sampleStandardsData.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}</select><FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" /></div>
              </div>
              <div className={`space-y-2 max-h-48 overflow-y-auto pr-1 scrollbar-thin ${SCROLLBAR_THUMB_ORANGE} ${SCROLLBAR_TRACK_LIGHT}`}>
                {filteredStudents.map(student => <StudentSelectItemCard key={student.id} student={student} isSelected={testDetails.selectedStudentIds.includes(student.id)} onSelect={() => toggleStudentSelection(student.id)} />)}
                {filteredStudents.length === 0 && <p className="text-xs text-gray-400 text-center py-2">No students match your search.</p>}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );

  const Step2TestQuestionnaireContent: React.FC = () => (
    <div className="space-y-6">
      {questions.map((q, index) => (
        <div key={q.id} className={`p-4 sm:p-5 rounded-lg border ${INPUT_BORDER} bg-slate-50 shadow-sm relative`}>
          <div className="flex justify-between items-start mb-3">
            <label className="text-sm font-semibold text-gray-800">Question {index + 1}.</label>
            <button onClick={() => removeQuestion(q.id)} className="text-red-500 hover:text-red-700 p-1 -mt-1 -mr-1"><FiTrash2 className="w-4 h-4" /></button>
          </div>
          <textarea placeholder="Enter question text" value={q.questionText} onChange={(e) => updateQuestionField(q.id, 'questionText', e.target.value)} rows={2}
            className={`w-full px-3 py-2 mb-3 ${INPUT_BG} ${INPUT_BORDER} border rounded-lg shadow-sm focus:ring-1 focus:ring-[${PRIMARY_BLUE}] focus:border-[${PRIMARY_BLUE}] outline-none text-sm resize-none`}/>
          <div className="flex justify-between items-center mb-3">
            <label className="text-xs font-medium text-gray-700">Options</label>
            <NumOptionsInput value={q.numOptions} onChange={(val) => updateNumOptionsForQuestion(q.id, val)} />
          </div>
          <div className="space-y-2 mb-4">
            {q.options.slice(0, q.numOptions).map((opt, optIndex) => (
              <div key={opt.id} className="flex items-center">
                <label htmlFor={`q${q.id}_opt${opt.id}`} className="text-xs text-gray-600 mr-2 w-16 shrink-0">Option {optIndex + 1}:</label>
                <input type="text" id={`q${q.id}_opt${opt.id}`} placeholder={`Option ${optIndex + 1} text`} value={opt.text} onChange={(e) => updateQuestionOptionText(q.id, optIndex, e.target.value)}
                  className={`flex-grow px-3 py-2 ${INPUT_BG} ${INPUT_BORDER} border rounded-lg shadow-sm focus:ring-1 focus:ring-[${PRIMARY_BLUE}] focus:border-[${PRIMARY_BLUE}] outline-none text-sm`}/>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              {q.options.slice(0, q.numOptions).map((opt, optIndex) => (
                <label key={opt.id} className="flex items-center space-x-1.5 cursor-pointer">
                  <input type="radio" name={`correctOpt_${q.id}`} value={opt.id} checked={q.correctOptionId === opt.id} onChange={() => updateQuestionField(q.id, 'correctOptionId', opt.id)}
                    className={`form-radio h-4 w-4 text-[${PRIMARY_BLUE}] focus:ring-offset-0 focus:ring-[${PRIMARY_BLUE}] border-gray-400`}/>
                  <span className="text-xs text-gray-700">Option {optIndex + 1}</span>
                </label>
              ))}
            </div>
            <QuestionPointsInput value={q.points} onChange={(val) => updateQuestionField(q.id, 'points', val)} />
          </div>
        </div>
      ))}
      <button onClick={addNewQuestion} className={`w-full flex items-center justify-center gap-2 py-2.5 border-2 border-dashed border-[${PRIMARY_BLUE}] text-[${PRIMARY_BLUE}] hover:bg-blue-50 rounded-lg transition-colors text-sm font-medium`}>
        <FiPlus className="w-4 h-4" /> Add Question
      </button>
      <input type="file" id="fileUploadInputHidden" className="hidden" onChange={(e) => { if(e.target.files) alert(`File ${e.target.files[0].name} selected for upload.`);}} />
    </div>
  );
  
  const Step3TestReviewContent: React.FC = () => {
    const { testName, description, selectedClasses, selectedGroup, testDate, expiryDate, durationHours, durationMinutes, totalPoints, passPoints } = testDetails;
    return (
      <div className="space-y-6">
        <div className={`p-4 sm:p-6 rounded-lg border ${INPUT_BORDER} bg-slate-50 shadow-sm relative`}>
          <button onClick={() => setCurrentStep(1)} className="absolute top-3 right-3 text-xs text-gray-500 hover:text-[${PRIMARY_BLUE}] flex items-center gap-1 bg-white px-2 py-1 rounded-md border border-gray-300 hover:border-[${PRIMARY_BLUE}]">
            <FiEdit3 className="w-3 h-3" /> Edit
          </button>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{testName || "Test Title Not Set"}</h2>
          <p className="text-sm text-gray-600 mb-4 whitespace-pre-line">{description || "No description provided."}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-1.5 text-xs">
            <p><strong className="text-gray-500">Scheduled for:</strong> <span className={testDate ? `text-gray-700` : 'text-red-500'}>{testDate || 'N/A'}</span></p>
            <p><strong className="text-gray-500">Time:</strong> <span className="text-gray-700">{durationHours}h {durationMinutes}m</span></p>
            <p><strong className="text-gray-500">Batch:</strong> <span className="text-gray-700">{sampleClassesData.find(c=>c.value === selectedClasses)?.label || 'N/A'} - {sampleGroupsData.find(g=>g.value === selectedGroup)?.label || 'N/A'}</span></p>
            <p><strong className="text-gray-500">Total Point:</strong> <span className="text-gray-700">{totalPoints}</span></p>
            <p><strong className="text-gray-500">Passing:</strong> <span className="text-gray-700">{passPoints}</span></p>
            <p><strong className="text-gray-500">Expiry Date:</strong> <span className={expiryDate ? `text-gray-700` : 'text-red-500'}>{expiryDate || 'N/A'}</span></p>
          </div>
        </div>
        {questions.map((q, index) => (
          <div key={q.id} className={`p-4 sm:p-5 rounded-lg border ${INPUT_BORDER} bg-slate-50 shadow-sm relative`}>
            <button onClick={() => setCurrentStep(2)} className="absolute top-3 right-3 text-xs text-gray-500 hover:text-[${PRIMARY_BLUE}] flex items-center gap-1 bg-white px-2 py-1 rounded-md border border-gray-300 hover:border-[${PRIMARY_BLUE}]">
              <FiEdit3 className="w-3 h-3" /> Edit
            </button>
            <div className="flex justify-between items-start mb-2">
                <h4 className="text-md font-semibold text-gray-800">Question {index + 1}</h4>
                <span className="text-sm font-medium text-gray-700">{q.points} Points</span>
            </div>
            <p className="text-sm text-gray-700 mb-3">{q.questionText || <span className="italic text-red-500">Question text missing</span>}</p>
            <div className="space-y-1.5">
                {q.options.slice(0, q.numOptions).map(opt => (
                    <div key={opt.id} className={`flex items-center p-2 rounded-md text-xs border
                        ${q.correctOptionId === opt.id ? 'bg-green-50 border-green-300 text-green-700 font-medium' : `bg-white ${INPUT_BORDER} text-gray-600`}`}>
                        {q.correctOptionId === opt.id && <FiCheckCircle className="w-3.5 h-3.5 mr-1.5 text-green-600 flex-shrink-0"/>}
                        {opt.text || <span className="italic text-gray-400">Empty option</span>}
                    </div>
                ))}
            </div>
          </div>
        ))}
        {questions.length === 0 && <p className="text-center text-gray-500 py-8">No questions have been added to this test.</p>}
      </div>
    );
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1: return <Step1TestDetailsContent />;
      case 2: return <Step2TestQuestionnaireContent />;
      case 3: return <Step3TestReviewContent />;
      default: return <div>Invalid Step</div>;
    }
  };

  const renderActionButtons = () => {
    // ... (Same as previous implementation)
    switch (currentStep) {
        case 1:
          return (
            <>
              <button type="button" onClick={handleCancel} className="px-6 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg shadow-sm transition-colors">Cancel</button>
              <button type="button" onClick={handleNextStep} className={`px-8 py-2.5 text-sm font-medium text-white bg-[${PRIMARY_BLUE}] hover:opacity-90 rounded-lg shadow-sm transition-opacity`}>Continue</button>
            </>
          );
        case 2:
          return (
            <>
              <button type="button" onClick={handleCancel} className="px-6 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg shadow-sm transition-colors">Cancel</button>
              <button type="button" onClick={handleSave} className={`px-6 py-2.5 text-sm font-medium text-white bg-[${PRIMARY_BLUE}] hover:opacity-90 rounded-lg shadow-sm transition-opacity`}>Save</button>
              <button type="button" onClick={() => currentStep < stepperSteps.length && setCurrentStep(currentStep + 1)} className={`px-6 py-2.5 text-sm font-medium text-white bg-[${PRIMARY_BLUE}] hover:opacity-90 rounded-lg shadow-sm transition-opacity`}>Preview</button> {/* Preview now navigates to Review */}
              <button type="button" onClick={handleUploadFile} className={`${YELLOW_BUTTON_BG} ${YELLOW_BUTTON_TEXT} px-6 py-2.5 text-sm font-medium hover:opacity-90 rounded-lg shadow-sm transition-opacity`}>Upload File</button>
            </>
          );
        case 3:
          return (
            <>
              <button type="button" onClick={handleCancel} className="px-6 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg shadow-sm transition-colors">Cancel</button>
              <button type="button" onClick={handleSave} className={`px-6 py-2.5 text-sm font-medium text-white bg-[${PRIMARY_BLUE}] hover:opacity-90 rounded-lg shadow-sm transition-opacity`}>Save</button>
              <button type="button" onClick={handlePublish} className={`px-8 py-2.5 text-sm font-medium text-white bg-[${PRIMARY_BLUE}] hover:opacity-90 rounded-lg shadow-sm transition-opacity`}>Publish</button>
            </>
          );
        default: return null;
      }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8">
      <Stepper steps={stepperSteps} currentStep={currentStep} setCurrentStep={setCurrentStep} isClickable={true} />
      {renderStepContent()}
      <div className="mt-8 pt-6 border-t border-gray-200 flex justify-end space-x-3">
        {renderActionButtons()}
      </div>
    </div>
  );
};

// --- Main Page Export ---
export default function CreateBWTestPage() {
  const headerUser = { name: "Educator Name", role: "Teacher", avatarSrc: "/placeholder-avatar-teacher.jpg" };
  const handleBackClick = () => { if (typeof window !== "undefined") window.history.back(); };

  return (
    <div className="bg-[#eeeeee] min-h-screen flex flex-col">
      <Header user={headerUser} />
      <div className="bg-white px-4 sm:px-6 py-3 shadow-sm sticky top-0 z-40">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={handleBackClick} className="p-1.5 text-gray-700 hover:text-gray-900 focus:outline-none rounded-md" aria-label="Go back"><FiArrowLeft className="w-5 h-5" /></button>
            <h1 className="text-lg sm:text-xl font-semibold" style={{ color: ACCENT_PINK }}>Create BW Test</h1>
          </div>
          <div className="flex items-center space-x-2">
            <button onClick={() => alert('Choose From Existing Test clicked')} className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium border-2 border-[${PRIMARY_BLUE}] text-[${PRIMARY_BLUE}] bg-white hover:bg-blue-50 rounded-lg shadow-sm transition-colors`}><FiGrid className="w-3.5 h-3.5 sm:w-4 sm:h-4" />Choose From Existing Test</button>
            <button onClick={() => alert('AI Generated Test clicked')} className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white bg-[${PRIMARY_BLUE}] hover:opacity-90 rounded-lg shadow-sm transition-opacity`}><FiZap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />AI Generated Test</button>
          </div>
        </div>
      </div>
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        <CreateBWTestContent />
      </main>
      <Footer />
    </div>
  );
}