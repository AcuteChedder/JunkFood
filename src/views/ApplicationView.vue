<script setup>
import { ref } from 'vue'
import axios from "axios"
axios.defaults.baseURL = "http://localhost:3000";

const username = ref('')
const mail = ref('')

const application = async () => {
    try {
        await axios.post('application', {
            username: username.value,
            mail: mail.value
        })
        alert('Your application is already sent')
    } catch (error) {
        alert(error.response.data.error)
    }
}


</script>

<template>
    <div class="flex flex-col font-Lexend text-[50px] font-bold items-center justify-center mt-40 ">
        <h1 class="text-white text-5xl font-bold mb-16">Send your application</h1>
        <form @submit.prevent="application" class="flex flex-col justify-center items-center" >
            <div class="flex flex-col mb-8">
                <label for="name"  class=" text-sm text-white mb-1.5">Your name</label>
                <input type="text" v-model="username" class="bg-[#174736] w-[570px] text-sm py-5 px-4 rounded-2xl text-slate-200" name="name" id="name" placeholder="Enter your name" required>
            </div>

            <div class="flex flex-col mb-8">
                <label for="mail" class="text-sm text-white mb-1.5">Your email</label>
                <input type="text" v-model="mail" class="bg-[#174736] w-[570px] text-sm py-5 px-4 rounded-2xl text-slate-200" name="mail" id="mail" placeholder="Enter your email" required>
            </div>
            <div>
                <button type="submit" class=" py-4 px-6 bg-[#094E36] text-white font-Lexend text-sm rounded-2xl cursor-pointer">Submit your application</button>
            </div>
        </form>
        
    </div>
</template>