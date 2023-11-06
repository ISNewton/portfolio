<template>
    <NuxtParticles id="tsparticles" :options="options" @load="onLoad" />

    <slot />
</template>
<script setup lang="ts">
import VueImage from "@/public/images/vue.svg";
import ReactImage from "@/public/images/react.svg";
import LaravelImage from "@/public/images/laravel.svg";
import LivewireImage from "@/public/images/livewire.svg";
import NuxtImage from "@/public/images/nuxt.svg";
import NextImage from "@/public/images/next.svg";
import TailwindImage from "@/public/images/tailwind.svg";
import BootstrapImage from "@/public/images/bootstrap.svg";
import PhpImage from "@/public/images/php.svg";
import TypescriptImage from "@/public/images/typescript.svg";
import HtmlImage from "@/public/images/html.svg";
import CssImage from "@/public/images/css.svg";


const colorMode = useColorMode();

const tsContainer = ref({});
const onLoad = (container: any) => {
    // Do something with the container
    tsContainer.value = container;
    // container.play();
    container.loadTheme("dark"); //dark mode
    // container.pause();
    // setTimeout(() => container.play(), 2000);
};

watch(colorMode, async (mode) => {
    // @ts-ignore
    if (tsContainer.value.id) {
        // @ts-ignore
        let a = await tsContainer.value?.loadTheme(mode.preference);
    }
});

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
                    // color: "#111827",
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
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
    },

    particles: {
        shape: {
            type: "image",
            image: [
                {
                    src: VueImage,
                },

                {
                    src: ReactImage,
                },

                {
                    src: LaravelImage,
                },

                {
                    src: LivewireImage,
                },

                {
                    src: NuxtImage,
                },
                ,

                {
                    src: NextImage,
                },

                {
                    src: TailwindImage,
                },

                {
                    src: BootstrapImage,
                },

                {
                    src: PhpImage,
                },

                {
                    src: TypescriptImage,
                },

                {
                    src: HtmlImage,
                },

                {
                    src: CssImage,
                },
            ],
        },
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
            value: 10,
        },
        opacity: {
            value: 0.5,
        },
        size: {
            random: true,
            value: 20,
        },
    },
};
</script>
