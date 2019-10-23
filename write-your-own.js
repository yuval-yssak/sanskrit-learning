function startup() {
  getWords = function() {return new array [presentedWord];};
  generalStartup();
  compositeOn = false;
  $(".special-char").button().click(function() {
    pasteTag($("input#new-word").get(0), $(this).get(0).id);
    presentedWord = $("input#new-word").val();
    showWord();
  });
  $("input#new-word").change(function() {
    presentedWord = this.value;
    showWord();
  });
  $("input#new-word").keyup(function(event) {
    presentedWord = this.value;
    showWord();
    if (presentedWord !== "" ) {hideGuidance();}
  });
  $("input#new-word").keydown(function(event) {
    if (event.which === ";".charCodeAt() || event.keyCode === 186) {
      if (compositeOn) {
        compositeOn = false;
      } else {
        compositeOn = true;
        event.preventDefault();
      }
    } else if (compositeOn) {
      if (event.which === "R".charCodeAt()) {pasteTag(this, "ṛ");}
      if (event.which === "I".charCodeAt()) {pasteTag(this, "ī");}
      if (event.which === "U".charCodeAt()) {pasteTag(this, "ū");}
      if (event.which === "A".charCodeAt()) {pasteTag(this, "ā");}
      if (event.which === "M".charCodeAt()) {pasteTag(this, "ṃ");}
      if (event.which === "H".charCodeAt()) {pasteTag(this, "ḥ");}
      if (event.which === "T".charCodeAt()) {pasteTag(this, "ṭ");}
      if (event.which === "D".charCodeAt()) {pasteTag(this, "ḍ");}
      if (event.which === "G".charCodeAt()) {pasteTag(this, "ṅ");}
      if (event.which === "Y".charCodeAt()) {pasteTag(this, "ñ");}
      if (event.which === "N".charCodeAt()) {pasteTag(this, "ṇ");}
      if (event.which === "S".charCodeAt()) {pasteTag(this, "ṣ");}
      if (event.which === "C".charCodeAt()) {pasteTag(this, "ś");}
      if (event.which === "Z".charCodeAt()) {pasteTag(this, "ṝ");}
      if (event.which === "L".charCodeAt()) {pasteTag(this, "ḷ");}
      compositeOn = false;
      event.preventDefault();
    }
  });
  $("#new-word").focus();
}

//Function Pasting The Text
function pasteTag(ControlOnWhichToBePasted,TextToBePasted) {
    //Get the position where to be paste

    var CaretPos = 0;
    // IE Support
    if (document.selection) {
        ControlOnWhichToBePasted.focus();
        var Sel = document.selection.createRange();
        Sel.moveStart('character', -ctrl.value.length);
        CaretPos = Sel.text.length;
    }
    // Firefox support
    else if (ControlOnWhichToBePasted.selectionStart || ControlOnWhichToBePasted.selectionStart == '0')
        CaretPos = ControlOnWhichToBePasted.selectionStart;

    //paste the text
    var WholeString = ControlOnWhichToBePasted.value;
    var txt1 = WholeString.substring(0, CaretPos);
    var txt2 = WholeString.substring(CaretPos, WholeString.length);
    WholeString = txt1 + TextToBePasted + txt2;
    var CaretPos = txt1.length + TextToBePasted.length;
    ControlOnWhichToBePasted.value = WholeString;

    //update The cursor position 
    setCaretPosition(ControlOnWhichToBePasted, CaretPos);
}

function setCaretPosition(ControlOnWhichToBePasted, pos) {
    if (ControlOnWhichToBePasted.setSelectionRange) {
        ControlOnWhichToBePasted.focus();
        ControlOnWhichToBePasted.setSelectionRange(pos, pos);
    }
    else if (ControlOnWhichToBePasted.createTextRange) {
        var range = ControlOnWhichToBePasted.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
}

