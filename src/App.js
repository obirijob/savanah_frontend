/** @format */

import './App.css'
import { useState } from 'react'
import Login from './pages/Login'

function App() {
  const [user, setUser] = useState()
  return <div className="app">{user ? <>User</> : <Login />}</div>
}

export default App
