---
theme: default
colorSchema: light
fonts:
  sans: DM Sans
  serif: Fraunces
  mono: DM Mono
title: AI-mønstrene som avslører deg! (chat)
info: |
  ## AI-mønstrene som avslører deg!
  Anton Lilleby, Miles

  Hvilke mønstre avslører at en tekst er skrevet med AI, og hvordan blir man kvitt dem?
author: Anton Lilleby
htmlAttrs:
  lang: nb
transition: slide-left
mdc: true
---

<div class="grid grid-cols-[3fr_2fr] gap-8 items-center h-full">
<div>

<div class="eyebrow">Spor A · 17:15 · Clarion Hotel Admiral</div>

# AI-mønstrene som avslører deg!

<div class="mt-8 flex items-center gap-4">
  <span class="pille">Anton Lilleby</span>
  <img src="/miles-logo-korall.png" alt="Miles" class="h-7" />
</div>

</div>
<Roboter />
</div>

---

<div class="h-full flex items-center justify-center gap-16">
<img src="/anton.jpg" alt="Anton Lilleby" class="w-72 h-72 rounded-full object-cover" />
<h1 class="!text-9xl !mb-0">Hei!</h1>
</div>

<!--
Hei!
-->

---
clicks: 3
---

<Harness :steg="0" :steg2="1" fane="Mønstre" :panel-at="3">
<div class="fasit">

1. Oppblåst betydning
2. Typiske AI-ord
3. Rester fra chatten
4. Reklamespråk
5. Tom tolkning
6. «Ikke bare X, men Y»
7. Alt kommer i tre
8. Dårlige kilder
9. Optimistisk avslutning
10. Pynt og formatering

</div>
</Harness>

<!--
Hvordan kan jeg hjelpe deg i dag?

Skriv en intro jeg kan lese opp på Gnist presentasjonen min.

Selvfølgelig! Her er en intro du kan lese opp:

Hei, jeg heter Anton 👋 Jeg er konsulent i Miles 🫶 Flyttet fra Oslo til Bergen for kjærligheten – et avgjørende vendepunkt. [Sett inn anekdote om regn her]

Tekst skrevet med AI er ikke bare irriterende, men avslørende. Studier viser at leserne merker det 👀, noe som understreker hvor viktig det er å være ekte. 🙌🔥

I dag skal du lære å se mønstrene, unngå dem og skrive unikt. ☀️

Vil du at jeg gjør den mer personlig?

Nice! Nei, men er det noen AI-mønstre her som kan avsløre meg?

Oi.. det var mange!
-->

---
clicks: 2
---

<Harness :steg="2" fane="reddit.com/r/norge">
<Reddit sub="r/norge" tittel="Jeg har sluttet med kontor" kilde="nrk.no" :poeng="259" :kommentarer="144">
<RedditKommentar :poeng="171">Har alle tegn på generativ AI-bruk. <Hl :at="2">Korte setninger. Mange avsnitt. «Ikke slik, men slik»-argumentasjon.</Hl></RedditKommentar>
<RedditKommentar :poeng="53">Kronikken bruker ordet «ikke» 33 ganger. <Hl :at="2">22 ganger sier han hva alt mulig ikke er.</Hl></RedditKommentar>
<RedditKommentar :poeng="27">Det er også <Hl :at="2">den flate emosjonelle kurven</Hl>. Temaet tilsier at han er lei, men det merker man ikke. Det er likt igjennom hele.</RedditKommentar>
</Reddit>
</Harness>

<!--
Ikke sant, her er en artikkel fra NRK i August i år som fikk gjennomgå på Reddit fordi den var skrevet med mye AI.
-->

---
clicks: 2
---

