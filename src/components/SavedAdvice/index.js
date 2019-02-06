import React from 'react'

import { AdviceSlipConsumer } from '../../context/AdviceSlip'

import List from './List'
import Item from './Item'

const SavedAdvice = () => (
  <AdviceSlipConsumer>
    { context => {
      const { savedAdvice } = context.state
      const { showAdviceSlip } = context.actions

      const renderSavedAdvice = () => (
        savedAdvice.map((slip, index) => (
          <Item
            key={index}
            onClick={() => showAdviceSlip(slip)}
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
    }}
  </AdviceSlipConsumer>
)

export default SavedAdvice