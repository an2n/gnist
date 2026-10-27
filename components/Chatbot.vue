<script setup lang="ts">
defineProps<{ tittel: string, prompt: string }>()
</script>

<template>
  <div class="mockup chatbot">
    <div class="topp">{{ tittel }}</div>
    <div class="samtale">
      <div class="bruker-rad">
        <div class="bruker">{{ prompt }}</div>
        <img src="/anton.jpg" alt="" class="avatar">
      </div>
      <div class="svar-rad">
        <img src="/claude.svg" alt="Claude" class="claude">
        <div class="svar"><slot /></div>
      </div>
    </div>
    <div class="input">
      <span>Svar til Claude …</span>
      <span class="send">↑</span>
    </div>
  </div>
</template>

<style scoped>
.chatbot {
  background: #faf9f5;
  border: 1px solid #e8e6dc;
  color: #1f1e1d;
}
.topp {
  font-size: 0.75rem;
  font-weight: 600;
  color: #5d5d5d;
  padding: 0.5rem 0.9rem;
  border-bottom: 1px solid #ecebe4;
}
.samtale {
  padding: 0.7rem 0.9rem 0.5rem;
}
.bruker-rad {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 0.4rem;
}
.bruker {
  max-width: 85%;
  background: #f0eee6;
  border-radius: 0.8rem;
  padding: 0.35rem 0.8rem;
  font-size: 0.75rem;
}
.avatar {
  flex-shrink: 0;
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
  object-fit: cover;
}
.svar-rad {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
}
.claude {
  flex-shrink: 0;
  width: 1.1rem;
  height: 1.1rem;
  margin-top: 0.3rem;
}
.svar {
  font-size: 0.8rem;
  line-height: 1.45;
}
.svar :deep(p) {
  margin: 0.3rem 0;
  line-height: 1.45;
}
.svar :deep(p:first-child) {
  margin-top: 0;
}
.input {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0.9rem 0.8rem;
  padding: 0.4rem 0.4rem 0.4rem 0.8rem;
  background: #fff;
  border: 1px solid #e8e6dc;
  border-radius: 0.8rem;
  font-size: 0.7rem;
  color: #9a978c;
}
.send {
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 0.4rem;
  background: #d97757;
  color: #fff;
  display: grid;
  place-items: center;
  font-weight: 700;
}
</style>
