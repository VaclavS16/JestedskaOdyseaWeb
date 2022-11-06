<template>
  <div class="flex flex-row gap-4">
    <JoBandButton v-for="(band, index) in bands" :key="index" :band="band" />
  </div>
</template>
<script lang="ts" setup>
import JoBandButton from "../components/JoBandButton.vue";
import { JoBand } from "~/types/joBand";
import program from "../content/program.json";

const bands = ref<JoBand[]>(program);
</script>