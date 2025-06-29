import React from 'react'
import PrincipalLoginBanner from './login-banner'
import LoginTable from './login-status'

const LoginActivityTeacher = () => {
  return (
    <>
    <PrincipalLoginBanner button1='Class 8A' button2='Group A' profileImage='/teacher-b2b/profile2.png' activity="Teacher" />
    <LoginTable />
    </>
  )
}

export default LoginActivityTeacher;