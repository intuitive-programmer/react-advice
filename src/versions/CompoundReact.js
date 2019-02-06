import React from 'react'

import { AdviceSlipProvider } from '../context/AdviceSlip'

import { Grid } from '../components/grid'

import AdviceSlip from '../components/AdviceSlip'
import AdviceSlipNav from '../components/AdviceSlipNav'
import TabLayout from '../layouts/TabLayout'
import Tab from '../components/TabLayout/Tab'
import Page from '../components/TabLayout/Page'
import SavedAdvice from '../components/SavedAdvice'
import CreateAdvice from '../components/CreateAdvice'


const CompoundReact = () => (
  <AdviceSlipProvider>
    <div className="main-layout">
      <Grid>
        <AdviceSlip />
        <AdviceSlipNav />
      </Grid>
      <TabLayout>
        <TabLayout.Nav>
          <Tab label="Saved Advice" />
          <Tab label="Create Advice" />
        </TabLayout.Nav>
        <TabLayout.Content>
          <Page render={() => <SavedAdvice />} />
          <Page render={() => <CreateAdvice />} />
        </TabLayout.Content>
      </TabLayout>
    </div>
  </AdviceSlipProvider>
)

export default CompoundReact