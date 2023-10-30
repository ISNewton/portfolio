<template>
  <div class="">
    <div class="blob-wrap x bg-transparent">
      <div class="blob y laravel-shadow">
        <img class="max-w-full bg-transparent" src="images/laravel.svg" />
      </div>
    </div>

    <div class="blob-wrap blob-2 x2">
      <div class="blob y react-shadow">
        <img class="max-w-full bg-transparent " src="images/react.svg" />
      </div>
    </div>

    <div class="blob-wrap blob-2 x3">
      <div class="blob y vue-shadow">
        <img class="max-w-full " src="images/vue.svg" />
      </div>
    </div>


    <slot />
  </div>
</template>

<script setup></script>

<style>
:root {
  --width: 26px;
  --x-speed: 100s;
  --y-speed: 100s;
  --transition-speed: 22.2s;
}

.laravel-shadow {
  box-shadow: 0 20px 50px 20px rgba(240, 83, 64, 1);
}

.react-shadow {
  box-shadow: 0 20px 50px 20px #07d5fa;
}

.vue-shadow {
  box-shadow: 0 20px 50px 20px #4dba87 ;
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

.blob-4 {
  position: absolute;
  bottom:0 ;
  right: 0;
}
body {
  margin: 0;
  overflow: hidden;
}

.x {
  animation: x var(--x-speed) linear infinite alternate;
}

.x2 {
  animation: x2 var(--x-speed) linear infinite alternate;
}

.x3 {
  animation: x3 var(--x-speed) linear infinite alternate;
}

.x4 {
  animation: x4 var(--x-speed) linear infinite alternate;
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

@keyframes x3 {
  100% {
    transform: translateX(calc(-50vw + var(--width)));
  }
}

@keyframes x4 {
  100% {
    transform: translateX(calc(100vw + var(--width)));
  }
}

@keyframes y {
  100% {
    transform: translateY(calc(100vh - var(--width)));
  }
}

@keyframes y2 {
  100% {
    transform: translateY(calc(-100vh - var(--width)));
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
