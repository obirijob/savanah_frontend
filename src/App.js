/** @format */

import './App.scss'
import { useState, useEffect } from 'react'
import Login from './pages/Login'
import getRequest from './helpers/getRequest'
import Loading from './pages/Loading'

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
    <Loading />
  ) : (
    <div className="app">
      {user ? (
        <>User</>
      ) : (
        <Login
          setUser={u => {
            localStorage.setItem('token', u.token)
            setToken(u.token)
          }}
        />
      )}
    </div>
  )
}

export default App
