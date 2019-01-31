import React from 'react'

import { Link } from 'react-router-dom'

const NavBtn = ({ children, path }) => (
  <Link to={path}>
    <button className="nav-bar__btn">
      {children.toUpperCase()}
    </button>
  </Link>
)

export default NavBtn