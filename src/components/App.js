import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header'
import LearnLetters from './LearnLetters'
import ReadSimpleWords from './ReadSimpleWords'

export default props => {
  return (
    <Router>
      <Header />
      <div id='main-page'>
        <Switch>
          <Route path='/learn-letters'>
            <LearnLetters />
          </Route>
          <Route path='/read-simple-words'>
            <ReadSimpleWords />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
