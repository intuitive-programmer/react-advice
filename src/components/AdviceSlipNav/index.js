import React, { Fragment } from 'react'

import { AdviceSlipConsumer } from '../../context/AdviceSlip'

import Button from './Button'

const AdviceSlipNav = () => (
  <AdviceSlipConsumer>
    { context => {
      const { displaySavedAdviceSlip } = context.state
      return(
        <div className="advice-slip-nav advice-slip-nav--center">
          {!displaySavedAdviceSlip
            ? renderAdviceSlipBtns()
            : renderSavedAdviceBtns()
          }
        </div>
      )
    }}
  </AdviceSlipConsumer>
)  

const renderAdviceSlipBtns = () => (
  <AdviceSlipConsumer>
    { context => {
      const { getPreviousAdviceSlip, getNextAdviceSlip, saveAdviceSlip } = context.actions
      return(
        <Fragment>
          <Button
            onClick={getPreviousAdviceSlip}
            >Prev</Button>
          <Button
            onClick={saveAdviceSlip}
            >Save</Button>
          <Button
            onClick={getNextAdviceSlip}
            >Next</Button>
        </Fragment>
      )
    }}
  </AdviceSlipConsumer>
)

const renderSavedAdviceBtns = () => (
  <AdviceSlipConsumer>
    { context => {
      const { deleteSavedAdviceSlip, hideAdviceSlip } = context.actions
      return(
        <Fragment>
          <Button
            onClick={deleteSavedAdviceSlip}
          >Delete</Button>
          <Button
            onClick={hideAdviceSlip}
          >Back</Button>
        </Fragment>
      )
    }}
  </AdviceSlipConsumer>
)

export default AdviceSlipNav
