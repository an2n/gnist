<script setup lang="ts">
withDefaults(defineProps<{ fil: string, tittel: string, forfatter?: string }>(), { forfatter: '' })
</script>

<template>
  <div class="mockup dok">
    <div class="app">
      <span class="ikon">W</span>
      <span class="fil">{{ fil }}</span>
      <span class="lagret">Lagret</span>
    </div>
    <div class="verktoy">
      <span><b>B</b></span><span><i>I</i></span><span><u>U</u></span>
      <span class="skille" />
      <span>Overskrift 1</span>
      <span class="skille" />
      <span>≡</span><span>•</span>
    </div>
    <div class="flate">
      <div class="side">
        <div class="tittel">{{ tittel }}</div>
        <div v-if="forfatter" class="forfatter">{{ forfatter }}</div>
        <div class="tekst"><slot /></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dok {
  background: #f3f2f1;
  border: 1px solid #dcdcdc;
  color: #252423;
}
.app {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: #185abd;
  color: #fff;
  font-size: 0.75rem;
  padding: 0.4rem 0.8rem;
}
.ikon {
  display: grid;
  place-items: center;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 0.2rem;
  background: #fff;
  color: #185abd;
  font-weight: 800;
  font-size: 0.7rem;
}
.fil {
  font-weight: 600;
}
.lagret {
  margin-left: auto;
  opacity: 0.8;
}
.verktoy {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: #fff;
  border-bottom: 1px solid #e1dfdd;
  font-size: 0.7rem;
  color: #605e5c;
  padding: 0.35rem 0.8rem;
}
.skille {
  width: 1px;
  height: 0.9rem;
  background: #e1dfdd;
}
.flate {
  padding: 0.9rem 1.2rem 0;
}
.side {
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12);
  padding: 1.1rem 1.4rem 1.4rem;
  font-family: Calibri, 'Segoe UI', 'Helvetica Neue', sans-serif;
}
.tittel {
  font-size: 1.35rem;
  font-weight: 600;
  color: #1f3864;
}
.forfatter {
  font-size: 0.7rem;
  color: #605e5c;
  margin: 0.15rem 0 0.6rem;
}
.tekst {
  font-size: 0.95rem;
  line-height: 1.5;
}
.tekst :deep(p) {
  margin: 0.45rem 0;
}
</style>
