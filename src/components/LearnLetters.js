import React, { useEffect } from 'react'
import $ from 'jquery'
import {
  generalStartup,
  showTheLetters,
  getVowels,
  vowels,
  lettersTransliterationMap,
  getConsonants,
  getSemiVowels,
  getSibilants,
  getAspirateAndCompoundsAndAvagraha,
  preventDefaultEvent,
  onKeyShowLetter,
  letters,
  getLettersPart,
  getOrigin,
  withTransliteration,
  getTransliteration
} from '../functions'

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
    {group === 'vowels' &&
      vowels().map(vowel => (
        <div id={vowel} style={{ width: '129px' }}>
          {lettersTransliterationMap()[vowel]}
        </div>
      ))}
  </div>
)

export default props => {
  useEffect(() => {
    // $("#letter-categories input#vowels").data("getLettersFunction", getVowels);
    // $("#letter-categories input#consonants").data("getLettersFunction", getConsonants);
    // $("#letter-categories input#semi-vowels").data("getLettersFunction", getSemiVowels);
    // $("#letter-categories input#sibilants").data("getLettersFunction", getSibilants);
    // $("#letter-categories input#aspirate-and-compounds").data("getLettersFunction", getAspirateAndCompoundsAndAvagraha);
  }, [])
  return (
    <>
      <div id='guidance' class='ui-widget'>
        <LearnLettersGuidance />
      </div>
      <div id='main-portion'>
        <div id='main-block'>
          <Letters group={'vowels'} />
          <div className='letters-group'></div>
          <div id='individual-letter'></div>
          <input type='text' style={{ color: 'white' }}></input>
        </div>
      </div>
    </>
  )
}
