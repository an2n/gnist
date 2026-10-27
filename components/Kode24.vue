<script setup lang="ts">
defineProps<{ tittel: string, ingress?: string, forfatter?: string, rolle?: string, dato?: string }>()
</script>

<template>
  <div class="mockup kode24">
    <div class="topp">
      <span class="logo">
        <svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="10" fill="#e5177e" /><path d="M6 6.5 14 10 6 13.5Z" fill="none" stroke="#fff" stroke-width="1.3" stroke-linejoin="round" /></svg>
        kode24
      </span>
    </div>
    <div class="artikkel">
      <div class="tittel">{{ tittel }}</div>
      <div v-if="ingress" class="ingress">{{ ingress }}</div>
      <div v-if="forfatter || rolle || dato" class="byline">
        <div v-if="forfatter" class="forfatter">{{ forfatter }}</div>
        <div v-if="rolle" class="rolle">{{ rolle }}</div>
        <div v-if="dato" class="dato">{{ dato }}</div>
      </div>
      <div v-if="$slots.default" class="tekst"><slot /></div>
    </div>
  </div>
</template>

<style scoped>
.kode24 {
  background: #151518;
  border: 1px solid #2a2a30;
  color: #f2f2f4;
}
.topp {
  display: flex;
  align-items: center;
  background: #1d1d22;
  padding: 0.45rem 0.9rem;
}
.logo {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 1rem;
  letter-spacing: 0.02em;
}
.logo svg {
  width: 1.2rem;
  height: 1.2rem;
}
.artikkel {
  padding: 0.9rem 1.1rem 1rem;
}
.tittel {
  font-family: 'Roboto Slab', Georgia, serif;
  font-weight: 800;
  font-size: 1.6rem;
  line-height: 1.15;
}
.ingress {
  font-size: 0.85rem;
  line-height: 1.4;
  color: #c9c9cf;
  margin-top: 0.5rem;
}
.byline {
  margin-top: 0.7rem;
  font-size: 0.7rem;
  line-height: 1.35;
}
.forfatter {
  font-weight: 700;
}
.rolle {
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #e5177e;
  font-size: 0.62rem;
}
.dato {
  color: #9a9aa2;
}
.tekst {
  font-size: 0.95rem;
  color: #f2f2f4;
  margin-top: 0.6rem;
}
.tekst :deep(p) {
  line-height: 1.45;
  margin: 0;
}
.tekst :deep(p + p) {
  margin-top: 0.6rem;
}
</style>
