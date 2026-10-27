<script setup lang="ts">
defineProps<{ navn: string, kilde?: string }>()
</script>

<template>
  <div class="monster">
    <div class="navn">{{ navn }}</div>
    <div v-if="$slots.default" class="forklaring"><slot /></div>
    <div v-if="kilde" class="kilde">{{ kilde }}</div>
  </div>
</template>

<style scoped>
.monster {
  background: var(--miles-burgunder);
  color: var(--miles-lys-krem);
  border-radius: 0.75rem;
  padding: 1.1rem 1.4rem;
  margin: 0;
  text-align: left;
}
.navn {
  font-family: gelica, "Fraunces", serif;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.2;
}
.forklaring {
  font-size: 1.05rem;
  line-height: 1.5;
  margin-top: 0.5rem;
}
.kilde {
  font-size: 0.75rem;
  opacity: 0.7;
  margin-top: 0.75rem;
}
</style>
