import React, { Component, createContext } from 'react'

const AdviceSlipContext = createContext({})

export class AdviceSlipProvider extends Component {
  state = {

  }

  render() {
    const { children } = this.props
    return(
      <AdviceSlipContext.Provider value={this.state}>
        {children}
      </AdviceSlipContext.Provider>
    )
  }
}

export const AdviceSlipConsumer = AdviceSlipContext.Consumer