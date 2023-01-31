/** @format */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import getRequest from '../helpers/getRequest'
import putRequest from '../helpers/putRequest'

function Photo() {
  const [photo, setPhoto] = useState()
  const [loading, setLoading] = useState(false)

  const { id } = useParams()

  useEffect(() => {
    loadPhotoInfo()
  }, [])

  async function loadPhotoInfo() {
    setLoading(true)
    const { success, data } = await getRequest(`/photos/${id}`, {}, true)
    if (success) {
      setPhoto(data)
    } else {
      // handle error
    }
    setLoading(false)
  }

  return (
    <>
      <span className="title">Photo Details</span>
      {photo ? (
        <>
          <p>
            {photo.title}{' '}
            <button
              className="edit-button"
              onClick={async () => {
                let newTitle = window.prompt(
                  'Enter new photo title',
                  photo.title
                )

                if (newTitle !== photo.title) {
                  await putRequest(`/photos/${id}`, { title: newTitle })
                  alert(
                    'PUT Request Sent to the Server! \nNo need to reload the page since this data is not updated'
                  )
                }
              }}
              style={{ marginLeft: 10 }}
            >
              <FontAwesomeIcon icon={faEdit} />
            </button>
          </p>
          <img className="photo-detail" src={photo.url} alt="" />
        </>
      ) : (
        <>Empty Details!</>
      )}
    </>
  )
}

export default Photo
