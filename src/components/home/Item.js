import React from 'react'

import { Link } from 'react-router-dom'

const Item = ({ children, path }) => (
  <Link className="versions-list--link" to={path}>
    <li className="versions-list__item">
      {children}
    </li>
  </Link>
)

export default Item