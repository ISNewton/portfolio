<template>
  <h2
    class="font-display scale-r-2 font-bold leading-none z-10 text-3xl lg:text-6xl title-backgrounded title-backgrounded-yellow dark:text-white 
    dark:bg-gradient-to-r  from-[#faf77d] to-[#faf77d]">
    <slot></slot>
  </h2>
</template>
<style>
.title-backgrounded {
  background-color: transparent;
  display: inline;
}

</style>
<!-- .title-backgrounded-yellow { -->
<!--   background-image: linear-gradient(transparent 35%, -->
<!--       #faf77d 0, -->
<!--       #faf77d 85%, -->
<!--       transparent 0); -->
<!-- } -->

