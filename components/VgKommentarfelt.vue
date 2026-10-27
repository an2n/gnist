<script setup lang="ts">
withDefaults(defineProps<{ antall?: number }>(), { antall: 44 })
</script>

<template>
  <div class="mockup felt">
    <span class="antall">{{ antall }} kommentarer</span>
    <div class="faner"><span>Populære</span><b>Mest likt</b><span>Mest mislikt</span><span>Siste</span></div>
    <slot />
  </div>
</template>

<style scoped>
.felt {
  background: #fff;
  border: 1px solid #e3e3e3;
  color: #111;
  padding: 0.7rem 1rem 0.3rem;
}
.antall {
  display: inline-block;
  background: #4a0d12;
  color: #fff;
  font-weight: 700;
  font-size: 0.72rem;
  border-radius: 999px;
  padding: 0.15rem 0.7rem;
}
.faner {
  display: flex;
  gap: 0.8rem;
  font-size: 0.68rem;
  color: #555;
  margin: 0.5rem 0 0.2rem;
}
.faner b {
  color: #111;
  text-decoration: underline;
  text-underline-offset: 3px;
}
</style>
