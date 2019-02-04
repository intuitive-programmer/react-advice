import React from 'react'

import { Grid } from '../../components/grid'

import { AdviceSlipProvider } from './contexts/AdviceSlip'

import AdviceSlip from './components/AdviceSlip'
import AdviceSlipNav from './components/AdviceSlipNav'
import SavedAdvice from './components/SavedAdvice'

const CompoundComponentReact = () => (
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

export default CompoundComponentReact