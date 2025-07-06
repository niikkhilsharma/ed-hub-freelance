"use client";
import Image from "next/image";
import { FiSettings } from "react-icons/fi";

const TeacherCard = () => {
  return (
    <div className="bg-white rounded-2xl max-w-[93rem] mx-auto shadow p-6 flex flex-col md:flex-row justify-between gap-6 border border-gray-200">
      {/* Left: Teacher Info */}
      <div className="flex flex-col  gap-6 items-start md:items-center">
        {/* Profile Image */}
        <div className="flex gap-1 "> 
        <div className="relative w-20 h-20">
          <Image
            src="/teacher-b2b/profile2.png" // Put your image in public folder
            alt="Teacher"
            width={72}
                            height={72}
            className="rounded-full object-cover"
          />
        </div>
 <div className="flex flex-col">
  <div className="flex f items-center gap-2">
            <h2 className="text-xl font-semibold">Teacher Name</h2>
            <FiSettings className="text-gray-500 cursor-pointer" />
          </div>

          <div className="flex gap-1 mt-2 flex-wrap">
            <span className="bg-[#ff3366] text-white text-xs px-2 py-1.5 rounded-l-3xl">Batch Assigned</span>
            <span className="bg-[#ff3366] text-white text-xs px-2  py-1.5 rounded-r-3xl">Part-time</span>
          </div>
 </div>
          </div>
        {/* Name + Tags + Contact */}
        <div>
         

          <div className="mt-4 ">
            <h3 className="font-semibold text-sm mb-2">Contact Details</h3>
            <div className="flex gap-2 flex-wrap">
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">+91 0000000000</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">example@gm.com</span>
            </div>
          </div>
        </div>
      </div>
 <div className="my-4">
  <div className="flex justify-between flex-wrap gap-4">
          <div className="text-sm">
            <p><strong>City:</strong> Mumbai</p>
            <p><strong>State:</strong> Maharashtra</p>
            <p><strong>Gender:</strong> Male</p>
            <p><strong>DOB:</strong> 15 Jun 2015</p>
          </div>
 </div>
      {/* Right: Info */}  
      <div className="flex-1 flex flex-col justify-between">
        

          <div className="text-right">
            <h3 className="font-semibold text-lg">Retention Rate</h3>
            <p className="text-sm mt-1">Total Student Taught: 120</p>
            <p className="text-sm">Returning Students: 101</p>
            <p className="text-sm">Avg. Rating: 4.6</p>
            <p className="text-5xl font-bold text-green-500 mt-2">84%</p>
            <p className="text-xs text-white bg-green-200 text-green-800 rounded-full px-2 py-1 inline-block mt-2">
              +6% from last month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
