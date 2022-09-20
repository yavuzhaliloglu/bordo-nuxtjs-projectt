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
      for (let i = 0; i < this.inputlist.selectInputs.length; i++) {
        this.obj.selects[i] = this.inputlist.selectInputs[i].value
      }
      for (let i = 0; i < this.inputlist.defaultInputs.length; i++) {
        this.obj.defaults[i] = this.inputlist.defaultInputs[i].value
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
