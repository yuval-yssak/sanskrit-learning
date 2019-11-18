import React, { useState } from 'react'
import { vowels } from '../lib/basicLetters'
import * as viewModes from '../lib/viewModes'
import LettersGrid from './LettersGrid'
import LettersGridViewOptions from './LettersGridViewOptions'

export default () => {
  const [viewMode, setViewMode] = useState(viewModes.DEVANAGARI_WITH_IAST)

  return (
    <>
      <LettersGridViewOptions setViewMode={setViewMode} />
      <div id='main-portion'>
        <div id='main-block'>
          <LettersGrid group={vowels()} viewMode={viewMode} contractedVowels />
        </div>
      </div>
      {/* TODO: Add an option to select a non-vowel base, and show all combinations for that base (with an empty option), and then an option to select another one. */}
    </>
  )
}