<Harness :steg="3" fane="kode24.no">
<Kode24Kommentarfelt :antall="43" :sint="1" :reaksjoner="[['🔥', 2], ['😍', 6], ['😮', 0], ['😢', 3], ['😂', 1], ['😡', 31]]">
<Kode24Kommentar :opp="31" :ned="3">Jeg har merket i det siste at både jeg og folk jeg jobber med har vært mindre og mindre på Kode24 fordi det er så mye KI slop i artikler. Det er ekstremt åpenbart når mesteparten av artiklene har <Hl :at="2">akkurat samme skrivestil og formatering</Hl>.</Kode24Kommentar>
<Kode24Kommentar :opp="17" :ned="1">Helt uten disclaimer, men med flere brukne linker og <Hl :at="2">utm_source=chatgpt.com</Hl></Kode24Kommentar>
<Kode24Kommentar :opp="14" :ned="7">Enkelt: <Hl :at="2">Du bruker tankestrek = Det er skrevet av ChatGPT.</Hl> … hele teksten din også åpenbart er skrevet av AI.</Kode24Kommentar>
</Kode24Kommentarfelt>
</Harness>

<!--
Oi, en artikkel på kode24 fikk masse sinte fjes fordi AI ble brukt til skrivingen.

En skriver der:
Bruker du tankestrek, så er det ChatGPT.
-->

---
clicks: 1
---

<Harness :steg="4" fane="talken.no">
<Talken>
<img src="/talken-taler.png" alt="300+ taler laget" class="h-9 mix-blend-multiply" />
</Talken>
</Harness>

<!--
Aha, dette er litt viktig for meg, siden jeg selger AI-taler som en sidehustle.

Høres talene ut som AI, har jeg bommet :)
-->

---
clicks: 3
---

<Harness :steg="5" fane="Forklaringer">
<div class="grunner">
<div v-click="1" class="grunn">
  <div class="navn">Den velger det vanligste</div>
  <div class="eks">I en verden i stadig <span class="uth">endring</span></div>
  <div class="kilde">Reinhart m.fl. (2025), PNAS</div>
</div>
<div v-click="2" class="grunn">
  <div class="navn">Den er trent til å behage</div>
  <div class="eks"><span class="stemme">👍 Valgt</span> «Godt spørsmål! Bergen er kjent for …»</div>
  <div class="kilde">Singhal m.fl. (2024), COLM</div>
</div>
<div v-click="3" class="grunn">
  <div class="navn">Den er mest trent på engelsk</div>
  <div class="eks"><i>Let's dive in!</i> <span class="pil">→</span> <span class="uth">La oss dykke inn!</span></div>
  <div class="kilde">Schut, Gal og Farquhar (2025), arXiv</div>
</div>
</div>
</Harness>

<!--
Den velger det vanligste.
Så neste vektor er bare en sannsynlighet.

Den er trent til å behage.
Folk liker å stemme på de lange svarene.

Og den er mest trent på engelsk.
Og da oppstår klisjene...
-->

---
clicks: 2
---

<Harness :steg="6" fane="Studien">
<div class="studie">
<div class="tall">93 %</div>
<div class="hva">av AI-tekstene ble avslørt av folk som bruker AI mye selv</div>
<div class="prikker"><i v-for="n in 100" :key="n" :class="{ fylt: n <= 93 }" :style="{ transitionDelay: `${n * 8}ms` }" /></div>
<div class="kilde">Russell, Karpinska og Iyyer (2025), ACL · 300 artikler. Folk som sjelden bruker AI, fant 57 %.</div>
<div v-click="2" class="poeng">Det er ikke magefølelse. Det er mønstre.</div>
</div>
</Harness>

<!--
Ikke sant, så studien viser at de som bruker mye AI i hverdagen er gode på å finne AI-tekster

Så det er ikke magefølelse, det er mønstre, og de kan læres.
-->

---
clicks: 2
---

