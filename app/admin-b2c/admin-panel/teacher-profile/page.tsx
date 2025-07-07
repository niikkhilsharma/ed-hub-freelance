import React from 'react'
import ChartsReport from '@/components/b2c-admin/charts'
import CourseSection from '@/components/b2c-admin/course-section'
import TeacherCard from '@/components/b2c-admin/teacher-card'
import TeacherControlPanel from '@/components/b2c-admin/teacher-control-panel'
import GoBack from "@/components/principal/goback";
export default function page() {
  return (
    <div>
      <GoBack GoBackHeading="Teacher Profile" />
      <main className="flex-grow w-full max-w-[90rem] mx-auto p-4 sm:p-6 lg:p-8">
        {/* 
                        THIS IS THE KEY FIX:
                        A simple div with space-y-4 (or space-y-6) is the most robust way
                        to ensure two components stack vertically with consistent spacing
                        and do not overlap. I removed the negative margins from your original
                        Control Panel.
                    */}
        <div className="space-y-4 md:space-y-6">
          <TeacherCard />
          <TeacherControlPanel />
          <CourseSection />
          <ChartsReport />
        </div>
      </main>
    </div>
  )
}