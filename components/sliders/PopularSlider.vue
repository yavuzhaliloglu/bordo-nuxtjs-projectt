<template>
  <div class="slider my-3">
    <div class="swiper swiper2">
      <div class="swiper-wrapper">
        <div
          v-for="slide in sliderlist"
          :key="slide.price"
          class="swiper-slide"
        >
          <CommonAdvertCard :card="slide" />
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
import 'swiper/swiper-bundle.css'

export default {
  name: 'PopularSlider',
  props: {
    sliderlist: {
      type: Array,
      default: null
    },
    loop: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {}
  },
  mounted() {
    Swiper.use([Navigation, Autoplay])

    /* eslint-disable no-unused-vars */
    const swiper = new Swiper('.swiper2', {
      direction: 'horizontal',
      loop: this.loop,
      setWrapperSize: true,
      roundLengths:true,
      spaceBetween: 20,
      slidesPerView: 1,
      modules: [Navigation, Autoplay],
      breakpoints: {
        776: {
          slidesPerView: 3,
          spaceBetween: 10
        },

        550: {
          spaceBetween: 15,
          slidesPerView: 2
        }
      },
      autoplay: {
        delay: 2000
      },
      navigation: {
        nextEl: '.swiper-button-next-unique',
        prevEl: '.swiper-button-prev-unique'
      }
    })

    if (this.$route.path === '/dashboard') {
      const buttonleft = document.querySelector('.swiper-button-prev-unique')
      const buttonright = document.querySelector('.swiper-button-next-unique')
      buttonleft.style.display = 'none'
      buttonright.style.display = 'none'
    }
  }
}
</script>

<style lang="scss" scoped></style>
