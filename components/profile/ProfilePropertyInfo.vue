<template>
  <div class="info">
    <h4 class="info-header">Property Details</h4>
    <!-- <img :src="" alt=""> -->
    {{propertyDetail}}
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
    img{
        border: 1px solid red;
    }
</style>
