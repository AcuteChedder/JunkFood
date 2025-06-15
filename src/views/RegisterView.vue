<script setup>
import {ref} from 'vue'
import axios from "axios"
axios.defaults.baseURL = "http://localhost:3000";

const nickname = ref('')
const password = ref('')
const password_repeat = ref('')

const sendData = async () => {
    console.log('register')
    if (password.value === password_repeat.value) {
        try {
            await axios.post('/register', {
                nickname: nickname.value,
                password: password.value
            })
            alert('Registration successful')
        } catch (error) {
            alert(error.response.data.error)
        }
    }
}

</script>

<template>
    <div class="flex flex-col justify-center items-center mt-54">
        <form @submit.prevent="sendData" class="flex flex-col items-center justify-center py-10 px-10 bg-[#07422e] w-sm rounded-2xl">
            <h1 class="text-3xl text-white font-bold mb-12">Register</h1>
            <input class="bg-[#094e36] text-white py-3 px-6 w-full rounded-xl mb-3" type="text" placeholder="username" v-model="nickname" required>
            <input class="bg-[#094e36] text-white py-3 px-6 w-full rounded-xl mb-3" type="password" placeholder="password" v-model="password" required>
            <input class="bg-[#094e36] text-white py-3 px-6 w-full rounded-xl mb-8" type="password" placeholder="repeat password" v-model="password_repeat" required>
            <button class="bg-[#053826] text-white py-3 px-6 w-full text-xl font-medium rounded-xl mb-3 cursor-pointer" type="submit">Register</button>
            <p class="text-white">Have an account? <RouterLink to="/login" class="font-bold text-green-500">Login</RouterLink> </p>
        </form>
    </div>
</template>