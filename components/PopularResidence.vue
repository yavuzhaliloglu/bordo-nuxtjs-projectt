<template>
    <div class="popular-component">
        <div class="popular-residence container d-flex flex-column align-items-center justify-content-center">
            <h2 class="popular-residence-header">Popular Residence</h2>
            <!-- <VueSlickCarousel v-bind="settings">
                <div class="popular-residence-cart">
                    <img src="~/assets/images/slider-1.png" alt="">
                    <div class="popular-residence-cart-content">
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, eveniet.</p>
                    </div>
                </div>
                <div class="popular-residence-cart">
                    <img src="~/assets/images/slider-2.png" alt="">
                    <div class="popular-residence-cart-content">
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, eveniet.</p>
                    </div>
                </div>
                <div class="popular-residence-cart">
                    <img class="popular-residence-cart-image" src="~/assets/images/slider-3.png" alt="">
                    <div class="popular-residence-cart-content">
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, eveniet.</p>
                    </div>
                </div>
                <div class="popular-residence-cart">
                    <img src="~/assets/images/slider-2.png" alt="">
                    <div class="popular-residence-cart-content">
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, eveniet.</p>
                    </div>
                </div>
            </VueSlickCarousel> -->
            <nuxt-link to="/" class="popular-residence-button">View All Properties</nuxt-link>
        </div>
    </div>
</template>

<script>
// import VueSlickCarousel from 'vue-slick-carousel'
// import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    name: 'PopularResidance',
    // components: { VueSlickCarousel },
    data() {
        return {
            // settings: {
            //     arrows: true,
            //     dots: false,
            //     slidesToShow: 3
            // }
        }
    }

}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/main.scss';

.popular-component {
    padding: 100px 0;

    background-color: lighten($black, 8%);
    background-image: url('~/assets/images/popularbackground.png');
    background-size: cover;
    object-fit: cover;

    .popular-residence{

    }
}

// .popular-residence-cart {
//     width: 33%;
//     img {
//         width: 100%;
//         height: 50%;
//     }
// }

.popular-residence-button {
    background-color: $thirdcolor;
    padding: 22px 42px;
}
</style>