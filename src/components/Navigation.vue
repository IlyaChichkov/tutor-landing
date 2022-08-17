<template>
  <div>
    <a>
      <router-link :to="{name: 'Home'}">Главная</router-link>
    </a>
    <a>
      <router-link :to="{name: 'Study'}">Запись на занятие</router-link>
    </a>
    <a>
      <router-link :to="{name: 'Contacts'}">Контакты</router-link>
    </a>
  </div>
</template>

<script>
export default {
  name: "NavigationComponent"
}
</script>

<style scoped>

</style>