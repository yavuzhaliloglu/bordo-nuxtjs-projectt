<template>
  <div class="popular-component">
    <div class="popular-residence container">
      <h2 class="popular-residence-header text-center">Popular Residence</h2>
      <SlidersPopularSlider :sliderlist="sliderlist" :loop="loop" />
      <div class="text-center mt-5">
        <LinksLinkComponent class="indexlink" :text="text" :path="path" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopularResidance',

  data() {
    return {
      text: 'View All Properties',
      path: '/adverts',
      loop: true,
      sliderlist: []
    }
  },
  created() {
    this.getFav()
  },
  methods: {
    async getFav() {
      await this.$API.adverts.getAllAdverts().then((res) => {
        this.sliderlist = res.data.data
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
