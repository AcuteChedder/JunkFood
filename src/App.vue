<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  <div class=" mx-12">
    <Header />

    <RouterView />
  </div>
</template>

<style scoped>

</style>
