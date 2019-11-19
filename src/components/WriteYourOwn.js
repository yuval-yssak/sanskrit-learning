import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import transliterate from '../utils/transliterate'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import FormGroup from '@material-ui/core/FormGroup'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}))

export default function BasicTextFields() {
  const [inputValue, setInputValue] = useState('')
  const [devanagariValue, setDevanagariValue] = useState('')
  const [hideIAST, setHideIAST] = useState(false)

  const classes = useStyles()

  const handleIASTInputChange = e => {
    const { value } = e.target
    if (
      // TODO: create better validation rules to rule out inputs such as "uuu", "iii", "ḥḥ"
      value.match(/^[abcdeghijklmnoprstuvyāīūṛṝḷḹṃḥñṭṭḍḍṇṅśṣ'0-9 ]*$/) &&
      !value.match(/[aāiīuūṛṝḷḹeoṃḥ][aāīūṛṝḷḹeo]/)
    )
      setInputValue(value)
  }

  useEffect(() => {
    setDevanagariValue(transliterate(inputValue))
  }, [inputValue])

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <div>
        <TextField
          id="iast-input-value"
          className={classes.textField}
          label="Write in IAST"
          value={inputValue}
          margin="normal"
          onChange={handleIASTInputChange}
          inputProps={{
            style: { fontSize: '4em', color: hideIAST ? 'white' : 'inherit' }
          }}
        />
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch
                checked={hideIAST}
                onChange={e => setHideIAST(e.target.checked)}
                color="primary"
              />
            }
            label="Hide IAST"
          />
        </FormGroup>
      </div>
      <div>
        <TextField
          id="devanagari-transliteration"
          className={classes.textField}
          label="Devanagari"
          value={devanagariValue}
          margin="normal"
          InputProps={{ readOnly: true }}
          inputProps={{ style: { fontSize: '4em' } }}
        />
      </div>
    </form>
  )
}
