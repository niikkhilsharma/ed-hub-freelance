import GoBack from '@/components/principal/goback';
import ReviewList from '@/components/b2c-admin/review-list';
import React from 'react'

const reviewTeachList = () => {
  return (
    <>
      <GoBack GoBackHeading="Teacher Request Tracker" />
      <ReviewList/>
      
    </>
  )
}

export default reviewTeachList;