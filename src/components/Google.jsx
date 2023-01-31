/** @format */

import React from 'react'
import { useGoogleOneTapLogin } from '@react-oauth/google'

function Google() {
  return useGoogleOneTapLogin({
    onSuccess: resp => console.log(resp),
    onError: err => console.log(err),
  })
}

export default Google
