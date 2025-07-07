"use client";
import Image from "next/image";
import { FiSettings } from "react-icons/fi";

const TeacherCard = () => {
  return (
    <div
      className=" rounded-2xl w-full max-w-[90rem] mx-auto my-4 p-2 justify-between gap-2 flex flex-col  sm:flex-row"
      style={{
        backgroundImage: "url('/admin/bg-pattern.png')",
        backgroundSize: "cover",
      }}
    >
      {/* Left: Teacher Info */}
      <div className="bg-white w-[55%] relative gap-6 flex flex-col justify-between sm:flex-row p-6 rounded-3xl ">
        <div className="flex flex-col  gap-6 items-start md:items-center">
          {/* Profile Image */}
          <div className="flex gap-3 ">
            <div className="">
              <Image
                src="/teacher-b2b/profile2.png" // Put your image in public folder
                alt="Teacher"
                width={72}
                height={72}
                className="rounded-full  w-24 h-24 object-cover"
              />
            </div>
            <div className="flex flex-col">
              
                <h2 className="text-xl sm:text-2xl font-semibold">
                  Teacher Name
                </h2>
              

              <div className="flex gap-1 mt-2 flex-wrap">
                <span className="bg-[#ff3366] text-white text-xs sm:text-md px-2 py-2 rounded-l-3xl">
                  Batch Assigned
                </span>
                <span className="bg-[#ff3366] text-white text-xs sm:text-md  px-2  py-2 rounded-r-3xl">
                  Part-time
                </span>
              </div>
            </div>
          </div>
          {/* Name + Tags + Contact */}
          <div>
            <div className="mt-4 ">
              <h3 className="font-semibold  ml-1 text-sm sm:text-lg md:text-xl mb-4">
                Contact Details
              </h3>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-[#f3f4f6] border border-[#b0b0b0] px-3 py-4 rounded-full text-sm sm:text-md">
                  +91 0000000000
                </span>
                <span className="bg-[#f3f4f6] border border-[#b0b0b0] px-3 py-4 rounded-full text-sm sm:text-md ">
                  example@gm.com
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="m-10">
          <div className="flex justify-between  gap-4">
            <div className="text-sm sm:text-lg">
              <p>
                <strong>City:</strong> Mumbai
              </p>
              <p>
                <strong>State:</strong> Maharashtra
              </p>
              <p>
                <strong>Gender:</strong> Male
              </p>
              <p>
                <strong>DOB:</strong> 15 Jun 2015
              </p>
            </div>
          </div>
        </div>
          <div className="bg-[#faf9fb] border border-[#e5e7eb] absolute left-[22rem] rounded-full p-1"><FiSettings className="text-black  top-1 w-5 h-5  cursor-pointer" /></div>
        {/* Right: Info */}
      </div>
      {/* right */}
      <div className="bg-white w-[45%] rounded-3xl p-6">
        <div className="flex ">
          <div className="flex-1 flex flex-col ">
            <div className="text-left text-black space-y-3">
              <h3 className="font-semibold text-lg mb-4 sm:text-2xl">
                Retention Rate
              </h3>
              <p className="text-sm sm:text-md mt-1">
                Total Student Taught: 120
              </p>
              <p className="text-sm sm:text-md">Returning Students: 101</p>
              <p className="text-sm sm:text-md">Avg. Rating: 4.6</p>

              <p className="text-xs  sm:text-sm text-[#238300] bg-[#8dd9b3]/50 rounded-full px-2 py-1 inline-block mt-2">
                +6% from last month
              </p>
            </div>
          </div>
          <div className="p-10 sm:p-14">
            {" "}
            <p className="text-5xl sm:text-8xl  text-center font-bold text-[#8dd9b3] mt-2">
              84%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
