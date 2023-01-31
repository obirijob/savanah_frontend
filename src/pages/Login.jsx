/** @format */

import { GoogleOAuthProvider } from '@react-oauth/google'
import React from 'react'
import Google from '../components/Google'
import postRequest from '../helpers/postRequest'

import '../styles/loading.scss'

function Login({ setUser }) {
  return (
    <div>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <Google
          userData={async u => {
            const { success, data } = await postRequest('/users/login', u)
            const res = await data.json()
            if (success) {
              console.log('success', res)
              setUser(res)
            } else {
              console.log('error', res)
            }
          }}
        />
      </GoogleOAuthProvider>
    </div>
  )
}

export default Login
