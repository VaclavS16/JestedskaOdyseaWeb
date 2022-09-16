<template>
  <a
    :href="props.link"
    class="jo-button--icon rounded-full p-3 sm:p5 inline-flex  border-solid border-2 border-green-500 hover:bg-green-500"
    target="_blank"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <nuxt-img
      v-show="!hover"
      :src="`/icons/${props.iconName}.svg`"
      class="w-6 sm:w-7"
    />
    <nuxt-img
      v-show="hover"
      :src="`/icons/${props.iconName}_dark.svg`"
      class="w-6 sm:w-7"
    />
  </a>
</template>

<script setup>
const props = defineProps({
  iconName: String,
  link: String,
});

const hover = ref(false);

</script>

<style scoped>
.jo-button--icon:hover {
  animation: pulse-border 1s infinite;
}

@keyframes pulse-border {
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(0, 150, 0, 1);
    box-shadow: 0 0 0 0 rgba(0, 150, 0, 1);
  }
  90% {
    -moz-box-shadow: 0 0 0 10px rgba(0, 150, 0, 0);
    box-shadow: 0 0 0 10px rgba(0, 150, 0, 0);
  }
  100% {
    -moz-box-shadow: 0 0 0 0 rgba(0, 150, 0, 0);
    box-shadow: 0 0 0 0 rgba(0, 150, 0, 0);
  }
}
</style>