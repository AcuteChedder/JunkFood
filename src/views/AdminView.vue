<script setup>
import { ref } from 'vue'
import axios from 'axios';

const orders = ref([])
const showOrders = ref(false)

const ordersFunc = async () => {
    try {
        const { data } = await axios.get('/orders')
        orders.value = data   
        showOrders.value = true
    } catch (error) {
        console.error('loading failed', error)
    }
    
}


</script>

<template>
    <div class="mx-12 mt-20">
        <div class="flex justify-center items-center gap-12">
            <button @click="ordersFunc" class=" text-2xl py-4 px-8 bg-[#094E36] text-white font-medium rounded-2xl">Show orders</button>
            <button class=" text-2xl py-4 px-8 bg-[#094E36] text-white font-medium rounded-2xl">Show applications</button>
        </div>
        <div v-if="showOrders" v-for="order in orders" :key="order._id" class=" w-auto py-4 px-6 rounded-2xl mt-4 bg-[#0a4f37] ">
            <h3 class="text-white text-2xl font-bold">Username: {{ order.nickname }}</h3>
            <div class="flex gap-4">
                <div v-for="item in order.items" class="mt-3">
                    <img :src="item.image" alt="" class="w-52 h-52 py-2 px-2 bg-[#084731] ">
                    <p class="text-center text-xl font-medium text-white bg-[#084731] py-2 ">{{ item.title }}</p>
                </div>
            </div>
        </div>
    </div>
</template>