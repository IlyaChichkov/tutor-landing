<template>
  <div class="flex flex-row h-full">
    <ProfileSidebar/>
    <PageContent/>
  </div>
</template>

<script>
import './App.css'
import './basic-styles.css'
import ProfileSidebar from "@/components/ProfileSidebar";
import PageContent from "@/components/PageContent";

export default {
  name: 'App',
  components: {
    PageContent,
    ProfileSidebar
  }
}
</script>

<style>
</style>
