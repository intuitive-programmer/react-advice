import React, { Component } from 'react'

import AdviceSlipAPI from '../../apis/AdviceSlip'
import { Grid } from '../../components/grid'

import AdviceSlip from './components/AdviceSlip'
import AdviceSlipNav from './components/AdviceSlipNav'

class SimpleReact extends Component {
  state = {
    adviceSlip: null,
    adviceSlips: []
  }

  componentDidMount() {
    this.getAdviceSlip()
  }

  getAdviceSlip = async () => {
    const { adviceSlips } = this.state
    const adviceSlip = await AdviceSlipAPI
      .getRandomAdviceSlip()
      .then(data => data.slip) 
    
    const alreadyExists = adviceSlips
      .find(slip => slip.slip_id === adviceSlip.slip_id)

    if (alreadyExists) {
      this.getRandomAdviceSlip()
    } else {
      this.setState(state => ({
        adviceSlip,
        adviceSlips: [...state.adviceSlips, adviceSlip]
      }))
    }
  }

  render() {
    const { adviceSlip } = this.state
    return(
      <div className="main-layout">
        <Grid>
          <AdviceSlip adviceSlip={adviceSlip} />
          <AdviceSlipNav />
        </Grid>
      </div>
    )
  }
}

export default SimpleReact