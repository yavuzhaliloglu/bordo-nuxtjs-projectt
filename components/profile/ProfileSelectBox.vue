<template>
  <div class="container">
    <div class="row mt-3" @change="updateValue">
      <div
        v-if="$route.path !== '/dashboard/newproperty/features/Arsa'"
        class="col-lg-4 my-3"
      >
        <h4>İç özellikler</h4>
        <div v-for="item in interior" :key="item._id">
          <input
            :id="item._id"
            v-model="features.interior"
            type="checkbox"
            :value="item._id"
          />
          <label :for="item._id">{{ item.item }}</label>
        </div>
      </div>

      <div
        v-if="$route.path !== '/dashboard/newproperty/features/Arsa'"
        class="col-lg-4 my-3"
      >
        <h4>Dış özellikler</h4>
        <div v-for="item in external" :key="item._id">
          <input
            :id="item._id"
            v-model="features.external"
            type="checkbox"
            :value="item._id"
          />
          <label :for="item._id">{{ item.item }}</label>
        </div>
      </div>

      <div class="col-lg-4 my-3">
        <h4>Konum özellikleri</h4>
        <div v-for="item in location" :key="item._id">
          <input
            :id="item._id"
            v-model="features.location"
            type="checkbox"
            :value="item._id"
          />
          <label :for="item._id">{{ item.item }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileSelectBox',
  data() {
    return {
      interior: [],
      external: [],
      location: [],
      features: {
        interior: [],
        external: [],
        location: []
      }
    }
  },
  created() {
    this.getInterior()
    this.getExternal()
    this.getLocation()
    this.setInputs()
  },
  methods: {
    updateValue() {
      this.$emit('features', this.features)
    },
    setInputs() {
      const data = this.$store.getters.getCommonInputs
      data.interiorFeatures.forEach((element) => {
        this.features.interior.push(element._id)
      })
      data.externalFeatures.forEach((element) => {
        this.features.external.push(element._id)
      })
      data.locationFeatures.forEach((element) => {
        this.features.location.push(element._id)
      })
    },
    getInterior() {
      this.$API.features.getInterior().then((res) => {
        this.interior = res.data.data
      })
    },
    getExternal() {
      this.$API.features.getExternal().then((res) => {
        this.external = res.data.data
      })
    },
    getLocation() {
      this.$API.features.getLocation().then((res) => {
        this.location = res.data.data
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
