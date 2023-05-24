/** @format */

import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import getRequest from '../helpers/getRequest'
import Loading from './Loading'

function Home() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchUsersandAlbums()
  }, [])

  async function fetchUsersandAlbums() {
    setUsers([])
    setLoading(true)
    const { success, data } = await getRequest('/users', {}, true)
    const alb = await getRequest('/albums', {}, true)

    setLoading(false)

    if (success) {
      let newUserData = []
      for (let u of data) {
        const mine = alb.data.filter(a => a.userId === u.id)
        newUserData.push({ ...u, albums: mine.length })
      }
      setUsers(newUserData)
    }
  }

  return (
    <div className="home">
      <span className="title">Users</span>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Albums</th>
            </tr>
          </thead>
          <tbody>
            {users.map(({ id, name, username, email, albums }) => (
              <tr>
                <td head="id">{id}</td>
                <td head="name">
                  <NavLink to={`/user/${id}`}>{name}</NavLink>
                </td>
                <td head="username">{username}</td>
                <td head="email">{email}</td>
                <td head="albums">{albums}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Home
