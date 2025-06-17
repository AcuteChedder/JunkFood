import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
    const nickname = ref(null)

    const login = (name) => {
        nickname.value = name
    }
    
    const logout = () => {
        nickname.value = null
    }

    return {
        nickname,
        login,
        logout,
    }
} )