<Harness :steg="7" fane="wikipedia.org">
<Wikipedia tittel="Wikipedia:Signs of AI writing" undertittel="From Wikipedia, the free encyclopedia · WikiProject AI Cleanup">
<div class="gruppe">Content</div>
<div><Hl :at="2">Undue emphasis on significance</Hl></div>
<div>Canned emphasis on notability</div>
<div><Hl :at="2">Superficial analyses</Hl></div>
<div><Hl :at="2">Promotional language</Hl></div>
<div><Hl :at="2">Vague attributions</Hl></div>
<div><Hl :at="2">Outline-like conclusions</Hl></div>
<div>Lists treated as proper nouns</div>
<div>«Awards and recognition»</div>
<div class="gruppe">Language and grammar</div>
<div><Hl :at="2">«AI vocabulary» words</Hl></div>
<div>Avoidance of copulatives</div>
<div>Vague connection words</div>
<div><Hl :at="2">Negative parallelisms</Hl></div>
<div><Hl :at="2">Rule of three</Hl></div>
<div class="gruppe">Style</div>
<div><Hl :at="2">Title case headings</Hl></div>
<div>Headings only containing headings</div>
<div><Hl :at="2">Boldface and em dashes</Hl></div>
<div>Inline-header lists</div>
<div><Hl :at="2">Emoji as formatting</Hl></div>
<div>Unusual tables</div>
<div>Curly quotation marks</div>
<div>Skipped heading levels</div>
<div>Thematic breaks</div>
<div class="gruppe">Communication</div>
<div><Hl :at="2">Collaborative communication</Hl></div>
<div>Knowledge-cutoff disclaimers</div>
<div><Hl :at="2">Placeholder text</Hl></div>
<div class="gruppe">Markup</div>
<div>Use of Markdown</div>
<div>Broken wikitext</div>
<div>Reference markup bugs</div>
<div>Non-existent categories</div>
<div>Non-existent templates</div>
<div class="gruppe">Citations</div>
<div>Broken external links</div>
<div>Invalid DOIs and ISBNs</div>
<div>DOIs to unrelated articles</div>
<div>Books without page numbers</div>
<div>Unconventional references</div>
<div>utm_source= parameters</div>
<div>Unused named references</div>
<div class="gruppe">Miscellaneous</div>
<div>Shift in writing style</div>
<div>Submission statements</div>
<div>Pre-placed templates</div>
<div>Canned user pages</div>
<div>Differences between LLMs</div>
<div>Biases in content</div>
</Wikipedia>
</Harness>

<!--
Wikipedia har samlet nesten 50 AI mønstre deres skribenter har funnet.

La oss se på ti av dem nærmere.
-->

---
clicks: 2
---

<Harness :steg="8" fane="Teams">
<div class="monster-kilde">Wikipedia: Undue emphasis on significance, legacy, and broader trends</div>

<div class="monster-eks">
<Chat app="teams" kanal="Kontoret Bergen" navn="Lise Hansen">
  <p>Hei alle sammen! 🍞</p>
  <p>Den nye toastmaskinen i 5. etasje <Hl :at="2">markerer et viktig vendepunkt</Hl> for kontoret vårt.</p>
  <p>Den vil <Hl :at="2">sette varige spor</Hl> i hverdagen vår og er <Hl :at="2">dypt forankret</Hl> i verdiene våre om trivsel og fellesskap.</p>
</Chat>
</div>
</Harness>

<!--
Lise Hansen skriver at kontoret har fått ny toastmaskin, og den «markerer et viktig vendepunkt». Ja dette vil jeg også kalt oppblåst.

Det er jo bare en toastmaskin.
-->

---
clicks: 2
---

<Harness :steg="9" fane="E-post">
<div class="monster-kilde">Wikipedia: High density of «AI vocabulary» words (delve, pivotal, tapestry, testament, underscore)</div>

