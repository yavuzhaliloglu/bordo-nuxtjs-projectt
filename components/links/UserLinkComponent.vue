<template>
  <nuxt-link :to="path" class="iconlink d-flex align-items-start">
    <font-awesome-icon class="iconlink-icon" :icon="`fa-solid fa-${icon}`" />
    <p class="iconlink-text ml-3">{{ text }}</p>
  </nuxt-link>
</template>

<script>
export default {
  name: 'UserLinkComponent',
  props: {
    path: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
