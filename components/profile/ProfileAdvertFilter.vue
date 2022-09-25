<template>
  <div class="advertfilter">
    <div class="container mt-4 text-center">
      <h4 class="my-5">İlanı Filtrele</h4>

      <div>
        <h6>İlan Tipi</h6>
        <div>
          <ProfileFeatures :filter-column="true" :features-column="false" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileAdvertFilter',
  data() {
    return {
      categories: []
    }
  },
  created() {
    this.getCategories()
  },
  methods: {
    getCategories() {
      this.$API.categories.getCategories().then((res) => {
        this.categories = res.data.data
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
