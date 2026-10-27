<script setup lang="ts">
defineProps<{ tittel: string, sted: string, pris?: string, undertittel?: string }>()
</script>

<template>
  <div class="mockup finn">
    <div class="topp"><span class="logo">FINN</span></div>
    <div class="hode">
      <div class="sted">{{ sted }}</div>
      <div class="tittel">{{ tittel }}</div>
      <div v-if="undertittel" class="undertittel">{{ undertittel }}</div>
      <div v-if="pris" class="pris">{{ pris }}</div>
    </div>
    <div class="kropp">
      <div class="seksjon">Om {{ pris ? 'boligen' : 'stillingen' }}</div>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.finn {
  background: #fff;
  border: 1px solid #e0e0e0;
  color: #1b1b1f;
}
.topp {
  border-bottom: 1px solid #e0e0e0;
  padding: 0.5rem 1rem;
}
.logo {
  background: #0063fb;
  color: #fff;
  font-weight: 800;
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  padding: 0.15rem 0.45rem;
  border-radius: 0.25rem;
}
.hode {
  padding: 0.8rem 1.1rem 0.6rem;
}
.sted {
  font-size: 0.75rem;
  color: #666;
}
.tittel {
  font-weight: 700;
  font-size: 1.15rem;
  line-height: 1.3;
}
.undertittel {
  font-size: 0.85rem;
  color: #444;
}
.pris {
  font-weight: 700;
  font-size: 1.3rem;
  margin-top: 0.3rem;
}
.kropp {
  padding: 0 1.1rem 1rem;
}
.seksjon {
  font-weight: 700;
  font-size: 0.85rem;
  margin: 0.2rem 0 0.3rem;
}
</style>
