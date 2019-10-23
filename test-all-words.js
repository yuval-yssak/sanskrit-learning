function startup() {
  getWords = getWordsWithConjuncts;
  generalStartup();
  for (var i = 0; i <  getWordsWithConjuncts().length; i++) {
    var currentWord = Object.keys(getWordsWithConjuncts()[i])[0];
    $("<li>", {id:"word-"+i}).append(transliterate(currentWord)).data("the-word",currentWord).appendTo("#word-list ul");
  }
  $(document).keyup(function(event) {
    if (event.keyCode === 37) {$("#navigate-prev").click();}
    if (event.keyCode === 39) {$("#navigate-next").click();}
  });
}

function getWordsWithConjuncts() {
  var words = [];
  words.push({"śambhala": "name of a sacred land"});
  words.push({"satya": "truth"});
  words.push({"skandha": "attributes of character"});
  words.push({"kalpa": "cycle"});
  words.push({"manvantara": "age of manifestation"});
  words.push({"sthūla": "gross, bulky"});
  words.push({"sandhyā": "twilight"});
  words.push({"kanyā": "maiden"});
  words.push({"saṃskṛta": "sanskrit"});
  words.push({"ātman": "Self, soul"});
  words.push({"kuṇḍalinī": "serpent-power in spine"});
  words.push({"nādavindu": "name of an upaniṣad"});
  words.push({"gacchāmi": "I go"});
  words.push({"guruparamparā": "succession of teachers"});
  words.push({"saccidānanda": "existence-knowledge-bliss"});
  words.push({"bṛhaspati": "the guru of the devas"});
  words.push({"ṛṣī": "seer"});
  words.push({"suṣumṇa nāḍī": "the central prāṇic channel"});
  words.push({"viṣṇu": "Lord Nārāyana"});
  words.push({"kṛṣṇa": "The one who attracts"});
  words.push({"suṣupti": "deep sleep"});
  words.push({"karma": ""});
  words.push({"dharma": ""});
  words.push({"śrī kṛṣṇa": ""});
  words.push({"śrīmadbhāgavatam": "a name of a scripture"});
  words.push({"ॐ śrīmahāgaṇapataye namaḥ": ""});
  words.push({"ॐ śrīrāmāya namaḥ": ""});
  words.push({"ॐ śrīdurgāyai namaḥ": ""});
  words.push({"ॐ śrīmahālakṣmyai namaḥ": ""});
  words.push({"ॐ aiṃ sarasvatyai namaḥ": ""});
  words.push({"ॐ tryambakaṃ yajāmahe sugandhiṃ puṣtivardhanam": ""});
  words.push({"urvārukamiva bandhanānmṛtyormukṣīya mā'mṛtāt": ""});
  words.push({"sarve bhavantu sukhinaḥ sarve santu nirāmayāḥ": ""});
  words.push({"sarve bhavantu sukhinaḥ sarve santu nirāmayāḥ": ""});
  words.push({"sarve bhadrāṇi paśyantu mā kaścid-duḥkhabhāg-bhavet": ""});
  words.push({"ॐ asato mā sadgamaya": ""});
  words.push({"tamaso mā jyotirgamaya": ""});
  words.push({"mṛtyormā amṛtaṃ gamaya": ""});
  words.push({"ॐ pūrṇamadaḥ pūrṇamidaṃ pūrṇāt pūrṇamudacyate": ""});
  words.push({"pūrṇasya pūrṇamādāya pūrṇamevāvaśiṣyate": ""});
  words.push({"ॐ śāntiḥ śāntiḥ śāntiḥ": ""});
  words.push({"gajānanaṃ bhūtagaṇādisevitam": ""});
  words.push({"kapittha jambū phala sāra bhakṣitam": ""});
  words.push({"umāsutaṃ śokavināśakāraṇam": ""});
  words.push({"namāmi vighneśvarapādapaṅkajam": ""});
  words.push({"ṣaḍānanaṃ kuṅkuma raktavarṇam": ""});
  words.push({"mahāmatiṃ divyamayūravāhanam": ""});
  words.push({"rudrasyasūnuṃ surasainyanātham": ""});
  words.push({"guhaṃ sadāhaṃ śaraṇaṃ prapadye": ""});
  words.push({"yā kundendu tuṣārahāra dhavalā yā śubhra avastrāvṛtā": ""});
  words.push({"yā vīṇā vara daṇḍa maṇḍitakarā yā śveta padmāsanā": ""});
  words.push({"yā brahmācyuta śaṅkara prabhṛtibhir devaiḥ sadā pūjitā": ""});
  words.push({"sā māṃ pātu sarasvatī bhagavatī niśśeṣajāḍyāpahā": ""});
  words.push({"ॐ namaḥ śivāya gurave saccidānandamūrtaye": ""});
  words.push({"niṣprapañcāya śāntāya śrīśivānandaya te namaḥ": ""});
  words.push({"śrī viṣṇu devānandaya te namaḥ": ""});
  words.push({"ॐsarva maṅgalamāṅgalye śive sarvārthasādhike": ""});
  words.push({"śaraṇye trayambake gaurī nārāyaṇi namo'stute": ""});
  words.push({"nārāyaṇi namo'stute": ""});
  words.push({"iḍā nāḍī": "the moon channel"});
  words.push({"piṅgala nāḍī": "the Sun channel"});
  words.push({"suṣumṇa nāḍī": "the central prāṇic channel"});
  words.push({"cakra": "a wheel"});
  words.push({"mūlādhāra cakra": "the base cakra"});
  words.push({"maṇipūra cakra": "the solar plexus cakra"});
  words.push({"anāhata cakra": "the heart cakra"});
  words.push({"ajñā cakra": "the third eye cakra"});
  return words;
}

