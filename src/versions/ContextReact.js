import React from 'react'

import { AdviceSlipProvider } from '../context/AdviceSlip'

import { Grid } from '../components/grid'

import AdviceSlip from '../components/AdviceSlip'
import AdviceSlipNav from '../components/AdviceSlipNav'
import SavedAdvice from '../components/SavedAdvice'

const ContextReact = () => (
  <AdviceSlipProvider>
    <div className="main-layout">
      <Grid>
        <AdviceSlip />
        <AdviceSlipNav />
      </Grid>
      <Grid>
        <SavedAdvice />
      </Grid>
    </div>
  </AdviceSlipProvider>
)

export default ContextReact