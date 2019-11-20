import { vowels, lettersTransliterationMap } from '../lib/basicLetters'
import { contractedVowelsTransliterationMap } from '../lib/contractedVowels'

const VIRAMA_IN_DEVANAGARI = '्'
const AVAGRAHA_IN_IAST = "'"

let handleState, position

export default source => {
  let transliteration = ''
  let currentLetter
  position = 0
  handleState = handleState0
  currentLetter = getNextLetter(source)
  while (currentLetter !== '') {
    transliteration += handleState(currentLetter)
    currentLetter = getNextLetter(source)
  }
  if (handleState === handleState1) {
    transliteration += VIRAMA_IN_DEVANAGARI
  }
  return transliteration
}

const handleState0 = currentLetter => {
  if (isVowel(currentLetter) || currentLetter === AVAGRAHA_IN_IAST) {
    return transliterateLetter(currentLetter)
  } else if (isNonVowel(currentLetter)) {
    handleState = handleState1
    return transliterateLetter(currentLetter)
  } else {
    return currentLetter
  }
}

const handleState1 = currentLetter => {
  if (isVowel(currentLetter)) {
    handleState = handleState0
    return contractedVowelsTransliterationMap()[currentLetter]
  } else if (isNonVowel(currentLetter)) {
    return VIRAMA_IN_DEVANAGARI + transliterateLetter(currentLetter)
  } else {
    handleState = handleState0
    return VIRAMA_IN_DEVANAGARI + currentLetter
  }
}

const getNextLetter = source => {
  let letter = source.charAt(position)
  if (
    (isVowel(letter) &&
      isVowel(source.charAt(position + 1)) &&
      source.charAt(position + 1) !== 'ṃ' &&
      source.charAt(position + 1) !== 'ḥ') ||
    (isNonVowel(letter) &&
      source.charAt(position + 1) === 'h' &&
      letter !== AVAGRAHA_IN_IAST)
  ) {
    position++
    letter += source.charAt(position)
  }
  position++
  return letter
}

const isVowel = letter => vowels().includes(letter)

const isNonVowel = letter => isLetter(letter) && !isVowel(letter)

const transliterateLetter = letter => {
  if (isNonVowel(letter) && letter !== AVAGRAHA_IN_IAST) letter += 'a'
  return lettersTransliterationMap()[letter] || ''
}

const isLetter = letter =>
  Object.keys(lettersTransliterationMap()).includes(letter) ||
  Object.keys(lettersTransliterationMap()).includes(letter + 'a')
