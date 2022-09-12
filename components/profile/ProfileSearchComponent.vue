<template>
  <div class="search">
    <slot></slot>

    <div class="row mt-3">
      <div class="col-lg">
        <div class="search-content-container">
          <select
            v-model="location.city"
            class="search-content-container-input"
            @change="getDistrict(location.city)"
          >
            <option
              v-for="item in selectCity"
              :key="item._id"
              class="search-content-container-input-option"
              :value="item._id"
            >
              {{ item.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="col-lg">
        <div class="search-content-container">
          <select
            v-model="location.district"
            class="search-content-container-input"
            @change="getTown(location.district)"
          >
            <option
              v-for="item in selectDistrict"
              :key="item._id"
              class="search-content-container-input-option"
              :value="item._id"
            >
              {{ item.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="col-lg">
        <div class="search-content-container">
          <select
            v-model="location.town"
            class="search-content-container-input"
            @change="updateValue()"
          >
            <option
              v-for="item in selectTown"
              :key="item._id"
              class="search-content-container-input-option"
              :value="item._id"
            >
              {{ item.name }}
            </option>
          </select>
        </div>
      </div>

      <div v-if="$route.path === '/dashboard'" class="col-lg">
        <div class="d-flex justify-content-between">
          <button class="radiusbutton">Ara</button>
          <button class="radiusbutton">Filter</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileSearchComponent',
  data() {
    return {
      location: {
        city: '',
        district: '',
        town: ''
      },
      selectCity: [],
      selectDistrict: [],
      selectTown: []
    }
  },
  created() {
    this.getCity()
  },
  methods: {
    updateValue() {
      this.$emit('location', this.location)
    },

    getCity() {
      this.$API.locations.getCity().then((res) => {
        this.selectCity = res.data.data
      })
      const data = this.$store.getters.getCommonInputs.location
      if (data.city._id) {
        this.getDistrict(data.city._id)
        this.getTown(data.district._id)
        this.location.city = data.city._id
        this.location.district = data.district._id
        this.location.town = data.town._id
      }
    },
    getDistrict(id) {
      this.$API.locations.getDistrict(id).then((res) => {
        this.selectDistrict = res.data.data
      })
      this.selectTown = []
    },
    getTown(id) {
      this.$API.locations.getTown(id).then((res) => {
        this.selectTown = res.data.data
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
