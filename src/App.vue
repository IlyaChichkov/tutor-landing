<template>
  <div class="grid grid-col-2">
    <ProfileSidebar/>
    <router-view></router-view>
  </div>
</template>

<script>
import './App.css'
import './basic-styles.css'
import ProfileSidebar from "@/components/ProfileSidebar";

export default {
  name: 'App',
  components: {
    ProfileSidebar
  }
}
</script>

<style>
#app {
  margin-top: 60px;
}
</style>
