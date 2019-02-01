import React, { Component } from 'react'

import { Grid } from '../../components/grid'

import { AdviceSlipProvider } from './contexts/AdviceSlip'

import AdviceSlip from './components/AdviceSlip'
import AdviceSlipNav from './components/AdviceSlipNav'
import SavedAdvice from './components/SavedAdvice'

class ContextReact extends Component {
  state = {
    savedAdvice: [],
    displaySavedAdviceSlip: false
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage()
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

    const exists = adviceSlips[adviceSlipIndex + 1]
    
    if (exists) {
      this.setState({ adviceSlipIndex: adviceSlipIndex + 1 })
    } else {
      this.getAdviceSlip()
      this.setState({ adviceSlipIndex: adviceSlipIndex + 1 })
    }
  }

  saveAdviceSlip = () => {
    const { adviceSlipIndex, adviceSlips, savedAdvice, error } = this.state

    const currentAdviceSlip = adviceSlips[adviceSlipIndex]
    
    if (error) return

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
    const {
      savedAdvice,
      displaySavedAdviceSlip
    } = this.state

    return(
      <AdviceSlipProvider>
        <div className="main-layout">
          <Grid>
            <AdviceSlip />
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
      </AdviceSlipProvider>
    )
  }
}

export default ContextReact