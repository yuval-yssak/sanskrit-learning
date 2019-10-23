var appendLetter;

function startup() {
  generalStartup();
  appendLetter = appendLetterInFives;
  $("#view-options").buttonset().click(showTheLetters);
  $("#toggle-equations").button().click(function() {
    if (this.checked) {
      appendLetter = appendLetterInEquations;
    } else {
      appendLetter = appendLetterInFives;
    }
    showTheLetters();
  });
  $("#letter-categories input#standard").data("getLettersFunction", getConjunctsStandard);
  $("#letter-categories input#r_").data("getLettersFunction", getconjunctsr_);
  $("#letter-categories input#_r1").data("getLettersFunction", getconjuncts_r1);
  $("#letter-categories input#_r2").data("getLettersFunction", getconjuncts_r2);
  $("#letter-categories input#_n").data("getLettersFunction", getconjuncts_n);
  $("#letter-categories input#double").data("getLettersFunction", getconjunctsDouble);
  $("#letter-categories input#_y").data("getLettersFunction", getconjuncts_y);
  $("#letter-categories input#d_").data("getLettersFunction", getconjunctsd_);
  $("#letter-categories input#_t").data("getLettersFunction", getconjuncts_t);
  $("#letter-categories input#ś_").data("getLettersFunction", getconjunctsś_);
  $("#letter-categories input#h_").data("getLettersFunction", getconjunctsh_);
  $("#letter-categories input#k_").data("getLettersFunction", getconjunctsk_);
  $("#letter-categories input#ṣ_").data("getLettersFunction", getconjunctsṣ_);
  $("#letter-categories input#unique").data("getLettersFunction", getconjunctsUnique);
  $("#letter-categories input").click(assembleLetters);
  $("#letter-categories").buttonset().keyup(preventDefaultEvent);
  assembleLetters();
  onKeyShowLetter();
}

function assembleLetters() {
  var combinedLetters = [];
  $("#letter-categories input:checked").each(function() {
    getLettersPart = $(this).data("getLettersFunction");
    letters = getLettersPart();
    combinedLetters = combinedLetters.concat(letters);
  });
  getLetters = function () {return combinedLetters;};
  showTheLetters();
}

function appendLetterInFives(key,val) {
  $("<div>", {id:key}).append(getOrigin(key,val) + (withTransliteration ? "<div class='transliteration'>" + getTransliteration(key,val) + "</div>" : "")).appendTo(".letters-group");
}

function getConjunctsStandard() {
  var conjuncts = [];
  conjuncts.push({"khya": transliterate("khya")});
  conjuncts.push({"gṇa": transliterate("gṇa")});
  conjuncts.push({"gdha": transliterate("gdha")});
  conjuncts.push({"cma": transliterate("cma")});
  conjuncts.push({"jva": transliterate("jva")});
  conjuncts.push({"jya": transliterate("jya")});
  conjuncts.push({"ñcha": transliterate("ñcha")});
  conjuncts.push({"ṇya": transliterate("ṇya")});
  conjuncts.push({"ṇva": transliterate("ṇva")});
  conjuncts.push({"tva": transliterate("tva")});
  conjuncts.push({"tma": transliterate("tma")});
  conjuncts.push({"nta": transliterate("nta")});
  conjuncts.push({"śya": transliterate("śya")});
  conjuncts.push({"ṣṇa": transliterate("ṣṇa")});
  conjuncts.push({"ṣma": transliterate("ṣma")});
  conjuncts.push({"ṣya": transliterate("ṣya")});
  conjuncts.push({"ska": transliterate("ska")});
  conjuncts.push({"sta": transliterate("sta")});
  conjuncts.push({"sva": transliterate("sva")});
  return conjuncts;
}

