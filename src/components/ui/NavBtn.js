import React from 'react'

import { Link } from 'react-router-dom'

const NavBtn = ({ children, path, onClick }) => (
  <Link to={path}>
    <button
      className="nav-bar__btn"
      onClick={onClick}
    >
      {children.toUpperCase()}
    </button>
  </Link>
)

export default NavBtn