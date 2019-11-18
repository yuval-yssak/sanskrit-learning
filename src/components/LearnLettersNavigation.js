import React from 'react'
import {
  vowels,
  consonants,
  semiVowels,
  sibilants,
  aspirateAndCompoundsAndAvagraha
} from '../lib/basicLetters'

export default ({ setSelectedGroup }) => (
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
)
