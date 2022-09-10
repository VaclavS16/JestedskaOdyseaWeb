<template>
  <div clas="p-4">
    <nuxt-img :width="800" class="jo-logo mx-auto" src="/logo_shadow.svg" />
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