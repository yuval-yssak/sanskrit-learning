import React from "react";
import * as extraOptions from "../lib/extraOptions";
import * as viewModes from "../lib/viewModes";

import Radio from "@material-ui/core/Radio";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { makeStyles } from "@material-ui/core/styles";
import RadioGroup from "@material-ui/core/RadioGroup";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3)
  }
}));

export default ({
  extraOptionBySyllables,
  setExtraOptionBySyllables,
  extraOptionTransliteration,
  setExtraOptionTransliteration,
  extraOptionTranslation,
  setExtraOptionTranslation,
  viewMode,
  setViewMode
}) => {
  const classes = useStyles();

  return (
    <div id="extra-options">
      <label className="options-header">Letters: </label>
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch
              checked={extraOptionBySyllables}
              onChange={e => setExtraOptionBySyllables(e.target.checked)}
              value={extraOptions.BY_SYLLABLES}
              color="primary"
            />
          }
          label="By Syllables"
        />
        <FormControlLabel
          control={
            <Switch
              checked={extraOptionTransliteration}
              onChange={e => setExtraOptionTransliteration(e.target.checked)}
              value={extraOptions.TRANSLITERATION}
              color="primary"
            />
          }
          label="Transliteration"
        />
        <FormControlLabel
          control={
            <Switch
              checked={extraOptionTranslation}
              onChange={e => setExtraOptionTranslation(e.target.checked)}
              value={extraOptions.TRANSLATION}
              color="primary"
            />
          }
          label="Translation"
        />
      </FormGroup>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">View Options</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={viewMode}
          onChange={e => setViewMode(e.target.value)}
        >
          <FormControlLabel
            value={viewModes.DEVANAGARI_ONLY}
            control={<Radio />}
            label="Devanagari"
          />
          <FormControlLabel
            value={viewModes.IAST_ONLY}
            control={<Radio />}
            label="IAST"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};
