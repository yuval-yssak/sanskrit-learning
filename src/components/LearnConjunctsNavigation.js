import React from 'react'
import {
  standardConjuncts,
  DoubleConjuncts,
  UniqueConjuncts,
  _nConjuncts,
  _r1Conjuncts,
  _r2Conjuncts,
  _tConjuncts,
  _yConjuncts,
  d_Conjuncts,
  h_Conjuncts,
  k_Conjuncts,
  r_Conjuncts,
  ś_Conjuncts,
  ṣ_Conjuncts,
} from '../lib/conjuncts'
const LearnConjunctsNavigation = ({ setSelectedGroup }) => (
  <div id="letter-categories">
    <label className="options-header">Conjunction Groups: </label>

    <input
      onChange={(e) => {
        if (e.target.value === 'on') {
          setSelectedGroup(standardConjuncts)
        }
      }}
      type="radio"
      id="standard"
      name="radio"
    />
    <label htmlFor="standard">Standard</label>
    <input
      onChange={(e) => {
        if (e.target.value === 'on') {
          setSelectedGroup(r_Conjuncts)
        }
      }}
      type="radio"
      id="r_"
      name="radio"
    />
    <label htmlFor="r_">r_</label>
    <input
      onChange={(e) => {
        if (e.target.value === 'on') {
          setSelectedGroup(_r1Conjuncts)
        }
      }}
      type="radio"
      id="_r1"
      name="radio"
    />
    <label htmlFor="_r1">_r (1)</label>
    <input
      onChange={(e) => {
        if (e.target.value === 'on') {
          setSelectedGroup(_r2Conjuncts)
        }
      }}
      type="radio"
      id="_r2"
      name="radio"
    />
    <label htmlFor="_r2">_r (2)</label>
    <input
      onChange={(e) => {
        if (e.target.value === 'on') {
          setSelectedGroup(_nConjuncts)
        }
      }}
      type="radio"
      id="_n"
      name="radio"
    />
    <label htmlFor="_n">_n</label>
    <input
      onChange={(e) => {
        if (e.target.value === 'on') {
          setSelectedGroup(DoubleConjuncts)
        }
      }}
      type="radio"
      id="double"
      name="radio"
    />
    <label htmlFor="double">ꜳ</label>
    <input
      onChange={(e) => {
        if (e.target.value === 'on') {
          setSelectedGroup(_yConjuncts)
        }
      }}
      type="radio"
      id="_y"
      name="radio"
    />
    <label htmlFor="_y">_y</label>
    <input
      onChange={(e) => {
        if (e.target.value === 'on') {
          setSelectedGroup(d_Conjuncts)
        }
      }}
      type="radio"
      id="d_"
      name="radio"
    />
    <label htmlFor="d_">d_</label>
    <input
      onChange={(e) => {
        if (e.target.value === 'on') {
          setSelectedGroup(_tConjuncts)
        }
      }}
      type="radio"
      id="_t"
      name="radio"
    />
    <label htmlFor="_t">_t</label>
    <input
      onChange={(e) => {
        if (e.target.value === 'on') {
          setSelectedGroup(ś_Conjuncts)
        }
      }}
      type="radio"
      id="ś_"
      name="radio"
    />
    <label htmlFor="ś_">ś_</label>
    <input
      onChange={(e) => {
        if (e.target.value === 'on') {
          setSelectedGroup(h_Conjuncts)
        }
      }}
      type="radio"
      id="h_"
      name="radio"
    />
    <label htmlFor="h_">h_</label>
    <input
      onChange={(e) => {
        if (e.target.value === 'on') {
          setSelectedGroup(k_Conjuncts)
        }
      }}
      type="radio"
      id="k_"
      name="radio"
    />
    <label htmlFor="k_">k_</label>
    <input
      onChange={(e) => {
        if (e.target.value === 'on') {
          setSelectedGroup(ṣ_Conjuncts)
        }
      }}
      type="radio"
      id="ṣ_"
      name="radio"
    />
    <label htmlFor="ṣ_">ṣ_</label>
    <input
      onChange={(e) => {
        if (e.target.value === 'on') {
          setSelectedGroup(UniqueConjuncts)
        }
      }}
      type="radio"
      id="unique"
      name="radio"
    />
    <label htmlFor="unique">Unique</label>
  </div>
)

export default LearnConjunctsNavigation
