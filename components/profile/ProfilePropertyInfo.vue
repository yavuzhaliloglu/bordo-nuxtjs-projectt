<template>
  <div class="info">
    <div v-if="propertyDetail.images">
      <h4 class="info__header">Property Details</h4>
      <img class="info__img" :src="propertyDetail.images[0].url" alt="" />
      <h5 class="my-3">{{ propertyDetail.title }}</h5>
      <CommonIconFeatures
        :type="propertyDetail.type"
        :sqm="propertyDetail.squareMeters"
        :date="propertyDetail.createdAt"
      />
      <CommonLocationComponent :address="propertyDetail.address" />
      <div class="info-description mt-3">
        <h5>İlan Açıklaması</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eius
          reprehenderit maxime alias aspernatur in necessitatibus earum, esse
          voluptas beatae. Quaerat, aut laborum. Veniam porro animi itaque,
          corrupti voluptas suscipit nesciunt officiis distinctio ad saepe
          fugiat consequatur obcaecati doloremque delectus.
        </p>
      </div>
      <button
        class="w-100 my-5 radiusbutton"
        @click="getSingleAdvert(propertyDetail._id)"
      >
        İlanı Gör
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfilePropertyInfo',
  computed: {
    propertyDetail() {
      return this.$store.getters.getPropertyDetail
    }
  },
  methods: {
    getSingleAdvert(id) {
      this.$router.push(`/advert/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped></style>
