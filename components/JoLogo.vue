<template>
  <nuxt-img class="jo-logo" src="/logo_shadow.svg" />
</template>

<style scoped>
.jo-logo {
  animation: pulse 5s infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(0.95);
  }
  50% {
    transform: scale(1);
  }
}
</style>