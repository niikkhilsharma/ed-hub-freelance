"use client";
import { useState } from 'react';
import TabSwitch from '../common-components/TabSwitch';
import { IoCloudUploadOutline } from "react-icons/io5";
import { FiChevronDown } from 'react-icons/fi';
import { FaRegCircle,  FaCheckCircle } from "react-icons/fa";

interface CustomSelectProps {
  label: string;
  options: string[];
}

const CustomSelect = ({ label, options }: CustomSelectProps) => {
  return (
    <div>
      <label className="block font-medium mb-1">{label}</label>
      <div className="relative">
        <select
          className="w-full appearance-none text-gray-500  font-normal rounded-full border border-gray-300 bg-gray-50 p-2 pr-10"
        >
          {options.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
        <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
      </div>
    </div>
  );
};


const TeachMoreCourse = () => {
  return (
    <>
      <form className="flex flex-col text-sm">
        <div className="flex flex-col">
          <h1 className="text-blue-600 py-3.5 text-lg lg:text-xl px-2 bg-gray-100 font-semibold rounded-xl">Your Contact Information</h1>
          <div className="max-w-md flex flex-col gap-1 pt-2 pb-4">
            <label className='font-medium text-md' htmlFor="fullName">Full Name</label>
            <input id="fullName" type="text" className='rounded-full px-4 py-2 bg-gray-50 border' placeholder='Text' />
          </div>
          <div className="max-w-md flex flex-col gap-1 pb-4">
            <label className='font-medium text-md' htmlFor="email">Email</label>
            <input id="email" type="email" className='rounded-full px-4 py-2 bg-gray-50 border' placeholder='Text' />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-blue-600 py-3.5 text-lg lg:text-xl px-2 bg-gray-100 font-semibold rounded-xl">Current Teaching Engagements</h1>
          <div className="max-w-md border mb-2 rounded-xl">
            <ul className="p-4 gap-2 flex flex-col">
              <li className="font-medium pb-1.5">Course (s) Currently Taught</li>
              <li className="">Mathematics Foundation Course</li>
              <li className="">Spoken English & Vocabulary</li>
            </ul>
          </div>
          <div className="max-w-md flex flex-col gap-1 pb-4">
            <label className='font-medium text-md' htmlFor="weeklyHours">Weekly Work Hours</label>
            <input id="weeklyHours" type="text" className='rounded-full px-4 py-2 bg-gray-50 border' placeholder='Text' />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-blue-600 py-3.5 text-lg lg:text-xl px-2 bg-gray-100 font-semibold rounded-xl">
            Desired New Teaching Opportunities
          </h1>

          <div className="max-w-md w-full space-y-4 py-3.5">
            {/* Preferred New Course */}
            <CustomSelect label="Preferred New Course" options={["Option 1"]} />

            {/* Ideal Teaching Hours */}
            <CustomSelect label="Ideal Teaching Hours" options={["80 Hours"]} />

            {/* Preferred Teaching Day */}
            <CustomSelect label="Preferred Teaching Day" options={["Tuesday"]} />

            {/* Grade Levels or Student Groups */}
            <CustomSelect
              label="Grade Levels or Student Groups of Interest"
              options={["Grade 1 - 3"]}
            />

            {/* Upload Document */}
            <div>
              <label className="block font-medium mb-1">
                Qualifications & Certifications for New Subject(s)
              </label>
              <span className="block text-sm text-gray-500 mb-1 ml-2">
                Upload Document
              </span>
              <div className="flex items-center gap-2 rounded-full ml-2 border border-gray-300 bg-gray-50 p-2 text-gray-400">
                <div className="p-1 bg-pink-100 rounded-full">
                  <IoCloudUploadOutline className="text-[#FF3366]" size={20} />
                </div>
                <span className="truncate">Document Name</span>
              </div>
            </div>

            {/* Motivation Textarea */}
            <div>
              <label className="block font-medium mb-1">
                Motivation & Experience for This New Teaching Area
              </label>
              <textarea
                rows={4}
                className="w-full rounded-xl border border-gray-300 bg-gray-50 p-3 resize-none"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-blue-600 py-3.5 text-lg lg:text-xl px-2 bg-gray-100 font-semibold rounded-xl">Compensation Preferances</h1>

          <div className="max-w-md flex flex-col gap-1 pt-2 pb-4">
            <label className='font-medium text-md' htmlFor="teachingExperience">Your Total Teaching Experience (in years)</label>
            <input id="teachingExperience" type="text" className='rounded-full px-4 py-2 bg-gray-50 border' placeholder='6 years' />
          </div>
          <div className="max-w-md flex flex-col gap-1 pb-4">
            <label className='font-medium text-md' htmlFor="timeServed">Time Served at Edunique (in months)</label>
            <input id="timeServed" type="text" className='rounded-full px-4 py-2 bg-gray-50 border' placeholder='18 Months' />
          </div>
          <div className="max-w-md flex flex-col gap-1 pb-4">
            <label className='font-medium text-md' htmlFor="hourlyRate">Current Hourly Rate (₹)</label>
            <input id="hourlyRate" type="number" className='rounded-full px-4 py-2 bg-gray-50 border' placeholder='20000' />
          </div>
          <div className="max-w-md flex flex-col gap-1 pb-4">
            <label className='font-medium text-md' htmlFor="newHourlyRate">Expected New Hourly Rate (₹)</label>
            <input id="newHourlyRate" type="number" className='rounded-full px-4 py-2 bg-gray-50 border' placeholder='40000' />
          </div>

        </div>
        <div className="max-w-md">
          <button
            type="submit"
            className="w-full rounded-full bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  )
}

const DropCourse = () => {
  const [selectedCourse, setSelectedCourse] = useState("Science");
  const [agree, setAgree] = useState(true);

  const courses = [
    "Mathematics Foundation Course",
    "Spoken English & Vocabulary",
    "Science",
  ];

  return (
    <form>
      {/* Heading */}
      <div className="flex flex-col">
        <h1 className="text-blue-600 py-3.5 text-lg lg:text-xl px-2 bg-gray-100 font-semibold rounded-xl">Your Contact Information</h1>
        <div className="max-w-md flex flex-col gap-1 pt-2 pb-4">
          <label className='font-medium text-md' htmlFor="fullName">Full Name</label>
          <input id="fullName" type="text" className='rounded-full px-4 py-2 bg-gray-50 border' placeholder='Text' />
        </div>
        <div className="max-w-md flex flex-col gap-1 pb-4">
          <label className='font-medium text-md' htmlFor="email">Email</label>
          <input id="email" type="email" className='rounded-full px-4 py-2 bg-gray-50 border' placeholder='Text' />
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-blue-600 py-3.5 text-lg lg:text-xl px-2 bg-gray-100 font-semibold rounded-xl">
          Course(s) You Wish to Discontinue
        </h1>
        <p className="text-[#ff3366] text-xs pt-2 pb-4">
          Please select the course(s) you no longer wish to continue teaching.
        </p>
        <div className="max-w-md w-full text-sm space-y-4">
          {/* Subtext */}


          {/* Custom Radio Group */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 space-y-3">
            {courses.map((course) => (
              <div
                key={course}
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => setSelectedCourse(course)}
              >
                {selectedCourse === course ? (
                  <FaCheckCircle className="text-blue-600" size={20} />
                ) : (
                  <FaRegCircle className="text-gray-700" size={20} />
                )}
                <span className="text-zinc-800 font-medium text-md md:text-lg">{course}</span>
              </div>
            ))}
          </div>

          {/* Date Picker */}
          <div>
            <label className="block font-medium mb-1">Effective From</label>
            <input
              type="date"
              className="w-full rounded-full border bg-gray-50 border-gray-300 px-4 py-2 text-gray-500"
            />
          </div>

          {/* Reason Textarea */}
          <div>
            <label className="block font-medium mb-1">Reason For Dropping A Subject</label>
            <textarea
              rows={4}
              className="w-full rounded-xl border border-gray-300 bg-gray-50 p-3 resize-none"
            />
          </div>
        </div>
        {/* Custom Checkbox */}
        <div
          className="flex items-center max-w-2xl gap-3 py-3 cursor-pointer"
          onClick={() => setAgree(!agree)}
        >
          <div className="">
            {agree ? (
              <FaCheckCircle className="text-blue-600" size={30} />
            ) : (
              <FaRegCircle className="text-gray-400" size={30} />
            )}
          </div>
          <span className="text-[13px] font-medium">
            I confirm that I no longer wish to teach the above-mentioned subject(s) and
            understand this request will be reviewed by the admin.
          </span>
        </div>

        {/* Submit Button */}
        <div className="max-w-md">
          <button
            type="submit"
            className="w-full rounded-full bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 transition duration-200"
          >
            Submit
          </button>
        </div>
      </div>

    </ form>
  );
};



const ManageCourse = () => {
  const tabs = ['Teach More Course', 'Drop Course'];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="p-4 bg-gray-100">
      <div className="mx-auto max-w-7xl bg-gray-100">
        <TabSwitch tabs={tabs} selected={selectedTab} onChange={setSelectedTab} />

        {/* Content Switcher */}
        <div className=" bg-white p-3 rounded-2xl">
          {selectedTab === 'Teach More Course' && (
            <TeachMoreCourse />
          )}
          {selectedTab === 'Drop Course' && (
            <DropCourse />
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageCourse;
