<template>
  <div class="page-content">
    <h1 class="ml-16 mb-10">Обучение английскому языку</h1>
    <section>
      <div class="roadmap ml-16 flex flex-row mb-10">
        <RoadMapItem v-for="(roadmap, index) in roadmapArray" v-bind:key="index++" :item_id="index" :text="roadmap"/>
      </div>
    </section>
    <section>
      <div class="main-info-columns">
        <div class="col-1">
          <div class="col-block">
            <ul>
              <li>🏆 Опыт изучения английского на протяжении 7 лет</li>
              <li>🏆 Подбор необходимых материалов для обучения</li>
              <li>🏆 Индивидуальный подход к обучению</li>
            </ul>
          </div>
          <div class="col-empty-block h-6"/>
          <div class="col-block">
            <p class="col-text">Изучение языка по отечественной и зарубежной литературе, подходящей именно вам</p>
          </div>
          <div class="col-empty-block h-6"/>
          <div class="col-block">
            <p class="col-text">Отработка произношения, понимание граматики языка, увеличение словарного запаса, увлекательное чтение английской литературы</p>
          </div>
        </div>
        <div class="col-2">
          <div class="col-empty-block h-6"/>
          <div class="col-empty-block h-6"/>
          <div class="col-block">
            <ul>
              <li>😎  Скидки и доступные для всех цены</li>
              <li>🥳  Первое занятие бесплатно</li>
              <li>👌  Оплата после урока в удобном для вас виде</li>
            </ul>
          </div>
          <div class="col-empty-block h-6"/>
          <div class="col-empty-block h-6"/>
          <div class="col-block">
            <p class="col-text">Комфортный формат урока через виртуальные встречи в платформах для видеосвязи</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import RoadMapItem from "@/components/RoadMapItem";

export default {
  name: "HomePage",
  // eslint-disable-next-line vue/no-unused-components
  components: {RoadMapItem},
  data() {
    return {
      roadmapArray: [
        'Знакомимся, обсуждаем цели обучения, назначаем вступительное занятие',
        'Определяем уровень знаний и дальнейший план обучения',
        'Регулярные занятия и гибкий график подстраиваемый под вас',
        'Прогрессирующее изменение в уровне знаний'
      ]
    }
  }
}
</script>

<style scoped>
.main-info-columns{
  @apply sm:grid sm:grid-cols-2 max-w-[98%] sm:max-w-[98%] xl:max-w-[90%];
}
.col-block{
  @apply m-2 p-4 border-solid border-secondary border-2 rounded;
  @apply text-black font-nunito font-medium;
}
p.col-text{
  @apply text-black font-nunito font-medium;
}
.col-empty-block{
  @apply m-2 p-2;
}
.roadmap{
  @apply relative min-w-[1020px] max-w-[1120px];
}
.roadmap::before{
  @apply absolute -z-10 h-[16px] bg-secondary top-[16px] bottom-0 left-0 right-[160px] rounded-full;
  content: "";
}
</style>