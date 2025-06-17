import { defineStore } from "pinia";
import { ref } from 'vue'
import axios from "axios";
import { useAuthStore } from "./auth";
axios.defaults.baseURL = "http://localhost:3000";

export const useCartStore = defineStore('cart', () => {
    const cartItems = ref([])
    const authStore = useAuthStore()


    const addItem = (item) => {
        cartItems.value.push(item)
    }

    const submitOrder = async () => {
        const items = cartItems.value.map(item => ({
            title: item.title,
            image: item.image
        }));

        const nickname = authStore.nickname

        try {
            const response = axios.post('/orders', {
                nickname,
                items,
            });
            console.log('order submitted', response.data)
            cartItems.value = []
        } catch (error) {
            console.log('failed', err)
        }
    }

    return {
        cartItems,
        addItem,
        submitOrder
    }
})