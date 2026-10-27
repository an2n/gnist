<script setup lang="ts">
withDefaults(defineProps<{ navn?: string, tid?: string, opp?: number, ned?: number }>(), { navn: 'Leser', tid: 'for fire måneder siden' })
</script>

<template>
  <div class="kommentar">
    <div class="rad">
      <span class="navn">{{ navn }} <span class="tid">{{ tid }}</span></span>
      <span v-if="opp !== undefined" class="stemmer"><span>↑ {{ opp }}</span><span>↓ {{ ned }}</span></span>
    </div>
    <div class="tekst"><slot /></div>
  </div>
</template>

<style scoped>
.kommentar {
  border-top: 1px solid #eee;
  padding: 0.4rem 0;
  font-size: 0.8rem;
  line-height: 1.4;
}
.rad {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navn {
  font-weight: 700;
  font-size: 0.78rem;
}
.tid {
  color: #888;
  font-weight: 400;
  font-size: 0.65rem;
  margin-left: 0.3rem;
}
.tekst {
  margin: 0.2rem 0;
}
.stemmer {
  display: flex;
  gap: 0.35rem;
  font-size: 0.68rem;
  color: #444;
}
.stemmer span {
  border: 1px solid #ddd;
  border-radius: 0.3rem;
  padding: 0 0.4rem;
}
</style>
