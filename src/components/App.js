import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Header'
import LearnLetters from './LearnLetters'
import ReadSimpleSyllables from './ReadSimpleSyllables'
import ReadContractedVowels from './ReadContractedVowels'
import ReadAllWords from './ReadAllWords'
import LearnConjuncts from './LearnConjuncts'
import LearnContractedVowels from './LearnContractedVowels'
import WriteYourOwn from './WriteYourOwn'
import '../style.css'

const App = () => {
  React.useEffect(() => {
    if (window.location.pathname === '/')
      window.location.replace('/learn-letters')
  }, [])
  return (
    <Router>
      <Header />
      <div id="main-page">
        <Routes>
          {/* <Route exact path="/"
            element={Navigate replace to="/learn-letters" />}
          /> */}
          <Route path="/learn-letters" element={<LearnLetters />} />
          <Route
            path="/read-simple-syllables"
            element={<ReadSimpleSyllables />}
          />

          <Route
            path="/learn-contracted-vowels"
            element={<LearnContractedVowels />}
          />

          <Route
            path="/read-contracted-vowels"
            element={<ReadContractedVowels />}
          />

          <Route path="/learn-conjuncts" element={<LearnConjuncts />} />

          <Route path="/read-all-words" element={<ReadAllWords />} />

          <Route path="/write-your-own" element={<WriteYourOwn />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
