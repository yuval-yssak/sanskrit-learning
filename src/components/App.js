import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header'
import LearnLetters from './LearnLetters'
import ReadSimpleSyllables from './ReadSimpleSyllables'
import ReadSimpleWords from './ReadSimpleWords'
import ReadAllWords from './ReadAllWords'

export default props => {
  return (
    <Router>
      <Header />
      <div id='main-page'>
        <Switch>
          <Route path='/learn-letters'>
            <LearnLetters />
          </Route>
          <Route path='/read-simple-syllables'>
            <ReadSimpleSyllables />
          </Route>
          <Route path='/read-simple-words'>
            <ReadSimpleWords />
          </Route>
          <Route path='/read-all-words'>
            <ReadAllWords />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
