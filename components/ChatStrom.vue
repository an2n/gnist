<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useIsSlideActive, useSlideContext } from '@slidev/client'

// Chat der prompten skrives inn når sliden vises, og svaret strømmes ord for ord på klikk `at`.
// Med `live` skriver du prompten selv, og Enter sender den.
const props = withDefaults(defineProps<{
  prompt: string
  tittel?: string
  at?: number
  fart?: number
  skrivefart?: number
  live?: boolean
  tenketid?: number
}>(), { tittel: 'Claude', at: 1, fart: 22, skrivefart: 14, live: false, tenketid: 1500 })

const { $clicks, $renderContext, $slidev } = useSlideContext()
const aktiv = useIsSlideActive()
const statisk = computed(() => !['slide', 'presenter'].includes($renderContext.value))
const sendt = computed(() => statisk.value || $clicks.value >= props.at)

const svar = ref<HTMLElement>()
const skrevet = ref(0)
const strommer = ref(false)
const felt = ref<HTMLInputElement>()
const liveTekst = ref('')
const vistPrompt = computed(() => props.live && liveTekst.value.trim() ? liveTekst.value : props.prompt)

// Holder teksten lik i presentasjons- og presentatørvinduet
const kanal = typeof BroadcastChannel !== 'undefined' ? new BroadcastChannel('chatstrom') : undefined
kanal?.addEventListener('message', (e) => {
  liveTekst.value = e.data
})
function skriv(verdi: string) {
  liveTekst.value = verdi
  kanal?.postMessage(verdi)
}

function send() {
  felt.value?.blur()
  $slidev.nav.next()
}

function tast(e: KeyboardEvent) {
  if (['Enter', 'ArrowRight', 'ArrowDown', 'PageDown'].includes(e.key)) {
    e.preventDefault()
    send()
  }
  else if (e.key === 'Escape') {
    felt.value?.blur()
  }
}

const original = new WeakMap<Text, string>()
let noder: { node: Text, start: number, full: string }[] = []
let blokker: { el: HTMLElement, start: number }[] = []
let tekst = ''
let ramme = 0
let tenker = 0
let skriving = 0
let hilsing = 0

// Claude hilser først, strømmet ord for ord, før prompten skrives
const hilsen = 'Hvordan kan jeg hjelpe deg i dag?'
const hilst = ref(0)
function hils(ferdig: () => void) {
  clearTimeout(hilsing)
  hilst.value = 0
  const neste = () => {
    const mellomrom = hilsen.indexOf(' ', hilst.value + 1)
    hilst.value = mellomrom < 0 ? hilsen.length : mellomrom + 1
    if (hilst.value < hilsen.length)
      hilsing = window.setTimeout(neste, 120)
    else
      ferdig()
  }
  hilsing = window.setTimeout(neste, 400)
}

function samle() {
  noder = []
  blokker = []
  tekst = ''
  const walker = document.createTreeWalker(svar.value!, NodeFilter.SHOW_TEXT)
  while (walker.nextNode()) {
    const node = walker.currentNode as Text
    if (!original.has(node))
      original.set(node, node.data)
    const full = original.get(node)!
    noder.push({ node, start: tekst.length, full })
    tekst += full
  }
  for (const el of Array.from(svar.value!.children) as HTMLElement[]) {
    const forste = noder.find(n => el.contains(n.node) && n.full.trim())
    blokker.push({ el, start: forste ? forste.start : 0 })
  }
}

function vis(antall: number) {
  for (const { node, start, full } of noder)
    node.data = full.slice(0, Math.max(0, antall - start))
  for (const { el, start } of blokker)
    el.style.display = antall > start ? '' : 'none'
}

function stopp() {
  cancelAnimationFrame(ramme)
  clearTimeout(tenker)
  strommer.value = false
}

function strom() {
  stopp()
  samle()
  strommer.value = true
  let teller = 0
  let forrige = 0
  const steg = (na: number) => {
    teller += (na - forrige) / 1000 * props.fart
    forrige = na
    if (teller >= tekst.length) {
      vis(tekst.length)
      strommer.value = false
      return
    }
    vis(tekst.lastIndexOf(' ', Math.floor(teller)) + 1)
    ramme = requestAnimationFrame(steg)
  }
  vis(0)
  // Litt betenkningstid før svaret begynner å komme, som en ekte modell
  tenker = window.setTimeout(() => {
    forrige = performance.now()
    ramme = requestAnimationFrame(steg)
  }, props.tenketid)
}

// Ujevnt tempo som en ekte person: små variasjoner per tegn og pauser ved mellomrom og tegnsetting
function pause(tegn: string) {
  const snitt = 1000 / props.skrivefart
  let ms = snitt * (0.5 + Math.random())
  if (tegn === ' ')
    ms += snitt * 0.5
  if (/[.,:!?]/.test(tegn))
    ms += 250 + Math.random() * 250
  return ms
}

function skrivPrompt() {
  clearTimeout(skriving)
  skrevet.value = 0
  const neste = () => {
    if (++skrevet.value < props.prompt.length)
      skriving = window.setTimeout(neste, pause(props.prompt[skrevet.value - 1]))
  }
  skriving = window.setTimeout(neste, 800)
}

