import React, { useState, useEffect } from 'react'
import ReadWordsExtraOptions from './ReadWordsExtraOptions'
import * as extraOptions from '../lib/extraOptions'
import * as viewModes from '../lib/viewModes'

export default () => {
  const [viewMode, setViewMode] = useState(viewModes.DEVANAGARI_WITH_IAST)

  const [extraOptionBySyllables, setExtraOptionBySyllables] = useState(false)
  const [extraOptionTransliteration, setExtraOptionTransliteration] = useState(false)
  const [extraOptionTranslation, setExtraOptionTranslation] = useState(false)
  
  useEffect(() => {
    console.log(extraOptionBySyllables)
  }, [extraOptionBySyllables])
  return (
    <>
      <ReadWordsExtraOptions
        extraOptionBySyllables={extraOptionBySyllables}
        setExtraOptionBySyllables={setExtraOptionBySyllables}
        extraOptionTransliteration={extraOptionTransliteration}
        setExtraOptionTransliteration={setExtraOptionTransliteration}
        extraOptionTranslation={extraOptionTranslation}
        setExtraOptionTranslation={setExtraOptionTranslation}
        
        setViewMode={setViewMode}
      />
      Now, the state:
      {extraOptionBySyllables}
    </>
  )
}
