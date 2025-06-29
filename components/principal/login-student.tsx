import React from 'react'
import PrincipalLoginBanner from './login-banner'
import LoginTable from './login-status'

const LoginActivityStudent = () => {
  return (
    <>
    <PrincipalLoginBanner button1='Class Assigned' button2='Class Assigned' profileImage='/principal/manage.jpg' activity="Student" />
    <LoginTable />
    </>
  )
}

export default LoginActivityStudent;