<template>
  <img
    v-if="$nav.currentPage > 1 && $nav.currentPage < $nav.total"
    src="/miles-logo-korall.png"
    alt="Miles"
    class="absolute bottom-5 right-6 h-4"
  />
</template>