<div class="monster-eks">
<Epost fra="Ola Nordmann" til="rekruttering@firma.no" emne="Søknad på stilling som seniorutvikler">
  <p>Hei!</p>
  <p>Jeg brenner for å <Hl :at="2">dykke ned i</Hl> komplekse problemstillinger, og min <Hl :at="2">solide</Hl> erfaring fra Equinor er <Hl :at="2">et vitnesbyrd om</Hl> evnen til å levere <Hl :at="2">robuste</Hl> og <Hl :at="2">helhetlige</Hl> løsninger.</p>
  <p><Hl :at="2">I tillegg</Hl> <Hl :at="2">understreker</Hl> mitt engasjement i det frivillige <Hl :at="2">et genuint ønske</Hl> om å spille <Hl :at="2">en avgjørende rolle</Hl> i <Hl :at="2">det dynamiske samspillet</Hl> mellom mennesker og teknologi.</p>
</Epost>
</div>
</Harness>

<!--
Okey så hvert ord er greit om det står alene i denne søknaden.

Men solid og robust i ett avsnitt merkes som et AI-mønster.
-->

---
clicks: 2
---

<Harness :steg="10" fane="Meldinger">
<div class="monster-kilde">Wikipedia: Collaborative communication · Phrasal templates and placeholder text</div>

<div class="monster-eks">
<Melding gruppe="Onkel Geir" sendt>
  <p><Hl :at="2">Selvfølgelig! Her er en hyggelig hilsen du kan sende:</Hl></p>
  <p>Gratulerer så mye med 50-årsdagen, <Hl :at="2">[navn]</Hl>! Håper du får en fantastisk dag sammen med dem du er glad i. 🎂</p>
  <p><Hl :at="2">Vil du at jeg gjør hilsenen mer personlig eller humoristisk?</Hl></p>
</Melding>
</div>
</Harness>

<!--
Denne er ganske uheldig, rester fra chatten.

«Gratulerer så mye med 50-årsdagen, navn!»

Stakkars onkel Geir.
-->

---
clicks: 2
---

<Harness :steg="11" fane="Bryllupstale">
<div class="monster-kilde">Wikipedia: Promotional and advertisement-like language</div>

<div class="monster-eks">
<Tale overskrift="Bryllupstale">
  <p>Kjære Mari og Jonas. I dag feirer vi <Hl :at="2">en helt fantastisk</Hl> kjærlighetshistorie.</p>
  <p>Dere er <Hl :at="2">et utrolig inspirerende</Hl> par, og dagen i dag blir <Hl :at="2">en uforglemmelig opplevelse</Hl> <Hl :at="2">i hjertet av</Hl> vakre Hardanger.</p>
  <p>Takk for at vi får være med på <Hl :at="2">denne unike reisen</Hl>.</p>
</Tale>
</div>
</Harness>

<!--
Alt blir fantastisk og uforglemmelig, også bryllupstalen.
-->

---
clicks: 2
---

<Harness :steg="12" fane="finn.no">
<div class="monster-kilde">Wikipedia: Superficial analyses</div>

<div class="monster-eks">
<Finn tittel="Lys 3-roms med vestvendt balkong" sted="Møhlenpris, Bergen" pris="4 950 000 kr">
  <p>Leiligheten har balkong mot vest, <Hl :at="2">noe som gjør den perfekt for sosiale sammenkomster</Hl>.</p>
  <p>Det er fem minutter å gå til Bybanen, <Hl :at="2">noe som understreker den sentrale beliggenheten</Hl> og <Hl :at="2">bidrar til en enkel hverdag</Hl>.</p>
</Finn>
</div>
</Harness>

<!--
Finn annonse der det står fem minutter til Bybanen, «noe som understreker den sentrale beliggenheten».

Det skjønte vi jo selv, men AI har ofte behov for å komme med en tolkning.
-->

---
clicks: 2
---

<Harness :steg="13" fane="E-post">
<div class="monster-kilde">Wikipedia: Negative parallelisms</div>

