var state, getLetters, selectedConsonant, appendLetter;

function startup() {
  generalStartup();
  selectedConsonant = "";
  $("#view-options").buttonset().click(onStateChanged);
  $("#show-state").buttonset().click(function() {
    var selectedView = $("#show-state input:checked");
    if (selectedView.length > 0) {
      state = selectedView.get(0).id;
    }
    onStateChanged();
  });
  onKeyShowLetter();
  $(".consonant-base").live("click", function() {
    selectedConsonant = this.id.replace("a","");
    $("#show-state #vowels-in-fives").get(0).checked = true;
    $("#show-state #vowels-in-fives").button("refresh");
    $("#show-state #vowels-in-fives").click();
  });
  $("#show-state #vowels-in-fives").get(0).checked = true;
  $("#show-state #vowels-in-fives").button("refresh");
  $("#show-state #vowels-in-fives").click();
}

function onStateChanged() {
  if (state === "consonant-base") {
    getLetters = getNonVowels;
    appendLetter = appendConsonantBasesInFives;
    showTheLetters();
    onKeyDoNotShowLetter();
  } else if (state === "vowels-in-fives") {
    getLetters = prependConsonantToVowels;
    appendLetter = appendLetterInFives;
    showTheLetters();
    onKeyShowLetter();
  } else if (state === "vowels-in-equations") {
    appendLetter = appendLetterInEquations;
    getLetters = prependConsonantToVowels;
    showTheLetters();
    onKeyDoNotShowLetter();
 }
}

function prependConsonantToVowels() {
  var vowels = getContractedVowels();
  var compounds = [];
  for (var i = 0; i < vowels.length; i++) {
    var obj = new Object();
    var key = Object.keys(vowels[i])[0];
    var val = vowels[i][key];
    if (key === "ṃ" || key === "ḥ") {
      key = "a" + key;
    }
    obj[selectedConsonant + key]=transliterateLetter(selectedConsonant) + val;
    compounds.push(obj);
  }
  return compounds;
}

function appendLetterInFives(key,val) {
  $("<div>", {id:key}).append(getOrigin(key,val) + (withTransliteration ? "<div class='transliteration'>" + getTransliteration(key,val) + "</div>" : "")).appendTo(".letters-group");
}

function  appendConsonantBasesInFives(key,val) {
  if (key !== '`') {
    $("<div>", {id:key}).addClass("consonant-base").append(getOrigin(key,val) + (withTransliteration ? "<div class='transliteration'>" + getTransliteration(key,val) + "</div>" : "")).appendTo(".letters-group");
  }
}
