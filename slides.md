---
theme: default
colorSchema: light
fonts:
  sans: DM Sans
  serif: Fraunces
  mono: DM Mono
title: AI-mønstrene som avslører deg!
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
clicks: 2
---

<div class="alle mt-2 grid grid-cols-[3fr_2fr] gap-8 items-start">
<ChatStrom live :fart="60" prompt="Skriv en intro jeg kan lese opp på Gnist-presentasjonen min.">
  <p><Hl :at="2" nr="3">Selvfølgelig! Her er en intro du kan lese opp:</Hl></p>
  <p>Hei, jeg heter Anton <Hl :at="2" nr="10">👋</Hl> Jeg er konsulent i Miles som flyttet fra Oslo til Bergen for kjærligheten <Hl :at="2" nr="10">–</Hl> <Hl :at="2" nr="1 · 2">et avgjørende vendepunkt</Hl>. <Hl :at="2" nr="3">[Sett inn anekdote om regn her]</Hl></p>
  <p>Tekst skrevet med AI er <Hl :at="2" nr="6">ikke bare irriterende, men avslørende.</Hl> <Hl :at="2" nr="10">👀</Hl> <Hl :at="2" nr="8">Studier viser</Hl> at leserne merker det, <Hl :at="2" nr="5">noe som understreker hvor viktig det er å være ekte</Hl>. <Hl :at="2" nr="10">🙌🔥</Hl></p>
  <p>I dag skal du lære å <Hl :at="2" nr="7">se mønstrene, unngå dem og skrive</Hl> <Hl :at="2" nr="4">unikt</Hl>. <Hl :at="2" nr="9">Etter regn kommer sol.</Hl> <Hl :at="2" nr="10">☀️</Hl></p>
  <p><Hl :at="2" nr="3">Vil du at jeg gjør den mer personlig?</Hl></p>
</ChatStrom>
<div v-click="2" class="fasit">

1. Oppblåst betydning
2. Typiske AI-ord
3. Rester fra chatten
4. Reklamespråk
5. Tom tolkning
6. «Ikke bare X, men Y»
7. Alt kommer i tre
8. Vage kilder
9. Optimistisk avslutning
10. Pynt og formatering

</div>
</div>

<!--
Hvordan kan jeg hjelpe deg i dag?

Jo, skriv en intro jeg kan lese opp til Gnist presentasjonen min.

Her var det mange typiske AI mønstre.
-->

---
clicks: 1
---

# Leserne merker det …

<div class="grid grid-cols-2 gap-8 items-start">
<Nrk class="kontor" distrikt="Ytring" type="Replikk" tittel="Jeg har sluttet med kontor" ingress="Jeg er ikke ansatt for å dekke ditt sosiale behov." dato="19. august 2026">
<p>Jeg stortrives alene. Ikke til tross for at jeg er alene. Fordi jeg er alene.</p>
</Nrk>
<Reddit sub="r/norge" tittel="Jeg har sluttet med kontor" kilde="nrk.no" :poeng="259" :kommentarer="144">
<RedditKommentar :poeng="171">Har alle tegn på generativ AI-bruk. <Hl :at="1">Korte setninger. Mange avsnitt. «Ikke slik, men slik»-argumentasjon.</Hl></RedditKommentar>
<RedditKommentar :poeng="53">Kronikken bruker ordet «ikke» 33 ganger. <Hl :at="1">22 ganger sier han hva alt mulig ikke er.</Hl></RedditKommentar>
<RedditKommentar :poeng="27">Det er også <Hl :at="1">den flate emosjonelle kurven</Hl>. Temaet tilsier at han er lei, men det merker man ikke. Det er likt igjennom hele.</RedditKommentar>
</Reddit>
</div>

<!--
Og det er ikke bare jeg som merker det, leserne merker det.

Jeg kom over denne artikkelen i August som fikk gjennomgå på Reddit. Ikke pga. selve innholdet, men at leserne reagerte på at den var tydelig skrevet ved hjelp av AI.
-->

---
clicks: 1
---

# … og de blir lei

