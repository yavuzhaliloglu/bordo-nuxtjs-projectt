<template>
  <div>
    <ProfileSingleAdvert :advert="singleAdvert" :address="address" :images="images" />
  </div>
</template>

<script>
export default {
  name: 'SingleAdvert',
  data() {
    return {
      id: this.$route.params.id,
      singleAdvert: {},
      address: {
        city: {},
        district: {},
        town: {}
      },
      images:[]
    }
  },
  created() {
    this.getSingleAdvert(this.id)
  },
  methods: {
    getSingleAdvert(id) {
      this.$API.adverts.getSingleAdvert(id).then((res) => {
        this.singleAdvert = res.data.data[0]
        this.address.city = res.data.data[0].address.city
        this.address.district = res.data.data[0].address.district
        this.address.town = res.data.data[0].address.town
        this.images = res.data.data[0].images
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
