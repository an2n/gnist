<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ tekst: string }>()
const kopiert = ref(false)

async function kopier() {
  try {
    await navigator.clipboard.writeText(props.tekst)
  }
  catch {
    const felt = document.createElement('textarea')
    felt.value = props.tekst
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
  <button type="button" class="kommando" :title="kopiert ? 'Kopiert' : 'Kopier'" @click.stop="kopier">
    <span class="dollar">$</span>
    <span>{{ tekst }}</span>
    <span class="ikon">{{ kopiert ? '✓' : '⧉' }}</span>
  </button>
</template>

<style scoped>
.kommando {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'DM Mono', ui-monospace, Menlo, monospace;
  font-size: 0.75rem;
  background: #fbfaf7;
  color: #2b2b2b;
  border: 1px solid #e3e0d8;
  padding: 0.35rem 0.6rem 0.35rem 0.8rem;
  border-radius: 0.4rem;
  cursor: pointer;
}
.kommando:hover {
  background: #f6f3ec;
}
.dollar {
  color: #2e9e4f;
}
.ikon {
  color: #8a867d;
  margin-left: 0.3rem;
}
</style>
