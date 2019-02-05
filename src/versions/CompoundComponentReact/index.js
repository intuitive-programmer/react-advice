import React from 'react'

import { Grid } from '../../components/grid'

import { AdviceSlipProvider } from './contexts/AdviceSlip'

import AdviceSlip from './components/AdviceSlip'
import AdviceSlipNav from './components/AdviceSlipNav'

import TabLayout from '../../layouts/TabLayout'
import Tab from './components/TabLayout/Tab'
import SavedAdvice from './components/SavedAdvice'

const CompoundComponentReact = () => (
  <AdviceSlipProvider>
    <div className="main-layout">
      <Grid>
        <AdviceSlip />
        <AdviceSlipNav />
      </Grid>
      <TabLayout>
        <TabLayout.Nav>
          <Tab label="Saved Advice" />
        </TabLayout.Nav>
        <TabLayout.Content>
          <SavedAdvice />
        </TabLayout.Content>
      </TabLayout>
    </div>
  </AdviceSlipProvider>
)

export default CompoundComponentReact