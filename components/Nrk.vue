<script setup lang="ts">
defineProps<{ tittel: string, distrikt?: string, type?: string, ingress?: string, forfatter?: string, dato?: string, bildetekst?: string, bilde?: string }>()
</script>

<template>
  <div class="mockup nrk">
    <div class="topp">
      <span class="logo">NRK</span>
      <span v-if="distrikt" class="distrikt">{{ distrikt }}</span>
    </div>
    <div class="artikkel">
      <div v-if="type" class="type">{{ type }}</div>
      <div class="tittel">{{ tittel }}</div>
      <div v-if="ingress" class="ingress">{{ ingress }}</div>
      <img v-if="bilde" :src="bilde" alt="" class="bilde">
      <div v-if="bildetekst" class="bildetekst">{{ bildetekst }}</div>
      <div v-if="forfatter" class="forfatter">{{ forfatter }}</div>
      <div v-if="dato" class="dato">{{ dato }}</div>
      <div v-if="$slots.default" class="tekst"><slot /></div>
    </div>
  </div>
</template>

<style scoped>
.nrk {
  background: #fff;
  border: 1px solid #e3e3e3;
  color: #0b0b0b;
}
.topp {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  background: #0b0b0b;
  padding: 0.45rem 0.9rem;
}
.logo {
  color: #fff;
  font-weight: 900;
  font-size: 1rem;
  letter-spacing: 0.02em;
}
.distrikt {
  color: #fff;
  font-size: 0.8rem;
  border-left: 1px solid #555;
  padding-left: 0.7rem;
}
.artikkel {
  padding: 0.9rem 1.1rem 1rem;
}
.type {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #1767ce;
  margin-bottom: 0.3rem;
}
.tittel {
  font-weight: 800;
  font-size: 1.45rem;
  line-height: 1.15;
}
.bilde {
  display: block;
  width: 100%;
  height: 6.5rem;
  object-fit: cover;
  object-position: center 22%;
  margin: 0.7rem 0 0.4rem;
  border-radius: 0.3rem;
  background: linear-gradient(135deg, #d9d4ce, #b9b1a8);
}
.ingress {
  font-size: 0.85rem;
  line-height: 1.4;
  margin-top: 0.4rem;
}
.bildetekst {
  font-size: 0.68rem;
  color: #555;
  margin-bottom: 0.5rem;
}
.forfatter {
  font-weight: 700;
  font-size: 0.75rem;
}
.dato {
  font-size: 0.7rem;
  color: #666;
  margin-top: 0.5rem;
}
.tekst {
  font-size: 0.72rem;
  color: #555;
}
</style>
