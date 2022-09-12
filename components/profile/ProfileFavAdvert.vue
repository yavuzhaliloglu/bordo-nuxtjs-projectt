<template>
  <div class="dashboard-content-favorite">
    <h3>Your Favorite Adverts</h3>
    <div v-if="!sliderlist.length">Henüz Favori ilanınız yok</div>
    <div v-else>
      <SlidersPopularSlider :sliderlist="sliderlist" :loop="loop"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileFavAdvert',
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
      this.sliderlist = this.$auth.user.data[0].favorities
    }
  }
}
</script>

<style lang="scss" scoped></style>
