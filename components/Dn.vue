<script setup lang="ts">
withDefaults(defineProps<{ tittel: string, ingress?: string, forfatter: string, rolle?: string, dato: string, seksjon?: string }>(), { seksjon: 'Innlegg' })
</script>

<template>
  <div class="mockup dn">
    <div class="topp"><span class="logo">DN</span></div>
    <div class="artikkel">
      <div class="seksjon">{{ seksjon }}</div>
      <div class="tittel">{{ tittel }}</div>
      <div v-if="ingress" class="ingress">{{ ingress }}</div>
      <div class="byline">
        <span class="forfatter">{{ forfatter }}</span><span v-if="rolle" class="rolle">, {{ rolle }}</span>
        <div class="dato">{{ dato }}</div>
      </div>
      <div class="tekst"><slot /></div>
    </div>
  </div>
</template>

<style scoped>
.dn {
  background: #fff;
  border: 1px solid #e3e3e3;
  color: #111;
}
.topp {
  padding: 0.45rem 1.1rem;
  border-bottom: 3px solid #111;
}
.logo {
  font-family: Georgia, 'Times New Roman', serif;
  font-weight: 700;
  font-size: 1.35rem;
  letter-spacing: -0.02em;
}
.artikkel {
  padding: 0.8rem 1.1rem 0.9rem;
}
.seksjon {
  color: #c8102e;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.tittel {
  font-family: Georgia, 'Times New Roman', serif;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.15;
  margin: 0.2rem 0 0.35rem;
}
.ingress {
  font-size: 0.85rem;
  line-height: 1.4;
}
.byline {
  font-size: 0.72rem;
  margin: 0.5rem 0 0.4rem;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid #eee;
}
.forfatter {
  font-weight: 700;
}
.rolle,
.dato {
  color: #666;
}
.tekst {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 0.85rem;
  line-height: 1.5;
}
.tekst :deep(p) {
  margin: 0.35rem 0;
  line-height: 1.5;
}
</style>