<div class="monster-eks">
<Epost fra="Sosialkomiteen" til="alle@firma.no" emne="Påmeldingen til julebordet er åpen! 🎄">
  <p>Hei alle sammen!</p>
  <p><Hl :at="2">Julebordet er ikke bare en fest. Det er en feiring</Hl> av alt vi har fått til sammen i år.</p>
  <p><Hl :at="2">Det handler ikke om maten, men om menneskene.</Hl></p>
  <p>Meld deg på innen fredag.</p>
</Epost>
</div>
</Harness>

<!--
Endelig julebord påmelding!

«Ikke bare X, men Y».
«Det handler ikke om maten, men om menneskene.» 

Selv om det handler litt om maten også :)
-->

---
clicks: 2
---

<Harness :steg="14" fane="finn.no">
<div class="monster-kilde">Wikipedia: Rule of three</div>

<div class="monster-eks">
<Finn tittel="Seniorutvikler" undertittel="Firma AS" sted="Bergen">
  <p>Vi ser etter en kollega som er <Hl :at="2">nysgjerrig, engasjert og løsningsorientert</Hl>.</p>
  <p>Hos oss får du <Hl :at="2">faglig utvikling, spennende oppgaver og et godt arbeidsmiljø</Hl>.</p>
</Finn>
</div>
</Harness>

<!--
Ikke sant, her har stillingsannonsen flere lister på tre. For meg virker det som AI prøver å behage ved å ramse opp.
-->

---
clicks: 2
---

<Harness :steg="15" fane="Meldinger">
<div class="monster-kilde">Wikipedia: Vague attributions and overgeneralization of opinions</div>

<div class="monster-eks">
<Melding gruppe="Foreldre 4B" avsender="Kristin (klassekontakt)">
  <p>Hei alle foreldre i 4B!</p>
  <p><Hl :at="2">Eksperter anbefaler</Hl> at barn under 12 år ikke har mobil på skolen, og <Hl :at="2">flere studier viser</Hl> at det gir bedre konsentrasjon.</p>
  <p><Hl :at="2">De fleste foreldre er enige</Hl> i dette, så vi foreslår en felles avtale for klassen.</p>
</Melding>
</div>
</Harness>

<!--
Ser man det

Eksperter anbefaler, studier viser … men hvem da? Dårlige kilder er typisk AI.
-->

---
clicks: 2
---

<Harness :steg="16" fane="linkedin.com">
<div class="monster-kilde">Wikipedia: Title case · Overuse of boldface · Inline-header vertical lists · Em dashes · Emoji as formatting</div>

<div class="monster-eks">
<LinkedIn navn="Ola Nordmann" tittel="Senior konsulent | Brenner for mennesker og teknologi">
  <p>Stolt og ydmyk over å kunne dele at jeg har startet i ny jobb <Hl :at="2">—</Hl> et nytt kapittel starter nå! <Hl :at="2">🎉</Hl></p>
  <p><Hl :at="2">3 Ting Jeg Har Lært Etter 10 År I Bransjen:</Hl></p>
  <p><Hl :at="2">✅ <strong>Nysgjerrighet</strong> —</Hl> still spørsmål, alltid<br>
  <Hl :at="2">✅ <strong>Relasjoner</strong> —</Hl> nettverket ditt er alt<br>
  <Hl :at="2">✅ <strong>Mot</strong> —</Hl> tør å feile</p>
  <p><Hl :at="2">Hva er din beste lærdom? 👇</Hl></p>
</LinkedIn>
</div>
</Harness>

<!--
Fet skrift, emojier og tankestreker overalt.

Dette kjenner man sikkert igjen fra LinkedIn...
-->

---
clicks: 3
---

<Harness :steg="17" fane="Word" fane2="This is fine">
<div class="monster-kilde">Wikipedia: Outline-like conclusions about challenges and future prospects</div>

