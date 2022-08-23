<template>
  <div class="d-flex justify-content-between">
    <div class="my-4 d-flex" @change="updateValue">
      <div
        v-if="$route.path !== '/dashboard/newproperty/features/Arsa'"
        class="mx-2"
      >
        <h4>İç özellikler</h4>
        <div v-for="item in interior" :key="item._id">
          <label :for="item._id">{{ item.item }}</label>
          <input
            :id="item._id"
            v-model="features.interior"
            type="checkbox"
            :value="item._id"
          />
        </div>
      </div>

      <div
        v-if="$route.path !== '/dashboard/newproperty/features/Arsa'"
        class="mx-2"
      >
        <h4>Dış özellikler</h4>
        <div v-for="item in external" :key="item._id">
          <label :for="item._id">{{ item.item }}</label>
          <input
            :id="item._id"
            v-model="features.external"
            type="checkbox"
            :value="item._id"
          />
        </div>
      </div>

      <div class="mx-2">
        <h4>Konum özellikleri</h4>
        <div v-for="item in location" :key="item._id">
          <label :for="item._id">{{ item.item }}</label>
          <input
            :id="item._id"
            v-model="features.location"
            type="checkbox"
            :value="item._id"
          />
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
  },
  methods: {
    updateValue() {
      this.$emit('features', this.features)
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
