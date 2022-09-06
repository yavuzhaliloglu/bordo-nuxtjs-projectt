<template>
  <div class="info">
    <div v-if="propertyDetail.images">
      <h4 class="info__header">Property Details</h4>
      <img class="info__img" :src="propertyDetail.images[0].url" alt="" />
      <CommonIconFeatures
        :type="propertyDetail.type"
        :sqm="propertyDetail.squareMeters"
        :date="propertyDetail.createdAt"
      />
      
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
  }
}
</script>

<style lang="scss" scoped>
img {
  border: 1px solid red;
}
</style>
