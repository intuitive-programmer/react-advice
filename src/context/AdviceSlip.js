import React, { Component, createContext } from 'react'

import AdviceSlipAPI from '../apis/AdviceSlip'

export const AdviceSlipContext = createContext({})

export class AdviceSlipProvider extends Component {
  state = {
    adviceSlipIndex: 0,
    adviceSlips: [],
    isLoading: true,
    error: null,
    savedAdvice: [],
    displaySavedAdviceSlip: false
  }

  actions = {
    getPreviousAdviceSlip: () => this.getPreviousAdviceSlip(),
    getNextAdviceSlip: () => this.getNextAdviceSlip(),
    createAdviceSlip: adviceSlip => this.createAdviceSlip(adviceSlip),
    saveAdviceSlip: () => this.saveAdviceSlip(),
    deleteSavedAdviceSlip: () => this.deleteSavedAdviceSlip(),
    showAdviceSlip: adviceSlip => this.showAdviceSlip(adviceSlip),
    hideAdviceSlip: () => this.hideAdviceSlip()
  }

  componentDidMount() {
    this.getAdviceSlip()
    this.hydrateStateWithLocalStorage()
  }

  getAdviceSlip = async () => {
    const { adviceSlips } = this.state

    try {
      const adviceSlip = await AdviceSlipAPI
        .getRandomAdviceSlip()
        .then(data => data.slip) 
      
      const alreadyExists = adviceSlips
        .find(slip => slip.slip_id === adviceSlip.slip_id)

      if (alreadyExists) {
        this.getAdviceSlip()
      } else {
        this.setState(state => ({
          adviceSlips: [...state.adviceSlips, adviceSlip],
          isLoading: false,
        }))
      }
    } catch (error) {
      this.setState({
        isLoading: false,
        error
      })
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

    const exists = adviceSlips[adviceSlipIndex + 1]
    
    if (exists) {
      this.setState({ adviceSlipIndex: adviceSlipIndex + 1 })
    } else {
      this.getAdviceSlip()
      this.setState({ adviceSlipIndex: adviceSlipIndex + 1 })
    }
  }

  createAdviceSlip = adviceSlipToCreate => {
    const { savedAdvice } = this.state

    const updatedSavedAdvice = [...savedAdvice, adviceSlipToCreate]

    this.setState({ savedAdvice: updatedSavedAdvice })

    localStorage
      .setItem("savedAdvice", JSON.stringify(updatedSavedAdvice))
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
    const { children } = this.props
    return(
      <AdviceSlipContext.Provider
        value={{
          state: this.state,
          actions: this.actions
        }}
      >
        {children}
      </AdviceSlipContext.Provider>
    )
  }
}

export const AdviceSlipConsumer = AdviceSlipContext.Consumer