import React from 'react'

const Page = ({index, activeIndex, render}) => (
  <div
  className={index === activeIndex
    ? "page page--active"
    : "page"
  }
>
  {render()}
</div>
)

export default Page