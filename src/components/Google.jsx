/** @format */

import React from 'react'
import { GoogleLogin } from '@react-oauth/google'

function Google() {
  return (
    <GoogleLogin
      onSuccess={resp => console.log(resp)}
      onError={err => console.log(err)}
    />
  )
}

export default Google
