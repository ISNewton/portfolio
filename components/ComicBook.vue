<template>
  <article class="comic grid grid-cols-3 lg:mx-60 sm:mx-0">
    <div class="panel w-100 h-[25rem] col-span-full md:col-span-1">
      <p class="text top-left">Bug Whisperer by day light</p>
      <div class="h-full">
        <img class="object-fill h-full w-full" src="/images/programming-pretender.webp" />
      </div>
    </div>

    <div class="panel w-100 h-[25rem] col-span-full md:col-span-1">
      <p class="text bottom-right">Or Let's say : a creative thinker</p>
      <div class="h-full">
        <img class="object-fill h-full w-full" src="/images/bug-or-feature.webp" />
      </div>
    </div>

    <div class="panel w-100 h-[25rem] col-span-full md:col-span-1">
      <div class="h-full">
        <img class="object-fill h-full w-full" src="/images/gamer.webp" />
      </div>
      <p class="text bottom-right">
        But by Moonlight, I Slay Dragons (in Pixels)
      </p>
    </div>


    <div class="panel w-100 h-[25rem] col-span-full md:col-span-3">
      <div class="h-full">
      <p class="text bottom-right">
        Friday? Challenge Accepted. Hold My Coffee (and Watch This Deploy)
      </p>
        <img class="object-fill h-full w-full" src="/images/friday-deploy.webp" />
      </div>
    </div>

<div class="panel w-100 h-[25rem] col-span-full md:col-span-1">
      <div class="h-full">
        <img class="object-fill h-full w-full" src="/images/memes-master.webp" />
      </div>
      <p class="text bottom-right">My Love Language: Sharing Relatable Memes at 3 AM</p>
    </div>
<div class="panel w-100 h-[25rem] col-span-full md:col-span-2">
      <p class="text top-left">btw they call me :</p>
      <div class="h-full">
        <img class="object-fill h-full w-full" src="/images/ash.webp" />
      </div>
    </div>
    <!-- <div class="panel"> -->
    <!-- <p class="text top-left">Try resizing…</p> -->
    <!-- <p class="text bottom-right">…it’s responsive</p> -->
    <!-- </div> -->
    <!-- <div class="panel"> -->
    <!-- <p class="speech">A speech bubble</p> -->
    <!-- </div> -->
    <!-- <div class="panel"></div> -->
    <!-- <div class="panel"></div> -->
    <!-- <div class="panel"></div> -->
    <!-- <div class="panel"></div> -->
    <!-- <div class="panel"></div> -->
    <!-- <div class="panel"> -->
    <!-- <p class="text bottom-right">THE END</p> -->
    <!-- </div> -->
  </article>
</template>
<style scoped>
.comic {
  font-family: ’Comic Sans’, cursive;
  padding: 1vmin;
}

.panel {
  background-color: #fff;
  border: solid 2px #000;
  box-shadow: 0 6px 6px -6px #000;
  display: inline-block;
  margin: 1vmin;
  overflow: hidden;
  position: relative;
}

.text {
  background-color: #fff;
  border: solid 2px #000;
  margin: 0;
  padding: 7px 15px;
}

.top-left {
  left: -6px;
  position: absolute;
  top: -2px;
  transform: skew(-15deg);
}

.bottom-right {
  bottom: -2px;
  position: absolute;
  right: -6px;
  transform: skew(-15deg);
}

.speech {
  background-color: #fff;
  border: solid 2px #000;
  border-radius: 12px;
  display: inline-block;
  margin: 0.5em;
  padding: 0.5em 1em;
  position: relative;
}

.speech:before {
  border: solid 12px transparent;
  border-left: solid 12px #000;
  border-top: solid 12px #000;
  bottom: -24px;
  content: "";
  height: 0;
  left: 24px;
  position: absolute;
  transform: skew(-15deg);
  width: 0;
}

.speech:after {
  border: solid 10px transparent;
  border-left: solid 10px #fff;
  border-top: solid 10px #fff;
  bottom: -19px;
  content: "";
  height: 0;
  left: 27px;
  position: absolute;
  transform: skew(-15deg);
  width: 0;
}

.panel:nth-child(1) {}

.panel:nth-child(2) {
  flex-basis: 800px;
}

.panel:nth-child(3) {
  flex-basis: 200px;
}

.panel:nth-child(4) {
  flex-basis: 200px;
}

.panel:nth-child(5) {
  flex-basis: 200px;
}

.panel:nth-child(6) {
  flex-basis: 200px;
}

.panel:nth-child(7) {
  flex-basis: 400px;
}

.panel:nth-child(8) {
  flex-basis: 200px;
}

.panel:nth-child(9) {
  flex-basis: 200px;
}

/* background colours */

.panel:nth-child(4n + 1) {
  background-image: radial-gradient(circle, yellow, orange);
}

.panel:nth-child(4n + 2) {
  background-image: radial-gradient(circle, lightblue, deepskyblue);
}

.panel:nth-child(4n + 3) {
  background-image: radial-gradient(circle, palegreen, yellowgreen);
}

.panel:nth-child(4n + 4) {
  background-image: radial-gradient(circle, lightcoral, tomato);
}
</style>
