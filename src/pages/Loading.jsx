/** @format */

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

function Loading() {
  return (
    <div className="loading">
      <div className="icon">
        <FontAwesomeIcon icon={faCircleNotch} />
      </div>

      <span>Please Wait</span>
    </div>
  )
}

export default Loading
