"use client";

import StudentWrapper from "@/components/student-wrapper";
import { Star } from "lucide-react";
import FooterNew from "@/components/footer3";
import { educatorsData } from "../../educator/page";
import { useRouter } from "next/navigation";

export default function SelectTeacher() {
  const router = useRouter();
  return (
    <StudentWrapper>
      {/* Background */}
      <div
        className="fixed inset-0 bg-center bg-repeat z-0"
        style={{
          backgroundImage: "url('/background5.png')",
          backgroundSize: "900px",
          filter: " brightness(1.1) blur(0.3px)",
          opacity: 0.6,
        }}
      ></div>
      <div className="bg-black fixed inset-0 bg-center bg-repeat z-1 opacity-40" />

      <div className="relative z-10 p-10">
        <div className="container mx-auto rounded-3xl bg-white p-10 space-y-7">
          <h1 className="text-center text-5xl font-bold text-[#FFCC00]">
            Pick Your Preferred Teacher
          </h1>
          <p className="text-center text-2xl font-medium text-[#6B7280]">
            Select the teacher best suited to guide you through the course.
          </p>
          <h2 className="text-2xl font-medium text-[#FF3366]">Course Name</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
            {educatorsData.map((educator, index) => (
              <div
                key={index}
                className="rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] p-5 space-y-2 cursor-pointer hover:shadow-md"
                onClick={() => router.push("/student/teachers/profile")}
              >
                <div className="w-full flex justify-center items-center">
                  <div className="rounded-full w-36 h-36 overflow-hidden flex justify-center items-center">
                    <img src={educator.imageUrl} alt="teacher profile" />
                  </div>
                </div>
                <h4 className="text-2xl font-medium overflow-hidden whitespace-nowrap text-ellipsis">
                  {educator.name}
                </h4>
                <h5 className="text-[#FF3366] text-lg overflow-hidden whitespace-nowrap text-ellipsis">
                  {educator.category}
                </h5>
                <p className="text-[#6B7280] text-lg line-clamp-3">
                  {educator.description}
                </p>
                <p className="text-[#6B7280] text-lg line-clamp-2">
                  {educator.title}
                </p>
                <div className="flex gap-2">
                  {new Array(Math.floor(educator.rating))
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#FFCC00] stroke-[#FFCC00]"
                      />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <Footer /> */}
      </div>

      <div className="z-10 absolute">
        <FooterNew showSuscriptionBlock={false} />
      </div>
    </StudentWrapper>
  );
}
