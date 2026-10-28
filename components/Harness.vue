<script setup lang="ts">
import { computed, ref } from 'vue'
import { useSlideContext } from '@slidev/client'
import { samtale } from '../samtale'

// Én samtale som fortsetter fra slide til slide, med eksempler i en fane til høyre (chat.md)
const props = withDefaults(defineProps<{
  steg: number
  steg2?: number
  fane?: string
  // En fane til som åpnes og tar over panelet på klikk `fane2At`, med innhold i sloten #fane2
  fane2?: string
  fane2At?: number
  panelAt?: number
  gnist?: boolean
}>(), { fane: 'Eksempel', fane2At: 3, panelAt: 1, gnist: false })

const { $clicks } = useSlideContext()
// `marker` på et steg: klikket der markeringene vises, både i svaret og i historikken over
const naa = computed(() => samtale[props.steg])
// Med `steg2` skrives neste melding inn på klikk 2 og sendes på klikk 3, på samme slide
const neste = computed(() => props.steg2 === undefined ? undefined : samtale[props.steg2])
// Fanen og markeringene venter til Claude er ferdig med å svare, pluss en liten pause så svaret rekker å bli lest
const strommer = ref(false)
let pause = 0
function strom(paagaar: boolean) {
  clearTimeout(pause)
  if (paagaar)
    strommer.value = true
  else
    pause = window.setTimeout(() => { strommer.value = false }, 500)
}
const marker = computed(() => (neste.value ?? naa.value).marker)
const paFane2 = computed(() => props.fane2 !== undefined && $clicks.value >= props.fane2At)
const historikk = computed(() => samtale.slice(0, props.steg).flatMap(s => [
  { fra: 'meg' as const, html: s.prompt },
  { fra: 'claude' as const, html: s.svar },
]))
</script>

<template>
  <div class="harness" :class="{ marker: $clicks >= (marker ?? Infinity) && !strommer, skjul: marker !== undefined && ($clicks < marker || strommer), alene: !$slots.default }">
    <ChatStrom class="chat" :historikk="historikk" :prompt="naa.prompt" :svar-html="naa.svar" :prompt2="neste?.prompt" :skriv2="2" :at2="3" :svar-html2="neste?.svar" :fart="60" :tenketid="700" @strommer="strom" />
    <div v-if="$slots.default" class="panel" :class="{ synlig: $clicks >= panelAt && !strommer }">
      <div class="faner"><span class="fane" :class="{ inaktiv: paFane2 }">{{ fane }}</span><span v-if="paFane2" class="fane">{{ fane2 }}</span></div>
      <div v-if="paFane2" class="innhold"><slot name="fane2" /></div>
      <div v-else class="innhold"><slot /></div>
    </div>
    <!-- Gnister over hele skjermen når siste melding er sendt og besvart -->
    <Gnister v-if="gnist" :aktiv="$clicks >= (neste ? 3 : 1) && !strommer" skjerm class="!absolute inset-0 pointer-events-none z-10" />
  </div>
</template>

<style scoped>
.harness {
  position: relative;
  display: grid;
  grid-template-columns: 22rem 1fr;
  gap: 1.2rem;
  height: 100%;
}
.harness.alene {
  grid-template-columns: 34rem;
  justify-content: center;
}
.chat {
  height: 100%;
  max-width: none;
}
.chat :deep(.svar),
.chat :deep(.bruker),
.chat :deep(.input) {
  font-size: 0.78rem;
}
.chat :deep(mark) {
  background: transparent;
  color: inherit;
  border-radius: 0.2em;
  transition: background 0.3s;
}
.marker .chat :deep(mark),
.harness:not(.skjul) .chat :deep(.historikk mark) {
  background: var(--miles-gul);
}
/* Nummeret på mønsteret, som i Hl */
.chat :deep(mark[data-nr])::after {
  content: attr(data-nr);
  display: none;
  margin-left: 0.2em;
  padding: 0.15em 0.45em;
  border-radius: 999px;
  background: var(--miles-korall);
  color: #fff;
  font-size: 0.65em;
  font-weight: 700;
  line-height: 1.5;
  vertical-align: super;
}
.marker .chat :deep(mark[data-nr])::after,
.harness:not(.skjul) .chat :deep(.historikk mark[data-nr])::after {
  display: inline;
}
.panel {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  background: #fff;
  border: 1px solid #e8e6dc;
  border-radius: 0.6rem;
  overflow: hidden;
  opacity: 0;
  transform: translateX(1rem);
  transition: opacity 0.4s, transform 0.4s;
}
.panel.synlig {
  opacity: 1;
  transform: none;
}
.faner {
  display: flex;
  background: #f0eee6;
  border-bottom: 1px solid #e8e6dc;
  padding: 0.35rem 0.6rem 0;
}
.fane {
  background: #fff;
  border: 1px solid #e8e6dc;
  border-bottom: none;
  border-radius: 0.4rem 0.4rem 0 0;
  padding: 0.2rem 0.8rem;
  margin-bottom: -1px;
  font-size: 0.7rem;
  color: #5d5d5d;
}
.fane.inaktiv {
  background: transparent;
  border-color: transparent;
}
.innhold {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: 1rem;
  background: #faf9f5;
}
/* Kilden står nederst i fanen, tydelig, i stedet for klemt under fanen */
.innhold :deep(.monster-kilde) {
  order: 1;
  margin-top: auto;
  padding-top: 0.6rem;
  border-top: 1px solid #e8e6dc;
  font-size: 0.85rem;
  color: var(--miles-burgunder);
  opacity: 1;
}
.innhold :deep(.monster-eks) {
  margin-top: 0;
}
</style>
