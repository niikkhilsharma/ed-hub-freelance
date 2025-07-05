import React from 'react'
import AttendancePage from "@/components/b2c-admin/attendance-page"
import GoBack from "@/components/principal/goback";
export default function  page  () {
  return (
    <div>
        <GoBack GoBackHeading="Attendance" />
        <AttendancePage/>
    </div>
  )
}