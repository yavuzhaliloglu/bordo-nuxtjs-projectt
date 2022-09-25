<template>
  <div class="">
    <div class="row no-gutters hero-search">
      <CommonSelectComponent
        class="col-3 hero-search__item"
        :title="'category'"
        :options="categories"
        @input="getPurpose"
      />

      <CommonSelectComponent
        class="col-3 hero-search__item"
        :title="'purpose'"
        :options="purpose"
        @input="getTypes"
      />
      <CommonSelectComponent
        class="col-3 hero-search__item"
        :title="'type'"
        :options="types"
        @input="setPath"
      />

      <button class="col-3 hero-search__item" @click="changePage">Ara</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroSearchComponent',
  data() {
    return {
      categories: [],
      purpose: [],
      types: [],
      path: ''
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
    },
    getPurpose(value) {
      const categories = this.categories.find((item) => {
        return item._id === value
      })
      this.path = categories.path
      this.purpose = categories.children
    },
    getTypes(value) {
      const purpose = this.purpose.find((item) => {
        return item._id === value
      })
      this.path = purpose.path
      this.types = purpose.children
    },
    setPath(value) {
      const type = this.types.find((item) => {
        return item._id === value
      })
      this.path = type.path
    },
    changePage() {
      localStorage.setItem('path', this.path)
      this.$router.push('/adverts')
    }
  }
}
</script>

<style lang="scss" scoped></style>
