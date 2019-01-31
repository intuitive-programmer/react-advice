import React, { Component } from 'react'

import { Grid } from '../../components/grid'
import AdviceSlip from './components/AdviceSlip'

class SimpleReact extends Component {
  render() {
    return(
      <div className="main-layout">
        <Grid>
          <AdviceSlip />
        </Grid>
      </div>
    )
  }
}

export default SimpleReact