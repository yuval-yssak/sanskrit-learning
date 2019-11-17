let handleState,
  position,
  allVowels,
  allConsonants,
  allSemiVowels,
  allSibilants,
  allOthers,
  allLetters


export default function(source) {
  let transliteration = ""
  let currentLetter
  position = 0
  handleState = handleState0
  currentLetter = getNextLetter(source)
  while (currentLetter !== "") {
    transliteration += handleState(currentLetter)
    currentLetter = getNextLetter(source)
  }
  if (handleState === handleState1) {
    transliteration += "्"
  }
  return transliteration
}

function handleState0(currentLetter) {
  if (isVowel(currentLetter) || currentLetter === "'") {
    return transliterateLetter(currentLetter)
  } else if (isNonVowel(currentLetter)) {
    handleState = handleState1
    return transliterateLetter(currentLetter)
  } else {
    return currentLetter
  }
}

function handleState1(currentLetter) {
  if (isVowel(currentLetter)) {
    handleState = handleState0
    return transliterateContractedVowel(currentLetter)
  } else if (isNonVowel(currentLetter)) {
    return "्" + transliterateLetter(currentLetter)
  } else {
    handleState = handleState0
    return "्" + currentLetter
  }
}

export function getNextLetter(source) {
  let letter = source.charAt(position)
  if (
    (isVowel(letter) &&
      isVowel(source.charAt(position + 1)) &&
      source.charAt(position + 1) !== "ṃ" &&
      source.charAt(position + 1) !== "ḥ") ||
    (isNonVowel(letter) &&
      source.charAt(position + 1) === "h" &&
      letter !== "'")
  ) {
    position++
    letter += source.charAt(position)
  }
  position++
  return letter
}

function isVowel(letter) {
  for (var i = 0; i < getVowels().length; i++) {
    if (Object.keys(getVowels()[i])[0] === letter) {
      return true
    }
  }
  return false
}

function isNonVowel(letter) {
  return isLetter(letter) && !isVowel(letter)
}

function transliterateLetter(letter) {
  if (isNonVowel(letter) && letter !== "'") {
    letter += "a"
  }
  for (var i = 0; i < getAllLetters().length; i++) {
    if (Object.keys(getAllLetters()[i])[0] === letter) {
      return getAllLetters()[i][letter]
    }
  }
  return ""
}

function transliterateContractedVowel(letter) {
  for (var i = 0; i < getContractedVowels().length; i++) {
    if (Object.keys(getContractedVowels()[i])[0] === letter) {
      return getContractedVowels()[i][letter]
    }
  }
  return ""
}

function getVowels() {
  if (allVowels === undefined) {
    var vowels = []
    vowels.push({ a: "अ" })
    vowels.push({ ā: "आ" })
    vowels.push({ i: "इ" })
    vowels.push({ ī: "ई" })
    vowels.push({ u: "उ" })
    vowels.push({ ū: "ऊ" })
    vowels.push({ ṛ: "ऋ" })
    vowels.push({ ṝ: "ॠ" })
    vowels.push({ ḷ: "ऌ" })
    vowels.push({ ḹ: "ॡ" })
    vowels.push({ e: "ए" })
    vowels.push({ ai: "ऐ" })
    vowels.push({ o: "ओ" })
    vowels.push({ au: "औ" })
    vowels.push({ ṃ: "ं" })
    vowels.push({ ḥ: "ः" })
    allVowels = vowels
  }
  return allVowels
}

function isLetter(letter) {
  if (letter === "") {
    return false
  }
  for (var i = 0; i < getAllLetters().length; i++) {
    if (
      Object.keys(getAllLetters()[i])[0] === letter ||
      Object.keys(getAllLetters()[i])[0] === letter + "a"
    ) {
      return true
    }
  }
  return false
}

function getAllLetters() {
  if (allLetters === undefined) {
    var combinedLetters = []
    combinedLetters = combinedLetters.concat(getVowels())
    combinedLetters = combinedLetters.concat(getConsonants())
    combinedLetters = combinedLetters.concat(getSemiVowels())
    combinedLetters = combinedLetters.concat(getSibilants())
    combinedLetters = combinedLetters.concat(getAspirateAndCompounds())
    combinedLetters = combinedLetters.concat(getAvagraha())
    allLetters = combinedLetters
  }
  return allLetters
}

function getConsonants() {
  if (allConsonants === undefined) {
    var consonants = []
    consonants.push({ ka: "क" })
    consonants.push({ kha: "ख" })
    consonants.push({ ga: "ग" })
    consonants.push({ gha: "घ" })
    consonants.push({ ṅa: "ङ" })
    consonants.push({ ca: "च" })
    consonants.push({ cha: "छ" })
    consonants.push({ ja: "ज" })
    consonants.push({ jha: "झ" })
    consonants.push({ ña: "ञ" })
    consonants.push({ ṭa: "ट" })
    consonants.push({ ṭha: "ठ" })
    consonants.push({ ḍa: "ड" })
    consonants.push({ ḍha: "ढ" })
    consonants.push({ ṇa: "ण" })
    consonants.push({ ta: "त" })
    consonants.push({ tha: "थ" })
    consonants.push({ da: "द" })
    consonants.push({ dha: "ध" })
    consonants.push({ na: "न" })
    consonants.push({ pa: "प" })
    consonants.push({ pha: "फ" })
    consonants.push({ ba: "ब" })
    consonants.push({ bha: "भ" })
    consonants.push({ ma: "म" })
    allConsonants = consonants
  }
  return allConsonants
}

function getSemiVowels() {
  if (allSemiVowels === undefined) {
    var semiVowels = []
    semiVowels.push({ ya: "य" })
    semiVowels.push({ ra: "र" })
    semiVowels.push({ la: "ल" })
    semiVowels.push({ va: "व" })
    allSemiVowels = semiVowels
  }
  return allSemiVowels
}

function getSibilants() {
  if (allSibilants === undefined) {
    var sibilants = []
    sibilants.push({ śa: "श" })
    sibilants.push({ ṣa: "ष" })
    sibilants.push({ sa: "स" })
    allSibilants = sibilants
  }
  return allSibilants
}

function getAspirateAndCompounds() {
  if (allOthers === undefined) {
    var letters = []
    letters.push({ ha: "ह" })
    letters.push({ jña: "ज्ञ" })
    letters.push({ tra: "त्र" })
    letters.push({ kṣa: "क्ष" })
    allOthers = letters
  }
  return allOthers
}

function getAvagraha() {
  var avagraha = []
  avagraha.push({ "'": "ऽ" })
  return avagraha
}

function getContractedVowels() {
  var contractedVowels = []
  contractedVowels.push({ "": "्" })
  contractedVowels.push({ a: "" })
  contractedVowels.push({ ā: "ा" })
  contractedVowels.push({ i: "ि" })
  contractedVowels.push({ ī: "ी" })
  contractedVowels.push({ u: "ु" })
  contractedVowels.push({ ū: "ू" })
  contractedVowels.push({ ṛ: "ृ" })
  contractedVowels.push({ ṝ: "ॄ" })
  contractedVowels.push({ ḷ: "ॢ" })
  contractedVowels.push({ ḹ: "ॣ" })
  contractedVowels.push({ e: "े" })
  contractedVowels.push({ ai: "ै" })
  contractedVowels.push({ o: "ो" })
  contractedVowels.push({ au: "ौ" })
  contractedVowels.push({ ṃ: "ं" })
  contractedVowels.push({ ḥ: "ः" })
  return contractedVowels
}
