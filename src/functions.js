import $ from 'jquery'

var handleState,
  position,
  withTransliteration,
  selectedLetterOrigin,
  selectedLetterTransliteration,
  getOrigin,
  getTransliteration,
  allVowels,
  allNonVowels,
  allConsonants,
  allSemiVowels,
  allSibilants,
  allOthers,
  allLetters,
  presentedWord,
  presentedWordIndex,
  getWords

export function generalStartup() {
  // $('#view-options').buttonset()
  // $('#extra-options').buttonset()
  $('#view-options input, #extra-options input').click(function() {
    showWord()
  })
  if ($('#extra-options #by-translation').length > 0) {
    $('#extra-options #by-translation').get(0).checked = false
    // $('#extra-options #by-translation').button('refresh')
  }
  if ($('#extra-options #by-transliteration').length > 0) {
    $('#extra-options #by-transliteration').get(0).checked = false
    // $('#extra-options #by-transliteration').button('refresh')
  }
  if ($('#extra-options #by-syllables').length > 0) {
    $('#extra-options #by-syllables').get(0).checked = false
    // $('#extra-options #by-syllables').button('refresh')
  }
  if ($('#view-options #devanagari-only').length > 0) {
    $('#view-options #devanagari-only').get(0).checked = true
    // $('#view-options #devanagari-only').button('refresh')
  }

  // $('#navigate-next')
  //   .button()
  //   .click(function() {
  //     if (
  //       presentedWordIndex === undefined ||
  //       presentedWordIndex === 'word-' + ($('#word-list li').length - 1)
  //     ) {
  //       presentedWordIndex = 'word--1'
  //     }
  //     var nextId = presentedWordIndex.replace('word-', '')
  //     nextId = eval(nextId) + 1
  //     nextId = 'word-' + nextId
  //     changeAndShowWord('left', nextId)
  //   })
  // $('#navigate-prev')
  //   .button()
  //   .click(function() {
  //     if (presentedWordIndex === undefined || presentedWordIndex === 'word-0') {
  //       presentedWordIndex = 'word-' + $('#word-list li').length
  //     }
  //     var previousId = presentedWordIndex.replace('word-', '')
  //     previousId = eval(previousId) - 1
  //     previousId = 'word-' + previousId
  //     changeAndShowWord('right', previousId)
  //   })
  $('div#word-list li').on('click', function() {
    changeAndShowWord('left', this.id)
  })
  if (
    $('#view-options #devanagari, #view-options #devanagari-with-iast').length >
    0
  ) {
    $('#view-options #devanagari, #view-options #devanagari-with-iast').get(
      0
    ).checked = true
  }
  // $('#view-options #devanagari, #view-options #devanagari-with-iast').button(
  //   'refresh'
  // )
  $('#view-options, #show-state').keyup(preventDefaultEvent)
  $(document).keydown(function(event) {
    if (event.which === ' '.charCodeAt()) {
      if (!withTransliteration) showHint()
    }
  })
  $(window).resize(orderInFives)
  $('#guidance').click(hideGuidance)
}

export function changeAndShowWord(direction, wordID) {
  presentedWord = $('div#word-list li#' + wordID).data('the-word')
  presentedWordIndex = wordID
  showWord(direction)
}

export function hideGuidance() {
  if ($('#guidance').is(':visible')) {
    $('#guidance').hide('slide', function() {
      $("<button id='guidance-handle'>Show Hint</button>")
        // .button()
        .click(function() {
          $(this).hide()
          $('#guidance').show('slide')
          $('#main-portion').css('margin-left', $('#guidance').css('width'))
          orderInFives()
        })
        .insertBefore('#guidance')
      $('#main-portion').css('margin-left', $('#guidance-handle').css('width'))
      orderInFives()
    })
  }
}

