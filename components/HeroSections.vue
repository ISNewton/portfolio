<template>
    <div class=" flex flex-col ">
        <TheHeader />

        <main class="flex-1 flex flex-col">
            <MainContent />
        </main>

        <!-- <footer class="p-8"> -->
        <!--     <p class="text-center text-xs text-gray-500"> -->
        <!--         &copy; {{ new Date().getFullYear() }} Ashraf Alhaj. -->
        <!--     </p> -->
        <!-- </footer> -->
    </div>
</template>

<script setup lang="ts">
import MainContent from "./MainContent.vue";
import ParticlesAnimation from "./ParticlesAnimation.vue";
</script>
