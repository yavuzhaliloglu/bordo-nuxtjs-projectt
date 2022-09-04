<template>
  <div class="features">
    <div class="features-item">
      <font-awesome-icon
        class="features-item-icon icon"
        icon="fa-solid fa-house"
      />
      <span class="features-item-text">{{ type }}</span>
    </div>

    <div class="features-item">
      <font-awesome-icon
        class="features-item-icon icon"
        icon="fa-solid fa-clone"
      />
      <span class="features-item-text">{{ sqm }} m²</span>
    </div>

    <div class="features-item">
      <font-awesome-icon
        class="features-item-icon icon"
        icon="fa-solid fa-calendar"
      />
      <span class="features-item-text">{{ date }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IconFeatures',
  props: {
    type: {
      type: String,
      default: null
    },
    sqm: {
      type: Number,
      default: null
    },
    date: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped></style>