<div class="grid grid-cols-2 gap-8 items-start">
<Kode24 tittel="– Forbud mot KI er dømt til å feile" rolle="Ansvarlig redaktør i kode24" dato="15.04.2026">
<p>KI er allerede sentral i hvordan tekst blir til.</p>
</Kode24>
<Kode24Kommentarfelt :antall="43" :sint="1" :reaksjoner="[['🔥', 2], ['😍', 6], ['😮', 0], ['😢', 3], ['😂', 1], ['😡', 31]]">
<Kode24Kommentar :opp="31" :ned="3">Jeg har merket i det siste at både jeg og folk jeg jobber med har vært mindre og mindre på Kode24 fordi det er så mye KI slop i artikler. Det er ekstremt åpenbart når mesteparten av artiklene har <Hl :at="1">akkurat samme skrivestil og formatering</Hl>.</Kode24Kommentar>
<Kode24Kommentar :opp="17" :ned="1">Helt uten disclaimer, men med flere brukne linker og <Hl :at="1">utm_source=chatgpt.com</Hl></Kode24Kommentar>
<Kode24Kommentar :opp="14" :ned="7">Enkelt: <Hl :at="1">Du bruker tankestrek = Det er skrevet av ChatGPT.</Hl> … hele teksten din også åpenbart er skrevet av AI.</Kode24Kommentar>
</Kode24Kommentarfelt>
</div>

<!--
Og de blir lei.

Her et innlegg på Kode24 som fikk en del sinte fjes, og en leser skrev: «Du bruker tankestrek = Det er skrevet av ChatGPT.»

Nå sier jeg ikke at det stemmer i alle tilfeller, men tankestreken har blitt mer  fremtredende nå enn før.
-->

---
clicks: 4
---

# Så hvorfor skriver AI sånn?

<div class="hvorfor grid grid-cols-3 gap-5 mt-6">
<div v-click="1" class="kort">
  <div class="navn">Den velger det vanligste</div>
  <div class="visuelt">
    <div class="felt">I en verden i stadig <span class="stabel"><span :class="{ skjult: $clicks >= 2 }">…</span><span class="uth" :class="{ skjult: $clicks < 2 }">endring</span></span></div>
    <div class="forslag" :class="{ synlig: $clicks >= 2 }"><span>utvikling</span><span class="topp">endring</span><span>vekst</span></div>
  </div>
  <div class="kilde">Reinhart m.fl. (2025), PNAS</div>
</div>
<div v-click="3" class="kort">
  <div class="navn">Den er trent til å behage</div>
  <div class="visuelt">
    <div class="sporsmal">«Regner det mye i Bergen?»</div>
    <div class="svar">Ja, ganske mye.</div>
    <div class="svar valgt"><b>Godt spørsmål!</b> 🌧️ Bergen er kjent for:<br>• regn • paraplyer • fjell<span class="stemme">👍 Valgt</span></div>
    <div class="forklar">Folk velger det lange, så AI lærer det</div>
  </div>
  <div class="kilde">Singhal m.fl. (2024), COLM</div>
</div>
<div v-click="4" class="kort">
  <div class="navn">Den er mest trent på engelsk</div>
  <div class="visuelt oversett">
    <div><i>delve into</i></div>
    <div class="pil">↓</div>
    <div><span class="uth">dykke ned i</span></div>
  </div>
  <div class="kilde">Schut, Gal og Farquhar (2025)</div>
</div>
</div>

<!--
Så hvorfor skriver AI egentlig sånn? Det finnes ikke ett fasitsvar, men det er tre forklaringer som går igjen.

Den første er at den velger det vanligste. Den fungerer litt som autofullfør på mobilen. Hvis jeg sier «i en verden i stadig …», hva tenker dere da?

Endring, ja. AI velger det samme, og det er derfor klisjeene dukker opp.

Den andre er at den er trent til å behage. Når modellene trenes, får folk to svar og velger det beste.
De velger ofte det lange svaret med lister og fet skrift, selv om det korte sier det samme. 

