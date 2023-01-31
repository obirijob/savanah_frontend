/** @format */

import React, { useState, useEffect } from 'react'
import getRequest from '../helpers/getRequest'
import Loading from './Loading'

function Home() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    setUsers([])
    setLoading(true)
    const { success, data } = await getRequest('/users', {}, true)
    setLoading(false)
    if (success) {
      setUsers(data)
    }
  }

  return (
    <div className="home">
      <span className="title">Users</span>
      {loading ? (
        <Loading />
      ) : (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {users.map(({ id, name, username, email, website }) => (
              <tr>
                <td>{id}</td>
                <td>
                  <a>{name}</a>
                </td>
                <td>{username}</td>
                <td>{email}</td>
                <td>{website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Home
