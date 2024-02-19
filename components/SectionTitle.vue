<template>
  <h2
    class="relative font-display leading-6 text-black   scale-r-2 font-bold  z-10 text-3xl lg:text-6xl title-backgrounded
 title-backgrounded-yellow
    dark:bg-gradient-to-r dark:from-[#faf77d] dark:to-[#faf77d]  dark:text-transparent dark:bg-clip-text">
    <slot></slot>
  </h2>
</template>
<style>
.title-backgrounded {
  background-color: transparent;
  display: inline;
}
.title-backgrounded-yellow {
  background-image: linear-gradient(transparent 35%,
      #faf77d 0,
      #faf77d 85%,
      transparent 0);
}
</style>