export function onKeyDoNotShowLetter() {
  $(document).unbind('keyup')
}
export function onKeyShowLetter() {
  $(document).keyup(function(event) {
    var newKey = NaN
    if (event.which === ' '.charCodeAt()) {
      if (!withTransliteration) hideHint()
    }
    if (event.which === '1'.charCodeAt()) {
      newKey = 1
    }
    if (event.which === '2'.charCodeAt()) {
      newKey = 2
    }
    if (event.which === '3'.charCodeAt()) {
      newKey = 3
    }
    if (event.which === '4'.charCodeAt()) {
      newKey = 4
    }
    if (event.which === '5'.charCodeAt()) {
      newKey = 5
    }
    if (event.which === '6'.charCodeAt()) {
      newKey = 6
    }
    if (event.which === '7'.charCodeAt()) {
      newKey = 7
    }
    if (event.which === '8'.charCodeAt()) {
      newKey = 8
    }
    if (event.which === '9'.charCodeAt()) {
      newKey = 9
    }
    if (event.which === '0'.charCodeAt()) {
      newKey = 10
    }
    if (event.which === 'Q'.charCodeAt()) {
      newKey = 11
    }
    if (event.which === 'W'.charCodeAt()) {
      newKey = 12
    }
    if (event.which === 'E'.charCodeAt()) {
      newKey = 13
    }
    if (event.which === 'R'.charCodeAt()) {
      newKey = 14
    }
    if (event.which === 'T'.charCodeAt()) {
      newKey = 15
    }
    if (event.which === 'Y'.charCodeAt()) {
      newKey = 16
    }
    if (event.which === 'U'.charCodeAt()) {
      newKey = 17
    }
    if (event.which === 'I'.charCodeAt()) {
      newKey = 18
    }
    if (event.which === 'O'.charCodeAt()) {
      newKey = 19
    }
    if (event.which === 'P'.charCodeAt()) {
      newKey = 20
    }
    if (event.which === 'A'.charCodeAt()) {
      newKey = 21
    }
    if (event.which === 'S'.charCodeAt()) {
      newKey = 22
    }
    if (event.which === 'D'.charCodeAt()) {
      newKey = 23
    }
    if (event.which === 'F'.charCodeAt()) {
      newKey = 24
    }
    if (event.which === 'G'.charCodeAt()) {
      newKey = 25
    }
    if (event.which === 'H'.charCodeAt()) {
      newKey = 26
    }
    if (event.which === 'J'.charCodeAt()) {
      newKey = 27
    }
    if (event.which === 'K'.charCodeAt()) {
      newKey = 28
    }
    if (event.which === 'L'.charCodeAt()) {
      newKey = 29
    }
    if (event.which === 'Z'.charCodeAt()) {
      newKey = 30
    }
    if (event.which === 'X'.charCodeAt()) {
      newKey = 31
    }
    if (event.which === 'C'.charCodeAt()) {
      newKey = 32
    }
    if (event.which === 'V'.charCodeAt()) {
      newKey = 33
    }
    if (event.which === 'B'.charCodeAt()) {
      newKey = 34
    }
    if (event.which === 'N'.charCodeAt()) {
      newKey = 35
    }
    if (event.which === 'M'.charCodeAt()) {
      newKey = 36
    }
    if (!isNaN(newKey)) {
      // var key = Object.keys(getLetters()[newKey - 1])[0]
      // var val = getLetters()[newKey - 1][key]
      // selectedLetterOrigin = getOrigin(key, val)
      // selectedLetterTransliteration = getTransliteration(key, val)
      // showLetter()
    }
  })
}

export function getNonVowels() {
  if (allNonVowels === undefined) {
    var combinedLetters = []
    combinedLetters = combinedLetters.concat(getConsonants())
    combinedLetters = combinedLetters.concat(getSemiVowels())
    combinedLetters = combinedLetters.concat(getSibilants())
    combinedLetters = combinedLetters.concat(getAspirateAndCompounds())
    allNonVowels = combinedLetters
  }
  return allNonVowels
}

