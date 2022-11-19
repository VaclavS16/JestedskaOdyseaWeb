<template>
  <JoText v-if="activeBand" class="mt-8">{{ activeBand.desc }}</JoText>
</template>
<script lang="ts" setup>
import { JoBand } from "~/types/joBand";
import program from "../content/program.json";
import { onMounted } from "@vue/runtime-core";

const props = defineProps<{
  activeBandName?: string,
}>();

const bands = ref<JoBand[]>(program);

const activeBand = computed<JoBand | null>(() => {
  return bands.value.find(band => band.pathPart === props.activeBandName);
});

onMounted(() => {
  console.log("band", activeBand.value);
});
</script>