<div class="monster-eks">
<Dokument fil="Statusrapport uke 38.docx" tittel="Statusrapport uke 38" forfatter="Prosjektleder · til styringsgruppen">
  <p>Leveransen er forsinket med seks uker, og budsjettet er overskredet med 40 %.</p>
  <p><Hl :at="2">Til tross for disse utfordringene</Hl> er prosjektet <Hl :at="2">godt posisjonert</Hl> og <Hl :at="2">ser lyst på fremtiden</Hl>.</p>
</Dokument>
</div>
<template #fane2>
<img src="/this-is-fine.webp" alt="Hunden i det brennende rommet: «This is fine.»" class="m-auto max-h-full rounded" />
</template>
</Harness>

<!--
Så en statusrapport som viser at man er seks uker forsinket og 40 prosent over budsjett.

Men er fortsatt godt posisjonert for fremtiden.
-->

---
clicks: 6
---

<Harness :steg="18" fane="Seks grep">
<div class="grunner tett">
<div v-click="1" class="grunn"><div class="navn">Gi den detaljer</div><div class="eks">«Takk for at du ble til ti og reddet demoen», ikke «takk for en fantastisk innsats»</div></div>
<div v-click="2" class="grunn"><div class="navn">Vis hvordan du skriver</div><div class="eks">Lim inn 2–3 tekster du har skrevet selv</div></div>
<div v-click="3" class="grunn"><div class="navn">Vær obs på mønstrene</div><div class="eks">Se over <span class="uth">ikke bare X, men Y</span>, <span class="uth">solid</span> og tankestrekene</div></div>
<div v-click="4" class="grunn"><div class="navn">Sjekk fakta</div><div class="eks">«Studier viser» … hvilke studier?</div></div>
<div v-click="5" class="grunn"><div class="navn">Velg modell</div><div class="eks">Se hvem som skriver best akkurat nå på <a href="https://eqbench.com/creative_writing.html" target="_blank" rel="noopener">eqbench.com</a></div></div>
<div v-click="6" class="grunn"><div class="navn">Les det høyt</div><div class="eks">Ville du sagt «jeg er en brobygger mellom mennesker og teknologi»?</div></div>
</div>
</Harness>

<!--
Gi den detaljer, skriv litt utdypende

Vis hvordan du skriver, så tilpasser den seg mer din skrivemåte

Se over om du finner noen mønstre og reduser dem

Sjekk studiene selv, stemmer det?

Bruk en god modell på kreativ skriving, jeg tror Fabel og Astra er de som er på topp 2 nå.

Les det høyt, ville du sagt at du er brobygger mellom mennesker og teknologi til en kollega?
-->

---
clicks: 1
---

<Harness :steg="19" fane="Prompt">
<PromptKort>
<p>Skriv om teksten under så den høres ut som meg.</p>
<p>Slik skriver jeg: <span class="fyll">lim inn 2–3 tekster du har skrevet selv</span></p>
<p>Tekstene mine går foran. Hvis de ikke gjør det selv, unngå:</p>
<ul>
<li>emojier, fet skrift og tankestrek i hver setning</li>
<li>dykke ned i, avgjørende, solid, robust, sømløs, understreker</li>
<li>superlativer som fantastisk, unik og uforglemmelig</li>
<li>«ikke bare X, men Y» og lister i tre</li>
<li>innledning, oppsummering og optimistisk avslutning</li>
</ul>
<p class="viktig">Behold alle navn, tall og detaljer, og ikke finn på nye.</p>
<p>Teksten: <span class="fyll">lim inn teksten du vil skrive om</span></p>
</PromptKort>
</Harness>

<!--
Denne prompten alene kan fjerne mange av AI mønstrene Ta gjerne bilde, eller kopier senere.
-->

---
clicks: 6
---