function getconjunctsr_() {
  var conjuncts = [];
  conjuncts.push({"rka": transliterate("rka")});
  conjuncts.push({"rkha": transliterate("rkha")});
  conjuncts.push({"rga": transliterate("rga")});
  conjuncts.push({"rgha": transliterate("rgha")});
  conjuncts.push({"rṅa": transliterate("rṅa")});
  conjuncts.push({"rca": transliterate("rca")});
  conjuncts.push({"rcha": transliterate("rcha")});
  conjuncts.push({"rja": transliterate("rja")});
  conjuncts.push({"rjha": transliterate("rjha")});
  conjuncts.push({"rña": transliterate("rña")});
  conjuncts.push({"rṭa": transliterate("rṭa")});
  conjuncts.push({"rṭha": transliterate("rṭha")});
  conjuncts.push({"rḍa": transliterate("rḍa")});
  conjuncts.push({"rḍha": transliterate("rḍha")});
  conjuncts.push({"rṇa": transliterate("rṇa")});
  conjuncts.push({"rta": transliterate("rta")});
  conjuncts.push({"rtha": transliterate("rtha")});
  conjuncts.push({"rda": transliterate("rda")});
  conjuncts.push({"rdha": transliterate("rdha")});
  conjuncts.push({"rna": transliterate("rna")});
  conjuncts.push({"rpa": transliterate("rpa")});
  conjuncts.push({"rpha": transliterate("rpha")});
  conjuncts.push({"rba": transliterate("rba")});
  conjuncts.push({"rbha": transliterate("rbha")});
  conjuncts.push({"rma": transliterate("rma")});
  conjuncts.push({"rya": transliterate("rya")});
  conjuncts.push({"rra": transliterate("rra")});
  conjuncts.push({"rla": transliterate("rla")});
  conjuncts.push({"rva": transliterate("rva")});
  conjuncts.push({"rśa": transliterate("rśa")});
  conjuncts.push({"rṣa": transliterate("rṣa")});
  conjuncts.push({"rsa": transliterate("rsa")});
  conjuncts.push({"rjña": transliterate("rjña")});
  conjuncts.push({"rtra": transliterate("rtra")});
  conjuncts.push({"rkṣa": transliterate("rkṣa")});
  return conjuncts;
}

function getconjuncts_r1() {
  var conjuncts = [];
  conjuncts.push({"kra": transliterate("kra")});
  conjuncts.push({"khra": transliterate("khra")});
  conjuncts.push({"gra": transliterate("gra")});
  conjuncts.push({"ghra": transliterate("ghra")});
  conjuncts.push({"jra": transliterate("jra")});
  conjuncts.push({"dra": transliterate("dra")});
  conjuncts.push({"pra": transliterate("pra")});
  conjuncts.push({"bra": transliterate("bra")});
  conjuncts.push({"bhra": transliterate("bhra")});
  conjuncts.push({"mra": transliterate("mra")});
  conjuncts.push({"vra": transliterate("vra")});
  conjuncts.push({"śra": transliterate("śra")});
  conjuncts.push({"sra": transliterate("sra")});
  conjuncts.push({"hra": transliterate("hra")});
  return conjuncts;
}

function getconjuncts_r2() {
  var conjuncts = [];
  conjuncts.push({"chra": transliterate("chra")});
  conjuncts.push({"ṭra": transliterate("ṭra")});
  conjuncts.push({"ṭhra": transliterate("ṭhra")});
  conjuncts.push({"ḍra": transliterate("ḍra")});
  conjuncts.push({"ḍhra": transliterate("ḍhra")});
  return conjuncts;
}

function getconjuncts_n() {
  var conjuncts = [];
  conjuncts.push({"kna": transliterate("kna")});
  conjuncts.push({"khna": transliterate("khna")});
  conjuncts.push({"gna": transliterate("gna")});
  conjuncts.push({"ghna": transliterate("ghna")});
  conjuncts.push({"tna": transliterate("tna")});
  conjuncts.push({"dhna": transliterate("dhna")});
  conjuncts.push({"nna": transliterate("nna")});
  conjuncts.push({"pna": transliterate("pna")});
  conjuncts.push({"bna": transliterate("bna")});
  conjuncts.push({"bhna": transliterate("bhna")});
  conjuncts.push({"mna": transliterate("mna")});
  conjuncts.push({"vna": transliterate("vna")});
  conjuncts.push({"śna": transliterate("śna")});
  conjuncts.push({"sna": transliterate("sna")});
  conjuncts.push({"hna": transliterate("hna")});
  return conjuncts;
}

