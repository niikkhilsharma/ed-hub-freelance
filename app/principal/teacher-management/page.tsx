import GoBack from '@/components/principal/goback';
import Management from '@/components/principal/management';
import React from 'react'

const Managements = () => {
  return (
    <>
      <GoBack GoBackHeading="School Name" />
      <Management />
    </>
  )
}

export default Managements;