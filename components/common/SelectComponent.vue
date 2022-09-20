<template>
  <div class="input-group">
    <label class="">{{ title }}</label>
    <select
      class="input-group-input"
      :value="value"
      @input="updateValue($event.target.value)"
    >
      <!-- <option value="" disabled selected hidden>{{title}}</option> -->
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
      type: String,
      default: null
    },
    options: {
      type: Array,
      default: null
    },
    value: {
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
