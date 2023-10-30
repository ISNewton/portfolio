<template>
    <div class="">
        <!-- <LaravelIcon class="bg-red-500" /> -->


        <div class="blob-wrap x bg-transparent">
            <div class="blob y  bg-transparent shadow-[0_20px_50px_20px_rgba(240,_83,_64,_0.7)]">
              <img  class="max-w-full bg-transparent" src="images/laravel.svg" />
            </div>

        </div>

        <div class="blob-wrap blob-2 x2">
            <div class="blob y blur-sm">

              <!-- <img  class="max-w-full " src="images/laravel.svg" /> -->
            </div>
        </div>

        <!-- <div class="relative"> -->
          <slot />
        <!-- </div> -->
        
    </div>
</template>

<script setup>

</script>


<style>


:root {
  --width: 50px;
  --x-speed: 13s;
  --y-speed: 7s;
  --transition-speed: 2.2s;
}

.blob { 
  width: var(--width);
  height: var(--width);
  background: transparent;
  transition: border-radius var(--transition-speed) linear;
}
.blob-2 {
  position: absolute;
  top: 0;
  right: 0;
}

body {
  margin: 0;
  overflow: hidden;
  background: #546E7A;
}

.x {
  animation: x var(--x-speed) linear infinite alternate;
}
.x2 {
  animation: x2 var(--x-speed) linear infinite alternate;
}
.y {
  animation: y var(--y-speed) linear infinite alternate;
}

@keyframes x {
  100% {
    transform: translateX(calc(100vw - var(--width)));
  }
}
@keyframes x2 {
  100% {
    transform: translateX(calc(-100vw + var(--width)));
  }
}

@keyframes y {
  100% {
    transform: translateY(calc(100vh - var(--width)));
  }
}


.inputs {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 300px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
}
.inputs label {
  flex: 1;
}
.inputs input {
  width: 100%;
}

</style>
