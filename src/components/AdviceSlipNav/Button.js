import React from 'react'

const Button = ({ children, onClick }) => (
  <button
    className="advice-slip-nav__btn"
    onClick={onClick}
  >
    {children.toUpperCase()}
  </button>
)

export default Button