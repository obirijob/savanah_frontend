/** @format */

import { GoogleOAuthProvider } from '@react-oauth/google'
import React from 'react'
import Google from '../components/Google'
import postRequest from '../helpers/postRequest'

import '../styles/loading.scss'

function Login({ setUser }) {
  return (
    <div className="login">
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <span className="title" style={{ textAlign: 'center' }}>
          The home for your <br /> Memories
        </span>
        <p>Store your photos. Don't miss a Memory!</p>
        <Google
          userDataB={async u => {
            const { success, data } = await postRequest('/users/login-b', u)
            const res = await data.json()
            if (success) {
              setUser(res)
            } else {
              console.log('error', res)
            }
          }}
          userData={async u => {
            const { success, data } = await postRequest('/users/login', u)
            const res = await data.json()
            if (success) {
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
