import transliterate from "./transliterate"


test("basic vowel a", () => {
  expect(transliterate("a")).toEqual("अ")
})

test("basic vowel ā", () => {
  expect(transliterate("ā")).toEqual("आ")
})

test("basic vowel with two IAST letters au", () => {
  expect(transliterate("au")).toEqual("औ")
})

test("basic vowel with two IAST letters ai", () => {
  expect(transliterate("ai")).toEqual("ऐ")
})

test("basic consonant ka", () => {
  expect(transliterate("ka")).toEqual("क")
})

test("basic exhaled consonant kha", () => {
  expect(transliterate("kha")).toEqual("ख")
})

test("basic consonant ḍa", () => {
  expect(transliterate("ḍa")).toEqual("ड")
})

test("basic semi vowel ya", () => {
  expect(transliterate("ya")).toEqual("य")
})

test("basic sibilant śa", () => {
  expect(transliterate("śa")).toEqual("श")
})

test("basic avagraha", () => {
  expect(transliterate("'")).toEqual("ऽ")
})

test("basic conjunct jña", () => {
  expect(transliterate("jña")).toEqual("ज्ञ")
})

test("basic conjunct tra", () => {
  expect(transliterate("tra")).toEqual("त्र")
})

test("basic conjunct kṣa", () => {
  expect(transliterate("kṣa")).toEqual("क्ष")
})

test("basic letter ha", () => {
  expect(transliterate("ha")).toEqual("ह")
})

test("contracted vowel on ra -> rā", () => {
  expect(transliterate("rā")).toEqual("रा")
})

test("contracted vowel on exhaled consonent kha -> khe", () => {
  expect(transliterate("khe")).toEqual("खे")
})

test("half na - virāma on na -> n", () => {
  expect(transliterate("n")).toEqual("न्")
})
