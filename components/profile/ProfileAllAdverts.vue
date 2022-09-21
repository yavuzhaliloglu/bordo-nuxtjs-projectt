<template>
  <div class="alladverts">
    <div class="container">
      <div class="row w-100">
        <div
          v-for="advert in allAdverts"
          :key="advert._id"
          class="col-lg-4 col-md-6"
        >
          <CommonAdvertCard :card="advert" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileAllAdverts',
  data() {
    return {
      allAdverts: []
    }
  },
  created() {
    this.getAllAdverts()
  },
  methods: {
    async getAllAdverts() {
      await this.$API.adverts.getAllAdverts().then((res) => {
        this.allAdverts = res.data.data
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
