import React from 'react'

const Tab = ({index, activeIndex, onClick, label}) => (
  <div
    className={index === activeIndex
      ? "tab-layout__nav__tab tab-layout__nav__tab--active"
      : "tab-layout__nav__tab"
    }
    onClick={onClick}
  >
    {label.toUpperCase()}
  </div>
)

export default Tab