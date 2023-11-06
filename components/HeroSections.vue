<template>
    <div class="min-h-screen  flex flex-col bg-white dark:bg-gray-900 ">
        <ParticlesAnimation >
        <TheHeader />

        <main class="flex-1 flex flex-col">
            <MainContent /> 
        </main>

        <footer class="p-8">
            <div class="mb-6 flex justify-center">
            </div>

            <p class="text-center text-xs text-gray-500">
                &copy; {{ new Date().getFullYear()}} Ashraf Alhaj.
            </p>
        </footer>
        </ParticlesAnimation >
    </div>

</template>

<script setup lang="ts">
import MainContent from './MainContent.vue'
import ParticlesAnimation from './ParticlesAnimation.vue';

</script>

