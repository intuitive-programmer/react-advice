import React from 'react'

const Content = ({children, activeIndex}) => (
  <div className="tab-layout__content">
    {React.Children.map(children, (child, index) =>
      React.cloneElement(child,{
        key: index,
        index,
        activeIndex,
      })  
    )}
  </div>
)

export default Content