Så det er det den lærer.
Og den tredje er at den er mest trent på engelsk. Så selv når den skriver norsk, skinner engelsken ofte gjennom.
-->

---

# Klarer vi å se det?

<div class="grid grid-cols-2 gap-8">
<div class="stat">
  <div class="hvem">Folk som sjelden bruker AI til å skrive</div>
  <div class="stort">57 %</div>
  <div class="del">av AI-tekstene ble oppdaget</div>
  <div class="bar"><div class="fyll" style="width: 57%"></div><div class="gjett"></div></div>
  <div class="hva">Men mistenkte også halvparten av de ekte</div>
</div>
<div class="stat">
  <div class="hvem">Folk som bruker AI mye til å skrive</div>
  <div class="stort">93 %</div>
  <div class="del">av AI-tekstene ble oppdaget</div>
  <div class="bar"><div class="fyll" style="width: 93%"></div><div class="gjett"></div></div>
  <div class="hva">Mistenkte bare 4 % av de ekte</div>
</div>
</div>

<div class="mt-3 text-xs opacity-60">Russell, Karpinska og Iyyer (2025), ACL: 300 artikler, samme tekster for begge grupper</div>

<div v-click class="mt-6 text-2xl font-serif">
Det er ikke magefølelse. Det er mønstre, og mønstre kan læres.
</div>

<!--
Men klarer vi egentlig å se det?
De som bruker AI mye, er veldig flinke. I en studie fra i fjor fant de 93 prosent av AI-tekstene. Derimot folk som sjelden bruker AI, fant bare litt over halvparten.

Så det er ikke magefølelse. Det er mønstre, og det kan læres.
-->

---
clicks: 1
---

<div class="grid grid-cols-[3fr_1fr] gap-8 items-center h-full">
<Wikipedia tittel="Wikipedia:Signs of AI writing" undertittel="From Wikipedia, the free encyclopedia · WikiProject AI Cleanup">
<div class="gruppe">Content</div>
<div><Hl :at="1">Undue emphasis on significance</Hl></div>
<div>Canned emphasis on notability</div>
<div><Hl :at="1">Superficial analyses</Hl></div>
<div><Hl :at="1">Promotional language</Hl></div>
<div><Hl :at="1">Vague attributions</Hl></div>
<div><Hl :at="1">Outline-like conclusions</Hl></div>
<div>Lists treated as proper nouns</div>
<div>«Awards and recognition»</div>
<div class="gruppe">Language and grammar</div>
<div><Hl :at="1">«AI vocabulary» words</Hl></div>
<div>Avoidance of copulatives</div>
<div>Vague connection words</div>
<div><Hl :at="1">Negative parallelisms</Hl></div>
<div><Hl :at="1">Rule of three</Hl></div>
<div class="gruppe">Style</div>
<div><Hl :at="1">Title case headings</Hl></div>
<div>Headings only containing headings</div>
<div><Hl :at="1">Boldface and em dashes</Hl></div>
<div>Inline-header lists</div>
<div><Hl :at="1">Emoji as formatting</Hl></div>
<div>Unusual tables</div>
<div>Curly quotation marks</div>
<div>Skipped heading levels</div>
<div>Thematic breaks</div>
<div class="gruppe">Communication</div>
<div><Hl :at="1" class="whitespace-nowrap">Collaborative communication</Hl></div>
<div>Knowledge-cutoff disclaimers</div>
<div><Hl :at="1">Placeholder text</Hl></div>
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
<div>
<div class="text-2xl font-serif">Nesten 50 mønstre.</div>
<div v-click="1" class="text-2xl font-serif mt-5">Jeg plukket ut ti jeg ser ofte.</div>
</div>
</div>

<!--
Det finnes folk som bruker fritiden sin på å lete etter AI-skrevne artikler på Wikipedia.
De har samlet alt de har funnet på en side som heter «Signs of AI writing», og der er det nesten 50 mønstre.

TRYKK

Jeg har plukket ut ti jeg ser ganske ofte. La oss se på dem sammen.
-->

---
clicks: 1
---

