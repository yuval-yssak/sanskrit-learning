import React, { useEffect } from 'react'
import $ from 'jquery'
import {
  generalStartup,
  showTheLetters,
  getVowels,
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

var getLetters

function startup() {
  generalStartup()
  $('#letter-categories #vowels').get(0).checked = true
  //   $('#letter-categories').buttonset()
  //   $('#letter-categories #vowels').button('refresh')
  //   $('#view-options')
  //     .buttonset()
  //     .click(showTheLetters)
  $('#letter-categories input#vowels').data('getLettersFunction', getVowels)
  $('#letter-categories input#consonants').data(
    'getLettersFunction',
    getConsonants
  )
  $('#letter-categories input#semi-vowels').data(
    'getLettersFunction',
    getSemiVowels
  )
  $('#letter-categories input#sibilants').data(
    'getLettersFunction',
    getSibilants
  )
  $('#letter-categories input#aspirate-and-compounds').data(
    'getLettersFunction',
    getAspirateAndCompoundsAndAvagraha
  )
  $('#letter-categories input').click(assembleLetters)
  //   $('#letter-categories')
  //     .buttonset()
  //     .keyup(preventDefaultEvent)
  assembleLetters()
  onKeyShowLetter()
}

function assembleLetters() {
  var combinedLetters = []
  $('#letter-categories input:checked').each(function() {
    const getLettersPart = $(this).data('getLettersFunction')
    if (typeof getLettersPart === 'function') {
      const letters = getLettersPart()
      combinedLetters = combinedLetters.concat(letters)
    }
  })
  getLetters = function() {
    return combinedLetters
  }
  showTheLetters()
}

function appendLetter(key, val) {
  $('<div>', { id: key })
    .append(
      getOrigin(key, val) +
        (withTransliteration
          ? "<div class='transliteration'>" +
            getTransliteration(key, val) +
            '</div>'
          : '')
    )
    .appendTo('.letters-group')
}

export default props => {
  useEffect(() => {
    startup()
  }, [])
  return (
    <>
      <div id='main-page'>
        <div id='guidance' class='ui-widget'>
          <div>
            <span id='guidance-head'>Learn the Devanāgarī alphabet</span>
            <br />
            Choose the letters groups you wish to learn and the view options,
            using the buttons above.
            <br />
            You can challenge yourself by pressing the keys on the keyboard to
            view individual letters.
            <br />
            The order goes in the following sequence:
            123456789qwertyuiopasdfghjklzxcvbnm.
            <br />
            Pressing the spacebar displays transliteration when viewing one
            letter.
          </div>
        </div>
        <div id='main-portion'>
          <div id='main-block'>
            <div className='letters-group'></div>
            <div id='individual-letter'></div>
            <input type='text' style={{ color: 'white' }}></input>
          </div>
        </div>
      </div>
    </>
  )
}
