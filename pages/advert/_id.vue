<template>
  <div>
    <CommonLoadingCircle v-if="isLoading" />
    <ProfileSingleAdvert v-else :advert="singleAdvert" />
  </div>
</template>

<script>
export default {
  name: 'SingleAdvert',
  data() {
    return {
      id: this.$route.params.id,
      isLoading: false,
      singleAdvert: {},
    }
  },
  created() {
    this.getSingleAdvert(this.id)
  },
  methods: {
    getSingleAdvert(id) {
      this.isLoading = true
      this.$API.adverts.getSingleAdvert(id).then((res) => {
        this.singleAdvert = res.data.data[0]
        this.isLoading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
