<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  <div class=" mx-6 mt-8 w-60">
    <Header />

    <RouterView />
  </div>
</template>

<style scoped>

</style>
