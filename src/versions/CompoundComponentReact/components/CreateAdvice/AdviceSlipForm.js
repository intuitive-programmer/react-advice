import React, { Component, createContext } from 'react'

const FormContext = createContext({})

const FormConsumer = FormContext.Consumer

class AdviceSlipForm extends Component {
  static Input = () => (
    <FormConsumer>
      {context => {
        const { handleInput } = context
        return (
          <input type="text" onChange={handleInput} />
        )
      }}
    </FormConsumer>
  )

  handleInput = event => this.setState({ adviceSlipInput: event.target.value })

  state = {
    adviceSlipInput: '',
    handleInput: this.handleInput,
  }

  render() {
    const { state, props } = this
    console.log(state)
    return(
      <FormContext.Provider value={state}>
        <form
          className="advice-slip-form"
          autoComplete="off"
          noValidate
        >
          {props.children}
        </form>
      </FormContext.Provider>
    )
  }
}

export default AdviceSlipForm