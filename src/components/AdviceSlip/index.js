import React from 'react'

import { AdviceSlipConsumer } from '../../context/AdviceSlip'

const AdviceSlip = () => (
  <AdviceSlipConsumer>
    { context => {
      const { adviceSlipIndex, adviceSlips, isLoading, error, displaySavedAdviceSlip } = context.state

      const adviceSlip = displaySavedAdviceSlip
      ? displaySavedAdviceSlip
      : adviceSlips[adviceSlipIndex]

      const displayError = !displaySavedAdviceSlip
        ? error
        : null

      return(
        <div className="advice-slip advice-slip--center advice-slip--shadow">
          {displayError && <p>{error.message}</p>}
          {isLoading
            ? <p>Loading...</p>
            : <p>{adviceSlip && adviceSlip.advice}</p>
          }
        </div>
      )
    }}
  </AdviceSlipConsumer>
)

export default AdviceSlip