import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

export default props => (
  <>
    <div id='header-banner'>
      <img
        style={{ verticalAlign: 'middle', margin: '0 20px', width: '140px' }}
        src='../../images/logo.PNG'
        alt='logo'
      />
      <img
        style={{ verticalAlign: 'middle' }}
        src='../../images/title.PNG'
        alt='Sanskrit Program Title'
      />
      <Link
        to='/learn-letters'
        id='step-1'
        className='number-orange'
        style={{ backgroundPosition: '24px 0px' }}
      >
        <p>Learn Letters</p>
      </Link>
      <Link
        to='test-simple-syllables'
        id='step-2'
        className='number-green'
        style={{ backgroundPosition: '-79px 0' }}
      >
        <p>Test Simple Syllables</p>
      </Link>
      <Link
        to='learn-contracted-vowels'
        id='step-3'
        className='number-green'
        style={{ backgroundPosition: '-182px 0' }}
      >
        <p>Lean Contracted Vowels</p>
      </Link>
      <Link
        to='test-simple-words'
        id='step-4'
        className='number-green'
        style={{ backgroundPosition: '-285px 0' }}
      >
        <p>Test Simple Words</p>
      </Link>
      <Link
        to='learn-conjuncts'
        id='step-5'
        className='number-green'
        style={{ backgroundPosition: '-388px 0' }}
      >
        <p>Learn Conjuncts</p>
      </Link>
      <Link
        to='test-all-words'
        id='step-6'
        className='number-green'
        style={{ backgroundPosition: '-492px 0' }}
      >
        <p>Test Words with Conjuncts</p>
      </Link>
      <Link
        to='write-your-own'
        id='step-7'
        className='number-green'
        style={{ backgroundPosition: '-595px 0' }}
      >
        <p>Write Your Own Words</p>
      </Link>
    </div>
    <div id='letter-categories'>
      <label className='options-header'>Letters: </label>
      <input type='radio' id='vowels' name='radio' />
      <label htmlFor='vowels'>Vowels</label>
      <input type='radio' id='consonants' name='radio' />
      <label htmlFor='consonants'>Consonants</label>
      <input type='radio' id='semi-vowels' name='radio' />
      <label htmlFor='semi-vowels'>Semi Vowels</label>
      <input type='radio' id='sibilants' name='radio' />
      <label htmlFor='sibilants'>Sibilants</label>
      <input type='radio' id='aspirate-and-compounds' name='radio' />
      <label htmlFor='aspirate-and-compounds'>
        Aspirate and Special Compounds
      </label>
    </div>
    <div id='view-options'>
      <label className='options-header'>View Options: </label>
      <input type='radio' id='iast-only' name='radio-view' />
      <label htmlFor='iast-only'>IAST only</label>
      <input type='radio' id='iast-with-devanagari' name='radio-view' />
      <label htmlFor='iast-with-devanagari'>IAST with Devanāgarī</label>
      <input type='radio' id='devanagari-only' name='radio-view' />
      <label htmlFor='devanagari-only'>Devanāgarī only</label>
      <input type='radio' id='devanagari-with-iast' name='radio-view' />
      <label htmlFor='devanagari-with-iast'>Devanāgarī with IAST</label>
    </div>
  </>
)
