import React from 'react'
import * as viewModes from '../lib/viewModes'

export default ({ setViewMode }) => (
  <div id="view-options">
    <label className="options-header">View Options: </label>
    <input
      type="radio"
      id="iast-only"
      name="radio-view"
      onChange={(e) => {
        if (e.target.value === 'on') setViewMode(viewModes.IAST_ONLY)
      }}
    />
    <label htmlFor="iast-only">IAST only</label>
    <input
      type="radio"
      id="iast-with-devanagari"
      name="radio-view"
      onChange={(e) => {
        if (e.target.value === 'on') setViewMode(viewModes.IAST_WITH_DEVANAGARI)
      }}
    />
    <label htmlFor="iast-with-devanagari">IAST with Devanāgarī</label>
    <input
      type="radio"
      id="devanagari-only"
      name="radio-view"
      onChange={(e) => {
        if (e.target.value === 'on') setViewMode(viewModes.DEVANAGARI_ONLY)
      }}
    />
    <label htmlFor="devanagari-only">Devanāgarī only</label>
    <input
      type="radio"
      id="devanagari-with-iast"
      name="radio-view"
      onChange={(e) => {
        if (e.target.value === 'on') setViewMode(viewModes.DEVANAGARI_WITH_IAST)
      }}
    />
    <label htmlFor="devanagari-with-iast">Devanāgarī with IAST</label>
  </div>
)
