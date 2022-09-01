<template>
  <div>
    <p>

      <div
        style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff"
        class="swiper-container mySwiper2"
      >
        <div class="swiper-wrapper">
          <div v-for="item in advert.images" :key="item.url" class="swiper-slide">
            <img :src="item.url" alt="">
          </div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
      <div thumbsSlider="" class="swiper-container mySwiper">
        <div class="swiper-wrapper">
          <div v-for="item in advert.images" :key="item.url" class="swiper-slide">
            <img :src="item.url" alt="">
          </div>
        </div>
      </div>

    <br />
    {{ advert.title }}
    <br />
    {{ advert.price }}
    <br />
    {{ advert.description }}
    <br />
    {{ advert.landStatus }}
    <br />
    {{ advert.parcel }}

    <br />{{ advert.squareMeters }} <br />{{ advert.type }} <br />
    {{ advert.createdAt }}
    <br />
    {{ address.city.name }}
    {{ address.district.name }}
    {{ address.town.name }}
    <br />
    </p>
  </div>
</template>

<script>
import { Swiper, Navigation, Autoplay, Thumbs } from 'swiper'
import 'swiper/swiper-bundle.css'
export default {
  name: 'SingleAdvert',
  props: {
    advert: {
      type: Object,
      required: true
    },
    address: {
      type: Object,
      required: true
    },
    images:{
      type:Array,
      required:true
    }
  },
  mounted() {
    Swiper.use([Navigation, Autoplay,Thumbs])
    /* eslint-disable no-unused-vars */
    const swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
      });
      const swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper,
        },
      });
  }
}
</script>

<style lang="scss" scoped>

</style>
