<script setup lang="ts">
defineProps<{ opp: number, ned: number }>()
</script>

<template>
  <div class="kommentar">
    <div class="hode"><span class="avatar" /> <b>kode24-leser</b> <span class="gra">· 5 måneder siden</span></div>
    <div class="tekst"><slot /></div>
    <div class="fot"><span>👍 {{ opp }}</span><span>👎 {{ ned }}</span></div>
  </div>
</template>

<style scoped>
.kommentar {
  padding: 0.4rem 0 0.3rem;
  border-bottom: 1px solid #2a2a30;
}
.kommentar:last-child {
  border-bottom: none;
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
  background: #3a3a42;
  display: inline-block;
}
.gra {
  color: #9a9aa2;
}
.tekst {
  font-size: 0.8rem;
  line-height: 1.4;
  margin: 0.15rem 0 0;
}
.fot {
  display: flex;
  gap: 0.7rem;
  font-size: 0.66rem;
  color: #9a9aa2;
  margin-top: 0.15rem;
}
</style>