# Oppblåst betydning

<div class="monster-kilde">Wikipedia: Undue emphasis on significance, legacy, and broader trends</div>

<div class="monster-eks">
<Chat app="teams" kanal="Kontoret Bergen" navn="Lise Hansen">
  <p>Hei alle sammen! 🍞</p>
  <p>Den nye toastmaskinen i 5. etasje <Hl :at="1">markerer et viktig vendepunkt</Hl> for kontoret vårt.</p>
  <p>Den vil <Hl :at="1">sette varige spor</Hl> i hverdagen vår og er <Hl :at="1">dypt forankret</Hl> i verdiene våre om trivsel og fellesskap.</p>
</Chat>
</div>

<!--
Den første vi har er oppblåst betydning.

Det er når helt vanlige ting blir gjort til noe veldig stort.

Her er en melding på Teams om at kontoret har fått en ny toastmaskin.

«Den markerer et viktig vendepunkt for kontoret vårt.» Det er jo bare en toastmaskin.
-->

---
clicks: 1
---

# Typiske AI-ord

<div class="monster-kilde">Wikipedia: High density of «AI vocabulary» words (delve, pivotal, tapestry, testament, underscore)</div>

<div class="monster-eks">
<Epost fra="Ola Nordmann" til="rekruttering@firma.no" emne="Søknad på stilling som seniorutvikler">
  <p>Hei!</p>
  <p>Jeg brenner for å <Hl :at="1">dykke ned i</Hl> komplekse problemstillinger, og min <Hl :at="1">solide</Hl> erfaring fra Equinor er <Hl :at="1">et vitnesbyrd om</Hl> evnen til å levere <Hl :at="1">robuste</Hl> og <Hl :at="1">helhetlige</Hl> løsninger.</p>
  <p><Hl :at="1">I tillegg</Hl> <Hl :at="1">understreker</Hl> mitt engasjement i det frivillige <Hl :at="1">et genuint ønske</Hl> om å spille <Hl :at="1">en avgjørende rolle</Hl> i <Hl :at="1">det dynamiske samspillet</Hl> mellom mennesker og teknologi.</p>
</Epost>
</div>

<!--
Så har vi de typiske AI-ordene. Det er ord som ble mye vanligere etter at ChatGPT kom.
Hvert ord for seg er helt greit, men når de kommer mange sammen, merker man det.
Dette er en jobbsøknad, dykke ned i, solid, robust og avgjørende, alt i ett avsnitt.
-->

---
clicks: 1
---

# Rester fra chatten

<div class="monster-kilde">Wikipedia: Collaborative communication · Phrasal templates and placeholder text</div>

<div class="monster-eks">
<Melding gruppe="Onkel Geir" sendt>
  <p><Hl :at="1">Selvfølgelig! Her er en hyggelig hilsen du kan sende:</Hl></p>
  <p>Gratulerer så mye med 50-årsdagen, <Hl :at="1">[navn]</Hl>! Håper du får en fantastisk dag sammen med dem du er glad i. 🎂</p>
  <p><Hl :at="1">Vil du at jeg gjør hilsenen mer personlig eller humoristisk?</Hl></p>
</Melding>
</div>

<!--
Og så har vi rester fra chatten. Det er når svaret fra AI-en blir limt rett inn, med alt sammen.
Denne er ganske uheldig. «Gratulerer så mye med 50-årsdagen, navn!»
-->

---
clicks: 1
---

# Reklamespråk

<div class="monster-kilde">Wikipedia: Promotional and advertisement-like language</div>

<div class="monster-eks">
<Tale overskrift="Bryllupstale">
  <p>Kjære Mari og Jonas. I dag feirer vi <Hl :at="1">en helt fantastisk</Hl> kjærlighetshistorie.</p>
  <p>Dere er <Hl :at="1">et utrolig inspirerende</Hl> par, og dagen i dag blir <Hl :at="1">en uforglemmelig opplevelse</Hl> <Hl :at="1">i hjertet av</Hl> vakre Hardanger.</p>
  <p>Takk for at vi får være med på <Hl :at="1">denne unike reisen</Hl>.</p>
