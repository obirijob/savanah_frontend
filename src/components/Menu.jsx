/** @format */

import React from 'react'

function Menu({ name, image, logOut }) {
  return (
    <div className="menu">
      <span className="username"> Welcome {name}</span>
      <img src={image} alt="" srcset="" />
      <button onClick={logOut}>Log out</button>
    </div>
  )
}

export default Menu
