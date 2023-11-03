<template>
    <NuxtParticles id="tsparticles"  :options="options" @load="onLoad">
    </NuxtParticles>

    <slot />
</template>
<script setup lang="ts">
const onLoad = (container: any) => {
    // Do something with the container
    container.play();
    // container.pause();
    // setTimeout(() => container.play(), 2000);
};
const options = {
    // background: {
    //     color: {
    //         value: "#0d47a1",
    //     },
    // },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        // modes: {
        //     amongUs: {
        //         distance: 400,
        //         duration: 2,
        //         opacity: 0.8,
        //         size: 40,
        //     },
        //     push: {
        //         quantity: 4,
        //     },
        //     repulse: {
        //         distance: 200,
        //         duration: 0.4,
        //     },
        // },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        // links: {
        //     color: "#ffffff",
        //     distance: 150,
        //     enable: true,
        //     opacity: 0.5,
        //     width: 1,
        // },
        move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: true,
            speed: 1,
            straight: true,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 12,
        },
        opacity: {
            value: 0.5,
        },
        // shape: {
        //     type: "circle",
        // },
        size: {
            random: true,
            value: 5,
        },
    },
    // detectRetina: true,
};
// const options = {
//     fullScreen: { enable: true, zIndex: -1 },
//     background: { color: { value: "#fff" } },
//     particles: {
//         color: { value: "#000" },
//         links: { color: "#000", enable: true },
//         move: { enable: true },
//         number: { value: 100 },
//     },
// };
</script>
