import React, { useState } from 'react'
import {
  vowels,
  lettersTransliterationMap
} from '../lib/basicLetters'
import * as viewModes from '../lib/viewModes'
import LearnLettersNavigation from './LearnLettersNavigation'

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
    The order goes in the following sequence: 123456789qwertyuiopasdfghjklzxcvbnm.
    <br />
    Pressing the spacebar displays transliteration when viewing one letter.
  </div>
)

const Letters = ({ group, viewMode }) => (
  <div className='letters-group'>
    {group &&
      group.map(letter => (
        <div id={letter} key={letter} style={{ width: '129px' }}>
          {viewMode === viewModes.DEVANAGARI_ONLY &&
            lettersTransliterationMap()[letter]}
          {viewMode === viewModes.DEVANAGARI_WITH_IAST && (
            <>
              {lettersTransliterationMap()[letter]}
              {<div>{letter}</div>}
            </>
          )}
          {viewMode === viewModes.IAST_ONLY && letter}
          {viewMode === viewModes.IAST_WITH_DEVANAGARI && (
            <>
              {<div>{letter}</div>}
              {lettersTransliterationMap()[letter]}
            </>
          )}
        </div>
      ))}
  </div>
)

export default () => {
  const [selectedGroup, setSelectedGroup] = useState(vowels)
  const [viewMode, setViewMode] = useState(viewModes.DEVANAGARI_WITH_IAST)

  return (
    <>
      <LearnLettersNavigation
        setSelectedGroup={setSelectedGroup}
        setViewMode={setViewMode}
      />

      <div id='guidance' className='ui-widget'>
        <LearnLettersGuidance />
      </div>
      <div id='main-portion'>
        <div id='main-block'>
          <Letters group={selectedGroup} viewMode={viewMode} />
          <div className='letters-group'></div>
          <div id='individual-letter'></div>
          <input type='text' style={{ color: 'white' }}></input>
        </div>
      </div>
    </>
  )
}
