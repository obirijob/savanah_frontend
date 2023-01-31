/** @format */

import './App.scss'
import { useState, useEffect } from 'react'
import Login from './pages/Login'
import getRequest from './helpers/getRequest'
import Loading from './pages/Loading'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Album from './pages/Album'
import Photo from './pages/Photo'
import User from './pages/User'
import Menu from './components/Menu'

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
    <div className="app" onClick={() => console.log(user)}>
      {user ? (
        <BrowserRouter>
          <Menu
            name={user.name}
            image={user.picture}
            logOut={() => {
              localStorage.clear()
              const cookies = document.cookie.split(';')

              for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i]
                const eqPos = cookie.indexOf('=')
                const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
                document.cookie =
                  name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT'
              }

              setUser(null)
            }}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/album/:id" element={<Album />} />
            <Route path="/photo/:id" element={<Photo />} />
          </Routes>
        </BrowserRouter>
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