</Tale>
</div>

<!--
Så har vi reklamespråk. AI klarer ikke helt å holde en nøytral tone, så alt blir fantastisk og uforglemmelig.
Her er en bryllupstale. «I dag feirer vi en helt fantastisk kjærlighetshistorie.»
-->

---
clicks: 1
---

# Tom tolkning

<div class="monster-kilde">Wikipedia: Superficial analyses</div>

<div class="monster-eks">
<Finn tittel="Lys 3-roms med vestvendt balkong" sted="Møhlenpris, Bergen" pris="4 950 000 kr">
  <p>Leiligheten har balkong mot vest, <Hl :at="1">noe som gjør den perfekt for sosiale sammenkomster</Hl>.</p>
  <p>Det er fem minutter å gå til Bybanen, <Hl :at="1">noe som understreker den sentrale beliggenheten</Hl> og <Hl :at="1">bidrar til en enkel hverdag</Hl>.</p>
</Finn>
</div>

<!--
Så har vi tom tolkning. Det er når setningen får en liten analyse hengt på slutten.

Her er en Finn-annonse. Det er fem minutter til Bybanen, «noe som understreker den sentrale beliggenheten».

Det holder egentlig å si at det er fem minutter til Bybanen. Resten skjønner vi selv.
-->

---
clicks: 1
---

# «Ikke bare X, men Y»

<div class="monster-kilde">Wikipedia: Negative parallelisms</div>

<div class="monster-eks">
<Epost fra="Sosialkomiteen" til="alle@firma.no" emne="Påmeldingen til julebordet er åpen! 🎄">
  <p>Hei alle sammen!</p>
  <p><Hl :at="1">Julebordet er ikke bare en fest. Det er en feiring</Hl> av alt vi har fått til sammen i år.</p>
  <p><Hl :at="1">Det handler ikke om maten, men om menneskene.</Hl></p>
  <p>Meld deg på innen fredag.</p>
</Epost>
</div>

<!--
Så har vi «ikke bare X, men Y». Der teksten prøver å oppklare noe.

Her er invitasjonen til julebordet. «Det handler ikke om maten, men om menneskene.»

Ingen trodde vel at julebordet bare handlet om maten. Selvom det handle litt om maten også.
-->

---
clicks: 1
---

# Alt kommer i tre

<div class="monster-kilde">Wikipedia: Rule of three</div>

<div class="monster-eks">
<Finn tittel="Seniorutvikler" undertittel="Firma AS" sted="Bergen">
  <p>Vi ser etter en kollega som er <Hl :at="1">nysgjerrig, engasjert og løsningsorientert</Hl>.</p>
  <p>Hos oss får du <Hl :at="1">faglig utvikling, spennende oppgaver og et godt arbeidsmiljø</Hl>.</p>
</Finn>
</div>

<!--
Så kommer alt i tre. Tre ord på rad høres for seg ut, men sier ikke alltid så mye.
Nysgjerrig, engasjert og løsningsorientert.
Prøv å finne en stillingsannonse som ikke har akkurat den setningen.
-->

---
clicks: 1
---

# Vage kilder

<div class="monster-kilde">Wikipedia: Vague attributions and overgeneralization of opinions</div>

<div class="monster-eks">
<Melding gruppe="Foreldre 4B" avsender="Kristin (klassekontakt)">
  <p>Hei alle foreldre i 4B!</p>
  <p><Hl :at="1">Eksperter anbefaler</Hl> at barn under 12 år ikke har mobil på skolen, og <Hl :at="1">flere studier viser</Hl> at det gir bedre konsentrasjon.</p>
  <p><Hl :at="1">De fleste foreldre er enige</Hl> i dette, så vi foreslår en felles avtale for klassen.</p>
</Melding>
</div>

<!--
Så har vi vage kilder. Eksperter anbefaler, studier viser, de fleste er enige … men hvem da?
Her er en melding fra klassekontakten i 4B.
Kanskje det stemmer, men vi har ingen måte å sjekke det på.
-->

