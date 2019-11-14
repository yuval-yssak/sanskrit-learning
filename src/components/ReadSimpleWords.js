import React, { useState, useEffect } from "react"
import ReadWordsExtraOptions from "./ReadWordsExtraOptions"
import * as extraOptions from "../lib/extraOptions"
import * as viewModes from "../lib/viewModes"
import ReadWordsGuidance from "./ReadWordsGuidance"
import simpleWordsList from "../lib/simpleWords.json"

const SingleWordTest = ({
  word,
  extraOptionTranslation,
  extraOptionTransliteration
}) => (
  <div id="main-block">
    <div id="single-word">
      <div>{word[0]}</div>
    </div>
    {extraOptionTranslation === true && <div id="translation">{word[1]}</div>}
  </div>
)
export default () => {
  const [viewMode, setViewMode] = useState(viewModes.DEVANAGARI_ONLY)
  const [extraOptionBySyllables, setExtraOptionBySyllables] = useState(false)
  const [extraOptionTransliteration, setExtraOptionTransliteration] = useState(
    false
  )
  const [extraOptionTranslation, setExtraOptionTranslation] = useState(false)
  const [selectedWord, setSelectedWord] = useState()

  useEffect(() => {
    if (!selectedWord) return
    console.log("selected word is, ", selectedWord)
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
            {simpleWordsList.map(word => (
              <li key={word[0]} onClick={e => setSelectedWord(word)}>
                {viewMode === viewModes.DEVANAGARI_ONLY
                  ? "transliterated " + word[0]
                  : word[0]}
              </li>
            ))}
          </ul>
        </div>
        {!!selectedWord && (
          <SingleWordTest
            word={selectedWord}
            extraOptionTranslation={extraOptionTranslation}
            extraOptionTransliteration={extraOptionTransliteration}
          />
        )}
      </div>
    </>
  )
}