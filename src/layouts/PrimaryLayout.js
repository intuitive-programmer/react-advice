import React from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'

import NavBar from '../components/ui/NavBar'
import Home from '../pages/Home'
import SimpleReact from '../versions/SimpleReact';

const PrimaryLayout = () => (
  <div className="primary-layout">
    <NavBar />
    <main className="primary-layout__main">
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/simple-react' component={SimpleReact} />
        <Redirect to='/home' />
      </Switch>
    </main>
  </div>
)

export default PrimaryLayout