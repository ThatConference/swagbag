import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './css/style.css'

import App from './components/app'
import Login from './components/login'

const Root = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Login} />
        <Route exact path='/swagbag' component={App} />
      </div>
    </Router>
  )
}

render(<Root />, document.querySelector('#main'))
