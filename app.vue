<template>
  <div class="jo-wrapper bg-center bg-cover h-screen overflow-hidden">
    <div class="h-full z-10 flex flex-col items-center overflow-auto relative">
      <JoCanvas v-if="showCanvas" :class="`absolute w-full h-full z-10 opacity-60 ${canvasSpecialClass}`"></JoCanvas>
      <JoLogo class="absolute w-64 top-0 xl:left-0 xl:w-1/3 z-30 mt-2 xl:mt-6 xl:ml-6"></JoLogo>
      <div
        class="jo-content mt-36 mb-auto xl:mt-auto  w-11/12 sm:w-3/4 lg:w-1/2 z-20">
        <nuxt-page></nuxt-page>
      </div>
      <JoEvent class="mt-4 xl:mt-0 xl:absolute xl:right-20 xl:top-10"></JoEvent>
      <JoFooter class="z-20"></JoFooter>
    </div>
  </div>
</template>

<script setup>
const showCanvas = ref(false);
const canvasSpecialClass = ref("");
const setCanvasAdditional = () => {
  var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  var isOnSmWidth = window.innerWidth < 640;
  console.log("setShowCanvas", isSafari, isOnSmWidth);
  showCanvas.value = !isOnSmWidth;
  canvasSpecialClass.value = isSafari ? "jo-canvas--blur" : "";
};

onMounted(() => {
  setCanvasAdditional();
});
</script>
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
  filter: blur(4px);
  zoom: 110%;
}

.jo-content {
  background-color: rgba(15, 23, 42, 0.7);
}
</style>