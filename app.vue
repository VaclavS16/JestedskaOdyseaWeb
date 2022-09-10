<template>
  <div class="jo-wrapper">
    <JoHeader></JoHeader>
    <nav class="flex align-center gap-4 p-4">
      <!--      <NuxtLink class="n-link-base" to="/">-->
      <!--        Home-->
      <!--      </NuxtLink>-->
      <!--      <NuxtLink class="n-link-base" to="/program">-->
      <!--        About-->
      <!--      </NuxtLink>-->
    </nav>
    <nuxt-page></nuxt-page>
  </div>
</template>

<style scoped>
.jo-wrapper {
  background-image: url("~/static/images/back_min.webp");
  background-size: cover;
  height: 100vh;
  filter: drop-shadow(0px 0px 2px black);
}
</style>;