---
clicks: 1
---

# Optimistisk avslutning

<div class="monster-kilde">Wikipedia: Outline-like conclusions about challenges and future prospects</div>

<div class="monster-eks">
<Dokument fil="Statusrapport uke 38.docx" tittel="Statusrapport uke 38" forfatter="Prosjektleder · til styringsgruppen">
  <p>Leveransen er forsinket med seks uker, og budsjettet er overskredet med 40 %.</p>
  <p><Hl :at="1">Til tross for disse utfordringene</Hl> er prosjektet <Hl :at="1">godt posisjonert</Hl> og <Hl :at="1">ser lyst på fremtiden</Hl>.</p>
</Dokument>
</div>

<!--
Den optimistiske avslutningen. Uansett hvor ille det står til, ender teksten med at fremtiden ser lys ut.

Her er en statusrapport. Prosjektet er seks uker forsinket og 40 prosent over budsjett.
Men til tross for disse utfordringene er det godt posisjonert for fremtiden..
-->

---
clicks: 1
---

# Pynt og formatering

<div class="monster-kilde">Wikipedia: Title case · Overuse of boldface · Inline-header vertical lists · Em dashes · Emoji as formatting</div>

<div class="monster-eks">
<LinkedIn navn="Ola Nordmann" tittel="Senior konsulent | Brenner for mennesker og teknologi">
  <p>Stolt og ydmyk over å kunne dele at jeg har startet i ny jobb <Hl :at="1">—</Hl> et nytt kapittel starter nå! <Hl :at="1">🎉</Hl></p>
  <p><Hl :at="1">3 Ting Jeg Har Lært Etter 10 År I Bransjen:</Hl></p>
  <p><Hl :at="1">✅ <strong>Nysgjerrighet</strong> —</Hl> still spørsmål, alltid<br>
  <Hl :at="1">✅ <strong>Relasjoner</strong> —</Hl> nettverket ditt er alt<br>
  <Hl :at="1">✅ <strong>Mot</strong> —</Hl> tør å feile</p>
  <p><Hl :at="1">Hva er din beste lærdom? 👇</Hl></p>
</LinkedIn>
</div>

<!--
Til slutt har vi pynt og formatering. Store Forbokstaver, fet skrift, emojier foran punktene og tankestreker overalt.
Dette kjenner dere sikkert igjen fra LinkedIn.
-->

---

# Seks grep som virker

<div class="grep-grid grid grid-cols-3 gap-4 mt-2">
<div v-click class="grep">
  <div class="navn">Gi den detaljer</div>
  <div class="vis">
    <div class="boble bort">Takk for en fantastisk innsats</div>
    <div class="boble">Takk for at du ble til ti og reddet demoen. Kunden er kjempefornøyd!</div>
  </div>
</div>
<div v-click class="grep">
  <div class="navn">Vis hvordan du skriver</div>
  <div class="vis">
    <div class="ark"><span>📄</span><span>📄</span><span>📄</span><span class="pil">→</span><img src="/claude.svg" alt="" class="logo"></div>
    <div class="liten">Lim inn 2–3 tekster du har skrevet selv</div>
  </div>
</div>
<div v-click class="grep">
  <div class="navn">Vær obs på mønstrene</div>
  <div class="vis brikker">
    <span>ikke bare X, men Y</span><span>solid</span><span>✅</span><span>–</span><span>unik reise</span>
  </div>
</div>
<div v-click class="grep">
  <div class="navn">Sjekk fakta</div>
  <div class="vis">
    <div class="boble"><span class="uth">Studier viser</span> at …</div>
    <div class="sporsmal-merke">Hvilke studier?</div>
  </div>
</div>
<div v-click class="grep">
  <div class="navn">Velg modell</div>
  <div class="vis">
    <div class="topp"><span>#1</span><span>GPT-6 Astra</span><span>2174</span></div>
    <div class="topp"><span>#2</span><span>Fable 5.1</span><span>2163</span></div>
    <div class="topp"><span>#25</span><span>Sonnet 4.6</span><span>1811</span></div>
    <div class="liten">Elo i kreativ skriving, okt. 2026 · <a href="https://eqbench.com/creative_writing.html" target="_blank" rel="noopener">eqbench.com</a></div>
  </div>
