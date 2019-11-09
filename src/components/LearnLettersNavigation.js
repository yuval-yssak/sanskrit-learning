import React from 'react'
import * as viewModes from '../lib/viewModes'
import {
  vowels,
  consonants,
  semiVowels,
  sibilants,
  aspirateAndCompoundsAndAvagraha
} from '../lib/basicLetters'

export default ({ setSelectedGroup, setViewMode }) => (
  <>
    {' '}
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
          if (e.target.value === 'on') setViewMode(viewModes.IAST_ONLY)
        }}
      />
      <label htmlFor='iast-only'>IAST only</label>
      <input
        type='radio'
        id='iast-with-devanagari'
        name='radio-view'
        onChange={e => {
          if (e.target.value === 'on')
            setViewMode(viewModes.IAST_WITH_DEVANAGARI)
        }}
      />
      <label htmlFor='iast-with-devanagari'>IAST with Devanāgarī</label>
      <input
        type='radio'
        id='devanagari-only'
        name='radio-view'
        onChange={e => {
          if (e.target.value === 'on') setViewMode(viewModes.DEVANAGARI_ONLY)
        }}
      />
      <label htmlFor='devanagari-only'>Devanāgarī only</label>
      <input
        type='radio'
        id='devanagari-with-iast'
        name='radio-view'
        onChange={e => {
          if (e.target.value === 'on')
            setViewMode(viewModes.DEVANAGARI_WITH_IAST)
        }}
      />
      <label htmlFor='devanagari-with-iast'>Devanāgarī with IAST</label>
    </div>
  </>
)
