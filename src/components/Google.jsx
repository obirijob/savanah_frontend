/** @format */

import React from 'react'
import { useGoogleLogin, useGoogleOneTapLogin } from '@react-oauth/google'

function Google({ userData }) {
  const login = useGoogleLogin({
    onSuccess: resp => {
      userData(resp)
    },
    onError: err => console.log(err),
  })

  useGoogleOneTapLogin({
    onSuccess: resp => {
      userData(resp)
    },
    onError: err => console.log(err),
  })

  return <button onClick={login}>Use Google</button>
}

export default Google
