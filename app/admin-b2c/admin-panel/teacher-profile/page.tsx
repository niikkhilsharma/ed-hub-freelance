import React from 'react'
import ChartsReport from '@/components/b2c-admin/charts'
import CourseSection from '@/components/b2c-admin/course-section'
import MaxWidthWrapper from '@/components/max-width-wrapper'
import TeacherCard from '@/components/b2c-admin/teacher-card'
import TeacherControlPanel from '@/components/b2c-admin/teacher-control-panel'
import GoBack from "@/components/principal/goback";
export default function page() {
  return (
    <div>
      <GoBack GoBackHeading="Teacher Profile" />
      <MaxWidthWrapper>
        <div className='bg-[#eeeeee]   py-6 md::px-14 px-4 min-h-screen '>
      <main className="flex-grow w-full max-w-[90rem] mx-auto p-4 ">
    
        <div className="space-y-4 ">
          <TeacherCard />
          <TeacherControlPanel />
          <CourseSection />
          <ChartsReport />
        </div>
      </main>
      </div>
      </MaxWidthWrapper>
    </div>
  )
}