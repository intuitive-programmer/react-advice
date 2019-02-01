import React from 'react'

const AdviceSlip = ({ adviceSlip, isLoading, error }) => (
  <div className="advice-slip advice-slip--center advice-slip--shadow">
    {error && <p>{error.message}</p>}
    {isLoading
      ? <p>Loading...</p>
      : <p>{adviceSlip && adviceSlip.advice}</p>
    }
  </div>
)

export default AdviceSlip