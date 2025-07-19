import StudentWrapper from "@/components/student-wrapper";
import FooterNew from "@/components/footer3";
import { ArrowLeft } from "lucide-react";

export default function CourseSelection() {
  return (
    <StudentWrapper student>
      {/* headers */}
      <div className="bg-white border-b">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <ArrowLeft className="w-6 h-6 mr-3 cursor-pointer hover:text-gray-800" />
            <h1 className="text-xl font-semibold text-[#FF3366]">
              Advance Plan
            </h1>
          </div>
        </div>
      </div>
      <section className="bg-[#EEEEEE] p-10">
        <div className="w-full max-w-7xl mx-auto space-y-6 p-6 bg-white rounded-3xl">
          {/* Course Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Course Cards */}
            {new Array(4).fill(0).map((_, index) => (
              <div
                key={index}
                className="bg-[#F9FAFB] rounded-3xl border border-[#E5E7EB] overflow-hidden p-2"
              >
                <div className="relative h-48 bg-gradient-to-r from-orange-200 to-orange-300 rounded-[12px] overflow-hidden">
                  <img
                    src="/student/home/pers-dev.png"
                    alt="course image"
                    className="object-fit"
                  />
                </div>
                <div className="p-2 pb-0">
                  <h3 className="text-xl font-bold">Course Name</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FooterNew showSuscriptionBlock={false} />
    </StudentWrapper>
  );
}
