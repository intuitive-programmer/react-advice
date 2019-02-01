import React, { Component, createContext } from 'react'

import AdviceSlipAPI from '../../../apis/AdviceSlip'

const AdviceSlipContext = createContext({})

export class AdviceSlipProvider extends Component {
  state = {
    adviceSlipIndex: 0,
    adviceSlips: [],
    isLoading: true,
    error: null
  }

  actions = {
    getPreviousAdviceSlip: () => this.getPreviousAdviceSlip(),
    getNextAdviceSlip: () => this.getNextAdviceSlip()
  }

  componentDidMount() {
    this.getAdviceSlip()
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