<script setup lang="ts">
import { ref } from 'vue'

withDefaults(defineProps<{ tittel?: string }>(), { tittel: 'Prompt' })

const innhold = ref<HTMLElement>()
const kopiert = ref(false)

function somTekst(el: HTMLElement): string {
  const deler: string[] = []
  for (const barn of Array.from(el.children) as HTMLElement[]) {
    if (barn.tagName === 'UL') {
      deler.push(Array.from(barn.querySelectorAll('li')).map(li => `- ${li.innerText.trim()}`).join('\n'))
    }
    else {
      const kopi = barn.cloneNode(true) as HTMLElement
      kopi.querySelectorAll('.fyll').forEach(f => { f.textContent = `[${f.textContent?.trim()}]` })
      deler.push(kopi.textContent?.trim() ?? '')
    }
  }
  return deler.join('\n\n').replace(/:\n\n- /g, ':\n- ')
}

async function kopier() {
  if (!innhold.value)
    return
  const tekst = somTekst(innhold.value)
  try {
    await navigator.clipboard.writeText(tekst)
  }
  catch {
    const felt = document.createElement('textarea')
    felt.value = tekst
    document.body.appendChild(felt)
    felt.select()
    document.execCommand('copy')
    felt.remove()
  }
  kopiert.value = true
  setTimeout(() => { kopiert.value = false }, 2000)
}
</script>

<template>
  <div class="prompt">
    <div class="topp">
      <span class="tittel">{{ tittel }}</span>
      <button type="button" class="kopier" @click.stop="kopier">{{ kopiert ? '✓ Kopiert' : '⧉ Kopier' }}</button>
    </div>
    <div ref="innhold" class="innhold"><slot /></div>
  </div>
</template>

<style scoped>
.prompt {
  background: #fbfaf7;
  border: 1px solid #e3e0d8;
  border-radius: 0.6rem;
  box-shadow: 0 10px 30px rgba(69, 13, 33, 0.08);
  overflow: hidden;
  color: #2b2b2b;
  text-align: left;
}
.topp {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #efece5;
  border-bottom: 1px solid #e3e0d8;
  padding: 0.45rem 1rem;
  font-size: 0.72rem;
  color: #8a867d;
}
.tittel {
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.kopier {
  border: 1px solid #d8d4ca;
  border-radius: 0.35rem;
  padding: 0.1rem 0.5rem;
  background: #fff;
  color: inherit;
  font: inherit;
  cursor: pointer;
}
.kopier:hover {
  background: #f6f3ec;
  color: #2b2b2b;
}
.innhold {
  font-family: 'DM Mono', ui-monospace, Menlo, monospace;
  font-size: 0.78rem;
  line-height: 1.6;
  padding: 0.9rem 1.2rem 1rem;
}
.innhold :deep(p) {
  margin: 0 0 0.7rem;
}
.innhold :deep(p:last-child) {
  margin-bottom: 0;
}
.innhold :deep(.fyll) {
  background: rgba(255, 71, 76, 0.1);
  color: #c2272d;
  border: 1px dashed rgba(255, 71, 76, 0.45);
  border-radius: 0.3rem;
  padding: 0 0.35rem;
}
.innhold :deep(ul) {
  max-width: none;
  list-style: none;
  margin: 0 0 0.7rem;
  padding: 0;
}
.innhold :deep(li) {
  margin: 0;
  padding-left: 1.2rem;
  position: relative;
  font-size: 0.78rem;
  line-height: 1.6;
}
.innhold :deep(li)::before {
  content: '✕';
  position: absolute;
  left: 0;
  color: #c2272d;
}
.innhold :deep(.viktig) {
  font-weight: 600;
  color: #1a1a1a;
}
</style>