</div>
<div v-click class="grep">
  <div class="navn">Les det høyt</div>
  <div class="vis">
    <div class="boble">«Du er ikke bare en kollega, men en brobygger mellom mennesker og teknologi.»</div>
    <div class="boble svar-til">… går det bra med deg?</div>
  </div>
</div>
</div>

<!--
Hva kan man egentlig gjøre med det? Her er seks grep som virker for meg.
Det første er å gi den detaljer. Gir du den ingen, blir det bare «takk for en fantastisk innsats». Sier du at kollegaen ble til ti og reddet demoen, har den noe ekte å skrive om.
Det andre er å vise hvordan du skriver. Lim inn to eller tre tekster du har skrevet selv, så har den noe å gå etter.
Det tredje er å være obs på mønstrene. Nå som dere har sett dem, er det ganske lett å stryke dem.
Det fjerde er å sjekke fakta. Står det «studier viser», spør hvilke studier.
Det femte er å velge modell. Jeg testet samme tale i to modeller. Sonnet 4.6 hadde seks mønstre, Fable 5.1 hadde ingen. På eqbench.com kan dere se hvilke modeller som skriver best akkurat nå.
Og det siste er å lese det høyt. Ville du sagt til en kollega at hen er en brobygger mellom mennesker og teknologi? Da hadde du nok fått spørsmål om det går bra med deg.
-->

---

# En prompt du kan stjele …

<PromptKort class="mt-2">
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

<!--
Hvis dere vil prøve selv, er dette en prompt dere kan stjele. Ta gjerne bilde.
Hver regel svarer til et av mønstrene vi har sett på, og den viktigste er den siste: ikke finn på ting.
Men den må limes inn hver gang, så jeg foretrekker noe annet.
-->

---
clicks: 5
---

# … eller en skill du kan bruke

<Terminal class="mt-12" lys>
<div v-click="1" class="linje bruker">Skriv 100 ord i min stemme om hvor bra AI har blitt til å skrive som et menneske.</div>
<div v-click="2">
  <div class="linje verktoy"><b>Skill</b>(ghostwriter:ghost)</div>
  <div class="linje svar">Successfully loaded skill</div>
  <div class="linje status">Hentet stemmeprofilen din fra ~/.claude/ghostwriter-profile.md</div>
  <div class="linje status">Skrev første utkast, 102 ord</div>
</div>
<div v-click="3">
  <div class="linje verktoy"><b>Skill</b>(ghostwriter:check)</div>
  <div class="linje svar">Successfully loaded skill</div>
  <div class="linje status">Sjekket utkastet: <span class="darlig">leses som tydelig AI</span>. Alt i tre (3×), «ikke X, men Y» (2×), optimistisk avslutning.</div>
</div>
<div v-click="4">
  <div class="linje verktoy"><b>Skill</b>(ghostwriter:polish)</div>
  <div class="linje svar">Successfully loaded skill</div>
  <div class="linje status">Fjernet mønstrene og skrev om i din stemme</div>
</div>
<div v-click="5">
  <div class="linje status">Sjekket ny versjon: <span class="god">leses som et menneske</span></div>
  <div class="linje tenker">✻ Ferdig</div>
</div>
</Terminal>

<div class="abs-tr mt-14 mr-14 installer">
  <a class="github" href="https://github.com/an2n/ghostwriter" target="_blank" rel="noopener"><svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>github.com/an2n/ghostwriter</a>
</div>

<!--
Jeg ble ganske lei av å lime inn den prompten, så jeg laget en skill som heter ghostwriter.
En skill er en oppskrift Claude henter selv når den trengs.
Den skriver i din stemme, sjekker teksten etter mønstrene og retter dem.
Stemmen lærer den fra to–tre tekster du har skrevet selv.
-->

