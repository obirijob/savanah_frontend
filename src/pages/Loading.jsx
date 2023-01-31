/** @format */

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

function Loading() {
  return (
    <div className="loading">
      <FontAwesomeIcon icon={faCircleNotch} />
    </div>
  )
}

export default Loading
