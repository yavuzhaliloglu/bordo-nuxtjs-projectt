<template>
  <div>
    {{ id}}
    {{singleAdvert}}
  </div>
</template>

<script>
export default {
  name: 'SingleAdvert',
  data() {
    return {
      id: this.$route.params.id,
      singleAdvert:{}
    }
  },
  created() {
    this.getSingleAdvert(this.id)
  },
  methods: {
    getSingleAdvert(id) {
      this.$API.adverts.getSingleAdvert(id).then((res) => {
        this.singleAdvert = res.data.data[0]
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
