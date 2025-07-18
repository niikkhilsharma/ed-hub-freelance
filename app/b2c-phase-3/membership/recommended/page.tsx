import MaxWidthWrapper from "@/components/admin/max-width-wrapper";
import MembershipPlan from "@/components/phase-3/membership";
import Navbar from "@/components/phase-3/navbar";
import React from "react";
const user = {
  avatarSrc: "/admin/usernav.jpg",
  name: "Shlok Agheda",
  role: "Student",
};

export default function Membership() {
  return (
    <>
      <Navbar user={user} />
     <div className="overflow-x-hidden min-h-screen bg-[#eeeeee]">
        <MembershipPlan />
        </div>
      
    </>
  );
}
