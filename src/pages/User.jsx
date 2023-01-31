/** @format */

import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import getRequest from '../helpers/getRequest'

function User() {
  const { id } = useParams()
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchUserAndAlbum()
  }, [])

  async function fetchUserAndAlbum() {
    setLoading(true)
    const { success, data } = await getRequest(`/users/${id}`, {}, true)
    const albums = await getRequest(`/users/${id}/albums`, {}, true)
    if (success) {
      setUser({ ...data, albums: albums.data })
      setLoading(false)
    } else {
      alert('Failed to load data')
    }
  }

  return loading ? (
    <>Please Wait...</>
  ) : user ? (
    <>
      <span className="title">{user.name}</span>
      <ul>
        <li>
          Username: <span>{user.username}</span>
        </li>
        <li>
          Email: <span>{user.email}</span>
        </li>
        <li>
          Website: <a href={`https://${user.website}`}>{user.website}</a>
        </li>
      </ul>
      <table onClick={() => console.log(user)}>
        <thead>
          <th>Id</th>
          <th>Title</th>
        </thead>
        <tbody>
          {user.albums.map(({ id, title }) => (
            <tr key={`al${id}`}>
              <td head="id">{id}</td>
              <td head="title">
                <NavLink to={`/album/${id}`}>{title}</NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  ) : (
    <>Empty Data</>
  )
}

export default User
