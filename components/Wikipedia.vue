<script setup lang="ts">
defineProps<{ tittel: string, undertittel?: string }>()
</script>

<template>
  <div class="mockup wiki">
    <div class="topp">
      <span class="logo">W</span>
      <span class="navn">Wikipedia</span>
      <span class="sok">Search Wikipedia</span>
    </div>
    <div class="side">
      <div class="tittel">{{ tittel }}</div>
      <div v-if="undertittel" class="under">{{ undertittel }}</div>
      <div class="innhold">
        <div class="innhold-tittel">Contents</div>
        <div class="liste"><slot /></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wiki {
  max-width: none;
  background: #fff;
  border: 1px solid #c8ccd1;
  color: #202122;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
.topp {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 1rem;
  border-bottom: 1px solid #eaecf0;
}
.logo {
  font-family: 'Linux Libertine', Georgia, serif;
  font-size: 1.3rem;
  font-weight: 700;
}
.navn {
  font-family: 'Linux Libertine', Georgia, serif;
  font-size: 1rem;
}
.sok {
  margin-left: auto;
  font-size: 0.65rem;
  color: #72777d;
  border: 1px solid #a2a9b1;
  border-radius: 0.2rem;
  padding: 0.15rem 1.5rem 0.15rem 0.5rem;
}
.side {
  padding: 0.7rem 1rem 0.9rem;
}
.tittel {
  font-family: 'Linux Libertine', Georgia, serif;
  font-size: 1.45rem;
  border-bottom: 1px solid #a2a9b1;
  padding-bottom: 0.15rem;
}
.under {
  font-size: 0.65rem;
  color: #54595d;
  margin: 0.25rem 0 0.5rem;
}
.innhold {
  background: #f8f9fa;
  border: 1px solid #a2a9b1;
  padding: 0.5rem 0.7rem;
}
.innhold-tittel {
  font-weight: 700;
  font-size: 0.72rem;
  text-align: center;
  margin-bottom: 0.3rem;
}
.liste {
  columns: 4;
  column-gap: 0.9rem;
  font-size: 0.58rem;
  line-height: 1.5;
  color: #3366cc;
}
.liste :deep(div) {
  break-inside: avoid;
}
.liste :deep(.gruppe) {
  break-after: avoid;
  color: #202122;
  font-weight: 700;
  margin-top: 0.2rem;
}
.liste :deep(.hl.on) {
  color: var(--miles-burgunder);
}
</style>
