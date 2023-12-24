<template>
  <!-- <NuxtWelcome /> -->
  <div class="">
    
    <LoadingSpinner :isLoading="isLoading" />
    <HeroSection />

    <AboutMe />
  </div>
</template>

<script setup>
import HeroSection from "./components/HeroSections.vue";
import "./assets/css/css.css";
const isLoading = ref(true);
onMounted(() => {
  isLoading.value = false;
});
useSeoMeta({
  title: 'Ashraf Alhaj - Full-Stack Engineer',
  ogTitle: 'Ashraf Alhaj - Full-Stack Engineer',
  description: 'Ashraf Alhaj - Full-Stack Engineer',
  ogDescription: 'Ashraf Alhaj - Full-Stack Engineer',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})

</script>

<style>
* {
  font-family: "Inter";
}
</style>
