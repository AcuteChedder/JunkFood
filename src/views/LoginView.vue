<script setup>

</script>

<template>
    <div class="flex flex-col justify-center items-center mt-54">
        <form class="flex flex-col items-center justify-center py-10 px-10 bg-[#07422e] w-sm rounded-2xl">
            <h1 class="text-3xl text-white font-bold mb-12">Welcome</h1>
            <input class="bg-[#094e36] text-white py-3 px-6 w-full rounded-xl mb-3" type="text" placeholder="username" v-model="nickname" required>
            <input class="bg-[#094e36] text-white py-3 px-6 w-full rounded-xl mb-8" type="text" placeholder="password" v-model="password" required>
            <button class="bg-[#053826] text-white py-3 px-6 w-full text-xl font-medium rounded-xl mb-3" type="submit">Login</button>
            <p class="text-white font-medium">Don't have an account? <RouterLink to="/register" class="font-bold text-green-500">Register</RouterLink> </p>
        </form>
    </div>
</template>