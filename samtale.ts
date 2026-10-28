// Hele samtalen i chat.md. Hver slide viser ett steg, og stegene før ligger over som historikk.
// <mark> blir markert på klikk `marker`, og data-nr gir nummeret på mønsteret.
// Generert fra slides.md første gang, rediger videre her.
export interface Steg {
  prompt: string
  svar: string
  marker?: number
}

export const samtale: Steg[] = [
  {
    prompt: "Skriv en intro jeg kan lese opp på Gnist presentasjonen min.",
    svar: `<p><mark data-nr="3">Selvfølgelig! Her er en intro du kan lese opp:</mark></p>
<p>Hei, jeg heter Anton <mark data-nr="10">👋</mark> Jeg er konsulent i Miles <mark data-nr="10">🫶</mark> Flyttet fra Oslo til Bergen for kjærligheten <mark data-nr="10">–</mark> <mark data-nr="1 · 2">et avgjørende vendepunkt</mark>. <mark data-nr="3">[Sett inn anekdote om regn her]</mark></p>
<p>Tekst skrevet med AI er <mark data-nr="6">ikke bare irriterende, men avslørende.</mark> <mark data-nr="8">Studier viser</mark> at leserne merker det <mark data-nr="10">👀</mark>, <mark data-nr="5">noe som understreker hvor viktig det er å være ekte</mark>. <mark data-nr="10">🙌🔥</mark></p>
<p>I dag skal du lære å <mark data-nr="7">se mønstrene, unngå dem og skrive</mark> <mark data-nr="4">unikt</mark>. <mark data-nr="10">☀️</mark></p>
<p><mark data-nr="3">Vil du at jeg gjør den mer personlig?</mark></p>`,
  },
  {
    prompt: "Nice! Nei, men er det noen AI-mønstre her som kan avsløre meg?",
    marker: 3,
    svar: `<p>Ja, ganske mange, faktisk. Jeg har markert dem og samlet dem i fanen.</p>`,
  },
  {
    prompt: "Men merker folk egentlig at noe er skrevet med AI?",
    svar: `<p>Å ja, og de sier fra. I august havnet et innlegg fra NRK Ytring på Reddit, og den øverste kommentaren listet opp tegnene: korte setninger, mange avsnitt og «ikke slik, men slik».</p>`,
  },
  {
    prompt: "Og hva føler folk om det?",
    svar: `<p>Ikke så mye pent. Da kode24 skrev at et forbud mot KI er dømt til å feile, var 31 av 43 reaksjoner sinte fjes. En leser skrev: «Du bruker tankestrek = Det er skrevet av ChatGPT.»</p>`,
  },
  {
    prompt: "Aha, dette er litt viktig for meg siden jeg selger AI-taler som en sidehustle.",
    svar: `<p>Oi, da står det litt på spill! Er det denne nettsiden?</p>`,
  },
  {
    prompt: "Hvorfor skriver AI sånne klisjeer da?",
    svar: `<p>Det finnes ikke ett fasitsvar, men tre forklaringer går igjen. Jeg har lagt dem i fanen.</p>`,
  },
  {
    prompt: "Klarer folk faktisk å se forskjell?",
    svar: `<p>De som bruker AI mye, er overraskende gode på det. I en studie fant de 93 % av AI-tekstene, mens de som sjelden bruker AI, fant 57 %.</p>`,
  },
  {
    prompt: "Hvor mange sånne mønstre finnes det egentlig?",
    svar: `<p>Wikipedia har samlet nesten 50 på siden «Signs of AI writing». Jeg har markert ti som er lette å kjenne igjen.</p>`,
  },
  {
    prompt: "Ok, vis meg et eksempel på oppblåst betydning.",
    svar: `<p>Det er når helt vanlige ting blir gjort til noe stort. Her er en Teams-melding om en ny toastmaskin. Ja, en toastmaskin.</p>`,
  },
  {
    prompt: "Neste! Typiske AI-ord?",
    svar: `<p>Det er ord som ble mye vanligere etter at ChatGPT kom. Hvert ord for seg er greit, men mange sammen merkes. Her er en jobbsøknad.</p>`,
  },
  {
    prompt: "Hva med rester fra chatten?",
    svar: `<p>Det er når svaret fra AI blir limt rett inn, med alt sammen. Her er en hilsen til onkel Geir. Stakkars onkel Geir.</p>`,
  },
  {
    prompt: "Og reklamespråk?",
    svar: `<p>Alt blir fantastisk og uforglemmelig, fordi AI ikke klarer å holde en nøytral tone. Her er en bryllupstale.</p>`,
  },
  {
    prompt: "Tom tolkning, hva er det?",
    svar: `<p>Det er når setningen får en liten analyse hengt på slutten. Her er en Finn-annonse.</p>`,
  },
  {
    prompt: "«Ikke bare X, men Y» da?",
    svar: `<p>Det er når teksten oppklarer noe ingen har tatt feil om. Her er invitasjonen til julebordet.</p>`,
  },
  {
    prompt: "Og alt kommer i lister på tre?",
    svar: `<p>Tre ord på rad høres fint ut, men sier ikke alltid så mye. Her er en stillingsannonse.</p>`,
  },
  {
    prompt: "Hva med dårlige kilder?",
    svar: `<p>Eksperter anbefaler, studier viser … men hvem da? Her er en melding fra klassekontakten.</p>`,
  },
  {
    prompt: "Og pynt og formatering?",
    svar: `<p>Store Forbokstaver, fet skrift, emojier og tankestreker overalt. Du har garantert sett det på LinkedIn.</p>`,
  },
  {
    prompt: "Til slutt: den optimistiske avslutningen?",
    svar: `<p>Uansett hvor ille det står til, ender teksten med at fremtiden ser lys ut. Her er en statusrapport fra et prosjekt som er seks uker forsinket.</p>`,
  },
  {
    prompt: "Ok, hva kan jeg gjøre med alt dette?",
    svar: `<p>Her er seks grep som virker.</p>`,
  },
  {
    prompt: "Har du en prompt jeg kan stjele?",
    svar: `<p>Ja, forsyn deg! Lim inn noen tekster du har skrevet selv der det står.</p>`,
  },
  {
    prompt: "Må jeg lime den inn hver eneste gang?",
    svar: `<p>Nei, heldigvis. Du kan installere ghostwriter, en plugin du selv har laget. Den har tre skills som skriver i din stemme, sjekker teksten og retter mønstrene.</p>`,
  },
  {
    prompt: "Skriv en avslutning på Gnist presentasjonen min med /ghostwriter",
    svar: `<p>Det var det fra meg.</p>
<p>Neste gang du skriver noe med AI, se over teksten før du sender den, særlig hvis det står «ikke bare X, men Y» eller «et avgjørende vendepunkt».</p>
<p>Og skriv gjerne noe bare du kunne ha skrevet :)</p>
<p>Takk for meg!</p>`,
  },
  {
    prompt: "Kult nå ser den ganske meg ut :) Vis litt gnist!",
    svar: ``,
  },
]
