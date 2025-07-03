import GoBack from '@/components/principal/goback';
import React from 'react'
import AdminCourse from '@/components/b2c-admin/admincourse';

const AdminCourseManagement = () => {
  return (
    <>
      <GoBack GoBackHeading="Edit Memeberships Plans"/>
      <AdminCourse/>
    </>
  )
}

export default AdminCourseManagement;