<template>
    <div class="popular-component">
        <div class="popular-residence container">
            <h2 class="popular-residence-header text-center">Popular Residence</h2>
            <PopularSlider />
            <div class="text-center">
                <LinkComponent :text="text" :path="path"/>
            </div>
        </div>
    </div>
</template>

<script>
import PopularSlider from './sliders/PopularSlider.vue'
import LinkComponent from './LinkComponent.vue';

export default {
    name: "PopularResidance",

    data() {
        return {
            text:'View All Properties',
            path:'/signin'
        };
    },
    components: { PopularSlider, LinkComponent }
}
</script>

<style lang="scss" scoped>
</style>