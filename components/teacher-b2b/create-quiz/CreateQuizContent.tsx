"use client"; // Keep this if CreateBWTestPage is, for consistency or if it uses client hooks directly

import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  StepperStep, TestDetailsData, TestQuestion,
  sampleClassesData, sampleGroupsData, // Import sample data for defaults
  Stepper // Import Stepper from the main page file
} from "@/components/teacher-b2b/create-test/CreateBWTestPage"; // Assuming co-location for simplicity of imports

import TestDetailsStep from "@/components/teacher-b2b/create-quiz/QuizDetailsStep";
import TestQuestionnaireStep from "@/components/teacher-b2b/create-quiz/QuizQuestionnaireStep";
import TestReviewStep from "@/components/teacher-b2b/create-quiz/QuizReviewStep";

// Re-export or re-define constants if needed and not directly imported
import { PRIMARY_BLUE, YELLOW_BUTTON_BG } from "@/components/teacher-b2b/create-test/CreateBWTestPage";


const CreateBWTestContent: React.FC = () => {
  const stepperSteps: StepperStep[] = [
    { id: 1, name: 'Quiz Details' },
    { id: 2, name: 'Quiz Questionnaire' },
    { id: 3, name: 'Review' },
  ];
  const [currentStep, setCurrentStep] = useState(1);

  const [testDetails, setTestDetails] = useState<TestDetailsData>({
    testName: '', description: '', selectedClasses: sampleClassesData[0]?.value || '', selectedGroup: sampleGroupsData[0]?.value || '',
    testDate: '', expiryDate: '', durationHours: '00', durationMinutes: '00', totalPoints: '00', passPoints: '00',
    selectedUnitaryId: null, studentAssignType: 'selective', selectedStudentIds: [],
  });

  const [questions, setQuestions] = useState<TestQuestion[]>([]);

  // Local state for search terms, as they don't need to be part of TestDetailsData prop for step 1
  const [unitarySearch, setUnitarySearch] = useState('');
  const [studentSearch, setStudentSearch] = useState('');
  const [studentDateFilter, setStudentDateFilter] = useState('June 2025'); // Default or could be empty
  const [studentStandardFilter, setStudentStandardFilter] = useState(''); // Default or could be empty

  const handleTestDetailsChange = <K extends keyof TestDetailsData>(
  name: K,
  value: TestDetailsData[K]
) => {
  setTestDetails((prev: TestDetailsData) => ({ ...prev, [name]: value }));
};


  const addNewQuestion = () => {
    setQuestions(prev => [
      ...prev, { id: uuidv4(), questionText: '', options: Array.from({ length: 4 }, () => ({id: uuidv4(), text: ''})), correctOptionId: null, points: '00', numOptions: 4 }
    ]);
  };

  const updateQuestionField = <K extends keyof TestQuestion>(
  questionId: string,
  field: K,
  value: TestQuestion[K]
) => {
  setQuestions(prev =>
    prev.map(q =>
      q.id === questionId ? { ...q, [field]: value } : q
    )
  );
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
    handleTestDetailsChange('totalPoints', String(calculatedTotalPoints).padStart(2, '0'));
  }, [questions]);

  const handleNextOrSubmit = () => {
    if (currentStep < stepperSteps.length) {
        setCurrentStep(currentStep + 1);
    } else {
        // Final submission logic
        alert('Test Published!');
        console.log("Final Test Details:", testDetails);
        console.log("Final Questions:", questions);
    }
  };

  const handleCancel = () => alert('Operation Cancelled');
  const handleSave = () => {
    alert('Test Saved!');
    console.log("Saved Test Details:", testDetails);
    console.log("Saved Questions:", questions);
  };
  const handleUploadFile = () => {
    const fileInput = document.getElementById('fileUploadInputHidden_questionnaire'); // ID matches questionnaire step
    if (fileInput) {
        (fileInput as HTMLInputElement).click();
    } else {
        alert("File input not found for questionnaire.");
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1: 
        return <TestDetailsStep 
                    testDetails={testDetails} 
                    onDetailsChange={handleTestDetailsChange}
                    unitarySearch={unitarySearch}
                    onUnitarySearchChange={setUnitarySearch}
                    studentSearch={studentSearch}
                    onStudentSearchChange={setStudentSearch}
                    studentDateFilter={studentDateFilter}
                    onStudentDateFilterChange={setStudentDateFilter}
                    studentStandardFilter={studentStandardFilter}
                    onStudentStandardFilterChange={setStudentStandardFilter}
                />;
      case 2: 
        return <TestQuestionnaireStep 
                    questions={questions}
                    onAddNewQuestion={addNewQuestion}
                    onUpdateQuestionField={updateQuestionField}
                    onUpdateQuestionOptionText={updateQuestionOptionText}
                    onUpdateNumOptionsForQuestion={updateNumOptionsForQuestion}
                    onRemoveQuestion={removeQuestion}
                    // onUploadFile={handleUploadFile} // Pass if needed, or handled internally
                />;
      case 3: 
        return <TestReviewStep 
                    testDetails={testDetails}
                    questions={questions}
                    onEditStep={setCurrentStep}
                />;
      default: return <div>Invalid Step</div>;
    }
  };

  const renderActionButtons = () => {
    switch (currentStep) {
        case 1:
          return (
            <>
              <button type="button" onClick={handleCancel} className="px-6 py-3 text-md font-medium text-gray-700 border border-[#E5E7EB] hover:bg-gray-200 rounded-full transition-colors">Cancel</button>
              <button type="button" onClick={handleNextOrSubmit} className={`px-5 py-2.5 text-sm font-medium text-white bg-[${PRIMARY_BLUE}] hover:opacity-90 rounded-full transition-opacity`}>Continue</button>
            </>
          );
        case 2:
          return (
            <>
              <button type="button" onClick={handleCancel} className="px-6 py-3 text-md font-medium text-gray-700 border border-[#E5E7EB] hover:bg-gray-200 rounded-full transition-colors">Cancel</button>
              <button type="button" onClick={handleSave} className={`px-6 py-3 text-md font-medium text-white bg-[${PRIMARY_BLUE}] hover:opacity-90 rounded-full transition-opacity`}>Save</button>
              <button type="button" onClick={() => currentStep < stepperSteps.length && setCurrentStep(currentStep + 1)} className={`px-6 py-3 text-md font-medium text-white bg-[${PRIMARY_BLUE}] hover:opacity-90 rounded-full transition-opacity`}>Preview</button>
              <button type="button" onClick={handleUploadFile} className={`${YELLOW_BUTTON_BG} text-white px-6 py-3 text-md font-medium hover:opacity-90 rounded-full transition-opacity`}>Upload File</button>
            </>
          );
        case 3:
          return (
            <>
              <button type="button" onClick={handleCancel} className="px-6 py-3 text-md font-medium text-gray-700 border border-[#E5E7EB] hover:bg-gray-200 rounded-full transition-colors">Cancel</button>
              <button type="button" onClick={handleSave} className={`px-6 py-3 text-md font-medium text-white bg-[${PRIMARY_BLUE}] hover:opacity-90 rounded-full transition-opacity`}>Save</button>
              <button type="button" onClick={handleNextOrSubmit} className={`px-8 py-2.5 text-sm font-medium text-white bg-[${PRIMARY_BLUE}] hover:opacity-90 rounded-full transition-opacity`}>Publish</button>
            </>
          );
        default: return null;
      }
  };

  return (
    <div className="bg-white rounded-2xl px-4 sm:px-20 py-4 ">
      <Stepper steps={stepperSteps} currentStep={currentStep} setCurrentStep={setCurrentStep} isClickable={true} />
      {renderStepContent()}
      <div className="mt-8 flex justify-center flex-wrap gap-3"> {/* Added flex-wrap and gap */}
        {renderActionButtons()}
      </div>
    </div>
  );
};

export default CreateBWTestContent;