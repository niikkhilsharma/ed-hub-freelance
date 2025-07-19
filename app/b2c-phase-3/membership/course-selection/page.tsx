import React from "react";
import MembershipForm from "@/components/phase-3/course-selection-form";
import Navbar from "@/components/phase-3/navbar";
const user = {
  avatarSrc: "/admin/usernav.jpg",
  name: "Shlok Agheda",
  role: "Student",
};
export default function CourseSelection() {
  return (
    <><Navbar user={user} />
    <div className="bg-[#eeeeee] sm:py-6 sm:px-8 p-4  overflow-x-hidden min-h-screen">
      <MembershipForm />
    </div>
    </>
  );
}
