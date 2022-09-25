<template>
  <div>
    <div class="d-flex">
      <CommonSelectComponent
        :title="'category'"
        :options="categories"
        @input="getPurpose"
      />
      <CommonSelectComponent
        :title="'purpose'"
        :options="purpose"
        @input="getTypes"
      />
      <SelectComponent :title="'type'" :options="types" @input="setPath" />

      <button @click="changePage">Ara</button>
    </div>
  </div>
</template>

<script>
import SelectComponent from '../common/SelectComponent.vue'
export default {
  name: 'HeroSearchComponent',
  components: { SelectComponent },
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
