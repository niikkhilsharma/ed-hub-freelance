"use client";
import StudentWrapper from "@/components/student-wrapper";
import { Button } from "@/components/ui/button";
import FooterNew from "@/components/footer3";
import { useRouter } from "next/navigation";
export default function CourseDetail() {
  const router = useRouter();
  return (
    <StudentWrapper>
      {/* Background */}
      <div
        className="fixed inset-0 bg-center bg-repeat z-0"
        style={{
          backgroundImage: "url('/Background2.png')",
          backgroundSize: "400px",
          filter: "grayscale(10%) brightness(1.1) blur(0.5px)",
          opacity: 0.08,
        }}
      ></div>

      <div className="relative z-10 py-10">
        <div className="container min-h-[60vh] max-w-7xl mx-auto py-6 px-6 lg:px-28 flex flex-col items-center gap-5">
          <img
            src="/404_error.png"
            alt="404 error image"
            className="scale-90"
          />
          <h1 className="font-bold text-2xl lg:text-4xl text-center uppercase mb-3">
            Sorry, Page Not Found!
          </h1>
          <p className="font-medium text-[#777777] text-left max-w-3xl mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button
            onClick={() => router.push("/student/home")}
            className="px-16 text-base rounded-full cursor-pointer bg-[#3366FF] hover:bg-blue-600 text-white transition-colors h-fit"
          >
            <span className="py-1">Back to Home</span>
          </Button>
        </div>
      </div>

      <FooterNew showSuscriptionBlock={false} />
    </StudentWrapper>
  );
}
