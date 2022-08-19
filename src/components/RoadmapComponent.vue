<template>
  <section>
    <div class="roadmap flex flex-row justify-evenly mb-10">
      <RoadMapItem class="roadmap-item" v-for="(roadmap, index) in roadmapArray" v-bind:key="index" :item_id="index+1"/>
    </div>
    <div class="flex flex-row mb-10">
      <p class="roadmap-text" v-for="(roadmap, index) in roadmapArray" v-bind:key="index">
        {{ roadmap }}
      </p>
    </div>
  </section>
</template>

<script>

import RoadMapItem from "@/components/RoadMapItem";
export default {
  name: "RoadmapComponent",
  components: {RoadMapItem},
  data() {
    return {
      roadmapArray: [
        'Знакомимся, обсуждаем цели обучения, назначаем вступительное занятие',
        'Определяем уровень знаний и дальнейший план обучения',
        'Регулярные занятия и гибкий график подстраиваемый под вас',
        'Прогрессирующее изменение в уровне вашего иностранного языка'
      ]
    }
  }
}
</script>

<style scoped>
.roadmap{
  @apply relative mb-2 min-w-[420px] max-w-[1120px] justify-between;
}
.roadmap::before{
  @apply absolute -z-10 h-[12px] bg-secondary top-[14px] bottom-0 left-0 right-[0px] rounded-full;
  content: "";
  background: rgb(74,26,212);
  background: linear-gradient(90deg, rgba(74,26,212,0) 0%, rgba(74,26,212,1) 50%, rgba(74,26,212,0) 100%);
}
.roadmap-text{
  @apply mx-0 mr-5 last:mr-0 p-1;
}
.roadmap-item{
  @apply first:ml-[10%] last:mr-[10%];
}
</style>