"use client";
import Footer from "@/components/footer";
import StudentWrapper from "@/components/student-wrapper";
import CourseDashboard from "@/components/student/settings/course";
export default function CourseDetail() {
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

      <div className="relative z-10 mt-8 px-8 pb-40">
        <CourseDashboard />
      </div>

      <Footer />
    </StudentWrapper>
  );
}
