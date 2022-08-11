<template>
    <div class="featured">
        <h2 class="featured-header my-5">Featured In</h2>
        <div class="featured-brands d-flex flex-row justify-content-between align-items-center">
            <FeaturedImage v-for="i in 5" :key="i" :image="i"/>
        </div>

    </div>
</template>

<script>

export default {
    name: "FeaturedComponent",
}
</script>

<style lang="scss" scoped>
</style>