import GoBack from '@/components/principal/goback';
import ManageApprovalsPage from '@/components/principal/manage-approvals';
import React from 'react'

const ManageStudentApprovals = () => {
  
  return (
    <>
      <section className="">
      <GoBack GoBackHeading={"Manage Approvals"}/>
      <ManageApprovalsPage />
      </section>
    </>
  )
}

export default ManageStudentApprovals;