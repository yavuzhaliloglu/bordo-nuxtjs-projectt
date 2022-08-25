<template>
  <div class="input-group">
    <input
      :id="id"
      class="input-group-input"
      :type="type"
      :value="id"
      :placeholder="title"
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
