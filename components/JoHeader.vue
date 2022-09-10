<template>
  <div class="w-full">
    <nuxt-img :width="500" class="jo-logo absolute" src="/logo_shadow.svg" />
  </div>
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