import React from 'react'

import { AdviceSlipConsumer } from '../../contexts/AdviceSlip'

const AdviceSlip = () => (
  <AdviceSlipConsumer>
    { context => {
      const { adviceSlipIndex, adviceSlips, isLoading, error } = context.state

      // const adviceSlip = state.displaySavedAdviceSlip
      // ? state.displaySavedAdviceSlip
      // : state.adviceSlips[state.adviceSlipIndex]

      const adviceSlip = adviceSlips[adviceSlipIndex]

      // const displayError = !displaySavedAdviceSlip

      return(
        <div className="advice-slip advice-slip--center advice-slip--shadow">
          {error && <p>{error.message}</p>}
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