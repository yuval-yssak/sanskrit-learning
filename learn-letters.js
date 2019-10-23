var getLetters;

function startup() {
  generalStartup();
  $("#letter-categories #vowels").get(0).checked = true;
  $("#letter-categories").buttonset();
  $("#letter-categories #vowels").button("refresh");
  $("#view-options").buttonset().click(showTheLetters);
  $("#letter-categories input#vowels").data("getLettersFunction", getVowels);
  $("#letter-categories input#consonants").data("getLettersFunction", getConsonants);
  $("#letter-categories input#semi-vowels").data("getLettersFunction", getSemiVowels);
  $("#letter-categories input#sibilants").data("getLettersFunction", getSibilants);
  $("#letter-categories input#aspirate-and-compounds").data("getLettersFunction", getAspirateAndCompoundsAndAvagraha);
  $("#letter-categories input").click(assembleLetters);
  $("#letter-categories").buttonset().keyup(preventDefaultEvent);
  assembleLetters();
  onKeyShowLetter();
}

function assembleLetters() {
  var combinedLetters = [];
  $("#letter-categories input:checked").each(function() {
    getLettersPart = $(this).data("getLettersFunction");
    if (typeof getLettersPart === 'function') {
      letters = getLettersPart();
      combinedLetters = combinedLetters.concat(letters);
    }
  });
  getLetters = function () {return combinedLetters;};
  showTheLetters();
}

function appendLetter(key,val) {
  $("<div>", {id:key}).append(getOrigin(key,val) + (withTransliteration ? "<div class='transliteration'>" + getTransliteration(key,val) + "</div>" : "")).appendTo(".letters-group");
}

