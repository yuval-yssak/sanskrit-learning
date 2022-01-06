import React, { useState } from 'react'
import { lettersTransliterationMap, vowels } from '../lib/basicLetters'
import * as viewModes from '../lib/viewModes'
import LearnLettersNavigation from './LearnLettersNavigation'
import LettersGrid, { OneLetter } from './LettersGrid'
import LettersGridViewOptions from './LettersGridViewOptions'

const LearnLettersGuidance = () => (
  <div>
    <span id="guidance-head">Learn the Devanāgarī alphabet</span>
    <br />
    Choose the letters groups you wish to learn and the view options, using the
    buttons above.
    <br />
    You can challenge yourself by pressing the keys on the keyboard to view
    individual letters.
    <br />
    The order goes in the following sequence:
    123456789qwertyuiopasdfghjklzxcvbnm.
    <br />
    Pressing the spacebar displays transliteration when viewing one letter.
  </div>
)

const LearnLetters = () => {
  const [selectedGroup, setSelectedGroup] = useState(vowels)
  const [viewMode, setViewMode] = useState(viewModes.DEVANAGARI_WITH_IAST)
  const [status, setStatus] = useState(null)
  return (
    <>
      <LearnLettersNavigation setSelectedGroup={setSelectedGroup} />
      <LettersGridViewOptions setViewMode={setViewMode} />

      <div
        tabIndex={0}
        onKeyUp={(e) => {
          if (e.key === 'Escape') return setStatus(null)
          const location = '123456789qwertyuiopasdfghjklzxcvbnm'
            .split('')
            .findIndex((a) => a === e.key)

          if (location !== -1) setStatus(location)
        }}
        id="guidance"
        className="ui-widget"
      >
        <LearnLettersGuidance />
      </div>
      <div id="main-portion">
        <div id="main-block">
          {status === null ? (
            <>
              <LettersGrid group={selectedGroup} viewMode={viewMode} />
              <div className="letters-group"></div>
            </>
          ) : (
            <div id="individual-letter">
              <OneLetter
                letter={selectedGroup[status]}
                viewMode={viewMode}
                transliterationMap={lettersTransliterationMap()}
              />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default LearnLetters
