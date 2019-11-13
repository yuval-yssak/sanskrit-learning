import React from 'react'
import * as extraOptions from '../lib/extraOptions'
import * as viewModes from '../lib/viewModes'

export default ({
  extraOptionBySyllables,
  setExtraOptionBySyllables,
  extraOptionTransliteration,
  setExtraOptionTransliteration,
  extraOptionTranslation,
  setExtraOptionTranslation,
  setViewMode
}) => (
  <>
    <div id='extra-options'>
      <label className='options-header'>Letters: </label>
      <input
        type='checkbox'
        id='by-syllables'
        checked={extraOptionBySyllables}
        onChange={e => setExtraOptionBySyllables(e.target.checked)}
      />
      <label htmlFor='by-syllables'>By Syllables</label>
      <input
        type='checkbox'
        id='by-transliteration'
        checked={extraOptionTransliteration}
        onChange={e => setExtraOptionTransliteration(e.target.checked)}
      />
      <label htmlFor='by-transliteration'>Transliteration</label>
      <input
        type='checkbox'
        id='by-translation'
        checked={setExtraOptionTranslation}
        onChange={e => setExtraOptionTranslation(e.target.checked)}
      />
      <label htmlFor='by-translation'>Translation</label>}
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
      <label htmlFor='iast-only'>IAST</label>
      <input
        type='radio'
        id='devanagari-only'
        name='radio-view'
        onChange={e => {
          if (e.target.value === 'on') setViewMode(viewModes.DEVANAGARI_ONLY)
        }}
      />
      <label htmlFor='devanagari-only'>Devanāgarī</label>
    </div>
  </>
)
