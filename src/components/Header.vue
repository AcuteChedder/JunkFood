<script setup>
import { RouterLink } from 'vue-router';
import { useAuthStore } from '../stores/auth.js'

const authStore = useAuthStore()


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
        <div v-if="authStore.nickname" class="flex justify-end gap-4">
            <span class=" text-2xl font-Sansita font-bold">{{ authStore.nickname }}</span>
            <button @click="authStore.logout" class="py-2 px-6 bg-[#094E36] text-white rounded-xl font-Sansita">Logout</button>
        </div>
        <div class="flex justify-end gap-4" v-else>
            <RouterLink to="/login" class=" py-3 px-10 text-2xl border-[#094E36] border-3 rounded-xl font-Sansita">Login</RouterLink>
            <RouterLink to="/register" class=" py-3 px-10 text-2xl bg-[#094E36] rounded-xl font-Sansita">Register</RouterLink>
        </div>
    </header>
</template>