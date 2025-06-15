<script setup>
import { useCartStore } from '../stores/cart'

const cartStore = useCartStore()

const handleOrder = () => {
    cartStore.submitOrder()
}
</script>

<template>
    <main class="mx-20">
        <div class="mt-12">
            <h1 class="text-5xl font-medium text-white text-center font-Lexend">Your order</h1>

            <div class=" flex gap-8 mb-12 mt-20">

                <div class=" px-4 py-8 bg-[rgba(125,311,252,0.2)] max-w-60 rounded-2xl" v-for="(item,index) in cartStore.cartItems" :key="index">

                    <img class="w-50 h-50" :src="item.image" alt="">
                    <p class="font-Lexend text-[16px] text-amber-100 text-center">{{ item.title }}</p>

                </div>

            </div>

            <div class="flex justify-center items-center">
                <button type="submit" class=" px-12 py-5 text-2xl bg-[#094E36] text-white font-medium font-Lexend rounded-2xl cursor-pointer" @click="handleOrder()">Order now</button>
            </div>

        </div>
        
    </main>
</template>