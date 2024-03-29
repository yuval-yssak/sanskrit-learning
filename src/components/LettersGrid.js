import React from 'react'
import * as viewModes from '../lib/viewModes'
import { lettersTransliterationMap } from '../lib/basicLetters'
import { contractedVowelsTransliterationMap } from '../lib/contractedVowels'

const LettersGrid = ({ group = [], viewMode, contractedVowels = false }) => {
  const transliterationMap = contractedVowels
    ? contractedVowelsTransliterationMap()
    : lettersTransliterationMap()

  return (
    <div className="letters-group">
      {group.map((letter) => (
        <OneLetter
          key={letter}
          letter={letter}
          viewMode={viewMode}
          transliterationMap={transliterationMap}
        />
      ))}
    </div>
  )
}

export default LettersGrid

export function OneLetter({ letter, viewMode, transliterationMap }) {
  return (
    <div id={letter}>
      {viewMode === viewModes.DEVANAGARI_ONLY && transliterationMap[letter]}
      {viewMode === viewModes.DEVANAGARI_WITH_IAST && (
        <>
          {transliterationMap[letter]}
          {<div className="transliteration">{letter}</div>}
        </>
      )}
      {viewMode === viewModes.IAST_ONLY && letter}
      {viewMode === viewModes.IAST_WITH_DEVANAGARI && (
        <>
          <div>{letter}</div>
          <div className="transliteration">{transliterationMap[letter]}</div>
        </>
      )}
    </div>
  )
}
