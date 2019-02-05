import React, { Component, createContext } from 'react'

import Nav from '../components/TabLayout/Nav'
import Content from '../components/TabLayout/Content'

const TabLayoutContext = createContext({})

const TabLayoutConsumer = props => {
  return(
    <TabLayoutContext.Consumer {...props}>
      {context => {
        if (!context) {
          throw new Error(
            'TabLayout compound components cannot be rendered outside the TabLayout Component.'
          )
        }
        return props.children(context)
      }}
    </TabLayoutContext.Consumer>
  )
}

class TabLayout extends Component {
  static Nav = ({children}) => (
    <TabLayoutConsumer>
      {context => {
        const { activeIndex, activateTab } = context
        return(
          <Nav
            activeIndex={activeIndex}
            activateTab={activateTab}
          >{children}</Nav>
        )
      }}
    </TabLayoutConsumer>
  )

  static Content =({children}) => (
    <TabLayoutConsumer>
      {context => {
        const { activeIndex } = context
        return(
          <Content
            activeIndex={activeIndex}
          >{children}</Content>
        )
      }}
    </TabLayoutConsumer>
  )

  activateTab = tabIndex => this.setState({ activeIndex: tabIndex })

  state = {
    activeIndex: 0,
    activateTab: this.activateTab,
  }

  render() {
    const { state, props } = this
    return(
      <TabLayoutContext.Provider value={state}>
        {props.children}
      </TabLayoutContext.Provider>  
    )
  }
}

export default TabLayout