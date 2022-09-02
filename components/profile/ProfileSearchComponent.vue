<template>
  <div class="search">
    <slot></slot>

    <div class="search-content">
      <div class="search-content-container">
        <select
          v-model="location.city"
          class="search-content-container-input"
          @change="getDistrict(location.city)"
        >
          <option
            class="search-content-container-input-placeholder"
            value=""
            disabled
            selected
            hidden
          >
            Şehir
          </option>
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

      <div class="search-content-container">
        <select
          v-model="location.district"
          class="search-content-container-input"
          @change="getTown(location.district)"
        >
          <option
            class="search-content-container-input-placeholder"
            value=""
            disabled
            selected
            hidden
          >
            İlçe
          </option>
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

      <div class="search-content-container">
        <select
          v-model="location.town"
          class="search-content-container-input"
          @change="updateValue()"
        >
          <option
            class="search-content-container-input-placeholder"
            value=""
            disabled
            selected
            hidden
          >
            Mahalle
          </option>
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

      <button v-if="$route.path === '/dashboard'">Ara</button>
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
