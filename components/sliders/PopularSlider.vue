<template>
  <div class="slider my-3">
    <div class="swiper swiper2">
      <div v-if="$route.path === '/'" class="swiper-wrapper">
        <div
          v-for="slide in sliderlist"
          :key="slide.header"
          class="swiper-slide"
        >
          <SlidersPopularOneSlide :slide="slide" class="slider-content" />
        </div>
      </div>

      <div v-else class="swiper-wrapper">
        <div
          v-for="slide in sliderlist"
          :key="slide.header"
          class="swiper-slide pointer"
        >
          <SlidersPopularOneSlide :slide="slide" class="slider-content" />
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
  },
  methods: {
    onSwiper: (swiper) => {
      console.log(swiper)
    }
  }
}
</script>

<style lang="scss" scoped></style>
