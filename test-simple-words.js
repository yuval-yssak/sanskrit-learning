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
  words.push({"śiva": "auspicious"});
  words.push({"yoga": "union"});
  words.push({"rājayoga": "the royal yoga"});
  words.push({"sūtra": "thread"});
  words.push({"rāga": "attachment"});
  words.push({"puruṣa": "person"});
  words.push({"mahat": "great, huge"});
  words.push({"ahaṃkara": "ego"});
  words.push({"yama": "restraint"});
  words.push({"niyama": "a precept"});
  words.push({"ahiṃsā": "non-violance"});
  words.push({"āsana": "a posture, a seat"});
  words.push({"dhāraṇā": "concentration"});
  words.push({"samādhi": "super consciousness"});
  words.push({"atha yogānuśāsanam": "now Yoga is explained"});
  words.push({"haṭha yoga": "the union of the Sun and the Moon"});
  words.push({"nāḍī": "a river, a prāṇic chanel"});
  words.push({"sādhana": "spiritual practice"});
  words.push({"yamunā": "a name of a holy river"});
  words.push({"mahābhārata": "a name of a scripture"});
  words.push({"rāmāyaṇa": "a name of a scripture"});
  words.push({"rāsa līlā": "the divine dance of śrī kṛṣṇa and the gopīs"});
  words.push({"vīṇā": "indian musical instrument"});
  words.push({"bhagavad gītā": "a name of a scripture"});
  words.push({"hṛṣīkeśa": "a name of kṛṣṇa, the controller of the senses"});
  words.push({"mādhava": "a name of kṛṣṇa, a descendant of madhu"});
  words.push({"rāma": "a proper name"});
  words.push({"sītā": "a proper name"});
  words.push({"janaka": "a proper name, the father of sītā"});
  words.push({"daśaratha": "a proper name"});
  words.push({"lakṣmaṇa": "a proper name"});
  words.push({"hanumān": "a proper name"});
  words.push({"rāvaṇa": "a proper name"});
  words.push({"yaśodā": "a proper name"});
  words.push({"lakṣmī": "a proper name"});
  words.push({"amṛtā": "a proper name"});
  words.push({"gaṇeśa": "a proper name"});
  words.push({"śambhu": "a proper name"});
  words.push({"jñāna yoga": "the yoga of wisdom"});
  words.push({"guru": "a preceptor"});
  words.push({"veda": "knowledge"});
  words.push({"so`ham": "I am He"});
  words.push({"viveka": "discrimination"});
  words.push({"māyā": "illusion"});
  words.push({"upādhi": "a vail"});
  words.push({"jīva": "an individual soul"});
  words.push({"sat": "real, truth, goodness"});
  words.push({"chit": "awareness, consciousness"});
  words.push({"nāma": "name"});
  words.push({"rūpa": "form"});
  words.push({"ॐ namaḥ śivāya": "salutations to Lord Śiva"});
  words.push({"ॐ namo nārāyaṇāya": "salutations to Lord Nārāyaṇa"});
  words.push({"ॐ namo bhagavate vāsudevāya": "salutations to Lord Vāsudeva"});
  words.push({"hari ॐ": "hari ॐ"});
  words.push({"gajānanaṃ bhūtagaṇādisevitam": "the (Lord) with the elephant head, who is the leader of the bhūtas' army"});
  words.push({"ॐ ṣaṃ no mitraḥ ṣaṃ varuṇaḥ": "oṃ, may mitraḥ and varuṇaḥ (bless us with) peace"});
  words.push({"om saha nāvavatu": "may He protect us both together"});
  words.push({"bhaja govindaṃ bhaja govindaṃ  govindaṃ  bhaja mūḍhamate": "worship Govinda, worship Govinda, worship Govinda, O fool"});
  words.push({"jaya gaṇeśa jaya gaṇeśa jaya gaṇeśa pāhimām": "3X Victory to gaṇeśa, (please) protect us"});
  words.push({"śaravaṇabhava śaravaṇabhava śaravaṇabhava pāhimām": "3X śaravaṇabhava (please) protect us"});
  return words;
}