function getconjunctsDouble() {
  var conjuncts = [];
  conjuncts.push({"kla": transliterate("kla")});
  conjuncts.push({"ṅka": transliterate("ṅka")});
  conjuncts.push({"ṅkha": transliterate("ṅkha")});
  conjuncts.push({"ṅga": transliterate("ṅga")});
  conjuncts.push({"cca": transliterate("cca")});
  conjuncts.push({"jja": transliterate("jja")});
  conjuncts.push({"ñca": transliterate("ñca")});
  conjuncts.push({"ñja": transliterate("ñja")});
  conjuncts.push({"ṭṭa": transliterate("ṭṭa")});
  conjuncts.push({"lla": transliterate("lla")});
  return conjuncts;
}

function getconjuncts_y() {
  var conjuncts = [];
  conjuncts.push({"ṭya": transliterate("ṭya")});
  conjuncts.push({"ṭhya": transliterate("ṭhya")});
  conjuncts.push({"ḍya": transliterate("ḍya")});
  conjuncts.push({"ḍhya": transliterate("ḍhya")});
  return conjuncts;
}

function getconjunctsd_() {
  var conjuncts = [];
  conjuncts.push({"daga": transliterate("daga")});
  conjuncts.push({"dada": transliterate("dada")});
  conjuncts.push({"dadha": transliterate("dadha")});
  conjuncts.push({"dabha": transliterate("dabha")});
  conjuncts.push({"dama": transliterate("dama")});
  conjuncts.push({"daya": transliterate("daya")});
  conjuncts.push({"dava": transliterate("dava")});
  conjuncts.push({"daba": transliterate("daba")});
  conjuncts.push({"dga": transliterate("dga")});
  conjuncts.push({"dda": transliterate("dda")});
  conjuncts.push({"ddha": transliterate("ddha")});
  conjuncts.push({"dbha": transliterate("dbha")});
  conjuncts.push({"dma": transliterate("dma")});
  conjuncts.push({"dya": transliterate("dya")});
  conjuncts.push({"dva": transliterate("dva")});
  conjuncts.push({"dba": transliterate("dba")});
  return conjuncts;
}

function getconjuncts_t() {
  var conjuncts = [];
  conjuncts.push({"kta": transliterate("kta")});
  conjuncts.push({"tta": transliterate("tta")});
  conjuncts.push({"pta": transliterate("pta")});
  return conjuncts;
}

function getconjunctsś_() {
  var conjuncts = [];
  conjuncts.push({"śla": transliterate("śla")});
  conjuncts.push({"śca": transliterate("śca")});
  conjuncts.push({"śva": transliterate("śva")});
  conjuncts.push({"śra": transliterate("śra")});
  conjuncts.push({"śna": transliterate("śna")});
  return conjuncts;
}

function getconjunctsh_() {
  var conjuncts = [];
  conjuncts.push({"hṇa": transliterate("hṇa")});
  conjuncts.push({"hma": transliterate("hma")});
  conjuncts.push({"hya": transliterate("hya")});
  conjuncts.push({"hra": transliterate("hra")});
  conjuncts.push({"hla": transliterate("hla")});
  conjuncts.push({"hva": transliterate("hva")});
  return conjuncts;
}

function getconjunctsk_() {
  var conjuncts = [];
  conjuncts.push({"kṇa": transliterate("kṇa")});
  conjuncts.push({"kma": transliterate("kma")});
  conjuncts.push({"kya": transliterate("kya")});
  conjuncts.push({"kva": transliterate("kva")});
  conjuncts.push({"kla": transliterate("kla")});
  conjuncts.push({"kbha": transliterate("kbha")});
  return conjuncts;
}

function getconjunctsṣ_() {
  var conjuncts = [];
  conjuncts.push({"ṣṭa": transliterate("ṣṭa")});
  conjuncts.push({"ṣṭha": transliterate("ṣṭha")});
  return conjuncts;
}

function getconjunctsUnique() {
  var conjuncts = [];
  conjuncts.push({"jña": transliterate("jña")});
  conjuncts.push({"tra": transliterate("tra")});
  conjuncts.push({"kṣa": transliterate("kṣa")});
  return conjuncts;
}

