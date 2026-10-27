<script setup lang="ts">
import { useSlideContext } from '@slidev/client'

withDefaults(defineProps<{ antall: number, reaksjoner?: [string, number][], sint?: number }>(), { reaksjoner: () => [] })
const { $clicks } = useSlideContext()
</script>

<template>
  <div class="mockup felt">
    <div class="sporsmal">Hva synes du?</div>
    <div v-if="reaksjoner.length" class="reaksjoner">
      <span v-for="[emoji, tall] in reaksjoner" :key="emoji" class="reaksjon" :class="{ sint: emoji === '😡' && sint !== undefined && $clicks >= sint }">
        <span class="emoji">{{ emoji }}</span> {{ tall }}
      </span>
    </div>
    <div class="antall">{{ antall }} kommentarer</div>
    <slot />
  </div>
</template>

<style scoped>
.felt {
  background: #151518;
  border: 1px solid #2a2a30;
  color: #f2f2f4;
  padding: 0.8rem 1rem 0.4rem;
}
.sporsmal {
  text-align: center;
  font-weight: 700;
  font-size: 0.9rem;
}
.reaksjoner {
  display: flex;
  justify-content: center;
  gap: 0.9rem;
  margin: 0.4rem 0 0.6rem;
  font-size: 0.78rem;
  font-weight: 700;
}
.reaksjon {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.05rem 0.35rem;
  border-radius: 999px;
  transition: background-color 0.3s, color 0.3s;
}
.reaksjon.sint {
  background: var(--miles-gul);
  color: var(--miles-burgunder);
}
.emoji {
  display: inline-block;
  font-size: 1.05rem;
}
.reaksjon.sint .emoji {
  animation: rist 0.5s ease-in-out 0.2s 2;
}
@keyframes rist {
  0%, 100% { transform: translateX(0) rotate(0); }
  20% { transform: translateX(-2px) rotate(-8deg); }
  40% { transform: translateX(2px) rotate(8deg); }
  60% { transform: translateX(-2px) rotate(-6deg); }
  80% { transform: translateX(2px) rotate(6deg); }
}
@media (prefers-reduced-motion: reduce) {
  .reaksjon.sint .emoji {
    animation: none;
  }
}
.antall {
  font-weight: 700;
  font-size: 0.8rem;
  border-bottom: 1px solid #2a2a30;
  padding-bottom: 0.3rem;
}
</style>
