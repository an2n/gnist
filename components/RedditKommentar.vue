<script setup lang="ts">
defineProps<{ poeng: number }>()
</script>

<template>
  <div class="kommentar">
    <div class="hode"><span class="avatar" /> <b>r/norge-bruker</b> <span class="gra">· ⇧ {{ poeng }}</span></div>
    <div class="tekst"><slot /></div>
  </div>
</template>

<style scoped>
.kommentar {
  padding: 0.35rem 0 0.2rem 0.8rem;
  border-left: 2px solid #edeff1;
  margin-top: 0.3rem;
}
.hode {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.68rem;
}
.avatar {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: #d7dfe2;
  display: inline-block;
}
.gra {
  color: #576f76;
}
.tekst {
  font-size: 0.8rem;
  line-height: 1.4;
  margin: 0.15rem 0 0;
}
.tekst :deep(p) {
  margin: 0.2rem 0;
}
.fot {
  font-size: 0.66rem;
  font-weight: 600;
  color: #576f76;
}
.svar {
  margin-left: 0.6rem;
}
</style>
