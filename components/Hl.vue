<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const props = withDefaults(defineProps<{ at?: number, nr?: string | number, gronn?: boolean }>(), { at: 2, gronn: false })
const { $clicks } = useSlideContext()
const on = computed(() => $clicks.value >= props.at)
</script>

<template>
  <mark class="hl" :class="{ on, gronn }"><slot /><sup v-if="nr" class="nr" :class="{ smal: String(nr) === '1' }">{{ nr }}</sup></mark>
</template>

<style scoped>
.hl {
  background: transparent;
  color: inherit;
  padding: 0 0.1em;
  margin: 0 -0.1em;
  border-radius: 0.2em;
  transition: background-color 0.3s, color 0.3s;
}
.hl.on {
  background: var(--miles-gul);
  color: var(--miles-burgunder);
}
.hl.on.gronn {
  background: #c8ecd2;
  color: #14532d;
}
.nr {
  display: none;
  margin-left: 0.2em;
  padding: 0.15em 0.45em;
  border-radius: 999px;
  background: var(--miles-korall);
  color: #fff;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.65em;
  font-weight: 700;
  line-height: 1.5;
  vertical-align: super;
}
.hl.on .nr {
  display: inline;
}
/* 1 er smalere enn de andre sifrene, så den får litt ekstra luft for å bli rund */
.nr.smal {
  padding: 0.15em 0.6em;
}
</style>
