<template>
  <div>
    <ProfileDefaultInput :obj="obj">
      <CommonSelectComponent
        v-model="obj.landStatus"
        :title="inputlist.landStatus.title"
        :options="inputlist.landStatus.options"
      />

      <CommonInputComponent
        v-model="obj.squareMeters"
        :title="inputlist.squareMeters.title"
        :type="inputlist.squareMeters.type"
      />

      <CommonInputComponent
        v-model="obj.parcel"
        :title="inputlist.parcel.title"
        :type="inputlist.parcel.type"
      />
    </ProfileDefaultInput>
  </div>
</template>

<script>
export default {
  name: 'ArsaFeatures',
  layout: 'UserProfile',
  data() {
    return {
      inputlist: null,
      obj: {
        landStatus: '',
        squareMeters: '',
        parcel: ''
      }
    }
  },
  created() {
    this.setValues()
  },
  methods: {
    setValues() {
      this.inputlist = this.$store.getters.getLandInputs
      console.log(this.inputlist)
    }
  }
}
</script>

<style lang="scss" scoped></style>
