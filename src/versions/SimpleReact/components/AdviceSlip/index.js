import React from 'react'

const AdviceSlip = ({ adviceSlip }) => (
  <div className="advice-slip advice-slip--center advice-slip--shadow">
    <p>
      {adviceSlip && adviceSlip.advice}
    </p>
  </div>
)

export default AdviceSlip