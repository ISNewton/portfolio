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

        <!-- <div class="flex justify-center gap-8 mt-16"> -->
        <!--   <div v-motion :delay="700" :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0, scale: 1 }" class=""> -->
        <!--     <a target="_blank" href="https://github.com/ISNewton" class="text-gray-800 hover:text-gray-600"> -->
        <!--       <svg role="img" aria-label="GitHub" width="35" height="35" viewBox="0 0 24 24" :fill="fillColor" -->
        <!--         xmlns="http://www.w3.org/2000/svg"> -->
        <!--         <title>Github</title> -->
        <!--         <path fill-rule="evenodd" clip-rule="evenodd" -->
        <!--           d="M12 1.99994C6.475 1.99994 2 6.58794 2 12.2529C2 16.7899 4.862 20.6219 8.838 21.9799C9.338 22.0699 9.525 21.7619 9.525 21.4929C9.525 21.2499 9.512 20.4429 9.512 19.5829C7 20.0589 6.35 18.9569 6.15 18.3799C6.037 18.0849 5.55 17.1749 5.125 16.9319C4.775 16.7399 4.275 16.2649 5.112 16.2519C5.9 16.2399 6.462 16.9959 6.65 17.3029C7.55 18.8539 8.988 18.4189 9.562 18.1489C9.65 17.4829 9.912 17.0339 10.2 16.7779C7.975 16.5219 5.65 15.6379 5.65 11.7159C5.65 10.6009 6.037 9.67794 6.675 8.95994C6.575 8.70394 6.225 7.65294 6.775 6.24294C6.775 6.24294 7.612 5.97394 9.525 7.29394C10.325 7.06394 11.175 6.94794 12.025 6.94794C12.875 6.94794 13.725 7.06294 14.525 7.29394C16.437 5.96094 17.275 6.24394 17.275 6.24394C17.825 7.65294 17.475 8.70394 17.375 8.95994C18.012 9.67794 18.4 10.5879 18.4 11.7159C18.4 15.6499 16.063 16.5219 13.838 16.7779C14.2 17.0979 14.513 17.7139 14.513 18.6749C14.513 20.0459 14.5 21.1479 14.5 21.4949C14.5 21.7629 14.688 22.0839 15.188 21.9809C17.1849 21.2849 18.911 19.976 20.12 18.2409C21.3456 16.4848 22.0019 14.3945 22 12.2529C22 6.58794 17.525 1.99994 12 1.99994Z" /> -->
        <!--       </svg> -->
        <!--     </a> -->
        <!--   </div> -->
        <!--   <div v-motion :delay="800" :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0, scale: 1 }" class=""> -->
        <!--     <a target="_blank" href="https://twitter.com/duy3_" class="text-gray-800 hover:text-gray-600"> -->
        <!--       <svg width="35" height="35" viewBox="0 -4 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" -->
        <!--         xmlns:xlink="http://www.w3.org/1999/xlink"> -->
        <!--         <title>Twitter</title> -->
        <!--         <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> -->
        <!--           <g id="Color-" transform="translate(-300.000000, -164.000000)" fill="#00AAEC"> -->
        <!--             <path -->
        <!--               d="M348,168.735283 C346.236309,169.538462 344.337383,170.081618 342.345483,170.324305 C344.379644,169.076201 345.940482,167.097147 346.675823,164.739617 C344.771263,165.895269 342.666667,166.736006 340.418384,167.18671 C338.626519,165.224991 336.065504,164 333.231203,164 C327.796443,164 323.387216,168.521488 323.387216,174.097508 C323.387216,174.88913 323.471738,175.657638 323.640782,176.397255 C315.456242,175.975442 308.201444,171.959552 303.341433,165.843265 C302.493397,167.339834 302.008804,169.076201 302.008804,170.925244 C302.008804,174.426869 303.747139,177.518238 306.389857,179.329722 C304.778306,179.280607 303.256911,178.821235 301.9271,178.070061 L301.9271,178.194294 C301.9271,183.08848 305.322064,187.17082 309.8299,188.095341 C309.004402,188.33225 308.133826,188.450704 307.235077,188.450704 C306.601162,188.450704 305.981335,188.390033 305.381229,188.271578 C306.634971,192.28169 310.269414,195.2026 314.580032,195.280607 C311.210424,197.99061 306.961789,199.605634 302.349709,199.605634 C301.555203,199.605634 300.769149,199.559408 300,199.466956 C304.358514,202.327194 309.53689,204 315.095615,204 C333.211481,204 343.114633,188.615385 343.114633,175.270495 C343.114633,174.831347 343.106181,174.392199 343.089276,173.961719 C345.013559,172.537378 346.684275,170.760563 348,168.735283" -->
        <!--               id="Twitter"></path> -->
        <!--           </g> -->
        <!--         </g> -->
        <!--       </svg> -->
        <!--     </a> -->
        <!--   </div> -->

        <!--   <div v-motion :delay="900" :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0, scale: 1 }" class=""> -->
        <!--     <a target="_blank" href="https://linkedin.com/in/ashraf-alhaj" class="text-gray-800 hover:text-gray-600"> -->
        <!--       <svg :fill="colorMode.preference == 'dark' ? 'white' : 'black'" width="35" height="35" -->
        <!--         viewBox="-5.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"> -->
        <!--         <title>linkedin</title> -->
        <!--         <path -->
        <!--           d="M0 8.219v15.563c0 1.469 1.156 2.625 2.625 2.625h15.563c0.719 0 1.406-0.344 1.844-0.781 0.469-0.469 0.781-1.063 0.781-1.844v-15.563c0-1.469-1.156-2.625-2.625-2.625h-15.563c-0.781 0-1.375 0.313-1.844 0.781-0.438 0.438-0.781 1.125-0.781 1.844zM2.813 10.281c0-1 0.813-1.875 1.813-1.875 1.031 0 1.875 0.875 1.875 1.875 0 1.031-0.844 1.844-1.875 1.844-1 0-1.813-0.813-1.813-1.844zM7.844 23.125v-9.531c0-0.219 0.219-0.406 0.375-0.406h2.656c0.375 0 0.375 0.438 0.375 0.719 0.75-0.75 1.719-0.938 2.719-0.938 2.438 0 4 1.156 4 3.719v6.438c0 0.219-0.188 0.406-0.375 0.406h-2.75c-0.219 0-0.375-0.219-0.375-0.406v-5.813c0-0.969-0.281-1.5-1.375-1.5-1.375 0-1.719 0.906-1.719 2.125v5.188c0 0.219-0.219 0.406-0.438 0.406h-2.719c-0.156 0-0.375-0.219-0.375-0.406zM2.875 23.125v-9.531c0-0.219 0.219-0.406 0.375-0.406h2.719c0.25 0 0.406 0.156 0.406 0.406v9.531c0 0.219-0.188 0.406-0.406 0.406h-2.719c-0.188 0-0.375-0.219-0.375-0.406z"> -->
        <!--         </path> -->
        <!--       </svg> -->
        <!--     </a> -->
        <!--   </div> -->
        <!-- </div> -->
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
