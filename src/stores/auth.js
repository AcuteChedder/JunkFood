import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true

export const useAuthStore = defineStore('auth', () => {
    const nickname = ref(null)

    const login = async (name, password) => {
        await axios.post('/login', {
            nickname: name, password
        })
        
        const res = await axios.get('/me')
        nickname.value = res.data.nickname
    }
    
    const logout = async () => {
        await axios.post('/logout', {}, {withCredentials: true})
        nickname.value = null
    }

    const fetchMe = async () => {
        const res = await axios.get('/me')
        nickname.value = res.data.nickname
    }

    return {
        nickname,
        login,
        logout,
        fetchMe,
    }
})