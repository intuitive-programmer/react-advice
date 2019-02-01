import React, { Component } from 'react'

import AdviceSlipAPI from '../../apis/AdviceSlip'
import { Grid } from '../../components/grid'

import AdviceSlip from './components/AdviceSlip'
import AdviceSlipNav from './components/AdviceSlipNav'
import SavedAdvice from './components/SavedAdvice'

class SimpleReact extends Component {
  state = {
    adviceSlipIndex: 0,
    adviceSlips: [],
    savedAdvice: [],
    displaySavedAdviceSlip: false
  }

  componentDidMount() {
    this.getAdviceSlip()
    this.hydrateStateWithLocalStorage()
  }

  getAdviceSlip = async () => {
    const { adviceSlips } = this.state
    const adviceSlip = await AdviceSlipAPI
      .getRandomAdviceSlip()
      .then(data => data.slip) 
    
    const alreadyExists = adviceSlips
      .find(slip => slip.slip_id === adviceSlip.slip_id)

    if (alreadyExists) {
      this.getAdviceSlip()
    } else {
      this.setState(state => ({
        adviceSlips: [...state.adviceSlips, adviceSlip]
      }))
    }
  }

  hydrateStateWithLocalStorage = () => {
    const savedAdvice = localStorage.getItem("savedAdvice")

    if (savedAdvice) {
      this.setState({ savedAdvice: JSON.parse(savedAdvice) })
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

  saveAdviceSlip = () => {
    const { adviceSlipIndex, adviceSlips, savedAdvice } = this.state

    const currentAdviceSlip = adviceSlips[adviceSlipIndex]
    
    const alreadySaved = savedAdvice
      .find(slip => slip.slip_id === currentAdviceSlip.slip_id)

    if (alreadySaved) return

    const updatedSavedAdvice = [...savedAdvice, currentAdviceSlip]

    this.setState({ savedAdvice: updatedSavedAdvice })

    localStorage
      .setItem("savedAdvice", JSON.stringify(updatedSavedAdvice))
  }

  deleteSavedAdviceSlip = () => {
    const { displaySavedAdviceSlip, savedAdvice } = this.state

    const updatedSavedAdvice = savedAdvice
      .filter(slip => slip.slip_id !== displaySavedAdviceSlip.slip_id)

    this.setState({ savedAdvice: updatedSavedAdvice })

    localStorage
      .setItem("savedAdvice", JSON.stringify(updatedSavedAdvice))

    this.hideAdviceSlip()
  }

  showAdviceSlip = adviceSlip => {
    this.setState({ displaySavedAdviceSlip: adviceSlip })
  }

  hideAdviceSlip = () => {
    this.setState({ displaySavedAdviceSlip: false })
  }

  render() {
    const { adviceSlipIndex, adviceSlips, savedAdvice, displaySavedAdviceSlip } = this.state
    const adviceSlip = displaySavedAdviceSlip
      ? displaySavedAdviceSlip
      : adviceSlips[adviceSlipIndex]
    return(
      <div className="main-layout">
        <Grid>
          <AdviceSlip adviceSlip={adviceSlip} />
          <AdviceSlipNav
            getPreviousAdviceSlip={this.getPreviousAdviceSlip}
            getNextAdviceSlip={this.getNextAdviceSlip}
            saveAdviceSlip={this.saveAdviceSlip}
            displaySavedAdviceSlip={displaySavedAdviceSlip}
            hideAdviceSlip={this.hideAdviceSlip}
            deleteSavedAdviceSlip={this.deleteSavedAdviceSlip}
          />
        </Grid>
        <Grid>
          <SavedAdvice
            savedAdvice={savedAdvice}
            showAdviceSlip={this.showAdviceSlip}
          />
        </Grid>
      </div>
    )
  }
}

export default SimpleReact