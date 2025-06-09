"use client";

import { useState } from "react"; // RecordingsByDate and initialRecordingsData are not used here anymore for this specific page
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ReferenceVideoContentPage from "@/components/teacher-b2b/reference-video-content-page"; // Assuming VideoContentPage.tsx is in the same directory or adjust path
import { FiArrowLeft, FiPlus } from "react-icons/fi"; // Ensure FiArrowLeft is imported
import MaxWidthWrapper from "../max-width-wrapper";

export default function RecordingsPage() {
  // Renaming to VideoListingPage or similar might be more accurate
  // const [recordingsByDate, setRecordingsByDate] = useState<RecordingsByDate[]>(initialRecordingsData) // Removed as not used for video page

  // Dummy user for Header
  const headerUser = {
    name: "Shlok Agheda",
    role: "Teacher", // Assuming this is for a teacher view based on "Add Videos"
    avatarSrc: "/teacher-b2b/profile.png", // UPDATE PATH
  };

  const handleBackClick = () => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };

  return (
    <div className="bg-[#eeeeee] min-h-screen flex flex-col">
      <Header user={headerUser} />
      <MaxWidthWrapper>
        <div className="bg-gray-100">
          <div className="flex items-center gap-3 bg-white px-4 sm:px-6 py-2 shadow-sm sticky top-0 z-40">
            {" "}
            {/* Adjusted padding slightly */}
            <button
              onClick={handleBackClick}
              className="p-1.5 text-gray-700 hover:text-[#FF3366] focus:outline-none rounded-md"
              aria-label="Go back"
            >
              <FiArrowLeft className="w-5 h-5" />
            </button>
            {/* No title text is shown in the image for this specific page header */}
          </div>

          <div className="p-8 min-h-screen">
            {/* This is the main content for the videos page */}
            <ReferenceVideoContentPage />{" "}
          </div>
          <button
            onClick={() => alert("Add Videos Clicked!")}
            className={` mb-16 mr-16 mt-4 ml-auto relative bottom-0 bg-[#FFCC00] text-white font-semibold px-5 py-3 rounded-full hover:opacity-90 transition-opacity flex items-center gap-2 text-sm`}
            aria-label="Add new videos"
          >
            <FiPlus className="w-4 h-4" />
            Add Videos
          </button>
        </div>
      </MaxWidthWrapper>
      {/* Page Title Bar - Minimal as per image */}

      <Footer />
    </div>
  );
}
