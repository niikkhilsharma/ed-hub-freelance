"use client";
import ProfileFormComponent from "@/components/student/settings/profile-component";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Page3EditProfile() {
  return (
    <div className="pb-8">
        <div className="sticky top-15 h-14 z-10 bg-white shadow-sm mb-8 flex items-center px-28 text-lg gap-2"><Link href="/page3/dashboard"><ArrowLeft /></Link> Edit Profile</div>
      <ProfileFormComponent />
    </div>
  );
}
