<template>
  <div class="jo-wrapper bg-center bg-cover h-screen flex flex-col items-center">
    <JoHeader></JoHeader>
    <nav class="flex align-center gap-4 p-4">
      <!--      <NuxtLink class="n-link-base" to="/">-->
      <!--        Home-->
      <!--      </NuxtLink>-->
      <!--      <NuxtLink class="n-link-base" to="/program">-->
      <!--        About-->
      <!--      </NuxtLink>-->
    </nav>
    <div class="mt-8 w-1/2 h-4/5 border-8 border-solid border-green-500 bg-slate-900">
      <nuxt-page></nuxt-page>
    </div>
  </div>
</template>

<style scoped>
.jo-wrapper {
  background-image: url("~/static/images/back_min.webp");
}
</style>;