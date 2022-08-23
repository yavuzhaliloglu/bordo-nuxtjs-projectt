<template>
  <div>
    <div class="d-flex my-4" @change="updateValue">
      <div
        v-if="$route.path !== '/dashboard/newproperty/features/Arsa'"
        class="mx-2"
      >
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

      <div
        v-if="$route.path !== '/dashboard/newproperty/features/Arsa'"
        class="mx-2"
      >
        <h4>Dış özellikler</h4>
        <CommonInputComponent
          v-for="item in external"
          :id="item._id"
          :key="item._id"
          v-model="features.external"
          :title="item.item"
          :value="item._id"
          :type="'checkbox'"
        />
      </div>

      <div class="mx-2">
        <h4>Konum özellikleri</h4>
        <CommonInputComponent
          v-for="item in location"
          :id="item._id"
          :key="item._id"
          v-model="features.location"
          :title="item.item"
          :value="item._id"
          :type="'checkbox'"
        />
      </div>

      <!-- <label for="name">name</label>
      <input id="name" v-model="list" type="checkbox" value="name" />

      <label for="ad">ad</label>
      <input id="ad" v-model="list" type="checkbox" value="ad" />

      <label for="ass">ass</label>
      <input id="ass" v-model="list" type="checkbox" value="ass" />

      {{ list }} -->


      
<!-- 
      <CommonInputComponent
        :id="'name'"
        v-model="list[0]"
        :value="'name'"
        :type="'checkbox'"
      />
      <CommonInputComponent
        :id="'aa'"
        v-model="list[1]"
        :value="'aa'"
        :type="'checkbox'"
      />
      <CommonInputComponent
        :id="'bb'"
        v-model="list[2]"
        :value="'Bb'"
        :type="'checkbox'"
      />
      {{ list }} -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileSelectBox',
  data() {
    return {
      list: [],
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
