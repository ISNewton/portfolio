<template>
  <article class="flex-1 flex items-center justify-center">
    <div class="w-full max-w-3xl px-4 py-12">
      <div class="mt-8 text-black dark:text-white  prose prose-zinc sm:prose-lg dark:prose-invert max-w-none">
        <h1 v-motion :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0, scale: 1 }"
          class="leading-2 opacity-0 text-6xl font-bold">
          Innovative Full-Stack Enginner Building <span class="bg-gradient-to-r text-transparent bg-clip-text from-indigo-500 via-purple-500 to-pink-500 ">
            Digital Dreams</span>.
        </h1>
        <h1 v-motion :delay="400" :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0, scale: 1 }"
          class=" opacity-0 text-lg mt-8 font-mono">
          {{text}}
        </h1>
        <!-- <h4 class="text-sky-600">ksjdfklsdjfldjf</h4> -->
        <!-- <h1 class="text-black dark:text-white mt-8"> -->
        <!--   text -->
        <!--   <VueWriter :start="700" :array="[text]" :delay="1" :iterations="1" :typeSpeed="20" /> -->
        <!-- </h1> -->
      </div>

      <div class="mt-8 lg:mt-10">
        <!-- {{ partial:social-links }} -->
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
const text = ref(
  "Hi there! I'm Ashraf Alhaj, full-stack engineer with a passion for building innovative and scalable software solutions."
);
</script>

<style>
.writer-font {
  font-family: "Lekton", sans-serif;
  font-weight: 400;
}

html.dark .is-typed {
  color: red;
}

html.light .is-typed {
  color: green;
}

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
