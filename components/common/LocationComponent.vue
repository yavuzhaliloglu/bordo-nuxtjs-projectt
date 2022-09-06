<template>
  <p class="location">
    <font-awesome-icon class="location__icon" icon="fa-solid fa-location-dot" />
    <span class="location__text">
      {{ address.city.name }}, {{ address.district.name }},
      {{ address.town.name }}</span
    >
  </p>
</template>

<script>
export default {
  name: 'LocationComponent',
  props: {
    address: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
