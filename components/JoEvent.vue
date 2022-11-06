<template>
  <div class="jo-event z-20 flex items-end">
    <div class="jo-event--box">
      <span class="jo-event--head">Den</span>
      <span class="jo-event--content">3</span>
    </div>
    <div class="jo-event--box">
      <span class="jo-event--head">Měsíc</span>
      <span class="jo-event--content">6</span>
    </div>
    <div class="jo-event--box">
      <span class="jo-event--head">Rok</span>
      <span class="jo-event--content">2023</span>
    </div>
    <div class="jo-event--box h-12 sm:h-14 xl:h-16">
      <IconButton
        class="border-none bg-slate-900 rounded-none xl:p-4 h-full"
        icon-name="event"
        link="https://www.facebook.com/events/2859906680819707"
        title="Facebook událost">
      </IconButton>
    </div>
  </div>
</template>

<style scoped>
.jo-event--box {
  @apply flex flex-col items-center mr-4
}
.jo-event--box:last-of-type {
  @apply mr-0
}
.jo-event--head {
  @apply border-slate-900 w-full text-center border-solid border-2 text-slate-300 text-xs xl:text-base;
  background-color: rgba(15, 23, 42, 0.7);
}
.jo-event--content {
  @apply p-2 px-4 sm:p-3 sm:px-6 text-jogreen font-bold text-2xl xl:text-4xl bg-slate-900
}
</style>