<script setup lang="ts">
withDefaults(defineProps<{
  gruppe: string
  avsender?: string
  sendt?: boolean
  tid?: string
}>(), { sendt: false, tid: 'I dag 18:42' })
</script>

<template>
  <div class="mockup melding">
    <div class="topp">
      <div class="ikon">{{ gruppe[0] }}</div>
      <div class="gruppe">{{ gruppe }}</div>
    </div>
    <div class="tid">{{ tid }}</div>
    <div class="rad" :class="{ sendt }">
      <div v-if="avsender && !sendt" class="avsender">{{ avsender }}</div>
      <div class="boble"><slot /></div>
      <div v-if="sendt" class="status">Levert</div>
    </div>
  </div>
</template>

<style scoped>
.melding {
  background: #fff;
  border: 1px solid #e5e5ea;
  color: #000;
  padding-bottom: 1rem;
}
.topp {
  background: #f6f6f6;
  border-bottom: 1px solid #e5e5ea;
  text-align: center;
  padding: 0.6rem 0 0.5rem;
}
.ikon {
  width: 2rem;
  height: 2rem;
  margin: 0 auto 0.2rem;
  border-radius: 50%;
  background: #a2a8b3;
  color: #fff;
  display: grid;
  place-items: center;
  font-weight: 600;
}
.gruppe {
  font-size: 0.75rem;
}
.tid {
  text-align: center;
  font-size: 0.7rem;
  color: #8e8e93;
  margin: 0.6rem 0;
}
.rad {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 1rem;
}
.rad.sendt {
  align-items: flex-end;
}
.avsender {
  font-size: 0.7rem;
  color: #8e8e93;
  margin: 0 0 0.2rem 0.8rem;
}
.boble {
  max-width: 85%;
  background: #e9e9eb;
  border-radius: 1.1rem;
  padding: 0.55rem 0.9rem;
}
.sendt .boble {
  background: #0b84ff;
  color: #fff;
}
.status {
  font-size: 0.68rem;
  color: #8e8e93;
  margin-top: 0.2rem;
}
</style>
