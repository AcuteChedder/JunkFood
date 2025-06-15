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
            <RouterLink to="/shop" class=" text-2xl font-Sansita text-white">Shop</RouterLink>
        </div>
        <div class="flex justify-end gap-4">
            <RouterLink to="/login" class=" py-3 px-10 text-2xl border-[#094E36] border-3 rounded-xl font-Sansita">Login</RouterLink>
            <RouterLink to="/register" class=" py-3 px-10 text-2xl bg-[#094E36] rounded-xl font-Sansita">Register</RouterLink>
        </div>
    </header>
</template>