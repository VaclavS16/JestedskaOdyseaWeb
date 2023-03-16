<template>
  <div class="jo-footer w-full p-8">
    <div class="jo-footer__buttons">
      <IconButton class="mr-4" icon-name="facebook" link="https://www.facebook.com/JestedskaOdysea"></IconButton>
      <IconButton class="mr-4" icon-name="instagram" link="https://www.instagram.com/jestedska_odysea/"></IconButton>
      <IconButton icon-name="location" link="https://goo.gl/maps/tXxggo9w2XUE1H94A"></IconButton>
    </div>
    <JoPoster class="jo-footer__poster"></JoPoster>
  </div>
</template>

<style scoped>
.jo-footer {
  @apply flex flex-col items-center sm:flex-row sm:items-end;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
}

.jo-footer__buttons {
  @apply sm:mb-0 order-2 sm:order-1;;
}

.jo-footer__poster {
  @apply mb-4 sm:mb-0 order-1 sm:order-2 sm:ml-auto;
}
</style>