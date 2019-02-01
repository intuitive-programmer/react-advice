import React from 'react'
import Button from './Button';

const AdviceSlipNav = ({ getPreviousAdviceSlip, getNextAdviceSlip }) => (
  <div className="advice-slip-nav advice-slip-nav--center">
    <Button
      onClick={getPreviousAdviceSlip}
    >Prev</Button>
    <Button>Save</Button>
    <Button
      onClick={getNextAdviceSlip}
    >Next</Button>
  </div>
)

export default AdviceSlipNav
