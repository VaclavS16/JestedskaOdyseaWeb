<template>
  <div class="jo-wrapper bg-center bg-cover h-screen overflow-hidden">
    <div class="h-full z-10 flex flex-col items-center overflow-auto relative">
      <JoLogo class="absolute w-48 top-0 xl:left-0 xl:w-96 z-30 mt-4 xl:mt-10 xl:ml-10"></JoLogo>
      <div
        class="jo-content mt-36 mb-auto xl:mt-52  w-11/12 sm:w-3/4 lg:w-1/2 z-20">
        <nuxt-page></nuxt-page>
      </div>
      <JoEvent class="mt-4 xl:mt-0 xl:absolute xl:right-20 xl:top-10"></JoEvent>
      <JoFooter class="z-20"></JoFooter>
    </div>
  </div>
</template>

<style scoped>
.jo-wrapper:after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-position: top center;
  background-size: cover;
  background-image: url("~/static/images/back_min.webp");
  zoom: 110%;
}
</style>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  filter: blur(0.1rem);
}
</style>