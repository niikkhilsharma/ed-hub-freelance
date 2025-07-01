import GoBack from '@/components/principal/goback';
import Management from '@/components/b2c-admin/management';
import React from 'react'

const Managements = () => {
  return (
    <>
      <GoBack GoBackHeading="Course Name" />
      <Management />
    </>
  )
}

export default Managements;