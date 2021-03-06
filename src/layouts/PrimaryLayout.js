import React from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'

import NavBar from '../components/ui/NavBar'
import Home from '../pages/Home'
import SimpleReact from '../versions/SimpleReact'
import ContextReact from '../versions/ContextReact'
import CompoundReact from '../versions/CompoundReact'

const PrimaryLayout = () => (
  <div className="primary-layout">
    <NavBar />
    <main className="primary-layout__main">
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/simple-react' component={SimpleReact} />
        <Route path='/react-with-context' component={ContextReact} />
        <Route path='/react-with-compound-components' component={CompoundReact} />
        <Redirect to='/home' />
      </Switch>
    </main>
  </div>
)

export default PrimaryLayout