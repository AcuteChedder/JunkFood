import { defineStore } from "pinia";
import { ref } from 'vue'
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";

export const useCartStore = defineStore('cart', () => {
    const cartItems = ref([])

    const addItem = (item) => {
        cartItems.value.push(item)
    }

    const submitOrder = async () => {
        const items = cartItems.value.map(item => ({
            title: item.title,
            image: item.image
        }));

        try {
            const response = axios.post('/orders', {
                items
            });
            console.log('order submitted', response.data)
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