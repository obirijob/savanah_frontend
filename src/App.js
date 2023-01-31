/** @format */

import './App.scss'
import { useState, useEffect } from 'react'
import Login from './pages/Login'
import getRequest from './helpers/getRequest'
import Loading from './pages/Loading'
import { AnimatePresence } from 'framer-motion'

function App() {
  const [token, setToken] = useState()
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    getUserInfo()
  }, [token])

  async function getUserInfo() {
    setLoading(true)
    const { success, data } = await getRequest('/users/me', {
      token: localStorage.getItem('token'),
    })
    setLoading(false)
    if (success) {
      setUser(data)
    } else {
      setUser(null)
    }
  }

  return loading ? (
    <AnimatePresence mode="wait">
      <Loading />
    </AnimatePresence>
  ) : (
    <div className="app">
      {user ? (
        <>User</>
      ) : (
        <AnimatePresence mode="wait">
          <Login
            setUser={u => {
              localStorage.setItem('token', u.token)
              setToken(u.token)
            }}
          />
        </AnimatePresence>
      )}
    </div>
  )
}

export default App
