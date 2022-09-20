<template>
  <div class="input-group">
    <label>{{title}}</label>
    <input
      :id="id"
      class="input-group-input"
      :type="type"
      :value="value"
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
      type: String,
      default: null
    },
    id: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
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
