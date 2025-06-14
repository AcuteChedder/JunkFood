import { defineStore } from "pinia";
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
    const cartItems = ref([])

    const addItem = (item) => {
        cartItems.value.push(item)
    }

    return {
        cartItems,
        addItem,
    }
})