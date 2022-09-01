<template>
  <!-- <div class="swiper swiper3">
    <div class="swiper-wrapper">
      <div v-for="item in images" :key="item.url" class="swiper-slide">
        <img :src="item.url" alt="" />
      </div>
    </div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div> -->
  <div></div>
</template>

<script>


export default {
  name: 'ImageSlider',
  props: {
    images: {
      type: Array,
      default: null
    }
  },
//   mounted() {
//     Swiper.use([Navigation, Autoplay])
//     /* eslint-disable no-unused-vars */
//     const swiper = new Swiper('.swiper3', {
//       direction: 'horizontal',
//       setWrapperSize: true,
//       spaceBetween: 20,
//       slidesPerView: 1,
//       modules: [Navigation, Autoplay],
//       autoplay: {
//         delay: 2000
//       },
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev'
//       }
//     })
//   }
}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  width: 100%;
  height: 40vh;
}
</style>
