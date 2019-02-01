import React from 'react'
import Button from './Button';

const AdviceSlipNav = ({ getPreviousAdviceSlip, getNextAdviceSlip, saveAdviceSlip }) => (
  <div className="advice-slip-nav advice-slip-nav--center">
    <Button
      onClick={getPreviousAdviceSlip}
    >Prev</Button>
    <Button
      onClick={saveAdviceSlip}
    >Save</Button>
    <Button
      onClick={getNextAdviceSlip}
    >Next</Button>
  </div>
)

export default AdviceSlipNav
