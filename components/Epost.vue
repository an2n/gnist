<script setup lang="ts">
defineProps<{ fra: string, til: string, emne: string }>()
</script>

<template>
  <div class="mockup epost">
    <div class="emne">{{ emne }}</div>
    <div class="hode">
      <div><span class="etikett">Fra</span> {{ fra }}</div>
      <div><span class="etikett">Til</span> {{ til }}</div>
    </div>
    <div class="kropp"><slot /></div>
  </div>
</template>

<style scoped>
.epost {
  background: #fff;
  border: 1px solid #e1e1e1;
  border-top: 4px solid #0f6cbd;
  color: #242424;
}
.emne {
  font-weight: 600;
  font-size: 1.05rem;
  padding: 0.9rem 1.1rem 0.4rem;
}
.hode {
  font-size: 0.78rem;
  color: #424242;
  padding: 0 1.1rem 0.7rem;
  border-bottom: 1px solid #ebebeb;
}
.etikett {
  display: inline-block;
  width: 2rem;
  color: #707070;
}
.kropp {
  padding: 0.8rem 1.1rem 1rem;
}
</style>
