<template>
    <NuxtParticles id="tsparticles" :options="options" @load="onLoad" />

    <slot />
</template>
<script setup lang="ts">
import VueImage from "@/assets/images/vue.svg";
import ReactImage from "@/assets/images/react.svg";
import LaravelImage from "@/assets/images/laravel.svg";
import LivewireImage from "@/assets/images/livewire.svg";
import NuxtImage from "@/assets/images/nuxt.svg";
import NextImage from "@/assets/images/next.svg";
import TailwindImage from "@/assets/images/tailwind.svg";
import BootstrapImage from "@/assets/images/bootstrap.svg";
import PhpImage from "@/assets/images/php.svg";
import TypescriptImage from "@/assets/images/typescript.svg";
import HtmlImage from "@/assets/images/html.svg";
import CssImage from "@/assets/images/css.svg";


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
    // interactivity: {
    //     events: {
    //         onHover: {
    //             enable: true,
    //             mode: "repulse",
    //         },
    //         resize: true,
    //     },
    // },

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

                // {
                //     src: BootstrapImage,
                // },

                {
                    src: PhpImage,
                },

                {
                    src: TypescriptImage,
                },

                // {
                //     src: HtmlImage,
                // },

                // {
                //     src: CssImage,
                // },
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
            value: 5,
        },
        opacity: {
            value: 0.4,
        },
        size: {
            random: true,
            value: 15,
        },
    },
};
</script>
