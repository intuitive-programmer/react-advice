import React from 'react'

const Item = ({ children, onClick }) => (
  <li
    className="saved-advice-list__item saved-advice-list__item--ellipsis"
    onClick={onClick}
  >{children}</li>
)

export default Item