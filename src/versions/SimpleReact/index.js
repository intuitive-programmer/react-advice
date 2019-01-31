import React, { Component } from 'react'

import { Grid } from '../../components/grid'
import AdviceSlip from './components/AdviceSlip'
import AdviceSlipNav from './components/AdviceSlipNav'

class SimpleReact extends Component {
  render() {
    return(
      <div className="main-layout">
        <Grid>
          <AdviceSlip />
          <AdviceSlipNav />
        </Grid>
      </div>
    )
  }
}

export default SimpleReact