import React, { useState } from 'react'
import { standardConjuncts } from '../lib/conjuncts'
import * as viewModes from '../lib/viewModes'
import transliterate from '../utils/transliterate'
import LearnConjunctsNavigation from './LearnConjunctsNavigation'
import LettersGridViewOptions from './LettersGridViewOptions'

const ConjunctsGrid = ({ group = [], viewMode }) => {
  return (
    <div className="letters-group">
      {group.map((conjunct) => (
        <OneExpression key={conjunct} conjunct={conjunct} viewMode={viewMode} />
      ))}
    </div>
  )
}

export function OneExpression({ conjunct, viewMode }) {
  return (
    <div id={conjunct}>
      {viewMode === viewModes.DEVANAGARI_ONLY && transliterate(conjunct)}
      {viewMode === viewModes.DEVANAGARI_WITH_IAST && (
        <>
          {transliterate(conjunct)}
          {<div className="transliteration">{conjunct}</div>}
        </>
      )}
      {viewMode === viewModes.IAST_ONLY && conjunct}
      {viewMode === viewModes.IAST_WITH_DEVANAGARI && (
        <>
          <div>{conjunct}</div>
          <div className="transliteration">{transliterate(conjunct)}</div>
        </>
      )}
    </div>
  )
}
const LearnConjuncts = () => {
  const [selectedGroup, setSelectedGroup] = useState(standardConjuncts)
  const [viewMode, setViewMode] = useState(viewModes.DEVANAGARI_WITH_IAST)
  return (
    <>
      <LearnConjunctsNavigation setSelectedGroup={setSelectedGroup} />
      <LettersGridViewOptions setViewMode={setViewMode} />

      <div id="main-portion">
        <div id="main-block">
          <ConjunctsGrid group={selectedGroup} viewMode={viewMode} />
          <div className="letters-group"></div>
        </div>
      </div>
    </>
  )
}

export default LearnConjuncts
