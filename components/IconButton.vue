<template>
  <a
    :href="props.link"
    class="mt-2 mr-2 rounded-full p-3 inline-flex border-green-500 border-solid border-2 hover:border-transparent hover:bg-green-500" target="_blank"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <nuxt-img
      :src="`/icons/${props.iconName}${hover ? '_dark' : ''}.svg`"
      :width="30"
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
