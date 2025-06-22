"use client";

import { FiHelpCircle, FiTarget, FiClock } from "react-icons/fi";

const loremArray = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Nam pharetra tortor quis dolor facilisis vestibulum.",
  "Vestibulum dictum nunc nec est mattis pharetra.",
  "Duis facilisis erat eget luctus porttitor.",
  "Nullam in neque quis risus tempor commodo ac eget enim.",
  "Donec sed nisl sit amet est rhoncus pretium eget et nisi.",
  "Pellentesque a ex ornare, dictum metus eu, sodales nibh.",
  "Phasellus feugiat mi sit amet lacinia rhoncus.",
  "Cras in dui vitae odio varius egestas placerat nec ipsum.",
  "Praesent quis tellus volutpat, luctus quam non, ullamcorper augue.",
  "Vestibulum quis tortor vestibulum, consectetur tellus nec, sollicitudin eros.",
  "Donec malesuada est porttitor ex tristique placerat.",
  "Sed maximus nibh eget elit varius, a tempus risus rutrum",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Nam pharetra tortor quis dolor facilisis vestibulum.",
  "Vestibulum dictum nunc nec est mattis pharetra.",
  "Duis facilisis erat eget luctus porttitor.",
  "Nullam in neque quis risus tempor commodo ac eget enim.",
  "Donec sed nisl sit amet est rhoncus pretium eget et nisi.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Nam pharetra tortor quis dolor facilisis vestibulum.",
  "Vestibulum dictum nunc nec est mattis pharetra.",
  "Duis facilisis erat eget luctus porttitor.",
  "Nullam in neque quis risus tempor commodo ac eget enim.",
  "Donec sed nisl sit amet est rhoncus pretium eget et nisi.",
];

// Helper component for the info badges
const InfoBadge = ({
  icon: Icon,
  text,
  bgColor,
  textColor,
}: {
  icon: React.ElementType;
  text: string;
  bgColor: string;
  textColor: string;
}) => (
  <div
    className={`flex items-center gap-2 px-4 py-2  rounded-full ${bgColor} ${textColor}`}
  >
    <Icon className="w-4 h-4" />
    <span className="text-md font-medium ">{text}</span>
  </div>
);

