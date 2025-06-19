"use client";

import StudentWrapper from "@/components/student-wrapper";
import FooterNew from "@/components/footer3";
import { FaCircleCheck } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function DemoBookingConfirmation() {
  const router = useRouter();
  return (
    <StudentWrapper blue>
      <div className="relative z-10 p-10 bg-[#EEEEEE]">
        <div className="w-full rounded-3xl flex flex-col justify-center items-center bg-white  md:py-12 gap-5">
          <FaCircleCheck className="w-44 h-44 fill-[#8DD9B3]" />
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
            Demo Booked Successfully 🎉
          </h1>
          <p className="text-[#6B7280] max-w-3xl text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            condimentum leo quis sodales sagittis. Donec mattis mauris vel
            molestie aliquam. Mauris porttitor dolor sit amet massa egestas
            commodo non eget turpis. Nunc venenatis elementum lacus, sed
            bibendum orci blandit vitae
          </p>
          <Button
            className="bg-[#FF3366] text-white px-8 py-6 hover:bg-[#ff1a53] cursor-pointer rounded-full"
            onClick={() => router.push("/student/courses")}
          >
            Explore More Courses
          </Button>
        </div>
      </div>
      <div className="z-10 absolute">
        <FooterNew showSuscriptionBlock={false} />
      </div>
    </StudentWrapper>
  );
}
