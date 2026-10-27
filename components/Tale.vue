<script setup lang="ts">
defineProps<{ overskrift: string }>()
</script>

<template>
  <div class="tale-wrap">
    <div class="tape" />
    <div class="mockup tale">
      <div class="overskrift">{{ overskrift }}</div>
      <div class="tekst"><slot /></div>
    </div>
  </div>
</template>

<style scoped>
.tale-wrap {
  position: relative;
  transform: rotate(-1.2deg);
  margin-top: 0.6rem;
}
.tape {
  position: absolute;
  top: -0.7rem;
  left: 50%;
  width: 6rem;
  height: 1.4rem;
  transform: translateX(-50%) rotate(2deg);
  background: rgba(255, 240, 190, 0.75);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  z-index: 2;
}
.tale {
  --linje: 1.75rem;
  background-color: #fffef9;
  background-image:
    linear-gradient(90deg, transparent 2.6rem, rgba(230, 90, 90, 0.45) 2.6rem, rgba(230, 90, 90, 0.45) calc(2.6rem + 1px), transparent calc(2.6rem + 1px)),
    repeating-linear-gradient(transparent 0, transparent calc(var(--linje) - 1px), rgba(90, 140, 200, 0.22) calc(var(--linje) - 1px), rgba(90, 140, 200, 0.22) var(--linje));
  /* linjene ligger rett under grunnlinjen til brødteksten */
  background-position: 0 0, 0 0.73rem;
  color: #2b2b2b;
  padding: 1.2rem 1.6rem 1.4rem 3.4rem;
  box-shadow: 0 10px 28px rgba(69, 13, 33, 0.16);
  border-radius: 0.15rem;
}
.overskrift {
  font-family: 'Caveat', 'Bradley Hand', cursive;
  font-size: 1.9rem;
  line-height: var(--linje);
  color: #1d3a8a;
  margin-bottom: var(--linje);
  position: relative;
  top: -0.31rem;
}
.tekst {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1rem;
  line-height: var(--linje);
}
.tekst :deep(p) {
  margin: 0;
  line-height: var(--linje);
}
</style>