function oppdater(forrigeKlikk?: number) {
  if (!svar.value)
    return
  if (sendt.value)
    hilst.value = hilsen.length
  if (!sendt.value) {
    stopp()
    samle()
    vis(0)
    return
  }
  if (!statisk.value && forrigeKlikk === props.at - 1 && $clicks.value === props.at)
    return strom()
  stopp()
  samle()
  vis(tekst.length)
}

watch($clicks, (_, forrige) => nextTick(() => oppdater(forrige)))
watch(aktiv, (a) => {
  if (!a || sendt.value)
    return
  hils(() => !props.live && skrivPrompt())
  if (!props.live)
    return
  skriv('')
  nextTick(() => felt.value?.focus({ preventScroll: true }))
}, { immediate: true })

onMounted(() => oppdater())
onBeforeUnmount(() => {
  stopp()
  clearTimeout(skriving)
  clearTimeout(hilsing)
  kanal?.close()
  samle()
  vis(tekst.length)
})
</script>

<template>
  <div class="mockup chatbot">
    <div class="topp">{{ tittel }}</div>
    <div class="samtale">
      <div v-if="hilst" class="svar-rad">
        <img src="/claude.svg" alt="Claude" class="claude" :class="{ strommer: hilst < hilsen.length }">
        <div class="svar">{{ hilsen.slice(0, hilst) }}</div>
      </div>
      <div v-if="sendt" class="bruker-rad">
        <div class="bruker">{{ vistPrompt }}</div>
        <img src="/anton.jpg" alt="" class="avatar">
      </div>
      <div v-show="sendt" class="svar-rad">
        <img src="/claude.svg" alt="Claude" class="claude" :class="{ strommer }">
        <div ref="svar" class="svar"><slot /></div>
      </div>
    </div>
    <div class="input">
      <span v-if="sendt">Svar til Claude …</span>
      <input v-else-if="live" ref="felt" :value="liveTekst" class="felt" placeholder="Svar til Claude …" @input="skriv(($event.target as HTMLInputElement).value)" @keydown="tast">
      <span v-else class="skriver">{{ prompt.slice(0, skrevet) }}<span class="markor" /></span>
      <span class="send" :class="{ klikkbar: live && !sendt }" @click.stop="live && !sendt && send()">↑</span>
    </div>
  </div>
</template>

<style scoped>
.chatbot {
  background: #faf9f5;
  border: 1px solid #e8e6dc;
  color: #1f1e1d;
}
.topp {
  font-size: 0.75rem;
  font-weight: 600;
  color: #5d5d5d;
  padding: 0.5rem 0.9rem;
  border-bottom: 1px solid #ecebe4;
}
.samtale {
  padding: 0.8rem 1rem 0.5rem;
  min-height: 2rem;
}
.bruker-rad {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 0.4rem;
}
.bruker {
  max-width: 85%;
  background: #f0eee6;
  border-radius: 0.8rem;
  padding: 0.35rem 0.8rem;
  font-size: 0.95rem;
  text-wrap: balance;
}
.avatar {
  flex-shrink: 0;
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
  object-fit: cover;
}
.svar-rad {
  display: flex;
  gap: 0.6rem;
}
.samtale > * + * {
  margin-top: 0.6rem;
}
.claude {
  flex-shrink: 0;
  width: 1.2rem;
  height: 1.2rem;
  /* midtstilt mot første tekstlinje i svaret */
  margin-top: calc((0.95rem * 1.45 - 1.2rem) / 2);
}
.claude.strommer {
  animation: puls 1.2s ease-in-out infinite;
}
@keyframes puls {
  50% { transform: scale(0.8) rotate(20deg); opacity: 0.6; }
}
.svar {
  font-size: 0.95rem;
  line-height: 1.45;
}
.svar :deep(p) {
  margin: 0.4rem 0;
  line-height: 1.45;
}
.svar :deep(p:first-child) {
  margin-top: 0;
}
.input {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.6rem;
  margin: 0 1rem 0.8rem;
  padding: 0.45rem 0.45rem 0.45rem 0.8rem;
  background: #fff;
  border: 1px solid #e8e6dc;
  border-radius: 0.8rem;
  font-size: 0.95rem;
  color: #9a978c;
}
.skriver {
  color: #1f1e1d;
}
.felt {
  flex: 1;
  min-width: 0;
  border: none;
  outline: none;
  background: transparent;
  font: inherit;
  color: #1f1e1d;
}
.felt::placeholder {
  color: #9a978c;
}
.markor {
  display: inline-block;
  width: 1px;
  height: 1em;
  margin-left: 1px;
  vertical-align: text-bottom;
  background: #1f1e1d;
  animation: blink 1s steps(1) infinite;
}
@keyframes blink {
  50% { opacity: 0; }
}
.send {
  flex-shrink: 0;
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 0.4rem;
  background: #d97757;
  color: #fff;
  display: grid;
  place-items: center;
  font-weight: 700;
}
.send.klikkbar {
  cursor: pointer;
}
</style>