export default function TestStartPage() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center p-6">
        <div
          className="fixed inset-0 bg-center bg-repeat -z-1"
          style={{
            backgroundImage: "url('/Background2.png')",
            backgroundSize: "900px",
            filter: " brightness(1.1) blur(0.3px)",
            opacity: 0.6,
          }}
        ></div>
        <div className="bg-black fixed inset-0 bg-center bg-repeat -z-1 opacity-40" />
        <div className="overflow-hidden flex flex-col gap-4 md:flex-row w-full max-w-4xl lg:max-w-7xl">
          {/* Left Section - Test Information */}
          <div className="relative w-full rounded-3xl bg-white p-6 sm:p-8 lg:p-10 flex flex-col items-center">
            <img
              src="/student/my-course/Group 1321317240 (2).png"
              alt="illustration"
              className="w-[95%] h-auto absolute bottom-4"
            />
            <img
              src="/student/my-course/Group 1321317240 (1).png"
              className="w-full"
              alt="text illustration"
            />
            <div className="mb-3 mt-6">
              <h1 className="text-xl md:text-2xl font-bold text-gray-800 leading-tight">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-black">
                    5 level Scientific & Brain Mapping Skill Test
                  </h2>
                </div>
              </h1>
            </div>

            <p className="text-center font-poppins text-sm text-black max-w-xl mx-auto mb-5">
              lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&#39;s standard dummy
              text ever since the 1500s, when
            </p>

            {/* Info Badges */}
            <div className="relative overflow-visible flex flex-wrap justify-center items-center gap-3 my-5 font-bold font-poppins w-fit ">
              <img
                src="/student/my-course/60c9db3f7da3d5e6b99f3b18a873fa9633f0cca0.png"
                className="w-40 absolute top-0 left-0 -translate-x-full"
                alt="illustration"
              />
              <img
                src="/student/my-course/6c6ec5e6986a6bca98a69b3025cc8b03be3cabc6.png"
                className="w-40 absolute top-0 right-0 translate-x-full -translate-y-1/3"
                alt="illustration"
              />
              <InfoBadge
                icon={FiHelpCircle}
                text="100 Questions"
                bgColor="bg-[#FFC79A]"
                textColor="text-black-700 "
              />
              <InfoBadge
                icon={FiTarget}
                text="100 Marks"
                bgColor="bg-[#99DEFF]"
                textColor="text-black-700"
              />
              <InfoBadge
                icon={FiClock}
                text="30 minutes"
                bgColor="bg-[#8DD9B3]"
                textColor="text-black-700"
              />
            </div>

            <div className="rounded-2xl p-4 text-center ">
              <h3 className="text-md font-bold text-black ">Test Window</h3>

              <div className="flex justify-center items-center space-x-2 text-black text-sm mb-4 mt-2 font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3M3 11h18M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>
                  10 May 2025, 10:00 AM — 12 May 2025, 9:59 AM (2 Days)
                </span>
              </div>

              <p className="text-sm flex justify-center items-center gap-2 text-black font-medium">
                <svg
                  className="h-4 w-4 "
                  width={13}
                  height={21}
                  viewBox="0 0 13 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 5.26V0.5H1.23679e-06V5.26C-0.000411943 5.78544 0.102703 6.30582 0.303456 6.7914C0.504208 7.27698 0.798664 7.71825 1.17 8.09L3.59 10.5L1.17 12.91C0.425552 13.6644 0.00564979 14.6801 1.23679e-06 15.74V20.5H13V15.74C12.9944 14.6801 12.5745 13.6644 11.83 12.91L9.41 10.5L11.83 8.09C12.2013 7.71825 12.4958 7.27698 12.6965 6.7914C12.8973 6.30582 13.0004 5.78544 13 5.26ZM11 5.26C10.9978 5.78958 10.7856 6.29665 10.41 6.67L7.65 9.44C7.3691 9.72125 7.21132 10.1025 7.21132 10.5C7.21132 10.8975 7.3691 11.2787 7.65 11.56L10.41 14.33C10.7856 14.7034 10.9978 15.2104 11 15.74V18.5H2V15.74C2.00223 15.2104 2.21441 14.7034 2.59 14.33L5.35 11.56C5.6309 11.2787 5.78868 10.8975 5.78868 10.5C5.78868 10.1025 5.6309 9.72125 5.35 9.44L2.59 6.67C2.21441 6.29665 2.00223 5.78958 2 5.26V2.5H11V5.26Z"
                    fill="black"
                  />
                </svg>
                Complete the test within 48 hours or it will reset.
              </p>
            </div>

            <div className="mt-6 flex justify-center">
              {" "}
              {/* mt-auto pushes button down if content is short */}
              <button
                onClick={() => console.log("Start Test Clicked")}
                className="px-12 py-3 bg-blue-600 text-white font-semibold text-sm rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors shadow-md"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen p-10 bg-white">
        <div className="overflow-hidden w-full mx-auto lg:max-w-7xl p-6 sm:p-8 lg:p-10">
          {/* Left Section - Test Information */}
          <div className="relative w-full rounded-3xl bg-white flex flex-col">
            <div className="mb-3 mt-6">
              <h2 className="text-2xl md:text-3xl font-bold text-black">
                DMIT Test Rules and Regulations
              </h2>
            </div>
          </div>
          <ul className="list-disc pl-6 space-y-1">
            {loremArray.map((pointer, index) => (
              <li key={index} className="text-[#6B7280]">
                {pointer}
              </li>
            ))}
          </ul>
          <div className="p-4 w-full text-center">
            <button
              onClick={() => console.log("Start Test Clicked")}
              className="px-12 py-3 bg-blue-600 text-white font-semibold text-sm rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors shadow-md"
            >
              Start
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
