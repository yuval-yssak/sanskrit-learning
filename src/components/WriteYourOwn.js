import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import transliterate from '../utils/transliterate'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import FormGroup from '@material-ui/core/FormGroup'
import styled from 'styled-components'

const ButtonGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.1rem;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

const MyTextField = styled(TextField)`
  margin: 1rem;
`

export default function BasicTextFields() {
  const [inputValue, setInputValue] = useState('')
  const [devanagariValue, setDevanagariValue] = useState('')
  const [hideIAST, setHideIAST] = useState(false)
  const [hideDevanagari, setHideDevanagari] = useState(false)

  const handleIASTInputChange = (e) => {
    const { value } = e.target
    if (
      // input validation
      value.match(/^[abcdeghijklmnoprstuvyāīūṛṝḷḹṃḥñṭṭḍḍṇṅśṣ'0-9 ]*$/) &&
      !value.match(/[aāiīuūṛṝḷḹeoṃḥ][aāīūṛṝḷḹeo]/) &&
      !value.match(
        /a{2,}|ā{2,}|i{2,}|ī{2,}|u{2,}|ū{2,}|ṛ{2,}|ṝ{2,}|ḷ{2,}|ḹ{2,}|e{2,}|o{2,}|ṃ{2,}|ḥ{2,}/
      )
    )
      setInputValue(value)
  }

  useEffect(() => {
    setDevanagariValue(transliterate(inputValue))
  }, [inputValue])

  const iastRef = React.createRef()
  // React.useEffect(()=>
  // iastRef.current.
  // ,[])
  return (
    // <form className={classes.container} noValidate autoComplete="off">
    <Container noValidate autoComplete="off">
      <div>
        <MyTextField
          inputRef={iastRef}
          id="iast-input-value"
          label="Write in IAST"
          value={inputValue}
          margin="normal"
          onChange={handleIASTInputChange}
          inputProps={{
            style: { fontSize: '4em', color: hideIAST ? 'white' : 'inherit' },
          }}
        />
        <ButtonGrid>
          {[
            'ā',
            'ī',
            'ū',
            'ṛ',
            'ṝ',
            'ṃ',
            'ḥ',
            'ñ',
            'ṭ',
            'ḍ',
            'ṇ',
            'ṅ',
            'ś',
            'ṣ',
          ].map((letter) => (
            <button
              key={letter}
              onClick={() => {
                const $input = iastRef.current
                const { selectionStart, selectionEnd } = $input

                const tempArray = inputValue.split('')
                tempArray.splice(
                  selectionStart,
                  selectionEnd - selectionStart,
                  letter
                )
                setInputValue(tempArray.join(''))

                setTimeout(() => {
                  $input.focus()
                  $input.setSelectionRange(
                    selectionStart + 1,
                    selectionStart + 1
                  )
                }, 0)
              }}
            >
              {letter}
            </button>
          ))}
        </ButtonGrid>
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch
                checked={hideIAST}
                onChange={(e) => setHideIAST(e.target.checked)}
                color="primary"
              />
            }
            label="Hide IAST"
          />
        </FormGroup>
      </div>
      <div>
        <MyTextField
          id="devanagari-transliteration"
          label="Devanagari"
          value={devanagariValue}
          margin="normal"
          InputProps={{ readOnly: true }}
          inputProps={{
            style: {
              fontSize: '4em',
              color: hideDevanagari ? 'white' : 'inherit',
            },
          }}
        />
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch
                checked={hideDevanagari}
                onChange={(e) => setHideDevanagari(e.target.checked)}
                color="primary"
              />
            }
            label="Hide Devanagari"
          />
        </FormGroup>
      </div>
    </Container>
    // </form>
  )
}