export function getAllLetters() {
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

function getVowels() {
  if (allVowels === undefined) {
    var vowels = []
    vowels.push({ a: 'अ' })
    vowels.push({ ā: 'आ' })
    vowels.push({ i: 'इ' })
    vowels.push({ ī: 'ई' })
    vowels.push({ u: 'उ' })
    vowels.push({ ū: 'ऊ' })
    vowels.push({ ṛ: 'ऋ' })
    vowels.push({ ṝ: 'ॠ' })
    vowels.push({ ḷ: 'ऌ' })
    vowels.push({ ḹ: 'ॡ' })
    vowels.push({ e: 'ए' })
    vowels.push({ ai: 'ऐ' })
    vowels.push({ o: 'ओ' })
    vowels.push({ au: 'औ' })
    vowels.push({ ṃ: 'ं' })
    vowels.push({ ḥ: 'ः' })
    allVowels = vowels
  }
  return allVowels
}

export const vowels = () => [
  'a',
  'ā',
  'i',
  'ī',
  'u',
  'ū',
  'ṛ',
  'ṝ',
  'ḷ',
  'ḹ',
  'e',
  'a',
  'o',
  'a',
  'ṃ',
  'ḥ'
]

export const consonants = () => [
  'ka',
  'kha',
  'ga',
  'gha',
  'ṅa',
  'ca',
  'cha',
  'ja',
  'jha',
  'ña',
  'ṭa',
  'ṭha',
  'ḍa',
  'ḍha',
  'ṇa',
  'ta',
  'tha',
  'da',
  'dha',
  'na',
  'pa',
  'pha',
  'ba',
  'bha',
  'ma'
]

export const lettersTransliterationMap = () => ({
  a: 'अ',
  ā: 'आ',
  i: 'इ',
  ī: 'ई',
  u: 'उ',
  ū: 'ऊ',
  ṛ: 'ऋ',
  ṝ: 'ॠ',
  ḷ: 'ऌ',
  ḹ: 'ॡ',
  e: 'ए',
  ai: 'ऐ',
  o: 'ओ',
  au: 'औ',
  ṃ: 'ं',
  ḥ: 'ः',
  ka: 'क',
  kha: 'ख',
  ga: 'ग',
  gha: 'घ',
  ṅa: 'ङ',
  ca: 'च',
  cha: 'छ',
  ja: 'ज',
  jha: 'झ',
  ña: 'ञ',
  ṭa: 'ट',
  ṭha: 'ठ',
  ḍa: 'ड',
  ḍha: 'ढ',
  ṇa: 'ण',
  ta: 'त',
  tha: 'थ',
  da: 'द',
  dha: 'ध',
  na: 'न',
  pa: 'प',
  pha: 'फ',
  ba: 'ब',
  bha: 'भ',
  ma: 'म'
})

export function getContractedVowels() {
  var contractedVowels = []
  contractedVowels.push({ '': '्' })
  contractedVowels.push({ a: '' })
  contractedVowels.push({ ā: 'ा' })
  contractedVowels.push({ i: 'ि' })
  contractedVowels.push({ ī: 'ी' })
  contractedVowels.push({ u: 'ु' })
  contractedVowels.push({ ū: 'ू' })
  contractedVowels.push({ ṛ: 'ृ' })
  contractedVowels.push({ ṝ: 'ॄ' })
  contractedVowels.push({ ḷ: 'ॢ' })
  contractedVowels.push({ ḹ: 'ॣ' })
  contractedVowels.push({ e: 'े' })
  contractedVowels.push({ ai: 'ै' })
  contractedVowels.push({ o: 'ो' })
  contractedVowels.push({ au: 'ौ' })
  contractedVowels.push({ ṃ: 'ं' })
  contractedVowels.push({ ḥ: 'ः' })
  return contractedVowels
}

export function getConsonants() {
  if (allConsonants === undefined) {
    var consonants = []
    consonants.push({ ka: 'क' })
    consonants.push({ kha: 'ख' })
    consonants.push({ ga: 'ग' })
    consonants.push({ gha: 'घ' })
    consonants.push({ ṅa: 'ङ' })
    consonants.push({ ca: 'च' })
    consonants.push({ cha: 'छ' })
    consonants.push({ ja: 'ज' })
    consonants.push({ jha: 'झ' })
    consonants.push({ ña: 'ञ' })
    consonants.push({ ṭa: 'ट' })
    consonants.push({ ṭha: 'ठ' })
    consonants.push({ ḍa: 'ड' })
    consonants.push({ ḍha: 'ढ' })
    consonants.push({ ṇa: 'ण' })
    consonants.push({ ta: 'त' })
    consonants.push({ tha: 'थ' })
    consonants.push({ da: 'द' })
    consonants.push({ dha: 'ध' })
    consonants.push({ na: 'न' })
    consonants.push({ pa: 'प' })
    consonants.push({ pha: 'फ' })
    consonants.push({ ba: 'ब' })
    consonants.push({ bha: 'भ' })
    consonants.push({ ma: 'म' })
    allConsonants = consonants
  }
  return allConsonants
}

export function getSemiVowels() {
  if (allSemiVowels === undefined) {
    var semiVowels = []
    semiVowels.push({ ya: 'य' })
    semiVowels.push({ ra: 'र' })
    semiVowels.push({ la: 'ल' })
    semiVowels.push({ va: 'व' })
    allSemiVowels = semiVowels
  }
  return allSemiVowels
}

export function getSibilants() {
  if (allSibilants === undefined) {
    var sibilants = []
    sibilants.push({ śa: 'श' })
    sibilants.push({ ṣa: 'ष' })
    sibilants.push({ sa: 'स' })
    allSibilants = sibilants
  }
  return allSibilants
}

export function getAspirateAndCompoundsAndAvagraha() {
  return getAspirateAndCompounds().concat(getAvagraha())
}

export function getAspirateAndCompounds() {
  if (allOthers === undefined) {
    var letters = []
    letters.push({ ha: 'ह' })
    letters.push({ jña: 'ज्ञ' })
    letters.push({ tra: 'त्र' })
    letters.push({ kṣa: 'क्ष' })
    allOthers = letters
  }
  return allOthers
}

export function getAvagraha() {
  var avagraha = []
  avagraha.push({ "'": 'ऽ' })
  return avagraha
}

export function transliterate(source) {
  var transliteration = ''
  var currentLetter
  position = 0
  handleState = handleState0
  currentLetter = getNextLetter(source)
  while (currentLetter !== '') {
    transliteration += handleState(currentLetter)
    currentLetter = getNextLetter(source)
  }
  if (handleState === handleState1) {
    transliteration += '्'
  }
  return transliteration
}

export function getSyllablesIast(source) {
  var syllables = []
  var currentSyllable = -1
  handleState = handleState0
  position = 0
  var letter = getNextLetter(source)
  while (letter !== '') {
    if (
      !isLetter(letter) ||
      (handleState === handleState0 && letter !== 'ḥ' && letter != 'ṃ')
    ) {
      currentSyllable++
      syllables[currentSyllable] = ''
    }
    syllables[currentSyllable] += letter
    handleState(letter)
    letter = getNextLetter(source)
  }
  return syllables
}

export function getSyllables(source) {
  var syllables = []
  var currentSyllable = -1
  handleState = handleState0
  position = 0
  var letter = getNextLetter(source)
  while (letter !== '') {
    if (!isLetter(letter) && handleState === handleState1) {
      syllables[currentSyllable] += handleState(letter)
    }
    if (handleState === handleState0 && letter !== 'ḥ' && letter != 'ṃ') {
      currentSyllable++
      syllables[currentSyllable] = ''
    }
    syllables[currentSyllable] += handleState(letter)
    letter = getNextLetter(source)
  }
  if (handleState === handleState1) {
    syllables[currentSyllable] += '्'
  }
  return syllables
}

export function getNextLetter(source) {
  var letter = source.charAt(position)
  if (
    (isVowel(letter) &&
      isVowel(source.charAt(position + 1)) &&
      source.charAt(position + 1) !== 'ṃ' &&
      source.charAt(position + 1) !== 'ḥ') ||
    (isNonVowel(letter) &&
      source.charAt(position + 1) === 'h' &&
      letter !== "'")
  ) {
    position++
    letter += source.charAt(position)
  }
  position++
  return letter
}

export function handleState0(currentLetter) {
  if (isVowel(currentLetter) || currentLetter === "'") {
    return transliterateLetter(currentLetter)
  } else if (isNonVowel(currentLetter)) {
    handleState = handleState1
    return transliterateLetter(currentLetter)
  } else {
    return currentLetter
  }
}

export function handleState1(currentLetter) {
  if (isVowel(currentLetter)) {
    handleState = handleState0
    return transliterateContractedVowel(currentLetter)
  } else if (isNonVowel(currentLetter)) {
    return '्' + transliterateLetter(currentLetter)
  } else {
    handleState = handleState0
    return '्' + currentLetter
  }
}

export function isLetter(letter) {
  if (letter === '') {
    return false
  }
  for (var i = 0; i < getAllLetters().length; i++) {
    if (
      Object.keys(getAllLetters()[i])[0] === letter ||
      Object.keys(getAllLetters()[i])[0] === letter + 'a'
    ) {
      return true
    }
  }
  return false
}

export function isVowel(letter) {
  for (var i = 0; i < getVowels().length; i++) {
    if (Object.keys(getVowels()[i])[0] === letter) {
      return true
    }
  }
  return false
}

export function isNonVowel(letter) {
  return isLetter(letter) && !isVowel(letter)
}

export function transliterateLetter(letter) {
  if (isNonVowel(letter) && letter !== "'") {
    letter += 'a'
  }
  for (var i = 0; i < getAllLetters().length; i++) {
    if (Object.keys(getAllLetters()[i])[0] === letter) {
      return getAllLetters()[i][letter]
    }
  }
  return ''
}

export function transliterateContractedVowel(letter) {
  for (var i = 0; i < getContractedVowels().length; i++) {
    if (Object.keys(getContractedVowels()[i])[0] === letter) {
      return getContractedVowels()[i][letter]
    }
  }
  return ''
}

export function orderInFives() {
  var n = 5
  $('.letters-group div').width($('.letters-group').width() / n)
}

export function showHint() {
  if ($('#individual-letter .transliteration').length === 0) {
    $('#individual-letter').append(
      "<div class='transliteration'>" +
        (selectedLetterTransliteration === undefined
          ? ''
          : selectedLetterTransliteration) +
        '</div>'
    )
  }
}

export function hideHint() {
  $('#individual-letter .transliteration').remove()
}

export function showLetter() {
  $('.letters-group').hide()
  $('#individual-letter').hide()
  $('#individual-letter').empty()
  $('#individual-letter').append(selectedLetterOrigin)
  $('#individual-letter').show()
  if (withTransliteration) {
    showHint()
  }
}

export function showTheLetters() {
  $('.letters-group div').remove()
  $('#equations').empty()
  var selectedView = $('#view-options input:checked')
  var viewOption = ''
  if (selectedView.length > 0) {
    viewOption = selectedView.get(0).id
  }
  if (viewOption === 'iast-only') {
    getOrigin = function(key, val) {
      return key
    }
    getTransliteration = function(key, val) {
      return val
    }
    withTransliteration = false
  } else if (viewOption === 'iast-with-devanagari') {
    getOrigin = function(key, val) {
      return key
    }
    getTransliteration = function(key, val) {
      return val
    }
    withTransliteration = true
  } else if (viewOption === 'devanagari-only') {
    getOrigin = function(key, val) {
      return val
    }
    getTransliteration = function(key, val) {
      return key
    }
    withTransliteration = false
  } else if (viewOption === 'devanagari-with-iast') {
    getOrigin = function(key, val) {
      return val
    }
    getTransliteration = function(key, val) {
      return key
    }
    withTransliteration = true
  } else {
    getOrigin = function(key, val) {
      return ''
    }
    getTransliteration = function(key, val) {
      return ''
    }
  }
  // for (var i = 0; i < getLetters().length; i++) {
  // var key = Object.keys(getLetters()[i])[0]
  // var val = getLetters()[i][key]
  // appendLetter(key, val, i)
  // }
  $('#individual-letter').empty()
  selectedLetterOrigin = selectedLetterTransliteration = ''
  $('.letters-group').show()
  orderInFives()
}

export function preventDefaultEvent(event) {
  if (selectedLetterOrigin !== '') {
    event.preventDefault()
  }
}

export function getWordElements(source) {
  if (source === 'ya') {
    var a = 1
  }
  var wordElements = []
  var elementCount = 0
  position = 0
  var letter = getNextLetter(source)
  while (letter !== '') {
    if (isLetter(letter)) {
      if (letter === 'aḥ') {
        letter = 'ḥ'
      }
      if (letter === 'aṃ') {
        letter = 'ṃ'
      }
      wordElements[elementCount] = transliterateLetter(letter)
      if (isNonVowel(letter) && letter !== "'") {
        wordElements[elementCount] += '्'
      }
      elementCount++
    }
    letter = getNextLetter(source)
  }
  return wordElements
}

/* hoverIntent r6 // 2011.02.26 // jQuery 1.5.1+ // by Brian Cherne
 * <http://cherne.net/brian/resources/jquery.hoverIntent.html> */
;(function($) {
  $.fn.hoverIntent = function(f, g) {
    var cfg = { sensitivity: 7, interval: 100, timeout: 0 }
    cfg = $.extend(cfg, g ? { over: f, out: g } : f)
    var cX, cY, pX, pY
    var track = function(ev) {
      cX = ev.pageX
      cY = ev.pageY
    }
    var compare = function(ev, ob) {
      ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t)
      if (Math.abs(pX - cX) + Math.abs(pY - cY) < cfg.sensitivity) {
        $(ob).unbind('mousemove', track)
        ob.hoverIntent_s = 1
        return cfg.over.apply(ob, [ev])
      } else {
        pX = cX
        pY = cY
        ob.hoverIntent_t = setTimeout(function() {
          compare(ev, ob)
        }, cfg.interval)
      }
    }
    var delay = function(ev, ob) {
      ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t)
      ob.hoverIntent_s = 0
      return cfg.out.apply(ob, [ev])
    }
    var handleHover = function(e) {
      var ev = $.extend({}, e)
      var ob = this
      if (ob.hoverIntent_t) {
        ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t)
      }
      if (e.type == 'mouseenter') {
        pX = ev.pageX
        pY = ev.pageY
        $(ob).bind('mousemove', track)
        if (ob.hoverIntent_s != 1) {
          ob.hoverIntent_t = setTimeout(function() {
            compare(ev, ob)
          }, cfg.interval)
        }
      } else {
        $(ob).unbind('mousemove', track)
        if (ob.hoverIntent_s == 1) {
          ob.hoverIntent_t = setTimeout(function() {
            delay(ev, ob)
          }, cfg.timeout)
        }
      }
    }
    return this.bind('mouseenter', handleHover).bind('mouseleave', handleHover)
  }
})($)

