<template>
    <div class="slider my-5">

        <div class="swiper">
            <div class="swiper-wrapper">
                <div v-for="i in 6" :key="i" class="swiper-slide">
                    <SlidersPopularOneSlide class="slider-content" />
                </div>
            </div>

            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>


    </div>
</template>

<script>
import { Swiper, Navigation, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'


export default {
    name: "PopularSlider",
    mounted() {

        Swiper.use([Navigation, Autoplay]);

        /* eslint-disable no-unused-vars */
        const swiper = new Swiper(".swiper", {

            direction: "horizontal",

            loop: true,

            spaceBetween: 20,

            slidesPerView: 1,

            modules: [Navigation, Autoplay],

            breakpoints: {
                776: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },

                550: {
                    spaceBetween: 15,
                    slidesPerView: 2,
                }
            },

            autoplay: {
                delay: 3000
            },

            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }

        });
    },

    data() {
        return {

        };
    },
    methods: {
        onSwiper: (swiper) => {
            console.log(swiper);
        },
    },
}
</script>

<style lang="scss" scoped>
</style>