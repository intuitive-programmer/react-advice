import React from 'react'

import NavBtn from './NavBtn'
import NavTitle from './NavTitle'

const NavBar = () => (
  <nav className="nav-bar nav-bar--center nav-bar--shadow">
    <NavBtn path="/home">Home</NavBtn>
    <NavTitle>React Advice</NavTitle>
    <NavBtn path="#">GitHub</NavBtn>
  </nav>
)

export default NavBar