<Harness :steg="20" fane="Terminal">
<Terminal lys>
<div v-click="2" class="linje bruker">Skriv 100 ord i min stemme om hvor bra AI har blitt til å skrive som et menneske.</div>
<div v-click="3">
  <div class="linje verktoy"><b>Skill</b>(ghostwriter:ghost)</div>
  <div class="linje svar">Successfully loaded skill</div>
  <div class="linje status">Hentet stemmeprofilen din fra ~/.claude/ghostwriter-profile.md</div>
  <div class="linje status">Skrev første utkast, 102 ord</div>
</div>
<div v-click="4">
  <div class="linje verktoy"><b>Skill</b>(ghostwriter:check)</div>
  <div class="linje svar">Successfully loaded skill</div>
  <div class="linje status">Sjekket utkastet: <span class="darlig">leses som tydelig AI</span>. Alt i tre (3×), «ikke X, men Y» (2×), optimistisk avslutning.</div>
</div>
<div v-click="5">
  <div class="linje verktoy"><b>Skill</b>(ghostwriter:polish)</div>
  <div class="linje svar">Successfully loaded skill</div>
  <div class="linje status">Fjernet mønstrene og skrev om i din stemme</div>
</div>
<div v-click="6">
  <div class="linje status">Sjekket ny versjon: <span class="god">leses som et menneske</span></div>
  <div class="linje tenker">✻ Ferdig</div>
</div>
</Terminal>

<div class="mt-4 installer">
  <a class="github" href="https://github.com/an2n/ghostwriter" target="_blank" rel="noopener"><svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>github.com/an2n/ghostwriter</a>
</div>
</Harness>

<!--
Så bra, enda en app.. eller enda en skill!

Først henter den stemmeprofilen din fra Claude memory.

Skriver et utkast

Sjekker utkastet mot AI mønster som skrevet på Wikipedia blant annet.

Polerer
Sjekker ny versjon
OM leses som et menneske er det good
-->

---
clicks: 3
---

<Harness :steg="21" :steg2="22" fane="" gnist />

<!--
Kult nå ser den ganske menneskelig ut :) Vis litt gnist!
-->

---
layout: center
class: text-center
---

<img src="/miles-logo-korall.png" alt="Miles" class="h-12 mx-auto mb-10" />

# Takk som hørte på!

<div class="mt-6 text-xl">Spørsmål?</div>

<div class="mt-8 flex justify-center items-center gap-4">
  <a class="linkedin" href="https://www.linkedin.com/in/anton-lilleby-987030105/" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>linkedin.com/in/anton-lilleby</a>
</div>

---

# Kilder

<div class="kilder">

- NRK Ytring: [Jeg har sluttet med kontor](https://www.nrk.no/artikkel/jeg-har-sluttet-med-kontor-1526112) · r/norge: «Jeg har sluttet med kontor»
- kode24: [– Forbud mot KI er dømt til å feile](https://www.kode24.no/artikkel/forbud-mot-ki-er-domt-til-a-feile/260952)
- Wikipedia: [Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing)
- Russell, Karpinska og Iyyer (2025), ACL: [People who frequently use ChatGPT for writing tasks are accurate and robust detectors of AI-generated text](https://aclanthology.org/2025.acl-long.267/)
- Reinhart m.fl. (2025), PNAS: [Do LLMs write like humans? Variation in grammatical and rhetorical styles](https://www.pnas.org/doi/10.1073/pnas.2422455122)
- Singhal m.fl. (2024), COLM: [A Long Way to Go: Investigating Length Correlations in RLHF](https://arxiv.org/abs/2310.03716)
- LMSYS (2024): [Does style matter? Disentangling style and substance in Chatbot Arena](https://www.lmsys.org/blog/2024-08-28-style-control/)
- Schut, Gal og Farquhar (2025), arXiv: [Do Multilingual LLMs Think In English?](https://arxiv.org/abs/2502.15603)
- EQ-Bench: [Creative Writing Leaderboard](https://eqbench.com/creative_writing.html)
- Ghostwriter: [github.com/an2n/ghostwriter](https://github.com/an2n/ghostwriter)

</div>
