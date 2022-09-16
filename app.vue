<template>
  <div class="jo-wrapper bg-center bg-cover h-screen flex flex-col items-center">
    <JoLogo class="absolute w-72 top-0 xl:left-0 xl:w-1/3"></JoLogo>
    <div class="mt-32 mb-auto xl:mt-8 w-1/2 border-8 border-solid border-green-500 bg-slate-900">
      <nuxt-page></nuxt-page>
    </div>
    <JoFooter></JoFooter>
  </div>
</template>

<style scoped>
.jo-wrapper {
  background-image: url("~/static/images/back_min.webp");
}
</style>