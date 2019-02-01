import React, { Component } from 'react'

import AdviceSlipAPI from '../../apis/AdviceSlip'
import { Grid } from '../../components/grid'

import AdviceSlip from './components/AdviceSlip'
import AdviceSlipNav from './components/AdviceSlipNav'

class SimpleReact extends Component {
  state = {
    adviceSlipIndex: 0,
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
        adviceSlips: [...state.adviceSlips, adviceSlip]
      }))
    }
  }

  getPreviousAdviceSlip = () => {
    const { adviceSlipIndex } = this.state
    
    if (adviceSlipIndex > 0) {
      this.setState({ adviceSlipIndex: adviceSlipIndex - 1 })
    }
  }
  
  getNextAdviceSlip = () => {
    const { adviceSlipIndex, adviceSlips } = this.state
    
    if (adviceSlipIndex === adviceSlips.length - 1) {
      this.getAdviceSlip()
    }
    
    this.setState({ adviceSlipIndex: adviceSlipIndex + 1 })
  }

  render() {
    const { adviceSlipIndex, adviceSlips } = this.state
    const adviceSlip = adviceSlips[adviceSlipIndex]
    return(
      <div className="main-layout">
        <Grid>
          <AdviceSlip adviceSlip={adviceSlip} />
          <AdviceSlipNav
            getPreviousAdviceSlip={this.getPreviousAdviceSlip}
            getNextAdviceSlip={this.getNextAdviceSlip}
          />
        </Grid>
      </div>
    )
  }
}

export default SimpleReact