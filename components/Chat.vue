<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  app?: 'teams' | 'slack'
  kanal: string
  navn: string
  tid?: string
}>(), { app: 'teams', tid: '09:12' })

const initialer = computed(() => props.navn.split(' ').map(d => d[0]).join('').slice(0, 2))
</script>

<template>
  <div class="mockup chat" :class="app">
    <div class="topp">
      <template v-if="app === 'slack'"># {{ kanal }}</template>
      <template v-else>Teams · {{ kanal }}</template>
    </div>
    <div class="rad">
      <div class="avatar">{{ initialer }}</div>
      <div class="innhold">
        <div class="navn">{{ navn }} <span class="tid">{{ tid }}</span></div>
        <div class="tekst"><slot /></div>
        <div class="reaksjoner">👍 12 &nbsp; 🎉 5</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.chat {
  background: #fff;
  border: 1px solid #e1dfdd;
  color: #242424;
}
.topp {
  color: #fff;
  font-weight: 600;
  font-size: 0.85rem;
  padding: 0.55rem 1rem;
}
.teams .topp { background: #5b5fc7; }
.slack .topp { background: #4a154b; }
.rad {
  display: flex;
  gap: 0.75rem;
  padding: 1rem;
}
.avatar {
  width: 2.3rem;
  height: 2.3rem;
  background: #e8ebfa;
  color: #444791;
  display: grid;
  place-items: center;
  font-weight: 600;
  font-size: 0.85rem;
  flex-shrink: 0;
  border-radius: 50%;
}
.slack .avatar {
  border-radius: 0.4rem;
  background: #ecdeec;
  color: #4a154b;
}
.innhold { flex: 1; }
.navn {
  font-weight: 700;
  font-size: 0.85rem;
}
.tid {
  font-weight: 400;
  color: #616161;
  font-size: 0.75rem;
  margin-left: 0.4rem;
}
.teams .tekst {
  background: #f5f5f5;
  border-radius: 0.3rem;
  padding: 0.5rem 0.8rem;
  margin-top: 0.3rem;
}
.reaksjoner {
  font-size: 0.72rem;
  color: #616161;
  margin-top: 0.4rem;
}
</style>
