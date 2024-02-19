<template>
  <article class="flex-1 flex items-center justify-center">
    <div class="w-full max-w-3xl px-4 py-12">
      <div class="mt-8 md:mb-24 text-black dark:text-white prose prose-zinc sm:prose-lg dark:prose-invert max-w-none">
        <h1 v-motion :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0, scale: 1 }"
          class="leading-2 opacity-0 text-6xl font-bold">
          Innovative Full-Stack Engineer Building
          <span class="bg-gradient-to-r text-transparent bg-clip-text from-indigo-500 via-purple-500 to-pink-500">
            Digital Dreams</span>.
        </h1>
        <h1 v-motion :delay="400" :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0, scale: 1 }"
          class="opacity-0 text-lg mt-8 font-mono">
          Hi there! I'm <span class="font-bold">Ashraf Alhaj</span>, full-stack engineer with a passion for
          building innovative and scalable software solutions working with
          <a href="https://laravel.com" target="_blank" class="underline">Laravel</a> ,
          <a href="https://laravel-livewire.com" target="_blank" class="underline">Livewire</a>,
          <a href="https://react.dev" target="_blank" class="underline">React</a> and
          <a href="https://vuejs.org" target="_blank" class="underline">Vue</a>.
        </h1>

      </div>


      <div class="mt-12 lg:mt-10 md:mb-20 text-center text-lg font-space-mono font-hand ">
<a href="#letsconnect" class="border-2 dark:bg-transparent border-purple-600 relative inline-flex items-center justify-start px-6 py-3 overflow-hidden  transition-all bg-white rounded hover:bg-white group">
<span class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
<span class="dark:text-white relative w-full text-left text-black font-space-mono transition-colors duration-300 ease-in-out group-hover:text-white">Let's connect</span>
</a>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

const fillColor = computed(() =>
  colorMode.preference == "dark" ? "white" : "black"
);
</script>

<style>


</style>

<!-- box-shadow: 0 20px 50px 5px #fb70a9; -->
