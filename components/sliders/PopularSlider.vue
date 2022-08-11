<template>
    <div class="slider my-5">

        <div class="swiper swiper2">
            <div class="swiper-wrapper">
                <div v-for="i in 6" :key="i" class="swiper-slide">
                    <SlidersPopularOneSlide class="slider-content" />
                </div>
            </div>
        </div>

        <div class="swiper-button-prev-unique">
            <font-awesome-icon icon="fa-solid fa-circle-chevron-left" />
        </div>
        <div class="swiper-button-next-unique">
            <font-awesome-icon icon="fa-solid fa-circle-chevron-right" />
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
        const swiper = new Swiper(".swiper2", {

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
                nextEl: ".swiper-button-next-unique",
                prevEl: ".swiper-button-prev-unique"
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
.slider {
    position: relative
}

.swiper2 {
    position: relative;

}

.swiper-button-prev-unique,
.swiper-button-next-unique {
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translate(-50%);
    z-index: 999999;

    svg {
        font-size: 30px;
    }
}

.swiper-button-prev-unique {
    left: -2.5%
}

.swiper-button-next-unique {
    right: -5%
}
</style>