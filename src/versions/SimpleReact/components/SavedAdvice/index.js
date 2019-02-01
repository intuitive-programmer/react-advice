import React from 'react'

import List from './List'
import Item from './Item'

const SavedAdvice = ({ savedAdvice }) => {
  const renderSavedAdvice = () => (
    savedAdvice.map((slip, index) => (
      <Item
        key={index}
      >
        {slip.advice}
      </Item>
    ))
  )
  
  return(
    <List>
      {renderSavedAdvice()}
    </List>
  )
}

export default SavedAdvice