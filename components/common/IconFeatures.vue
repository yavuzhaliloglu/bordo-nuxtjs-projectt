<template>
  <div class="icon-features">
    <div class="icon-features-item">
      <font-awesome-icon
        class="icon-features-item-icon icon"
        icon="fa-solid fa-house"
      />
      <span class="icon-features-item-text">{{ type }}</span>
    </div>

    <div class="icon-features-item">
      <font-awesome-icon
        class="icon-features-item-icon icon"
        icon="fa-solid fa-clone"
      />
      <span class="icon-features-item-text">{{ sqm }} m²</span>
    </div>

    <div class="icon-features-item">
      <font-awesome-icon
        class="icon-features-item-icon icon"
        icon="fa-solid fa-calendar"
      />
      <span class="icon-features-item-text">{{ format_date(date) }}</span>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
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
  },
  methods: {
    format_date(value) {
      return moment(value).format('DD.MM.YYYY')
    }
  }
}
</script>

<style lang="scss" scoped></style>
