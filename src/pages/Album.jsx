/** @format */

import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import getRequest from '../helpers/getRequest'

function Album() {
  const [album, setAlbum] = useState()
  const [photos, setPhotos] = useState()
  const [loading, setLoading] = useState(false)

  const { id } = useParams()

  useEffect(() => {
    fetchAlbumInfo()
  }, [])

  async function fetchAlbumInfo() {
    setLoading(true)
    const { success, data } = await getRequest(`/albums/${id}`, {}, true)
    const pics = await getRequest(`/albums/${id}/photos`, {}, true)
    if (success) {
      setAlbum(data)
      setPhotos(pics.data)
    }
    setLoading(false)
  }

  return loading ? (
    <>Please wait...</>
  ) : album ? (
    <div>
      <span className="title">Album</span>
      <p>{album.title}</p>
      <p>
        <div className="grid">
          {photos.map(({ id, thumbnailUrl, title }) => (
            <NavLink to={`/photo/${id}`} className="grid-item">
              <img src={thumbnailUrl} alt="" srcset="" />
              <div className="caption">{title}</div>
            </NavLink>
          ))}
        </div>
      </p>
    </div>
  ) : (
    <>Empty Data!</>
  )
}

export default Album
