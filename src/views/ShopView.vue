<script setup>
import { useCartStore } from '../stores/cart'

const cartStore = useCartStore()

</script>

<template>
    <main class="mx-12">
        <h1>Drawer</h1>
        <div class=" flex gap-8 mb-12 mt-20">
            <div class=" px-4 py-8 bg-[rgba(125,311,252,0.2)] max-w-60 rounded-2xl" v-for="(item,index) in cartStore.cartItems" :key="index">
                <img class="w-50 h-50" :src="item.image" alt="">
                <p class="font-Lexend text-[16px] text-amber-100 text-center">{{ item.title }}</p>
            </div>
        </div>
    </main>
</template>