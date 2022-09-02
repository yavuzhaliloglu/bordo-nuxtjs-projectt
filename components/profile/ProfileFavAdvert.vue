<template>
  <div class="dashboard-content-favorite">
    <h3>Your Favorite Adverts</h3>
    <div v-if="!sliderlist.length">Henüz Favori ilanınız yok</div>
    <div v-else>
      <PopularSlider :sliderlist="sliderlist" :loop="loop" />
    </div>
  </div>
</template>

<script>
import PopularSlider from '../sliders/PopularSlider.vue'
export default {
  name: 'ProfileFavAdvert',
  components: { PopularSlider },
  data() {
    return {
      sliderlist: [],
      loop: false
    }
  },
  created() {
    this.getFav()
  },
  methods: {
    getFav() {
      this.sliderlist = this.$auth.user.data.favorities
    }
  }
}
</script>

<style lang="scss" scoped></style>
