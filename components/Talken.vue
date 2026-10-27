<template>
  <div class="mockup talken">
    <div class="topp">
      <span class="prikker"><i /><i /><i /></span>
      <span class="adresse">talken.no</span>
    </div>
    <img src="/talken-hero.png" alt="Hele Norges taleekspert" class="hero" />
    <div v-if="$slots.default" class="tekst"><slot /></div>
  </div>
</template>

<style scoped>
.talken {
  background: #f8f9fb;
  border: 1px solid #e2e3ea;
  color: #37307a;
  box-shadow: 0 10px 30px rgba(69, 13, 33, 0.08);
}
.topp {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: #eceef3;
  padding: 0.45rem 0.8rem;
}
.prikker {
  display: flex;
  gap: 0.3rem;
}
.prikker i {
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 50%;
  background: #cfd1da;
}
.adresse {
  flex: 1;
  background: #fff;
  border-radius: 999px;
  padding: 0.15rem 0.8rem;
  font-size: 0.75rem;
  color: #555;
}
.hero {
  display: block;
  width: 100%;
  padding: 0.8rem 1rem 0.4rem;
}
.tekst {
  padding: 0 1.2rem 1rem;
  font-size: 0.85rem;
  color: #4a4580;
}
</style>
