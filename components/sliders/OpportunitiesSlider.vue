<template>
    <div class="slider op-slider my-5 container">
        <span class="quote">“</span>
        <div class="swiper swiper1">
            <div class="swiper-wrapper">
                <div v-for="i in content" :key="i.header" class="swiper-slide">
                    <SlidersOpportunitiesOneSlide class="slider-content" :content="i" />
                </div>
            </div>

            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    </div>
</template>

<script>
import { Swiper, Navigation, Autoplay } from 'swiper'
// import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper-bundle.css'

export default {
    name: "OpportunitiesSlider",
    data() {
        return {
            content: [
                {
                    text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidun a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.',
                    header: 'Lorem, ipsum dolor',
                    title: 'Lorem ipsum dolor sit amet consectetur.'
                },
                {
                    text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit Suspendisse eros felis, tincidun a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.',
                    header: 'Lorem, ipsum dolor',
                    title: 'Lorem ipsum dolor sit amet consectetur.'
                }, {
                    text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque ut lacus vel interdum.',
                    header: 'Lorem, ipsum dolor',
                    title: 'Lorem ipsum dolor sit amet consectetur.'
                }, {
                    text: ' Lorem Lorem Lorem Lorem Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidun a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.',
                    header: 'Lorem, ipsum dolor',
                    title: 'Lorem ipsum dolor sit amet consectetur.'
                },
            ]
        };
    },
    mounted() {

        Swiper.use([Navigation, Autoplay]);

        /* eslint-disable no-unused-vars */
        const swiper = new Swiper(".swiper1", {
            direction: "horizontal",
            loop: true,
            spaceBetween: 10,
            setWrapperSize: true,
            slidesPerView: 1,
            modules: [Navigation, Autoplay],
            autoplay: {
                delay: 3000
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }
        });
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


