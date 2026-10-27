<script setup lang="ts">
withDefaults(defineProps<{ tittel?: string, lys?: boolean }>(), { tittel: 'claude — ~', lys: false })
</script>

<template>
  <div class="terminal" :class="{ lys }">
    <div class="topp">
      <span class="prikk rod" /><span class="prikk gul" /><span class="prikk gronn" />
      <span class="tittel">{{ tittel }}</span>
    </div>
    <div class="innhold"><slot /></div>
  </div>
</template>

<style scoped>
.terminal {
  background: #1a1a1a;
  color: #e6e6e6;
  border-radius: 0.6rem;
  overflow: hidden;
  font-family: 'DM Mono', ui-monospace, Menlo, monospace;
  font-size: 0.72rem;
  line-height: 1.45;
  box-shadow: 0 10px 30px rgba(69, 13, 33, 0.18);
  text-align: left;
}
.topp {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: #2b2b2b;
  padding: 0.5rem 0.8rem;
}
.prikk {
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
}
.rod { background: #ff5f57; }
.gul { background: #febc2e; }
.gronn { background: #28c840; }
.tittel {
  flex: 1;
  text-align: center;
  color: #9a9a9a;
  font-size: 0.72rem;
  margin-right: 2.5rem;
}
.innhold {
  padding: 0.7rem 1.1rem 0.8rem;
}
.innhold :deep(.linje) {
  margin: 0 0 0.2rem;
  white-space: pre-wrap;
}
.innhold :deep(.bruker) {
  color: #fff;
}
.innhold :deep(.bruker)::before {
  content: '> ';
  color: #9a9a9a;
}
.innhold :deep(.verktoy)::before {
  content: '⏺ ';
  color: #4eba65;
}
.innhold :deep(.verktoy b) {
  color: #fff;
}
.innhold :deep(.svar) {
  color: #9a9a9a;
  padding-left: 1.2rem;
}
.innhold :deep(.svar)::before {
  content: '⎿  ';
}
.innhold :deep(.status) {
  color: #d0d0d0;
}
.innhold :deep(.status)::before {
  content: '⏺ ';
  color: #e6e6e6;
}
.innhold :deep(.god) {
  color: #4eba65;
}
.innhold :deep(.darlig) {
  color: #ff6b6b;
}
.innhold :deep(.tenker) {
  color: #d97757;
}

/* Lys variant */
.terminal.lys {
  background: #fbfaf7;
  color: #2b2b2b;
  border: 1px solid #e3e0d8;
  box-shadow: 0 10px 30px rgba(69, 13, 33, 0.1);
}
.lys .topp {
  background: #efece5;
  border-bottom: 1px solid #e3e0d8;
}
.lys .tittel {
  color: #8a867d;
}
.lys .innhold :deep(.bruker) {
  color: #1a1a1a;
}
.lys .innhold :deep(.bruker)::before,
.lys .innhold :deep(.svar) {
  color: #8a867d;
}
.lys .innhold :deep(.verktoy)::before {
  color: #2e9e4f;
}
.lys .innhold :deep(.verktoy b) {
  color: #1a1a1a;
}
.lys .innhold :deep(.status) {
  color: #3a3a3a;
}
.lys .innhold :deep(.status)::before {
  color: #3a3a3a;
}
.lys .innhold :deep(.god) {
  color: #2e9e4f;
}
.lys .innhold :deep(.darlig) {
  color: #d1242f;
}
.lys .innhold :deep(.tenker) {
  color: #c15f3c;
}
</style>
