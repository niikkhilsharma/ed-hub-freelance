
import { FiChevronDown } from "react-icons/fi";
import { IoCloudUploadOutline } from "react-icons/io5"


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
          className="w-full appearance-none text-gray-500  font-normal rounded-xl border border-gray-300 bg-[#f9fafb] p-2 pr-10"
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


const TeachMoreCourseComponent = () => {
  return (
    <>
      <form className="flex flex-col text-sm">
        <div className="flex flex-col">
          <h1 className="text-blue-600 py-3.5 text-lg lg:text-xl px-2 bg-[#B0B0B014] font-semibold rounded-xl"> Contact Information</h1>
          <div className="max-w-md flex flex-col gap-1 pt-4 pb-4">
            <label className='font-medium text-base' htmlFor="fullName">Full Name</label>
            <input id="fullName" type="text" className='rounded-xl px-4 py-2 bg-[#f9fafb] border' placeholder='Text' />
          </div>
          <div className="max-w-md flex flex-col gap-1 pb-4">
            <label className='font-medium text-base' htmlFor="email">Email</label>
            <input id="email" type="email" className='rounded-xl px-4 py-2 bg-[#f9fafb] border' placeholder='Text' />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-blue-600 py-3.5 text-lg lg:text-xl px-2 bg-[#B0B0B014] font-semibold rounded-xl">Current Teaching Engagements</h1>
          <div className="max-w-md border mb-2 rounded-xl">
            <ul className="p-4 gap-2 flex flex-col">
              <li className="font-medium pb-1.5">Course (s) Currently Taught</li>
              <li className="">Mathematics Foundation Course</li>
              <li className="">Spoken English & Vocabulary</li>
            </ul>
          </div>
          <div className="max-w-md flex flex-col gap-1 pb-4">
            <label className='font-medium text-base' htmlFor="weeklyHours">Weekly Work Hours</label>
            <input id="weeklyHours" type="text" className='rounded-xl px-4 py-2 bg-[#f9fafb] border' placeholder='Text' />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-blue-600 py-3.5 text-lg lg:text-xl px-2 bg-[#B0B0B014] font-semibold rounded-xl">
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
             
              <div className="flex items-center gap-2 rounded-2xl mb-2 border border-gray-300 bg-[#f9fafb] p-2 text-gray-400">
                <div className="p-1 bg-pink-100 rounded-xl">
                  <IoCloudUploadOutline className="text-[#FF3366]" size={20} />
                </div>
                <span className="truncate">Document Name</span>
              </div>
              <div className="flex items-center gap-2 rounded-2xl  border border-gray-300 bg-[#f9fafb] p-2 text-gray-400">
                <div className="p-1 bg-pink-100 rounded-xl">
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
                className="w-full rounded-xl border border-gray-300 bg-[#f9fafb] p-3 resize-none"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-blue-600 py-3.5 text-lg lg:text-xl px-2 bg-[#B0B0B014] font-semibold rounded-xl">Compensation Preferances</h1>

          <div className="max-w-md flex flex-col gap-1 pt-2 pb-4">
            <label className='font-medium text-base' htmlFor="teachingExperience">Your Total Teaching Experience (in years)</label>
            <input id="teachingExperience" type="text" className='rounded-xl px-4 py-2 bg-[#f9fafb] border' placeholder='6 years' />
          </div>
          <div className="max-w-md flex flex-col gap-1 pb-4">
            <label className='font-medium text-base' htmlFor="timeServed">Time Served at Edunique (in months)</label>
            <input id="timeServed" type="text" className='rounded-xl px-4 py-2 bg-[#f9fafb] border' placeholder='18 Months' />
          </div>
          <div className="max-w-md flex flex-col gap-1 pb-4">
            <label className='font-medium text-base' htmlFor="hourlyRate">Current Hourly Rate (₹)</label>
            <input id="hourlyRate" type="number" className='rounded-xl px-4 py-2 bg-[#f9fafb] border' placeholder='20000' />
          </div>
          <div className="max-w-md flex flex-col gap-1 pb-4">
            <label className='font-medium text-base' htmlFor="newHourlyRate">Expected New Hourly Rate (₹)</label>
            <input id="newHourlyRate" type="number" className='rounded-xl px-4 py-2 bg-[#f9fafb] border' placeholder='40000' />
          </div>
          <div className="max-w-md">
              <label className="block font-medium mb-1">
                Reason for requesting a raise?
              </label>
              <textarea
                rows={2}
                className="w-full rounded-xl border border-gray-300 bg-[#f9fafb] p-3 resize-none"
              />
            </div>

        </div>
        <div className="font-medium flex-wrap flex justify-center gap-2 mt-6 md:mt-8">
          <button
            type="submit"
            className=" rounded-full bg-pink-50 text-sm md:text-base text-[#ff3366] cursor-pointer py-2.5 px-6 transition duration-200"
          >
            Reject Request
          </button>
          <button
            type="submit"
            className=" rounded-full text-sm md:text-base bg-blue-600 cursor-pointer text-white py-2.5 px-4 transition duration-200"
          >
            Approve Request
          </button>
        </div>
      </form>


    </>
  )
}

export default TeachMoreCourseComponent;