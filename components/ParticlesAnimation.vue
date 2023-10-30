<template>
    <NuxtParticles id="tsparticles" :options="options" @load="onLoad" />
</template>
<script setup lang="ts">
const onLoad = (container:any) => {
    // Do something with the container
    container.pause();
    setTimeout(() => container.play(), 2000);
};
const options = {
    fullScreen: { enable: true, zIndex: -1 },
    background: { color: { value: "#fff" } },
    particles: {
        color: { value: "#000" },
        links: { color: "#000", enable: true },
        move: { enable: true },
        number: { value: 100 },
    },
};
</script>
