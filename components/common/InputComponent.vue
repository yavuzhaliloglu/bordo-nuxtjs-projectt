<template>
  <div class="input-group">
    <label class="input-group-label mx-2">{{ title }}</label>
    <input
      :id="id"
      class="input-group-input"
      :type="type"
      :value="value"
      @input="updateValue($event.target.value, $event.target.id)"
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
    updateValue(valueNormal,valueCheckbox) {
      if(this.type === 'checkbox'){
        this.$emit('input',valueCheckbox)
      }
      else{
        this.$emit('input', valueNormal)
      }
    },
  }
}
</script>

<style lang="scss" scoped></style>
