<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

// Gnister som spruter ut fra kantene på innholdet når klikk `at` nås
const props = withDefaults(defineProps<{ at?: number }>(), { at: 1 })
const { $clicks } = useSlideContext()
const vis = computed(() => $clicks.value >= props.at)

const punkter = [[0, 0], [100, 0], [0, 100], [100, 100], [100, 45], [45, 0]]
const farger = ['var(--miles-korall)', 'var(--miles-gul)', '#ff8a5c']
const gnister = punkter.flatMap(([x, y], p) => Array.from({ length: 8 }, (_, i) => ({
  left: `${x}%`,
  top: `${y}%`,
  '--vinkel': `${i * 45 + p * 20 + Math.random() * 20}deg`,
  '--lengde': `${2.5 + Math.random() * 2.5}rem`,
  '--farge': farger[(i + p) % farger.length],
  animationDelay: `${p * 0.08 + Math.random() * 0.1}s`,
})))
</script>

<template>
  <div class="relative">
    <slot />
    <div v-if="vis" class="gnister" aria-hidden="true">
      <i v-for="(stil, i) in gnister" :key="i" :style="stil" />
    </div>
  </div>
</template>

<style scoped>
.gnister {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.gnister i {
  position: absolute;
  width: 0.9rem;
  height: 3px;
  margin-top: -1.5px;
  border-radius: 999px;
  transform-origin: left center;
  background: var(--farge);
  box-shadow: 0 0 6px var(--farge);
  opacity: 0;
  animation: sprut 0.9s ease-out forwards;
}
@keyframes sprut {
  0% { opacity: 1; transform: rotate(var(--vinkel)) translateX(0) scaleX(0.4); }
  70% { opacity: 1; }
  100% { opacity: 0; transform: rotate(var(--vinkel)) translateX(var(--lengde)) scaleX(1); }
}
</style>
