import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Header from './Header'
import LearnLetters from './LearnLetters'

export default props => {
  return (
    <Router>   
      <Header />
      <Switch>
          <Route path="/learn-letters">
            <LearnLetters />
          </Route>
        </Switch>
    </Router>
  )
}
