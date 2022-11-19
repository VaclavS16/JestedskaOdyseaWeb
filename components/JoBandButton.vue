<template>
  <nuxt-link
    :to="`/program/${props.band.pathPart}`"
    class="bg-cyan-600 py-1 px-4 border-solid	 border-4 border-white text-white font-bold relative hover:bg-white hover:text-cyan-600 hover:border-cyan-600 -skew-x-6"
  >
    <div class="jo-band-name">
      {{ props.band.name }}
      <span
        class="jo-band-genre absolute px-1 bg-cyan-500 whitespace-nowrap text-xs -bottom-3 -right-2 rounded-xl text-white"
      >
        {{ props.band.genre }}
      </span>
    </div>
  </nuxt-link>
</template>

<script lang="ts" setup>
import { JoBand } from "~/types/joBand";

const props = defineProps<{
  band: JoBand,
}>();


</script>

