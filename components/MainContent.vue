<template>
  <article class="flex-1 flex items-center justify-center">
    <div class="w-full max-w-3xl px-4 py-12">
      <div class="mt-8 dark:text-black prose prose-zinc sm:prose-lg dark:prose-invert max-w-none">
        <h1 v-motion :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0, scale: 1 }"
          class="leading-{39} opacity-0 text-black dark:text-black text-6xl font-bold font-sans">
          Ashraf Alhaj - Creative Fullstack Engineer
        </h1>

        <h2 v-motion :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0, scale: 1 }" :delay="500"
          class="text-black opacity-0 mt-8 font-mono">
          Hi there! I'm Ashraf Alhaj from Khartoum, Sudan, and I like to make
          things. I'm currently building Airlume and RocketLog, and I work on
          the Laravel core team.
        </h2>
        <div class="flex justify-center pt-12 text-center gap-20">
          <div class="opacity-0" v-motion :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0 }" :delay="700">
            <div
              class="w-8 transform hover:scale-125 transition-all ease-in-out duration-500 laravel-shadow cursor-pointer">
              <img class="max-w-full" src="images/laravel.svg" />
            </div>
          </div>

          <div class="opacity-0" v-motion :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0, scale: 1 }"
            :delay="800">
            <div
              class="w-8 transform hover:scale-125 transition-all ease-in-out duration-500 h-8 vue-shadow cursor-pointer">
              <img class="max-w-full" src="images/vue.svg" />
            </div>
          </div>

          <div v-motion :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0 }" :delay="900" class="opacity-0">
            <div
              class="w-8 transform hover:scale-125 transition-all ease-in-out duration-500 livewire-shadow cursor-pointer">
              <img class="max-w-full" src="images/livewire.svg" />
            </div>
          </div>

          <div v-motion :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0, scale: 1 }" :delay="1000"
            class="opacity-0">
            <div class="w-8 ease-in transition-all transform hover:scale-125 duration-500 react-shadow cursor-pointer">
              <img class="max-w-full" src="images/react.svg" />
            </div>
          </div>
        </div>
      </div>

      <div class="mt-8 lg:mt-10">
        <!-- {{ partial:social-links }} -->
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
const textHide = ref(true);
</script>

<style>
.laravel-shadow:hover {
  filter: drop-shadow(0 0 1rem red);
}

.react-shadow:hover {
  filter: drop-shadow(0 0 1rem #07d5fa);
}

.vue-shadow:hover {
  filter: drop-shadow(0 0 1rem #4dba87);
}

.livewire-shadow:hover {
  filter: drop-shadow(0 0 1rem #fb70a9);
}

.v-enter-active {
  transition: all 0.5s ease;
}

.v-enter-from {
  opacity: 0;
}

.v-enter-to {
  opacity: 1;
}

@keyframes reveal {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<!-- box-shadow: 0 20px 50px 5px #fb70a9; -->
