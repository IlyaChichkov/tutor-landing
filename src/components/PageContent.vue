<template>
  <router-view class="app-view"></router-view>
</template>

<script>
export default {
  name: "PageContent"
}
</script>

<style scoped>
.app-view{
  @apply ml-1 lg:ml-8 min-w-0 mr-0 lg:mr-6 xl:mr-[10%];
}
.hide-view{
  @apply w-0;
}
</style>