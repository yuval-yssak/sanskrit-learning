import React, { useState } from 'react'
import { vowels, consonants, lettersTransliterationMap } from '../functions'

const LearnLettersGuidance = () => (
  <div>
    <span id='guidance-head'>Learn the Devanāgarī alphabet</span>
    <br />
    Choose the letters groups you wish to learn and the view options, using the
    buttons above.
    <br />
    n challenge yourself by pressing the keys on the keyboard to view individual
    letters.
    <br />
    der goes in the following sequence: 123456789qwertyuiopasdfghjklzxcvbnm.
    <br />
    ng the spacebar displays transliteration when viewing one letter.
  </div>
)

const Letters = ({ group }) => (
  <div className='letters-group'>
    {group &&
      group.map(letter => (
        <div id={letter} key={letter} style={{ width: '129px' }}>
          {lettersTransliterationMap()[letter]}
        </div>
      ))}
  </div>
)

export default () => {
  const [selectedGroup, setSelectedGroup] = useState(vowels)
  console.log(selectedGroup)
  return (
    <>
      <div id='letter-categories'>
        <label className='options-header'>Letters: </label>
        <input
          onChange={e => {
            if (e.target.value === 'on') {
              setSelectedGroup(vowels)
            }
          }}
          type='radio'
          id='vowels'
          name='radio'
        />
        <label htmlFor='vowels'>Vowels</label>
        <input
          onChange={e => {
            if (e.target.value === 'on') {
              setSelectedGroup(consonants)
            }
          }}
          type='radio'
          id='consonants'
          name='radio'
        />
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

      <div id='guidance' className='ui-widget'>
        <LearnLettersGuidance />
      </div>
      <div id='main-portion'>
        <div id='main-block'>
          <Letters group={selectedGroup} />
          <div className='letters-group'></div>
          <div id='individual-letter'></div>
          <input type='text' style={{ color: 'white' }}></input>
        </div>
      </div>
    </>
  )
}
