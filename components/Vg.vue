<script setup lang="ts">
defineProps<{ tittel: string, ingress: string, forfatter: string, dato: string, profilbilde?: string }>()
</script>

<template>
  <div class="mockup vg">
    <div class="topp"><span class="logo">VG</span></div>
    <div class="artikkel">
      <div class="seksjon">Meninger</div>
      <div class="type">Kommentar</div>
      <div class="tittel">{{ tittel }}</div>
      <div class="ingress">{{ ingress }}</div>
      <div class="byline">
        <img v-if="profilbilde" :src="profilbilde" alt="" class="profilbilde">
        <div>
          <div class="forfatter">{{ forfatter }}</div>
          <div class="dato">{{ dato }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.vg {
  background: #fff;
  border: 1px solid #e3e3e3;
  color: #111;
}
.topp {
  background: #d0021b;
  padding: 0.4rem 0.9rem;
}
.logo {
  color: #fff;
  font-weight: 900;
  font-style: italic;
  font-size: 1.1rem;
  letter-spacing: -0.02em;
}
.artikkel {
  padding: 0.8rem 1.1rem 0.6rem;
  border-bottom: 1px solid #eee;
}
.seksjon {
  color: #c4122f;
  font-family: Georgia, serif;
  font-size: 0.85rem;
}
.type {
  font-family: Georgia, serif;
  font-size: 0.85rem;
  margin-bottom: 0.3rem;
}
.tittel {
  font-family: Georgia, serif;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.15;
}
.ingress {
  font-size: 0.85rem;
  margin: 0.35rem 0;
}
.byline {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
.profilbilde {
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 50%;
  object-fit: cover;
  object-position: center top;
  background: #f3e9ea;
}
.forfatter {
  font-weight: 700;
  font-size: 0.75rem;
}
.dato {
  font-size: 0.7rem;
  color: #666;
}
</style>
