import React from 'react'
import PrincipalLoginBanner from './login-banner'
import LoginTable from './login-status'

const LoginActivity = () => {
  return (
    <>
    <PrincipalLoginBanner activity="Teacher" />
    <LoginTable />
    </>
  )
}

export default LoginActivity;