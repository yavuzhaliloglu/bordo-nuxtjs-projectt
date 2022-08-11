<template>
    <div class="text-slider">
        <span class="quote">“</span>
        <!-- <b-carousel id="myCarousel" v-model="slide" :interval="4000" controls background="transparent" img-width="1024"
            img-height="480" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd">
            <b-carousel-slide>
                <template #img>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
                        a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.</p>
                    <h5>Lorem, ipsum dolor.</h5>
                    <p>Lorem ipsum dolor sit amet consectetur.
                    </p>
                </template>
            </b-carousel-slide>


            <b-carousel-slide>
                <template #img>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, ab nobis. Cumque quasi ipsa
                        voluptatum sapiente aperiam expedita, cupiditate vitae suscipit voluptates adipisci voluptas?
                        Obcaecati, voluptatum vel ad perspiciatis molestiae, deleniti vero quo expedita facilis labore
                        placeat amet quibusdam aut voluptas, pariatur nisi iure dolor ex alias modi cum aspernatur.</p>
                    <h5>Lorem, ipsum.</h5>
                    <p>Lorem, ipsum dolor.</p>
                </template>
            </b-carousel-slide>


            <b-carousel-slide>
                <template #img>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem a rerum sequi. Rerum
                        hic, totam autem ex expedita ad. Enim iste repudiandae, facere rerum quod autem consequuntur
                        earum reprehenderit? Quod officia, cum consequuntur explicabo laborum quibusdam et excepturi
                        nulla libero accusantium dolor! Sapiente, deleniti?</p>
                    <h5>Lorem.</h5>
                    <p>Lorem ipsum dolor sit amet.</p>
                </template>
            </b-carousel-slide>

            <b-carousel-slide>
                <template #img>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem sapiente tenetur reprehenderit
                        deserunt voluptate reiciendis? Similique accusamus laudantium officia excepturi. Laborum
                        recusandae, ad ex dicta maxime officia dolore sunt! Nesciunt excepturi nulla at voluptatum sequi
                        non natus.</p>
                    <h5>lorem ipsm</h5>
                    <p>Lorem ipsum dolor sit.</p>
                </template>
            </b-carousel-slide>

        </b-carousel> -->
        <swiper :slides-per-view="3" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
            <swiper-slide>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
                    a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.</p>
                <h5>Lorem, ipsum dolor.</h5>
                <p>Lorem ipsum dolor sit amet consectetur.
                </p>
            </swiper-slide>
            <swiper-slide>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, ab nobis. Cumque quasi ipsa
                    voluptatum sapiente aperiam expedita, cupiditate vitae suscipit voluptates adipisci voluptas?
                    Obcaecati, voluptatum vel ad perspiciatis molestiae, deleniti vero quo expedita facilis labore
                    placeat amet quibusdam aut voluptas, pariatur nisi iure dolor ex alias modi cum aspernatur.</p>
                <h5>Lorem, ipsum.</h5>
                <p>Lorem, ipsum dolor.</p>
            </swiper-slide>
            <swiper-slide>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem a rerum sequi. Rerum
                    hic, totam autem ex expedita ad. Enim iste repudiandae, facere rerum quod autem consequuntur
                    earum reprehenderit? Quod officia, cum consequuntur explicabo laborum quibusdam et excepturi
                    nulla libero accusantium dolor! Sapiente, deleniti?</p>
                <h5>Lorem.</h5>
                <p>Lorem ipsum dolor sit amet.</p>
            </swiper-slide>
            <swiper-slide>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem sapiente tenetur reprehenderit
                    deserunt voluptate reiciendis? Similique accusamus laudantium officia excepturi. Laborum
                    recusandae, ad ex dicta maxime officia dolore sunt! Nesciunt excepturi nulla at voluptatum sequi
                    non natus.</p>
                <h5>lorem ipsm</h5>
                <p>Lorem ipsum dolor sit.</p>
            </swiper-slide>

        </swiper>

    </div>
</template>

<script>
import { Swiper, Navigation, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
    name: 'OpportunitiesSlider',
    // components: {
    //     Swiper,
    //     SwiperSlide,
    // },
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

    // data() {
    //     return {
    //         slide: 0,
    //         sliding: null
    //     }
    // },
    // methods: {
    //     onSlideStart(slide) {
    //         this.sliding = true
    //     },
    //     onSlideEnd(slide) {
    //         this.sliding = false
    //     },
    // }

}

</script>

<style lang="scss" scoped>
</style>