<template>
  <div class="min-w-[36px] min-h-[36px] w-[32px] h-[32px] rounded-full bg-secondary">
    <div class="flex flex-col justify-center h-full">
      <p class="text-white text-center text-sm">{{day}}</p>
    </div>
  </div>
  <div class="flex flex-row justify-evenly mt-1">
    <div class="time-icon-container" v-on:click.prevent="setTime('day')">
      <svg class="time-icon" v-bind:class="{selected: time==='day'}" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 15.4167C12.9916 15.4167 15.4167 12.9916 15.4167 10C15.4167 7.0085 12.9916 4.58337 10 4.58337C7.0085 4.58337 4.58337 7.0085 4.58337 10C4.58337 12.9916 7.0085 15.4167 10 15.4167Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15.95 15.95L15.8416 15.8416M15.8416 4.15829L15.95 4.04996L15.8416 4.15829ZM4.04996 15.95L4.15829 15.8416L4.04996 15.95ZM9.99996 1.73329V1.66663V1.73329ZM9.99996 18.3333V18.2666V18.3333ZM1.73329 9.99996H1.66663H1.73329ZM18.3333 9.99996H18.2666H18.3333ZM4.15829 4.15829L4.04996 4.04996L4.15829 4.15829Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="time-icon-container" v-on:click.prevent="setTime('night')">
      <svg class="time-icon" v-bind:class="{selected: time==='night'}" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.6917 10.35C1.9917 14.6416 5.63337 18.1333 9.9917 18.325C13.0667 18.4583 15.8167 17.025 17.4667 14.7666C18.15 13.8416 17.7834 13.225 16.6417 13.4333C16.0834 13.5333 15.5084 13.575 14.9084 13.55C10.8334 13.3833 7.50003 9.97497 7.48337 5.94997C7.47503 4.86663 7.70003 3.84163 8.10837 2.9083C8.55837 1.87497 8.0167 1.3833 6.97503 1.82497C3.67503 3.21663 1.4167 6.54163 1.6917 10.35Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "StudyTimeItem",
  props: {
    day: String
  },
  data(){
    return{
      time: null
    }
  },
  methods: {
    setTime(time){
      if(this.time === time){
        this.time = null;
        return;
      }
      this.time = time;
    }
  }
}
</script>

<style scoped>
.time-icon{
  @apply stroke-secondary hover:stroke-main;
}
.icon-svg{
  @apply stroke-secondary ;
}
.time-icon.selected{
  @apply fill-secondary;
}
.time-icon-container{
  @apply p-1;
}
</style>