export function collapsePanel() {
  $('#word-list-handle').toggle(true)
  $('#word-list').fadeOut('slow')
  $('html').unbind('click')
}

export function expandPanel() {
  $('#word-list-handle').toggle(false)
  $('#word-list').fadeIn('slow')
  //$('html').click(collapsePanel);
}

$(document).ready(function() {
  /* expandPanel on click - good for mobile devices without mouse */
  $('#word-list-handle').click(expandPanel)
  expandPanel()
  /* show panel on mouse hover */
  $('#word-list-handle').hoverIntent({
    over: expandPanel,
    timeout: 700,
    out: function() {
      return true
    }
  })
  /* hide panel when leaving panel */
  $('#word-list').hoverIntent({
    over: function() {
      return true
    },
    timeout: 700,
    interval: 50,
    out: function() {
      return true
    }
  })
})

export function appendLetterInEquations(key, val, syllableCount) {
  var elements = getWordElements(key)
  if (key === "'") key = 'avagraha'
  if (elements.length > 0) {
    $('<div>', { id: 'syllable_' + syllableCount }).appendTo('#equations')
    $('div#syllable_' + syllableCount).prepend(
      "<div class='transliteration-syllable'>" + key + '</div> → '
    )
    var j
    for (var i = 0; i < elements.length; i++) {
      $('#equations div#syllable_' + syllableCount).append(
        "<div id='element_" +
          i +
          "' class='equation'>" +
          elements[i] +
          "</div><span class='plus'> + </span>"
      )
      j = i
    }
    $('#equations div#syllable_' + syllableCount + ' .plus')
      .last()
      .remove()
    $('div#syllable_' + syllableCount).append(' = ' + val)
  } else {
    $('<div>', { id: 'syllable_' + syllableCount })
      .append(val)
      .appendTo('#equations')
  }
}

