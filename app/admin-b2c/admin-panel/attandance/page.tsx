import React from "react";
import AttendancePage from "@/components/b2c-admin/attendance-page";
import GoBack from "@/components/principal/goback";
import Link from "next/link";
export default function page() {
  return (
    <div>
      <Link href="/admin-b2c/admin-panel/dashboard">
        
          <GoBack GoBackHeading="Attendance" />
        
      </Link>
      <AttendancePage />
    </div>
  );
}
