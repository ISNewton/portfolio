<template>
    <NuxtParticles id="tsparticles" :options="options" @load="onLoad">
    </NuxtParticles>

    <slot />
</template>
<script setup lang="ts">
const colorMode = useColorMode();

const tsContainer = ref({})
const onLoad = (container: any) => {
    // Do something with the container
    tsContainer.value = container
    container.play();
    console.log(container);
    container.loadTheme("light"); //dark mode
    // container.pause();
    // setTimeout(() => container.play(), 2000);
};
 


const options = {
    themes: [
        {
            name: "dark",
            default: {
                value: true,
                mode: "dark",
            },
            options: {
                background: {
                    color: "#000000",
                },
                particles: {
                    color: {
                        value: ["#ffffff"],
                    },
                },
            },
        },
        {
            name: "light",
            default: {
                value: true,
                mode: "light",
            },
            options: {
                background: {
                    color: "ffffff",
                },
                particles: {
                    color: {
                        value: ["#000000"],
                    },
                },
            },
        },
    ],
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
    },

    particles: {
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
        size: {
            random: true,
            value: 5,
        },
    },
};
</script>
