<template>
  <div class="input-group">
    <label :for="name">{{ name }}</label>
    <select
      :name="name"
      :value="value"
      @input="updateValue($event.target.value)"
    >
      <option v-for="item in options" :key="item" :value="item._id">
        {{ item.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SelectComponent',
  props: {
    name: {
      type: String
    },
    options: {
      type: Array
    },
    value: {
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
