import React, { useState } from 'react'
import { vowels } from '../lib/basicLetters'
import * as viewModes from '../lib/viewModes'
import LearnLettersNavigation from './LearnLettersNavigation'
import LettersGrid from './LettersGrid'
import LettersGridViewOptions from './LettersGridViewOptions'

const LearnLettersGuidance = () => (
  <div>
    <span id='guidance-head'>Learn the Devanāgarī alphabet</span>
    <br />
    Choose the letters groups you wish to learn and the view options, using the
    buttons above.
    <br />
    You can challenge yourself by pressing the keys on the keyboard to view
    individual letters.
    <br />
    The order goes in the following sequence:
    123456789qwertyuiopasdfghjklzxcvbnm.
    <br />
    Pressing the spacebar displays transliteration when viewing one letter.
  </div>
)

export default () => {
  const [selectedGroup, setSelectedGroup] = useState(vowels)
  const [viewMode, setViewMode] = useState(viewModes.DEVANAGARI_WITH_IAST)

  return (
    <>
      <LearnLettersNavigation setSelectedGroup={setSelectedGroup} />
      <LettersGridViewOptions setViewMode={setViewMode} />

      <div id='guidance' className='ui-widget'>
        <LearnLettersGuidance />
      </div>
      <div id='main-portion'>
        <div id='main-block'>
          <LettersGrid group={selectedGroup} viewMode={viewMode} />
          <div className='letters-group'></div>
          <div id='individual-letter'></div>
          <input type='text' style={{ color: 'white' }}></input>
        </div>
      </div>
    </>
  )
}
