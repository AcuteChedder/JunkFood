<script setup>
import { RouterLink } from 'vue-router';


</script>

<template>
    <header class="grid grid-cols-3 items-center text-white mt-8">
        <div class="flex justify-start">
            <img src="../assets/BurgerLogo.png" alt="" class="w-50">
        </div>
        <div class=" flex justify-center gap-16">
            <RouterLink to="/" class=" text-2xl font-Sansita text-white">Home</RouterLink>
            <RouterLink to="/menu" class=" text-2xl font-Sansita text-white">Menu</RouterLink>
            <RouterLink to="/about" class=" text-2xl font-Sansita text-white">franchise</RouterLink>
            <RouterLink class=" text-2xl font-Sansita text-white">Shop</RouterLink>
        </div>
    </header>
</template>