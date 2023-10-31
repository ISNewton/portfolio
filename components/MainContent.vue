<template>
  <article class="flex-1 flex items-center justify-center">
    <div class="w-full max-w-3xl px-4 py-12">
      <div class="mt-8 prose prose-zinc sm:prose-lg dark:prose-invert max-w-none">
        <h1 style="
             {
              line-height: '48px';
            }
          " class="text-white text-6xl font-bold font-sans">
          Ashraf Alhaj - Creative Fullstack Engineer
        </h1>
        <h2 class="text-white mt-8 font-mono">
          Hi there! I'm Ashraf Alhaj from Khartoum, Sudan, and I like to make
          things. I'm currently building Airlume and RocketLog, and I work on
          the Laravel core team.
        </h2>
        <div class="flex justify-center pt-12 text-center gap-20">


          <div class="w-8 hover:w-12 transition-all ease-in-out duration-500  h-8 laravel-shadow  cursor-pointer ">
            <img class="max-w-full" src="images/laravel.svg" />
          </div>

          <div class="w-8 hover:w-12 transition-all ease-in-out duration-500  h-8 vue-shadow  cursor-pointer ">
            <img class="max-w-full" src="images/vue.svg" />
          </div>
          <div class="w-8 hover:w-12 transition-all ease-in-out duration-500  livewire-shadow cursor-pointer">
            <img class="max-w-full" src="images/livewire.svg" />
          </div>

          <div class="w-8 ease-in transition-all hover:w-12 duration-500 react-shadow cursor-pointer">
            <img class="max-w-full" src="images/react.svg" />
          </div>
        </div>
      </div>

      <div class="mt-8 lg:mt-10">
        <!-- {{ partial:social-links }} -->
      </div>
    </div>

    <!-- filter: drop-shadow(10px 10px 100px rgba(24 , 232 , 66 , 0.7)); -->
  </article>
</template>

<style>
.laravel-shadow:hover {
  filter: drop-shadow(0 0 1rem red);
}

.react-shadow:hover {
    filter: drop-shadow(0 0 1rem #07d5fa);
}

.vue-shadow:hover {
    filter: drop-shadow(0 0 1rem  #4dba87);
}
.livewire-shadow:hover {
  filter: drop-shadow(0 0 1rem #fb70a9);
}

</style>

<!-- box-shadow: 0 20px 50px 5px #fb70a9; -->
