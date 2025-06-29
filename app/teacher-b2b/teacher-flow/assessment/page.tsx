"use client"
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import AssesmentPage from "@/components/teacher-b2b/assesment-page";
import {
  FiArrowLeft,
  // For number inputs
} from "react-icons/fi";

export default function Assesment() {
  const headerUser = {
    name: "Shlok Agheda",
    role: "Student",
    avatarSrc: "/placeholder-avatar-student.jpg",
    // / UPDATE PATH
  };
  const handleBackClick = () => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Header user={headerUser} />
      <div className="bg-white">
        <div className=" mx-auto max-w-[96rem]   px-4 sm:px-6 py-3.5 sticky top-0 z-40">
          <button
            onClick={handleBackClick}
            className="p-1.5 text-black hover:text-[#FF3366] focus:outline-none rounded-md" // Using ACCENT_PINK for hover
            aria-label="Go back"
          >
            <FiArrowLeft className="w-5 h-5" />
          </button>
        </div>
      </div>
      <AssesmentPage />

      <Footer />
    </div>
  );
}
