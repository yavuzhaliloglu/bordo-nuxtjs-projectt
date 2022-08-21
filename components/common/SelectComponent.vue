<template>
  <div class="input-group">
    <label>{{ title }}</label>
    <select :value="value" @input="updateValue($event.target.value)">
      <option v-for="item in options" :key="item._id" :value="item._id">
        {{ item.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SelectComponent',
  props: {
    title: {
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
