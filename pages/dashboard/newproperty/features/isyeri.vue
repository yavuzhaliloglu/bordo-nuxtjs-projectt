<template>
  <div class="features">
    <ProfileDefaultInput :obj="obj">
      <CommonInputComponent
        v-for="(item, index) in inputlist.defaultInputs"
        :key="item.name"
        v-model="obj.defaults[index]"
        :type="item.type"
        :title="item.name"
        class="col-md-6"
      />
      <CommonSelectComponent
        v-for="(item, index) in inputlist.selectInputs"
        :key="item.name"
        v-model="obj.selects[index]"
        :title="item.name"
        :options="item.options"
        class="col-md-6"
      />
      <!-- <CommonSelectComponent
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
      /> -->
    </ProfileDefaultInput>
  </div>
</template>

<script>
export default {
  name: 'IsyeriFeatures',
  layout: 'UserProfile',
  data() {
    return {
      inputlist: null,
      obj: {
        // roomCount: '',
        // buildingAge: '',
        // heatingType: '',
        // itemStatus: '',
        // grossSquareMeters: '',
        // netSquareMeters: '',
        // floor: ''
        defaults: [],
        selects: []
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
