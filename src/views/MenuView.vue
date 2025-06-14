<script setup>
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()

function addToCart(item) {
    cartStore.addItem(item)
}

const menuItems = [
    {
    title: 'New In the Club',
    image: new URL('@/assets/menu/naggets.png', import.meta.url).href,
  },
  {
    title: 'BURGER',
    image: new URL('@/assets/menu/hamburger.png', import.meta.url).href,
  },
  {
    title: 'SIDES',
    image: new URL('@/assets/menu/fries.png', import.meta.url).href,
  },
  {
    title: 'SALADS',
    image: new URL('@/assets/menu/salat.png', import.meta.url).href,
  },
  {
    title: 'coffee',
    image: new URL('@/assets/menu/coffe.png', import.meta.url).href,
  },
  {
    title: 'BURGER',
    image: new URL('@/assets/menu/combo.png', import.meta.url).href,
  },
  {
    title: 'SIDES',
    image: new URL('@/assets/menu/naggets.png', import.meta.url).href,
  },
  {
    title: 'SALADS',
    image: new URL('@/assets/menu/hamburger.png', import.meta.url).href,
  },
]


</script>

<template>
    <main class="mx-20">
        <div class=" mt-20 flex flex-col items-center justify-center">
            <h1 class=" font-Lexend text-amber-100 text-5xl font-bold mb-12">Menu</h1>

            <div class="flex flex-wrap justify-center gap-8 mb-12 mx-52">
                <div v-for="(item,index) in menuItems" :key="index"  class="px-4 py-8 bg-[rgba(125,311,252,0.2)] max-w-60 rounded-2xl cursor-pointer" @click="addToCart(item)">
                    <img class="w-50 h-50" :src="item.image" :alt="item.title" />
                    <p class="font-Lexend text-[16px] text-amber-100 text-center">{{ item.title }}</p>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
    main {
        background-image: url(../assets/menu/menuBG.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;

    }
</style>