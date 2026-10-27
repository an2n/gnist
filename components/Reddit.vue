<script setup lang="ts">
defineProps<{ sub: string, tittel: string, kilde?: string, poeng?: number, kommentarer?: number }>()
</script>

<template>
  <div class="mockup reddit">
    <div class="topp">
      <span class="logo">
        <svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="10" fill="#ff4500" /><ellipse cx="10" cy="11.5" rx="5.2" ry="3.6" fill="#fff" /><circle cx="8" cy="11.2" r="0.8" fill="#ff4500" /><circle cx="12" cy="11.2" r="0.8" fill="#ff4500" /><circle cx="14" cy="6" r="1.1" fill="#fff" /></svg>
      </span>
      <span class="sub">{{ sub }}</span>
      <span class="gra">· for 1 md. siden</span>
    </div>
    <div class="tittel">{{ tittel }}</div>
    <div v-if="kilde" class="kilde">{{ kilde }} ↗</div>
    <div class="stats">
      <span class="pill">⇧ {{ poeng }} ⇩</span>
      <span class="pill">💬 {{ kommentarer }}</span>
    </div>
    <div class="kommentarer"><slot /></div>
  </div>
</template>

<style scoped>
.reddit {
  background: #fff;
  border: 1px solid #e5ebee;
  color: #1c1c1c;
  padding: 0.9rem 1.1rem 0.8rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
.topp {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.72rem;
}
.logo svg {
  width: 1.2rem;
  height: 1.2rem;
  display: block;
}
.sub {
  font-weight: 700;
}
.gra {
  color: #576f76;
}
.tittel {
  font-size: 1.15rem;
  font-weight: 700;
  margin-top: 0.35rem;
}
.kilde {
  font-size: 0.7rem;
  color: #0045ac;
  margin-top: 0.15rem;
}
.stats {
  display: flex;
  gap: 0.5rem;
  margin: 0.55rem 0 0.4rem;
}
.pill {
  background: #eaedef;
  border-radius: 999px;
  padding: 0.12rem 0.6rem;
  font-size: 0.7rem;
  font-weight: 600;
}
.kommentarer {
  border-top: 1px solid #edeff1;
  padding-top: 0.2rem;
}
</style>
