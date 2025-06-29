import GoBack from '@/components/principal/goback'
import LectureForm from '@/components/principal/ManageLecture'
import React from 'react'

const page = () => {
  return (
    <>
    <GoBack GoBackHeading='Add Lecture' />
    <LectureForm />
    </>
  )
}

export default page