<template>
  <nuxt-link :to="path">
    <font-awesome-icon :icon="`fa-brands fa-${social}`" />
  </nuxt-link>
</template>

<script>
export default {
  name: 'FooterSocial',
  props: {
    social: {
      type: String,
      default: null
    },
    path:{
      type:String,
      default:null,
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
