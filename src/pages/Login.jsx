/** @format */

import { GoogleOAuthProvider } from '@react-oauth/google'
import React from 'react'
import Google from '../components/Google'

function Login() {
  return (
    <div>
      {' '}
      {process.env.REACT_APP_GOOGLE_CLIENT_ID}
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <Google />
      </GoogleOAuthProvider>
    </div>
  )
}

export default Login
