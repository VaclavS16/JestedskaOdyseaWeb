<template>
  <a
    :href="props.link"
    class="jo-button--icon rounded-full p-2 sm:p5 inline-flex  border-solid border-2 border-jogreen hover:bg-jogreen"
    target="_blank"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <nuxt-img
      v-show="!hover"
      :src="`/icons/${props.iconName}.svg`"
      class="w-5 sm:w-7"
    />
    <nuxt-img
      v-show="hover"
      :src="`/icons/${props.iconName}_dark.svg`"
      class="w-5 sm:w-7"
    />
  </a>
</template>

<script lang="ts" setup>
const props = defineProps<{
  iconName: string,
  link: string,
}>();

const hover = ref<boolean>(false);

</script>

<style scoped>
.jo-button--icon:hover {
  animation: pulse-border 1s infinite;
}
</style>