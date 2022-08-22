<template>
  <div>
    <div class="d-flex my-4" @change="updateValue">
      <div class="mx-2" v-if="this.$route.path !== '/dashboard/newproperty/features/Arsa'">
        <h4>İç özellikler</h4>
        <CommonInputComponent
          v-for="(item, index) in interior"
          :id="item._id"
          :key="item._id"
          v-model="features.interior[index]"
          :title="item.item"
          :value="item._id"
          :type="'checkbox'"
        />
      </div>

      <div class="mx-2" v-if="this.$route.path !== '/dashboard/newproperty/features/Arsa'">
        <h4>Dış özellikler</h4>
        <CommonInputComponent
          v-for="(item, index) in external"
          :id="item._id"
          :key="item._id"
          v-model="features.external[index]"
          :title="item.item"
          :value="item._id"
          :type="'checkbox'"
        />
      </div>

      <div class="mx-2">
        <h4>Konum özellikleri</h4>
        <CommonInputComponent
          v-for="(item, index) in location"
          :id="item._id"
          :key="item._id"
          v-model="features.location[index]"
          :title="item.item"
          :value="item._id"
          :type="'checkbox'"
        />
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
    updateValue(){
        this.$emit('features',this.features)
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
