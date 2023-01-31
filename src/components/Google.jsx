/** @format */

import React from 'react'
import { useGoogleLogin, useGoogleOneTapLogin } from '@react-oauth/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

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

  return (
    <button className="button btn-landing" onClick={login}>
      <FontAwesomeIcon icon={faGoogle} />
      <span>Log In</span>
    </button>
  )
}

export default Google
