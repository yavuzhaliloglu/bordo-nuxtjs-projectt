<template>
    <div class="popular-component">
        <div class="popular-residence container text-center">
            <h2 class="popular-residence-header">Popular Residence</h2>
            <PopularSlider />
            <nuxt-link to="/" class="popular-residence-button button">View All Properties</nuxt-link>
        </div>
    </div>
</template>

<script>
import PopularSlider from './PopularSlider.vue'

export default {
    name: "PopularResidance",
    
    data() {
        return {

        };
    },
    components: { PopularSlider }
}
</script>

<style lang="scss" scoped>
</style>