import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Header from './Header'
import LearnLetters from './LearnLetters'
import ReadSimpleSyllables from './ReadSimpleSyllables'
import ReadContractedVowels from './ReadContractedVowels'
import ReadAllWords from './ReadAllWords'
import LearnContractedVowels from './LearnContractedVowels'
import WriteYourOwn from './WriteYourOwn'

export default () => {
  return (
    <Router>
      <Header />
      <div id='main-page'>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/learn-letters' />
          </Route>
          <Route path='/learn-letters'>
            <LearnLetters />
          </Route>
          <Route path='/read-simple-syllables'>
            <ReadSimpleSyllables />
          </Route>
          <Route path='/learn-contracted-vowels'>
            <LearnContractedVowels />
          </Route>
          <Route path='/read-contracted-vowels'>
            <ReadContractedVowels />
          </Route>
          <Route path='/read-all-words'>
            <ReadAllWords />
          </Route>
          <Route path='/write-your-own'>
            <WriteYourOwn />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
