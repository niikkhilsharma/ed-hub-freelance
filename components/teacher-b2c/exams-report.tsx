import React from "react";

// Main App component
export default function ExamReport() {
  // Sample data for exam results
  const examResults = [
    {
      subject: "English",
      exams: [
        {
          name: "Exam 1",
          totalMarks: "Exam 1 marks",
          marksObtain: "Exam 1 marks",
          grade: "Grade 1",
        },
        {
          name: "Exam 2",
          totalMarks: "Exam 2 marks",
          marksObtain: "Exam 2 marks",
          grade: "Grade 2",
        },
      ],
      overallGrade: "Overall Grade",
    },
    {
      subject: "Hindi",
      exams: [
        {
          name: "Exam 1",
          totalMarks: "Exam 1 marks",
          marksObtain: "Exam 1 marks",
          grade: "Grade 1",
        },
        {
          name: "Exam 2",
          totalMarks: "Exam 2 marks",
          marksObtain: "Exam 2 marks",
          grade: "Grade 2",
        },
      ],
      overallGrade: "Overall Grade",
    },
    {
      subject: "Maths",
      exams: [
        {
          name: "Exam 1",
          totalMarks: "Exam 1 marks",
          marksObtain: "Exam 1 marks",
          grade: "Grade 1",
        },
        {
          name: "Exam 2",
          totalMarks: "Exam 2 marks",
          marksObtain: "Exam 2 marks",
          grade: "Grade 2",
        },
      ],
      overallGrade: "Overall Grade",
    },
    {
      subject: "Evs",
      exams: [
        {
          name: "Exam 1",
          totalMarks: "Exam 1 marks",
          marksObtain: "Exam 1 marks",
          grade: "Grade 1",
        },
        {
          name: "Exam 2",
          totalMarks: "Exam 2 marks",
          marksObtain: "Exam 2 marks",
          grade: "Grade 2",
        },
      ],
      overallGrade: "Overall Grade",
    },
  ];

  // Data for marks to grade mapping
  const gradeMapping = [
    { marks: "35 - 40", grade: "A+" },
    { marks: "30 - 35", grade: "A" },
    { marks: "25 - 30", grade: "B+" },
    { marks: "20 - 25", grade: "B" },
    { marks: "15 - 20", grade: "D" },
  ];

  return (
    // Main container with responsive padding and background
    <div className="">
      <div className="flex-grow container mx-auto p-4 space-y-6 bg-white rounded-2xl ">
        {/* Exams Header */}
        <div className="text-2xl sm:text-3xl font-bold p-4 rounded-2xl bg-[#b0b0b0]/5 text-[#3366ff] mb-6 sm:mb-8 pb-2 ">
          Exams
        </div>

        {/* Exam Results Table */}
        <div className="overflow-x-auto mb-8">
          <div className="min-w-full ">
            {/* Table Header */}
             <div className="grid grid-cols-1 sm:grid-cols-6 gap-4 mb-8">
        {/* Column Headers */}
        <div className="bg-[#FF99B7] text-black font-bold p-3 text-center rounded-2xl shadow-sm">
          Subjects
        </div>
        <div className="bg-[#FF99B7] text-black font-bold p-3 text-center rounded-2xl shadow-sm">
          Exams
        </div>
        <div className="bg-[#FF99B7] text-black font-bold p-3 text-center rounded-2xl shadow-sm">
          Total Marks
        </div>
        <div className="bg-[#FF99B7] text-black font-bold p-3 text-center rounded-2xl shadow-sm">
          Marks Obtain
        </div>
         <div className="bg-[#FF99B7] text-black font-bold p-3 text-center rounded-2xl shadow-sm">
          Grade
        </div>
         <div className="bg-[#FF99B7] text-black font-bold p-3 text-center rounded-2xl shadow-sm">
          Overall Grade
        </div>
        </div>
            {/* Table Body */}
            <div className="bg-white divide-y divide-gray-200">
              {examResults.map((subjectData, subjectIndex) => (
                <React.Fragment key={subjectIndex}>
                  {subjectData.exams.map((exam, examIndex) => (
                    <tr
                      key={`${subjectIndex}-${examIndex}`}
                      className="even:bg-gray-50 hover:bg-gray-100"
                    >
                      {/* Subject Name - only shows for the first exam of the subject */}
                      {examIndex === 0 && (
                        <td
                          rowSpan={subjectData.exams.length}
                          className="rounded-xl p-8 text-center  bg-[#f9f5fb] text-md font-medium text-black"
                        >
                          {subjectData.subject}
                        </td>
                      )}
                      <td className="px-4 py-4 sm:px-6 whitespace-nowrap text-sm text-gray-700">
                        {exam.name}
                      </td>
                      <td className="px-4 py-4 sm:px-6 whitespace-nowrap text-sm text-gray-700">
                        <div className="bg-gray-100 px-3 py-1 rounded-md text-center text-gray-600">
                          {exam.totalMarks}
                        </div>
                      </td>
                      <td className="px-4 py-4 sm:px-6 whitespace-nowrap text-sm text-gray-700">
                        <div className="bg-gray-100 px-3 py-1 rounded-md text-center text-gray-600">
                          {exam.marksObtain}
                        </div>
                      </td>
                      <td className="px-4 py-4 sm:px-6 whitespace-nowrap text-sm text-gray-700">
                        <div className="bg-gray-100 px-3 py-1 rounded-md text-center text-gray-600">
                          {exam.grade}
                        </div>
                      </td>
                      {/* Overall Grade - only shows for the first exam of the subject */}
                      {examIndex === 0 && (
                        <td
                          rowSpan={subjectData.exams.length}
                          className="px-4 py-4 sm:px-6 whitespace-nowrap text-sm font-medium text-gray-900 border-l border-gray-200"
                        >
                          <div className="bg-gray-100 px-3 py-1 rounded-md text-center text-gray-600">
                            {subjectData.overallGrade}
                          </div>
                        </td>
                      )}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

       {/* Marks */}
        <div className="overflow-x-auto mb-8">
          <div className="min-w-full divide-y divide-gray-200">
            {/* Table Header */}
            <div>
              <div className=" flex gap-4">
                <div className="px-4 py-3 sm:px-6  w-1/2 text-center text-md font-medium bg-[#8dd9b3]  uppercase tracking-wider rounded-2xl">
                  Marks
                </div>
                <div className="px-4 py-3 sm:px-6 w-1/2 text-center text-md font-medium bg-[#8dd9b3] uppercase tracking-wider rounded-2xl">
                  Grade
                </div>
              </div>
            </div>
            {/* Table Body */}
            <div>
              {gradeMapping.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4  rounded-xl p-3"
                >
                  <div className="w-1/2  px-4 py-3 text-center rounded-2xl bg-[#faf9fb] font-semibold text-black">
                    {item.marks}
                  </div>
                  <div className="w-1/2  px-4 py-3 text-center rounded-2xl bg-[#faf9fb] font-medium text-black">
                    {item.grade}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Publish Report Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-[#3366ff] hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Publish Report
          </button>
        </div>
      </div>
    </div>
  );
}
