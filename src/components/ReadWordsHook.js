import React, { useState, useEffect } from 'react'
import ReadWordsExtraOptions from './ReadWordsExtraOptions'
import * as extraOptions from '../lib/extraOptions'
import * as viewModes from '../lib/viewModes'
import ReadWordsGuidance from './ReadWordsGuidance'
import transliterate from '../utils/transliterate'

const ReadSingleWord = ({
  word,
  extraOptionTranslation,
  extraOptionTransliteration
}) => (
  <div id="main-block">
    <div id="single-word">
      <div>{transliterate(word[0])}</div>
    </div>
    {!!extraOptionTranslation && <div id="translation">{word[1]}</div>}
    {!!extraOptionTransliteration && <div id="transliteration">{word[0]}</div>}
  </div>
)
export default readList => {
  const [viewMode, setViewMode] = useState(viewModes.DEVANAGARI_ONLY)
  // TODO: Simplify state to one object with flags
  const [extraOptionBySyllables, setExtraOptionBySyllables] = useState(false)
  const [extraOptionTransliteration, setExtraOptionTransliteration] = useState(
    false
  )
  const [extraOptionTranslation, setExtraOptionTranslation] = useState(false)
  const [selectedWord, setSelectedWord] = useState()

  useEffect(() => {
    if (!selectedWord) return
    console.log('selected word is, ', selectedWord)
  }, [selectedWord])

  return (
    <>
      <ReadWordsExtraOptions
        extraOptionBySyllables={extraOptionBySyllables}
        setExtraOptionBySyllables={setExtraOptionBySyllables}
        extraOptionTransliteration={extraOptionTransliteration}
        setExtraOptionTransliteration={setExtraOptionTransliteration}
        extraOptionTranslation={extraOptionTranslation}
        setExtraOptionTranslation={setExtraOptionTranslation}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />
      <div id="guidance" className="ui-widget">
        <ReadWordsGuidance />
      </div>
      <div id="main-portion">
        <div id="word-list">
          <ul>
            {readList.map(word => (
              <li key={word[0]} onClick={e => setSelectedWord(word)}>
                {viewMode === viewModes.DEVANAGARI_ONLY
                  ? transliterate(word[0])
                  : word[0]}
              </li>
            ))}
          </ul>
        </div>
        {!!selectedWord && (
          <ReadSingleWord
            word={selectedWord}
            extraOptionTranslation={extraOptionTranslation}
            extraOptionTransliteration={extraOptionTransliteration}
          />
        )}
      </div>
    </>
  )
}
