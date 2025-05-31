<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class=" mx-12 flex flex-col text-white justify-center items-center mt-32">
        <div class="flex flex-col text-center w-5xl">
            <h1 class=" text-[50px] font-Lexend font-bold mb-10">FRANCHISE</h1>
            <h3 class=" text-2xl font-medium font-Lexend mb-10">Take a step towards success: open a restaurant <br>
            and build a business with us.</h3>
            <p class=" text-xl font-Lexend mb-14">The first BURGUR restaurant was opened in 2013. To date, there are 10 restaurants operating under our brand in St. Petersburg and the Leningrad region.For two years in a row, BAHROMA has been included in the top 10 restaurants and bars of the year according to the Fontanka City Award. If you have a desire to earn steadily with a reliable and trusted partner, the BURGUR franchise is suitable for you.</p>
        </div>

        <div>
            <RouterLink to="/application" class=" py-4 px-6 bg-[#094E36] font-Lexend text-xl rounded-2xl">Submit your application</RouterLink>
        </div>
    </div>
</template>