---
clicks: 3
---

# Uten og med skill

<div class="tett grid grid-cols-2 gap-8 items-start">
<div>
<Chatbot tittel="Uten skill" prompt="Skriv 100 ord i min stemme om hvor bra AI har blitt til å skrive som et menneske.">
  <p>AI har blitt utrolig god til å skrive som et menneske.</p>
  <p>Det handler <Hl :at="1">ikke lenger bare om</Hl> <Hl :at="1">grammatikk, struktur og fine formuleringer</Hl>. Dagens AI kan fange <Hl :at="1">tone, humor, nyanser</Hl> og tilpasse språket til hvem du skriver for.</p>
  <p>Men det mest interessante er <Hl :at="1">kanskje ikke hvor menneskelig AI kan skrive – det er hvor</Hl> vanskelig det kan bli å skille mellom ekte og kunstig.</p>
  <p>Samtidig er det fortsatt <Hl :at="1">én ting AI ikke har:</Hl> <Hl :at="1">egne erfaringer, følelser og perspektiver</Hl>.</p>
  <p>Derfor tror jeg fremtidens beste tekster blir skrevet i samarbeid mellom menneske og AI.</p>
  <p><Hl :at="1">AI kan finne ordene. Men mennesket må fortsatt ha noe å si.</Hl></p>
</Chatbot>
</div>
<Chatbot v-click="2" tittel="Med skill" prompt="Skriv 100 ord i min stemme om hvor bra AI har blitt til å skrive som et menneske.">
  <p>AI skriver mye bedre enn før.</p>
  <p>For to år siden var det lett å se. Rare ord og altfor mange emojier. Nå må jeg lese mange e-poster to ganger før jeg er sikker.</p>
  <p>Men leserne blir også flinkere. <Hl :at="3" gronn>I en studie fra 2025 skulle folk gjette om 300 artikler var skrevet av AI. De som sjelden bruker ChatGPT, traff omtrent som om de kastet mynt. De som bruker det mye, fant 93 %.</Hl></p>
  <p>Så jo mer folk bruker AI, jo lettere er det å se. Litt ironisk <Hl :at="3" gronn>:)</Hl></p>
</Chatbot>
</div>

<div v-click="3" class="absolute" style="left: 507px; top: 436px"><span class="dom">Sjekk tallene!</span></div>

<!--
«AI kan finne ordene. Men mennesket må fortsatt ha noe å si.» Høres det kjent ut?
Her er samme prompt og samme modell, uten og med skill.
Uten får du tretall, «ikke lenger bare» og en optimistisk avslutning.
Med skill blir det mer ujevnt og personlig.
Den viser til studien vi så i starten. Her stemmer tallene, men sjekk alltid selv.
-->

---
clicks: 1
---

# Jeg ba AI skrive avslutningen

<div class="grid grid-cols-[3fr_2fr] gap-10 items-center mt-8">
<Chatbot tittel="Claude" prompt="Skriv en avslutning på foredraget mitt om AI-mønstre.">
  <p><Hl :at="1" nr="4">Takk for at dere ble med på denne unike reisen!</Hl> <Hl :at="1" nr="10">🚀</Hl></p>
  <p>AI-mønstre er <Hl :at="1" nr="6">ikke bare en utfordring – de er en mulighet</Hl>.</p>
  <p>Med <Hl :at="1" nr="7">innsikt, bevissthet og nysgjerrighet</Hl> er dere nå <Hl :at="1" nr="9">godt posisjonert for fremtiden</Hl>.</p>
  <p><Hl :at="1" nr="3">Vil du at jeg gjør avslutningen mer personlig?</Hl></p>
</Chatbot>
<div v-click="1" class="text-4xl font-serif">Men jeg burde kanskje skrevet den selv :)</div>
</div>

<!--
Til slutt ba jeg AI skrive avslutningen for meg. Hvor mange mønstre ser dere?
Men jeg burde kanskje skrevet den selv :)
Så neste gang du skriver en tale, en e-post eller en melding, skriv noe bare du kunne ha skrevet.
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
