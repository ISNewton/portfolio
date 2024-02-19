<template>
  <article class="flex-1 flex items-center justify-center">
    <div class="w-full max-w-3xl px-4 py-12">
      <div class="mt-8 text-black dark:text-white prose prose-zinc sm:prose-lg dark:prose-invert max-w-none">
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

      <div class="mt-8 lg:mt-10">
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
