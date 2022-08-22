<template>
  <div>
    <slot></slot>

    <label>Şehir</label>
    <select v-model="location.city" @change="getDistrict(location.city)">
      <option v-for="item in selectCity" :key="item._id" :value="item._id">
        {{ item.name }}
      </option>
    </select>

    <label>İlçe</label>
    <select v-model="location.district" @change="getTown(location.district)">
      <option v-for="item in selectDistrict" :key="item._id" :value="item._id">
        {{ item.name }}
      </option>
    </select>

    <label>Mahalle</label>
    <select v-model="location.town" @change="updateValue()">
      <option v-for="item in selectTown" :key="item._id" :value="item._id">
        {{ item.name }}
      </option>
    </select>
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
    updateValue(){
        this.$emit('location',this.location)
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
