import React, { Component, Fragment } from 'react'
import Button from './Button'
import { AdviceSlipConsumer } from '../../contexts/AdviceSlip';

class AdviceSlipNav extends Component {
  render() {
    const { displaySavedAdviceSlip } = this.props
    return(
      <div className="advice-slip-nav advice-slip-nav--center">
        {!displaySavedAdviceSlip
          ? this.renderAdviceSlipBtns()
          : this.renderSavedAdviceBtns()
        }
      </div>
    )
  }

  renderAdviceSlipBtns = () => (
    <AdviceSlipConsumer>
      { context => {
        const { getPreviousAdviceSlip, getNextAdviceSlip } = context.actions
        return(
          <Fragment>
            <Button
              onClick={getPreviousAdviceSlip}
              >Prev</Button>
            <Button
              // onClick={saveAdviceSlip}
              >Save</Button>
            <Button
              onClick={getNextAdviceSlip}
              >Next</Button>
          </Fragment>
        )
      }}
    </AdviceSlipConsumer>
  )

  renderSavedAdviceBtns = () => {
    const { deleteSavedAdviceSlip, hideAdviceSlip } = this.props
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
  }
}

export default AdviceSlipNav
