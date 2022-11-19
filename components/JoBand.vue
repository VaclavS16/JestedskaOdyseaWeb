<template>
  <div v-if="activeBand" class="flex flex-row mt-8 gap-y-2">
    <nuxt-img ref="bandImageRef" :src="activeBand.imgPath" class="hidden" />
    <span :style="{ backgroundImage: `url(${bandImageSrc})` }" class="min-w-52 h-52 bg-cover bg-center"></span>
    <JoText class="w-full">{{ activeBand.desc }}</JoText>
  </div>
</template>
<script lang="ts" setup>
import { JoBand } from "~/types/joBand";
import program from "../content/program.json";

const props = defineProps<{
  activeBandName?: string,
}>();

const bands = ref<JoBand[]>(program);

const bandImageRef = ref(null);

const bandImageSrc = computed(() => {
  return bandImageRef.value?.$el.src;
});

const activeBand = computed<JoBand | null>(() => {
  return bands.value.find(band => band.pathPart === props.activeBandName);
});

</script>