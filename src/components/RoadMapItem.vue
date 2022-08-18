<template>
  <div class="roadmap-item">
    <div class="inline-flex flex-row">
      <div class="flex items-center justify-center w-[42px] h-[42px] bg-main rounded-full">
        <p class="text-white text-2xl text-center
      font-bold">
          {{ item_id }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RoadMapItem",
  props: {
    item_id: Number,
    text: String
  }
}
</script>

<style scoped>
.roadmap-item {
  @apply flex flex-col max-w-2xl mr-6 last:mr-0;
}
</style>