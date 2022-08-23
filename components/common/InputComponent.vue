<template>
  <div class="input-group">
    <label class="input-group-label mx-2" :for="id" >{{ title }}</label>
    <input
      class="input-group-input"
      :id="id"
      :type="type"
      :value="id"
      @change="updateValue($event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'InputComponent',
  props: {
    type: {
      type: String,
      required: true
    },
    value: {
      type: String
    },
    id: {
      type: String
    },
    title: {
      type: String
    }
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss" scoped></style>
