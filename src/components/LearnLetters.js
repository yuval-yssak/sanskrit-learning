import React, { useState } from 'react'
import {
  vowels,
  consonants,
  semiVowels,
  sibilants,
  aspirateAndCompoundsAndAvagraha,
  lettersTransliterationMap
} from '../lib/basicLetters'

const DEVANAGARI_ONLY = 'DEVANAGARI_ONLY'
const DEVANAGARI_WITH_IAST = 'DEVANAGARI_WITH_IAST'
const IAST_ONLY = 'IAST_ONLY'
const IAST_WITH_DEVANAGARI = 'IAST_WITH_DEVANAGARI'

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
    der goes in the following sequence: 123456789qwertyuiopasdfghjklzxcvbnm.
    <br />
    ng the spacebar displays transliteration when viewing one letter.
  </div>
)

const Letters = ({ group, viewMode }) => (
  <div className='letters-group'>
    {group &&
      group.map(letter => (
        <div id={letter} key={letter} style={{ width: '129px' }}>
          {viewMode === DEVANAGARI_ONLY && lettersTransliterationMap()[letter]}
          {viewMode === DEVANAGARI_WITH_IAST && (
            <>
              {lettersTransliterationMap()[letter]}
              {<div>{letter}</div>}
            </>
          )}
          {viewMode === IAST_ONLY &&  letter }
          {viewMode === IAST_WITH_DEVANAGARI && (
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
  const [viewMode, setViewMode] = useState(DEVANAGARI_WITH_IAST)

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
        <input
          type='radio'
          id='semi-vowels'
          name='radio'
          onChange={e => {
            if (e.target.value === 'on') {
              setSelectedGroup(semiVowels)
            }
          }}
        />
        <label htmlFor='semi-vowels'>Semi Vowels</label>
        <input
          type='radio'
          id='sibilants'
          name='radio'
          onChange={e => {
            if (e.target.value === 'on') {
              setSelectedGroup(sibilants)
            }
          }}
        />
        <label htmlFor='sibilants'>Sibilants</label>
        <input
          type='radio'
          id='aspirate-and-compounds'
          name='radio'
          onChange={e => {
            if (e.target.value === 'on') {
              setSelectedGroup(aspirateAndCompoundsAndAvagraha)
            }
          }}
        />
        <label htmlFor='aspirate-and-compounds'>
          Aspirate and Special Compounds
        </label>
      </div>
      <div id='view-options'>
        <label className='options-header'>View Options: </label>
        <input
          type='radio'
          id='iast-only'
          name='radio-view'
          onChange={e => {
            if (e.target.value === 'on') setViewMode(IAST_ONLY)
          }}
        />
        <label htmlFor='iast-only'>IAST only</label>
        <input
          type='radio'
          id='iast-with-devanagari'
          name='radio-view'
          onChange={e => {
            if (e.target.value === 'on') setViewMode(IAST_WITH_DEVANAGARI)
          }}
        />
        <label htmlFor='iast-with-devanagari'>IAST with Devanāgarī</label>
        <input
          type='radio'
          id='devanagari-only'
          name='radio-view'
          onChange={e => {
            if (e.target.value === 'on') setViewMode(DEVANAGARI_ONLY)
          }}
        />
        <label htmlFor='devanagari-only'>Devanāgarī only</label>
        <input
          type='radio'
          id='devanagari-with-iast'
          name='radio-view'
          onChange={e => {
            if (e.target.value === 'on') setViewMode(DEVANAGARI_WITH_IAST)
          }}
        />
        <label htmlFor='devanagari-with-iast'>Devanāgarī with IAST</label>
      </div>

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
