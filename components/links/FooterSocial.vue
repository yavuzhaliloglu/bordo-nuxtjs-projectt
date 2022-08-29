<template>
  <a href="#">
    <font-awesome-icon :icon="`fa-brands fa-${social}`" />
  </a>
</template>

<script>
export default {
  name: 'FooterSocial',
  props: {
    social: {
      type: String,
      default: null
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
