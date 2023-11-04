<template>
  <header class="h-20 flex items-center dark:bg-gray-900/60 bg-transparent sticky top-0 z-10">
    <div class="w-full max-w-4xl px-4 mx-auto flex items-center">
      <div class="flex-1">
        <!-- <p class="text-white text-3xl font-mono">ASH</p> -->
        <a class="inline-block h-14 w-14 relative rounded-full border-white dark:border-gray-700 group shadow">
          <img class="absolute inset-0 group-hover:opacity-80 transition-all duration-150" src="images/me.png"
            alt="Ashraf Alhaj" />
        </a>
        <span class="text-white my-auto text-3xl">ASH</span>
      </div>

      <nav class="hidden sm:block flex-1">
        <ul class="flex justify-center gap-6">
          <li>
            <a href="hi" class="font-medium py-1 hover:text-gray-900 dark:hover:text-gray-100">
            </a>
          </li>
        </ul>
      </nav>

      <div class="flex-1 flex gap-4 items-center justify-end">
        <div class="relative">
          <button
            class="p-1 border dark:border-gray-700 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 focus:hover-gray-50 dark:focus:hover-gray-800 hover:border-gray-300 dark:hover:border-gray-600 dark:focus:border-gray-600 text-gray-700 dark:text-gray-300">
            <svg
              @click="colorMode.preference = 'light'"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="hidden dark:block w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
            <svg
              @click="colorMode.preference = 'dark'"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="block dark:hidden w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
          </button>
        </div>
        <button class="sm:hidden">
          <svg class="w-6 h-6 text-gray-700 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
</script>
