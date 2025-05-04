import StudentWrapper from "@/components/student-wrapper";
import Image from "next/image";
import { Play, CheckCircle } from "lucide-react";
import CoursesPage from "@/components/student/home/courses-component";
import TeachersList from "@/components/student/home/teachers-component";
import Footer from "@/components/footer";

export default function StudentHome() {
  return (
    <StudentWrapper>
      <main className="h-[calc(100vh-80px)]">
        {/* Hero Section */}
        <section className="relative h-full overflow-hidden">
          {/* Background Pattern */}
          <div
            className="absolute inset-0 bg-center bg-repeat z-0"
            style={{
              backgroundImage: "url('/Background2.png')",
              backgroundSize: "400px",
              filter: "grayscale(10%) brightness(1.1) blur(0.5px)",
              opacity: 0.3,
            }}
          ></div>
          {/* Bluish Overlay */}
          <div
            className="absolute inset-0 bg-[#003ffd] z-0"
            style={{
              opacity: 0.78,
              mixBlendMode: "multiply",
            }}
          ></div>

          {/* Main content */}
          <div className="container mx-auto px-16 flex flex-col md:flex-row items-center justify-center h-full">
            {/* Left Content */}
            <div className="w-full md:w-1/2 z-10 space-y-8 flex flex-col justify-center h-full">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Limitless learning at <br />
                your <span className="text-pink-500">fingertips</span>
              </h1>

              <p className="text-white/90 text-lg max-w-xl">
                Online learning and teaching marketplace with 5K+ courses & 10M
                students. Taught by experts to help you acquire new skills.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-white h-5 w-5" />
                  <span className="text-white">Learn with experts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-white h-5 w-5" />
                  <span className="text-white">5 levels Skills Test</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-white h-5 w-5" />
                  <span className="text-white">Recorded classes</span>
                </div>
              </div>

              <div>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-full px-6 py-3 flex items-center gap-2 transition-all">
                  <Play className="h-5 w-5 fill-current" />
                  How to Work
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2 flex justify-center items-center z-10 h-full">
              <div className="relative aspect-square max-w-[600px] w-full">
                <Image
                  src="/student/home/hero-image.png"
                  alt="Students learning with robot"
                  className="rounded-full object-cover"
                  fill
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* page2 */}
        <CoursesPage/>

        {/* page3 */}
        <TeachersList className="pb-20"/>
        
        {/* footer */}
        <Footer />
      </main>
    </StudentWrapper>
  );
}
