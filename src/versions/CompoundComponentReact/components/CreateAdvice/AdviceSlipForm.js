import React, { Component, createContext } from 'react'

const FormContext = createContext({})

const FormConsumer = FormContext.Consumer

class AdviceSlipForm extends Component {
  static Input = () => (
    <FormConsumer>
      {context => {
        const { handleInput } = context
        return (
          <textarea
            className="advice-slip-form__input advice-slip-form__input--shadow"
            onChange={handleInput}
            placeholder="Write a bit of advice..."
          />
        )
      }}
    </FormConsumer>
  )

  static Submit = () => (
    <button
      className="advice-slip-form__btn"
      type="submit"
    >CREATE</button>
  )

  handleInput = event => this.setState({ adviceSlipInput: event.target.value })

  handleSubmit = event => {
    event.preventDefault()

    const { adviceSlipInput } = this.state

    console.log("Submit", adviceSlipInput)

    event.target.reset()
  }

  state = {
    adviceSlipInput: '',
    handleInput: this.handleInput,
    handleSubmit: this.handleSubmit,
  }

  render() {
    const { state, props } = this
    return(
      <FormContext.Provider value={state}>
        <form
          className="advice-slip-form advice-slip-form--center"
          onSubmit={this.handleSubmit}
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