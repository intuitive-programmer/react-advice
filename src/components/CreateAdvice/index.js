import React from 'react'

import AdviceSlipForm from './AdviceSlipForm'

const CreateAdvice = () => (
  <div className="create-advice">
    <AdviceSlipForm>
      <AdviceSlipForm.Input />
      <AdviceSlipForm.Submit />
    </AdviceSlipForm>
  </div>
)

export default CreateAdvice