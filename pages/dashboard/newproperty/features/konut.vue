<template>
  <div>
    <ProfileDefaultInput :obj="obj">
      <CommonSelectComponent
        v-model="obj.roomCount"
        :title="inputlist.roomCount.title"
        :options="inputlist.roomCount.options"
      />
      <CommonSelectComponent
        v-model="obj.buildingAge"
        :title="inputlist.buildingAge.title"
        :options="inputlist.buildingAge.options"
      />
      <CommonSelectComponent
        v-model="obj.heatingType"
        :title="inputlist.heatingType.title"
        :options="inputlist.heatingType.options"
      />
      <CommonSelectComponent
        v-model="obj.itemStatus"
        :title="inputlist.itemStatus.title"
        :options="inputlist.itemStatus.options"
      />
      <!--default-->
      <CommonInputComponent
        v-model="obj.grossSquareMeters"
        :title="inputlist.grossSquareMeters.title"
        :type="inputlist.grossSquareMeters.type"
      />
      <CommonInputComponent
        v-model="obj.netSquareMeters"
        :title="inputlist.netSquareMeters.title"
        :type="inputlist.netSquareMeters.type"
      />
      <CommonInputComponent
        v-model="obj.floor"
        :title="inputlist.floor.title"
        :type="inputlist.floor.type"
      />
    </ProfileDefaultInput>
  </div>
</template>

<script>
export default {
  name: 'KonutFeatures',
  layout: 'UserProfile',
  data() {
    return {
      inputlist: null,
      obj: {
        roomCount: '',
        buildingAge: '',
        heatingType: '',
        itemStatus: '',
        grossSquareMeters: '',
        netSquareMeters: '',
        floor: ''
      }
    }
  },
  created() {
    this.setInputs()
  },

  methods: {
    setInputs() {
      this.inputlist = this.$store.getters.getWorkPlaceInputs
    }
  }
}
</script>

<style lang="scss" scoped></style>
