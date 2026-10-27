<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  navn: string
  tittel: string
  tid?: string
  reaksjoner?: number
  kommentarer?: number
  ned?: boolean
  bilde?: string
}>(), { tid: '2 t', reaksjoner: 128, kommentarer: 23 })

const initialer = computed(() => props.navn.split(' ').map(d => d[0]).join('').slice(0, 2))
</script>

<template>
  <div class="mockup li">
    <div class="hode">
      <img v-if="bilde" :src="bilde" alt="" class="avatar bilde">
      <div v-else class="avatar">{{ initialer }}</div>
      <div class="meta">
        <div class="navn">{{ navn }} <span class="gra">· 1.</span></div>
        <div class="gra">{{ tittel }}</div>
        <div class="gra">{{ tid }} · 🌐</div>
      </div>
      <div class="folg">+ Følg</div>
    </div>
    <div class="kropp"><slot /></div>
    <div class="tall">
      <span>{{ ned ? '👎👎👎' : '👍❤️👏' }} {{ reaksjoner }}</span>
      <span>{{ kommentarer }} kommentarer · 4 delinger</span>
    </div>
    <div class="knapper">
      <span>{{ ned ? '👎 Liker ikke' : '👍 Liker' }}</span><span>💬 Kommenter</span><span>🔁 Del</span><span>➤ Send</span>
    </div>
  </div>
</template>

<style scoped>
.li {
  background: #fff;
  border: 1px solid #e0dfdc;
  color: rgba(0, 0, 0, 0.9);
}
.hode {
  display: flex;
  gap: 0.6rem;
  padding: 0.9rem 1rem 0.4rem;
}
.avatar {
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 50%;
  background: #cfd8e3;
  color: #38434f;
  display: grid;
  place-items: center;
  font-weight: 600;
  flex-shrink: 0;
}
.avatar.bilde {
  object-fit: cover;
}
.meta {
  flex: 1;
  font-size: 0.75rem;
  line-height: 1.35;
}
.navn {
  font-weight: 600;
  font-size: 0.85rem;
}
.gra {
  color: rgba(0, 0, 0, 0.6);
}
.folg {
  color: #0a66c2;
  font-weight: 600;
  font-size: 0.85rem;
}
.kropp {
  padding: 0.4rem 1rem 0.8rem;
}
.tall {
  display: flex;
  justify-content: space-between;
  font-size: 0.72rem;
  color: rgba(0, 0, 0, 0.6);
  padding: 0 1rem 0.5rem;
  border-bottom: 1px solid #e8e8e8;
  margin: 0 0 0 0;
}
.knapper {
  display: flex;
  justify-content: space-around;
  font-size: 0.78rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.6);
  padding: 0.55rem 0;
}
</style>
