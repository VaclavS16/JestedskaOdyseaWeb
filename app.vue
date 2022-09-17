<template>
  <div class="jo-wrapper bg-center bg-cover min-h-screen flex flex-col items-center">
    <JoCanvas class="absolute w-full h-full z-10 opacity-60"></JoCanvas>
    <JoLogo class="absolute w-72 top-0 xl:left-0 xl:w-1/3 z-30"></JoLogo>
    <div
      class="jo-content mt-36 mb-auto xl:mt-auto  w-11/12 sm:w-3/4 lg:w-1/2 z-20">
      <nuxt-page></nuxt-page>
    </div>
    <JoFooter class="z-20"></JoFooter>
  </div>
</template>

<style scoped>
.jo-wrapper:after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  background-position: top center;
  background-size: cover;
  background-image: url("~/static/images/back_min.webp");
  filter: blur(4px);
}

.jo-content {
  background-color: rgba(15, 23, 42, 0.7);
}
</style>