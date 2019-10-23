function startup() {
  getWords = getSimpleSyllableWords;
  generalStartup();
  for (var i = 0; i <  getSimpleSyllableWords().length; i++) {
    var currentWord = Object.keys(getSimpleSyllableWords()[i])[0];
    $("<li>", {id:"word-"+i}).append(transliterate(currentWord)).data("the-word",currentWord).appendTo("#word-list ul");
  }
  $(document).keyup(function(event) {
    if (event.keyCode === 37) {$("#navigate-prev").click();}
    if (event.keyCode === 39) {$("#navigate-next").click();}
  });
}

function getSimpleSyllableWords() {
  var words = [];
  words.push({"eka": "1 - one"});
  words.push({"ekaḥ": "1 - one"});
  words.push({"ekaṃ": "1 - one"});
  words.push({"kakaḥ": "crow"});
  words.push({"gaṃga": "Ganges"});
  words.push({"gajaḥ": "elephant"});
  words.push({"laya": "dissolution"});
  words.push({"phala": "fruit"});
  words.push({"āma": "undigested food"});
  words.push({"nava": "9 - nine"});
  words.push({"daśa": "10 - ten"});
  words.push({"navadaśa": "19 - nineteen"});
  words.push({"śata": "100 - hundred"});
  words.push({"lakṣa": "100,000 - hundred-thousand"});
  words.push({"bakaḥ": "crane"});
  words.push({"caṭakaḥ": "sparrow"});
  words.push({"maśakaḥ": "mosquito"});
  words.push({"ajaḥ": "goat"});
  words.push({"śaśaḥ": "rabbit"});
  words.push({"haṃsaḥ": "swan"});
  words.push({"alasaḥ": "lazy"});
  words.push({"analaḥ": "fire"});
  words.push({"kakṣaḥ": "class"});
  words.push({"ghaṭaḥ": "pot"});
  words.push({"daśanaḥ": "tooth"});
  words.push({"jaladaḥ": "cloud"});
  words.push({"janagaṇaḥ": "community"});
  words.push({"naraḥ": "man"});
  words.push({"pakṣaḥ": "wing"});
  words.push({"bhaṭaḥ": "soldier"});
  words.push({"rathaḥ": "chariot"});
  return words;
}
