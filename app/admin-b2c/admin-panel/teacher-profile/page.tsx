import React from 'react'
import ChartsReport from '@/components/b2c-admin/charts'
import CourseSection from '@/components/b2c-admin/course-section'
import TeacherCard from '@/components/b2c-admin/teacher-card'
import TeacherControlPanel from '@/components/b2c-admin/teacher-control-panel'
import GoBack from "@/components/principal/goback";
export default function  page  () {
  return (
    <div>
        <GoBack GoBackHeading="Teacher Profile" />
        <TeacherCard/>
        <TeacherControlPanel/>
           <CourseSection/>
       < ChartsReport/>
    
    </div>
  )
}