export function showTransliteration(viewOption) {
  var wordToShow =
    viewOption !== 'iast-only' ? presentedWord : transliterate(presentedWord)
  $('<div>')
    .append(wordToShow)
    .appendTo('#main-block #transliteration')
}

export function showTranslation() {
  for (var i = 0; i < getWords().length; i++) {
    if (presentedWord === Object.keys(getWords()[i])[0]) {
      $('<div>')
        .append(getWords()[i][presentedWord])
        .appendTo('#main-block #translation')
    }
  }
}

export function showSyllables(viewOption) {
  var syllables =
    viewOption === 'iast'
      ? getSyllablesIast(presentedWord)
      : getSyllables(presentedWord)
  for (var i = 0; i < syllables.length; i++) {
    if (viewOption === 'devanagari-only') {
      appendLetterInEquations(
        getSyllablesIast(presentedWord)[i],
        syllables[i],
        i
      )
    } else {
      $('<div>', { id: getSyllablesIast(presentedWord)[i] })
        .append(syllables[i])
        .appendTo('#main-block #equations')
    }
  }
}

export function showWord(animate) {
  if (animate === undefined) {
    animate = ''
  }
  var selectedView = $('#view-options input:checked')
  var viewOption = ''

  if (animate !== '') {
    $('#main-block #single-word').hide('slide', { direction: animate })
    $('#main-block #equations').hide('slide', { direction: animate })
    $('#main-block #transliteration').hide('slide', { direction: animate })
    $('#main-block #translation').hide('slide', { direction: animate })
  }
  $('#main-block #single-word').empty()
  $('#main-block #equations').empty()
  $('#main-block #transliteration').empty()
  $('#main-block #translation').empty()
  if (selectedView.length > 0) {
    viewOption = selectedView.get(0).id
  }
  var wordToShow =
    viewOption === 'iast-only' ? presentedWord : transliterate(presentedWord)
  if (wordToShow === undefined) {
    wordToShow = ''
  }
  $('#single-word').append('<div>' + wordToShow + '</div>')
  if ($('#by-syllables:checked').length > 0) {
    showSyllables(viewOption)
  }
  if ($('#by-transliteration:checked').length > 0) {
    showTransliteration(viewOption)
  }
  if ($('#by-translation:checked').length > 0) {
    showTranslation()
  }
  if (animate !== '') {
    const animateOpposite = animate === 'left' ? 'right' : 'left'
    $('#main-block #single-word').show('slide', { direction: animateOpposite })
    $('#main-block #equations').show('slide', { direction: animateOpposite })
    $('#main-block #transliteration').show('slide', {
      direction: animateOpposite
    })
    $('#main-block #translation').show('slide', { direction: animateOpposite })
  }
}

export { getOrigin, getTransliteration, withTransliteration }
