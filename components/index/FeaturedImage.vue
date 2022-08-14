<template>
    <div class="featured-brands-image">
        <img :src="require(`~/assets/images/brand-${image}.png`)" alt="">
    </div>
</template>

<script>
export default {
    name: 'FeaturedImage',
    props: {
        image: {
            type: Number,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
</style>